"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { BOOKING_EMBED_URL, BOOKING_URL, CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164 } from "@/lib/site";

/**
 * The one lead form on the site. "market" is the market check (the main call to action);
 * "contact" is the general enquiry form on /contact.
 *
 * `enabled` comes from the server (lib/lead.ts). When the mail key is not configured the form
 * is replaced by email and phone links, because a form that silently fails is worse than none.
 *
 * After a successful market check the booking calendar is shown straight away, while the
 * person is still interested, if BOOKING_URL is set in lib/site.ts.
 */

type Mode = "market" | "contact";
type Status = "idle" | "sending" | "sent" | "error";

const WANTS_CALL = "A 15-minute call";
const WANTS_SNAPSHOT = "Just the written snapshot";

const inputClass =
  "w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";
const labelClass = "block font-sans text-sm font-medium text-ink-2 mb-1.5";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}

function DirectContact({ subject }: { subject: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`}
        className="btn-primary text-base px-7 py-3.5"
      >
        Email {CONTACT_EMAIL}
      </a>
      <a href={`tel:${PHONE_E164}`} className="btn-secondary text-base px-7 py-3.5">
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}

function Booking() {
  if (!BOOKING_URL) return null;
  return (
    <div className="mt-8">
      <h3 className="font-serif text-2xl text-ink mb-2">Pick a time</h3>
      <p className="font-sans text-sm text-ink-2 leading-relaxed mb-4">
        Fifteen minutes, by phone or video. If the calendar does not load,{" "}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
          onClick={() => track("booking_link_click")}
        >
          open it in a new tab
        </a>
        .
      </p>
      {BOOKING_EMBED_URL && (
        <iframe
          src={BOOKING_EMBED_URL}
          title="Book a 15-minute call"
          loading="lazy"
          className="w-full h-[720px] bg-white border border-paper-3 rounded-sm"
        />
      )}
    </div>
  );
}

export default function LeadForm({ mode, enabled }: { mode: Mode; enabled: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [wants, setWants] = useState(WANTS_CALL);

  const isMarket = mode === "market";
  const source = isMarket ? "Market check" : "Contact form";

  if (!enabled) {
    return (
      <div className="bg-paper border border-paper-3 rounded-sm p-8">
        <h2 className="font-serif text-3xl text-ink mb-3">
          {isMarket ? "Email or call to get your market checked" : "Email or call us directly"}
        </h2>
        <p className="font-sans text-base text-ink-2 leading-relaxed mb-6">
          {isMarket
            ? "Send your name, your agency, your city and your website. You will get the snapshot back within two business days."
            : "Tell us your name, your business and your city, and what you would like to know."}
        </p>
        <DirectContact subject={isMarket ? "Market check request" : "Question from visibilitylocal.com"} />
        {isMarket && <Booking />}
      </div>
    );
  }

  if (status === "sent") {
    const showBooking = isMarket && wants === WANTS_CALL;
    return (
      <div className="bg-paper border border-paper-3 rounded-sm p-8" role="status">
        <h2 className="font-serif text-3xl text-ink mb-3">Got it. Thank you.</h2>
        <p className="font-sans text-base text-ink-2 leading-relaxed">
          {isMarket
            ? "Your market snapshot will be in your inbox within two business days."
            : "You will get a reply from a person, usually within one business day."}
          {showBooking && !BOOKING_URL && " We will email you to set up the call."}
        </p>
        {showBooking && <Booking />}
      </div>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      track("lead_submitted", { source, wants: isMarket ? wants : "n/a" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot. Hidden from people and from assistive technology; bots fill it in. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_url">Leave this field empty</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {isMarket && (
        <fieldset>
          <legend className={labelClass}>What would you like?</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { value: WANTS_CALL, note: "The snapshot, plus a call to go through it." },
              { value: WANTS_SNAPSHOT, note: "By email. No call unless you ask for one." },
            ].map((option) => (
              <label
                key={option.value}
                className={`block cursor-pointer bg-paper border rounded-sm px-4 py-3 transition-colors ${
                  wants === option.value ? "border-accent ring-1 ring-accent" : "border-paper-3"
                }`}
              >
                <input
                  type="radio"
                  name="wants"
                  value={option.value}
                  checked={wants === option.value}
                  onChange={() => setWants(option.value)}
                  className="sr-only"
                />
                <span className="block font-sans text-sm font-medium text-ink">{option.value}</span>
                <span className="block font-sans text-xs text-ink-3 mt-0.5">{option.note}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="name" label="Your name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field id="agency" label={isMarket ? "Agency or business name" : "Business name"} required={isMarket}>
          <input
            id="agency"
            name="agency"
            type="text"
            required={isMarket}
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="email" label="Email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@youragency.com"
            className={inputClass}
          />
        </Field>
        <Field id="phone" label="Phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="city" label="City and state" required={isMarket}>
          <input
            id="city"
            name="city"
            type="text"
            required={isMarket}
            placeholder="Tulsa, OK"
            className={inputClass}
          />
        </Field>
        <Field id="website" label="Website, if you have one">
          <input
            id="website"
            name="website"
            type="text"
            inputMode="url"
            placeholder="youragency.com"
            className={inputClass}
          />
        </Field>
      </div>

      {isMarket ? (
        <Field id="lines" label="Which lines do you most want more of?">
          <input
            id="lines"
            name="lines"
            type="text"
            placeholder="Medicare, ACA, life, small commercial..."
            className={inputClass}
          />
        </Field>
      ) : (
        <Field id="message" label="What would you like to know?" required>
          <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-none`} />
        </Field>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : isMarket ? "Check my market" : "Send it"}
      </button>

      {status === "error" && (
        <p className="font-sans text-sm text-ink" role="alert">
          That did not send. Please email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or call{" "}
          <a href={`tel:${PHONE_E164}`} className="text-accent underline">
            {PHONE_DISPLAY}
          </a>{" "}
          instead.
        </p>
      )}

      <p className="font-sans text-xs text-ink-4 leading-relaxed">
        We use this to answer you and for nothing else. No list, no sequence. See our{" "}
        <Link href="/privacy" className="underline hover:text-ink">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
