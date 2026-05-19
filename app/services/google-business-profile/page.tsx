import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization | Visibility Local",
  description:
    "Expert GBP optimization to rank in the local map pack. Category selection, attributes, photos, posts, and Q&A for local professionals nationwide.",
  alternates: { canonical: "https://visibilitylocal.com/services/google-business-profile" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Google Business Profile Optimization",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Expert Google Business Profile optimization to rank in the local map pack. Includes category selection, service attributes, photo strategy, post cadence, Q&A seeding, and review velocity management for local professionals nationwide.",
      url: "https://visibilitylocal.com/services/google-business-profile",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the most important field in Google Business Profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Primary category. It is the single field with the most weight on which searches your listing appears in. An independent insurance agent who selects 'Insurance Agency' instead of 'Life Insurance Agency' or 'Health Insurance Agency' is showing up in different searches than their clients are running. Most businesses have never audited their primary category against actual search volume data.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I post to my GBP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every 7 days. GBP posts have a limited display window, and consistent weekly posting keeps your listing active in Google's freshness signals. Sporadic posting, or no posting at all, tells Google the business is not actively managed. That matters for ranking in a competitive map pack.",
          },
        },
        {
          "@type": "Question",
          name: "Does my GBP category affect what searches I show up in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, directly. Google uses primary and secondary categories to determine which query types your listing is eligible for. 'Mortgage Broker' and 'Mortgage Lender' are different categories that surface in different searches. Picking the wrong one means you are invisible to the specific queries your best clients are actually using.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between GBP optimization and local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GBP optimization works on your Google Business Profile specifically, affecting your map pack and knowledge panel ranking. Local SEO is broader and includes your website's on-page signals, citation consistency across directories, link signals from local sources, and content strategy. GBP optimization is one component of a full local SEO program, but it is often the highest-leverage starting point because the profile is already there and most businesses have it set up wrong.",
          },
        },
      ],
    },
  ],
};

const deliverables = [
  {
    title: "Primary Category Audit and Correction",
    desc: "Your primary GBP category determines which searches you are eligible to appear in. We audit your current category against actual search volume data for your market and service type, then correct it to the category that matches your highest-value client queries. For independent insurance agents, this often means moving from a generic category to one that precisely matches what their best clients search.",
  },
  {
    title: "Service Attributes and Offerings",
    desc: "Service attributes tell Google specifically what you offer. They also feed into AI Overview picks when someone asks a conversational question about local professionals. We complete every applicable attribute and add services with proper descriptions so your listing communicates precisely what you do and to whom.",
  },
  {
    title: "Photo Strategy",
    desc: "Profile photo, cover photo, and interior or exterior photos each affect conversion rate from map clicks to calls. Listings with more photos get more clicks. We specify the exact photos needed, their dimensions, and the naming conventions that support your listing's keyword relevance.",
  },
  {
    title: "Weekly Post Cadence",
    desc: "GBP posts keep your listing fresh in Google's activity signals. Every 7 days, a post goes up: a service highlight, a client FAQ, a seasonal relevant offer, or a local piece of content. We build the posting schedule and templates so this runs without consuming your time.",
  },
  {
    title: "Q&A Seeding",
    desc: "The Q&A section on GBP can be pre-populated with your own questions and answers. Most businesses never do this. Seeded Q&As let you control the narrative, answer objections before they arise, and insert keyword-relevant content that affects both search ranking and conversion.",
  },
  {
    title: "Website Link Optimization",
    desc: "The website link on your GBP should point to a location-specific landing page, not your homepage. A homepage sends a vague signal. A page built specifically for your city and service sends a precise one. We set this up correctly and make sure the destination page reinforces the GBP signals you have built.",
  },
];

const whyMatters = [
  {
    title: "The map pack is where decisions happen",
    body: "For high-intent local searches, the three businesses in the map pack capture the majority of clicks. Organic results below them get a fraction of the traffic. If you are not in those three spots, you are losing clients to competitors who may be less qualified but better optimized. GBP optimization is the most direct path to map pack inclusion.",
  },
  {
    title: "Review velocity outranks review count",
    body: "A business with 120 reviews collected over five years will often rank below a business with 35 reviews collected over the last six months. Recency and velocity are active ranking signals. We build a review request process that keeps new reviews coming in consistently, so Google's freshness signals always favor your listing.",
  },
  {
    title: "AI tools read your GBP data",
    body: "When someone asks ChatGPT or Perplexity for a local professional recommendation, those tools pull from structured data sources including GBP. A well-optimized profile with accurate category, complete service attributes, and verified information is more likely to be cited. Most businesses have incomplete profiles that AI tools cannot confidently recommend.",
  },
];

const faqs = [
  {
    q: "What is the most important field in Google Business Profile?",
    a: "Primary category. It is the single field with the most weight on which searches your listing appears in. An independent insurance agent who selects 'Insurance Agency' instead of 'Life Insurance Agency' or 'Health Insurance Agency' is showing up in different searches than their clients are running. Most businesses have never audited their primary category against actual search volume data.",
  },
  {
    q: "How often should I post to my GBP?",
    a: "Every 7 days. GBP posts have a limited display window, and consistent weekly posting keeps your listing active in Google's freshness signals. Sporadic posting, or no posting at all, tells Google the business is not actively managed. That matters for ranking in a competitive map pack.",
  },
  {
    q: "Does my GBP category affect what searches I show up in?",
    a: "Yes, directly. Google uses primary and secondary categories to determine which query types your listing is eligible for. 'Mortgage Broker' and 'Mortgage Lender' are different categories that surface in different searches. Picking the wrong one means you are invisible to the specific queries your best clients are actually using.",
  },
  {
    q: "What is the difference between GBP optimization and local SEO?",
    a: "GBP optimization works on your Google Business Profile specifically, affecting your map pack and knowledge panel ranking. Local SEO is broader and includes your website's on-page signals, citation consistency across directories, link signals from local sources, and content strategy. GBP optimization is one component of a full local SEO program, but it is often the highest-leverage starting point because the profile is already there and most businesses have it set up wrong.",
  },
];

const relatedServices = [
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Citations and NAP Consistency", href: "/services/citations" },
  { label: "Reputation Management", href: "/services/reputation" },
];

const relatedIndustries = [
  { label: "Insurance Agents", href: "/industries/insurance-agents" },
  { label: "Medical Practices", href: "/industries/medical-practices" },
];

export default function GBPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Service</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Google Business Profile{" "}
              <span className="italic text-gold">Optimization</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Your Google Business Profile is the single most important asset in local search. It controls whether you appear in the map pack, what searches trigger your listing, and whether someone who finds you actually calls. Most businesses have it set up wrong from day one and never fix it.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8 max-w-xl">
              The most common mistake is the wrong primary category. For an independent insurance agent, "Insurance Agency," "Life Insurance Agency," and "Insurance Broker" are different categories that surface in different searches. That one error can make you invisible to the clients you most want.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Check if your market is available
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">What is included</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              Every signal that moves the needle.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-paper border border-paper-3 rounded-sm p-7">
                <div className="divider-gold" />
                <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Why it matters</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              The business case for getting this right.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyMatters.map((item) => (
              <div key={item.title}>
                <div className="divider-gold" />
                <h3 className="font-serif text-2xl text-ink mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Common questions</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              What clients ask before they start.
            </h2>
          </div>
          <div className="max-w-3xl divide-y divide-paper-3">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="font-serif text-xl text-ink mb-3">{faq.q}</h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES + INDUSTRIES */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="section-label mb-6">Related services</p>
              <div className="space-y-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 group"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-6">Related industries</p>
              <div className="space-y-3">
                {relatedIndustries.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className="flex items-center gap-3 group"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">{ind.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "#c8922a" }}>
              One client per market
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              Check if your market is available.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit takes 20 minutes. You will find out exactly what your GBP is missing, which category you should be in, and whether your market is still open. No pitch if it is not a fit.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Check if your market is available
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
