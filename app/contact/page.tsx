import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { leadFormEnabled } from "@/lib/lead";
import { pageMetadata } from "@/lib/seo";
import { BOOKING_URL, CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164, orgRef } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Ask a question about local search for your agency, or about working with Visibility Local. You get an answer from a person, usually within one business day.",
  path: "/contact",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Visibility Local",
  url: "https://visibilitylocal.com/contact",
  description: "Ask a question about local search for your agency, or about working with Visibility Local.",
  mainEntity: orgRef,
};

const nextSteps = [
  {
    number: "01",
    title: "We read what you sent",
    description: "You get a reply from a person, usually within one business day.",
  },
  {
    number: "02",
    title: "You get a straight answer",
    description:
      "If it is something you can fix yourself, we will tell you how. If we are not the right fit for it, we will say that too.",
  },
  {
    number: "03",
    title: "If it looks like a fit, we check your market",
    description:
      "The market check is free: a one-page snapshot of how your agency shows up, and fifteen minutes to go through it. You see the price and the scope before you agree to anything.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Get in touch</p>
            <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-tight mb-6">
              Ask us something.
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4">
              Whether something you read here applies to you, whether your situation is one we can help with, or what the work costs. You will get a real answer, usually within one business day.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed">
              Want to know how your agency shows up in your town?{" "}
              <Link href="/market-check" className="text-accent hover:underline">
                The free market check
              </Link>{" "}
              is the faster route.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div id="request" className="lg:col-span-2 scroll-mt-24">
              <p className="section-label mb-4">Send a message</p>
              <div className="divider-accent" />
              <div className="mt-8">
                <LeadForm mode="contact" enabled={leadFormEnabled()} />
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="section-label mb-4">Direct</p>
                <div className="divider-accent" />
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-sans text-xs text-ink-4 uppercase tracking-wide mb-0.5">Phone</p>
                    <a href={`tel:${PHONE_E164}`} className="font-sans text-sm text-ink-2 hover:text-ink transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-ink-4 uppercase tracking-wide mb-0.5">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-sans text-sm text-ink-2 hover:text-ink transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  {BOOKING_URL && (
                    <div>
                      <p className="font-sans text-xs text-ink-4 uppercase tracking-wide mb-0.5">Calendar</p>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-accent hover:underline"
                      >
                        Book a 15-minute call
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="section-label mb-4">Before you write</p>
                <div className="divider-accent" />
                <div className="mt-4 space-y-3">
                  {[
                    { href: "/offer", label: "What you get and how it is priced" },
                    { href: "/industries/insurance-agents", label: "Local search for insurance agents" },
                    { href: "/scorecard", label: "Grade your own listing, free" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block font-sans text-sm text-ink-2 hover:text-accent transition-colors"
                    >
                      {link.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">After you get in touch</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-4">What happens next</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step) => (
              <div key={step.number} className="flex items-start gap-5">
                <span className="font-serif text-4xl text-accent-light leading-none shrink-0 select-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-ink mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
