import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What Visibility Local collects through this website, how it is used, and how to ask for it to be removed.",
  alternates: { canonical: "https://visibilitylocal.com/privacy" },
};

const sections = [
  {
    "heading": "What we collect",
    "body": "What you choose to send us through a form or by email: your name, email address, phone number, business name, industry, market, and message. If you use the free scorecard, your answers stay in your browser and nothing is sent unless you submit the form at the end, which sends your email address, your score, and the items you missed."
  },
  {
    "heading": "How we use it",
    "body": "To reply to you, to deliver what you asked for, and to carry out any work you hire us for. We do not sell your information, and we will not add you to a mailing list without asking."
  },
  {
    "heading": "Who handles it for us",
    "body": "Forms are processed by Formspree. The site is hosted by Vercel, which also provides our visitor analytics. Those analytics count page views in aggregate and do not use cookies. Payments, when you make one online, are processed by Stripe, and we do not see or store your full card number."
  },
  {
    "heading": "How long we keep it",
    "body": "We keep inquiries and client records for as long as we need them to do the work and to keep ordinary business records. You can ask us to delete your information at any time, and we will unless we are required to keep it."
  },
  {
    "heading": "Your choices",
    "body": "To see, correct, or delete what we hold about you, email info@visibilitylocal.com or call (501) 554-2183."
  },
  {
    "heading": "Changes",
    "body": "If this policy changes, we will update this page and the date at the top."
  }
];

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Effective November 4, 2026</p>
        <h1 className="font-serif text-5xl text-ink mt-4 mb-6 leading-tight">Privacy Policy</h1>
        <p className="font-sans text-base text-ink-2 leading-relaxed mb-10">
          This page explains what Visibility Local collects through this website and what happens to it.
        </p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-2xl text-ink mb-2">{s.heading}</h2>
              <p className="font-sans text-base text-ink-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
