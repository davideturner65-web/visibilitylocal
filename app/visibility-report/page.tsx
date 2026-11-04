import type { Metadata } from "next";
import Link from "next/link";
import { STRIPE_PAYMENT_LINK, isPaymentLinkLive } from "@/lib/payment";

export const metadata: Metadata = {
  title: "The Visibility Report, $297",
  description:
    "A full diagnostic of how your agency turns up when someone in your town goes looking for an insurance agent. Google Business Profile, map pack, citations, website, and what AI tools say. Written report plus a 30-minute call.",
  alternates: { canonical: "https://visibilitylocal.com/visibility-report" },
};

const faqs = [
  {
    q: "What do I actually receive?",
    a: "A written report covering five areas: your Google Business Profile, your position in the map pack for the searches that matter in your market, your citation data across the directories that carry weight for insurance, your website, and what ChatGPT and Perplexity say when asked for an agent in your city. Then a 30-minute call to go through it. You keep the report either way.",
  },
  {
    q: "Is the $297 credited if I hire you?",
    a: "Yes. The full $297 comes off your setup cost if we go on to work together. If we do not, you keep the report and owe nothing further.",
  },
  {
    q: "Why does this cost money when other agencies audit for free?",
    a: "Because a free audit is a sales call with a PDF attached, and both sides know it. Charging for the diagnostic means the work is the product rather than the bait, which means it can honestly conclude that you do not need us. That conclusion is worth more than a free report that never reaches it.",
  },
  {
    q: "How long does it take?",
    a: "The report is with you within five business days of purchase, and the call is booked at your convenience after that.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "The Visibility Report",
      serviceType: "Local search diagnostic for independent insurance agents",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "A written diagnostic of how an independent insurance agency appears across Google Business Profile, the local map pack, citation directories, its own website, and AI search tools, plus a 30-minute walkthrough call.",
      url: "https://visibilitylocal.com/visibility-report",
      offers: {
        "@type": "Offer",
        price: "297",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://visibilitylocal.com/visibility-report",
        category: "Local SEO audit",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const included = [
  {
    title: "Google Business Profile",
    body: "Every field, checked against what actually affects ranking. Primary and secondary categories, service areas, hours, attributes, photo set, post cadence, and the Q&A section that most agents have never opened. You get the specific category you should be in and why, not a note that says optimize your GBP.",
  },
  {
    title: "Map pack position, by search",
    body: "Where you rank for the searches that matter in your market, checked from several points around your city rather than from wherever we happen to be sitting. Proximity moves local results, so a single ranking number is close to meaningless. You see who is holding the three-pack and how far outside it you are.",
  },
  {
    title: "Citation and NAP audit",
    body: "Your name, address, and phone as they appear across the directories that carry weight for insurance, including your state Department of Insurance licensee record, which is usually your most authoritative citation and is very often wrong. Every mismatch listed, with what it should say.",
  },
  {
    title: "Website review",
    body: "Whether your site is a template shared with hundreds of other agents, who owns the domain, whether it has schema, and whether it says anything a search engine could distinguish from the next agency. If your FMO owns the registration, that is in the report in plain terms.",
  },
  {
    title: "What the AI tools say about your market",
    body: "The actual answers ChatGPT and Perplexity give when asked for an insurance agent in your city, transcribed. Who they name, what they cite, and what those sources have that you do not.",
  },
  {
    title: "A 30-minute call",
    body: "We go through it together and you can ask what any of it means. If the answer is that you should fix three things yourself and call us in a year, that is what we will tell you.",
  },
];

export default function VisibilityReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">The Visibility Report</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-ink mt-4 mb-6 leading-tight">
            What your town actually sees when it goes looking for an agent
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              You know what your agency looks like from the inside. This is what it looks like from the outside, to somebody in your city who has decided they want an independent agent and is about to pick one.
            </p>
            <p>
              Five areas, written up properly, plus a call to walk through it. Three hundred dollars, near enough, and it comes straight off your setup if you decide to work with us afterwards.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <p className="font-serif text-5xl text-ink">
              $297
            </p>
            <div>
              {isPaymentLinkLive ? (
                <a href={STRIPE_PAYMENT_LINK} className="btn-primary text-base px-8 py-4 inline-block">
                  Buy the report
                </a>
              ) : (
                <Link href="/contact#request" className="btn-primary text-base px-8 py-4 inline-block">
                  Request the report
                </Link>
              )}
              <p className="font-sans text-sm text-ink-3 mt-2">
                Credited in full toward setup if you hire us.
                {!isPaymentLinkLive && " Invoiced directly for now."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">What is in it</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">Five areas and a conversation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {included.map((item) => (
              <div key={item.title} className="bg-paper p-8 border border-paper-3">
                <h3 className="font-serif text-xl text-ink mb-4">{item.title}</h3>
                <p className="font-sans text-ink-2 text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it costs money */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Why this is not free</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-6">
            Because a free audit is a sales call with a PDF attached
          </h2>
          <div className="space-y-5 font-sans text-base text-ink-2 leading-relaxed">
            <p>
              Every agency in this business offers a free audit. You have probably sat through
              two. They follow the same shape: a handful of findings, a lot of red on a slide,
              and a proposal at the end. The findings are real enough. The problem is that the
              audit exists to produce the proposal, so it can never arrive at the conclusion
              that you are fine.
            </p>
            <p>
              Charging for the diagnostic changes what it is allowed to say. If your listing is
              in good shape and your citations are clean, the report says so and you have spent
              three hundred dollars to stop worrying about it. That is a real outcome and worth
              the money. It is also an outcome a free audit structurally cannot reach.
            </p>
            <p>
              The credit exists because we would rather you buy the diagnosis than the pitch. If
              the report leads to work, the $297 comes off the setup and you have effectively
              paid nothing for it.
            </p>
          </div>

          <div className="mt-10">
            {isPaymentLinkLive ? (
              <a href={STRIPE_PAYMENT_LINK} className="btn-primary text-base px-8 py-4 inline-block">
                Buy the report, $297
              </a>
            ) : (
              <Link href="/contact#request" className="btn-primary text-base px-8 py-4 inline-block">
                Request the report, $297
              </Link>
            )}
          </div>

          <p className="font-sans text-sm text-ink-3 mt-6">
            Not ready to spend anything yet?{" "}
            <Link href="/scorecard" className="text-accent hover:underline">
              Grade your own listing in ten minutes
            </Link>{" "}
            with the free scorecard, or{" "}
            <Link href="/industries/insurance-agents" className="text-accent hover:underline">
              read what usually goes wrong
            </Link>{" "}
            first. Curious what working together looks like?{" "}
            <Link href="/offer" className="text-accent hover:underline">
              See how the work runs
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Rendered from the same array the FAQPage schema is built from, so the two cannot
          drift apart. Server-rendered, not injected on click. */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Questions</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-10">Before you buy</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-serif text-xl text-ink mb-2">{faq.q}</h3>
                <p className="font-sans text-base text-ink-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
