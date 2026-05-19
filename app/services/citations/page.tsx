import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Citation Building & NAP Consistency | Visibility Local",
  description:
    "Citation building and NAP audit for local professionals. Consistent business listings across top directories drive map pack rankings and AI search visibility.",
  alternates: { canonical: "https://visibilitylocal.com/services/citations" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Citations and NAP Consistency",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Citation building and NAP consistency audit for local professionals. Correct and consistent business listings across authoritative directories drive map pack rankings and AI search visibility.",
      url: "https://visibilitylocal.com/services/citations",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a citation in local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A citation is any online mention of your business name, address, and phone number, commonly called NAP. Citations appear in business directories like Yelp, Google Business Profile, Bing Places, and industry-specific platforms. Google uses citations as a prominence signal: a business mentioned consistently across many authoritative sources is treated as more established and trustworthy than one with sparse or conflicting directory presence.",
          },
        },
        {
          "@type": "Question",
          name: "How many citations do I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quality matters far more than quantity. The Tier 1 platforms (Google Business Profile, Apple Maps, Bing Places, Yelp, Facebook) are required for every local business. After that, 30 to 50 consistent, verified listings on authoritative general and industry-specific directories will outperform 200 scraped, low-quality listings every time. The right benchmark is being present and correct on the directories that carry actual weight in your industry, not accumulating a raw count.",
          },
        },
        {
          "@type": "Question",
          name: "Does NAP inconsistency really affect rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it is one of the most common ranking suppressors we find. When Google encounters your business with different phone numbers, suite numbers formatted inconsistently, abbreviated street names in some places and spelled out in others, or old addresses from a previous location, it cannot confidently establish your business as a single entity. That uncertainty translates directly into lower prominence scores and lower map pack rankings.",
          },
        },
        {
          "@type": "Question",
          name: "Which citation directories matter most for my industry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your industry. For insurance agents: Insurance.com, Insurify, and state insurance department directories. For attorneys: Avvo, Martindale-Hubbell, and FindLaw. For CPAs: the AICPA member directory and Accounting Today. For medical practices: Healthgrades, Zocdoc, and Vitals. Industry-specific directories carry more weight for relevance signals than general directories, even if the general directories have higher overall domain authority.",
          },
        },
      ],
    },
  ],
};

const deliverables = [
  {
    title: "NAP Audit",
    desc: "We pull your current citation profile across all major directories and inventory every variation in your name, address, and phone number. Suite numbers formatted differently, old phone numbers, abbreviated versus spelled-out street names, different business name variations: all of these are documented so we know exactly what needs to be corrected before we build anything new.",
  },
  {
    title: "Tier 1 Citation Verification",
    desc: "Google Business Profile, Apple Maps, Bing Places, Yelp, and Facebook are the five platforms every local business must have correct. We verify each one, claim any that are unclaimed or incorrectly attributed, and ensure the NAP data is exact and consistent across all five. These platforms carry the most direct ranking weight and feed data to dozens of downstream directories.",
  },
  {
    title: "Industry-Specific Directory Buildout",
    desc: "Tier 2 citations come from directories specific to your profession. Insurance agents, attorneys, CPAs, medical practices, financial advisors, and mortgage brokers each have a set of authoritative industry directories that carry relevance signals Google values. We identify and build the listings that matter for your specific profession and market.",
  },
  {
    title: "Duplicate Suppression",
    desc: "Most established businesses have accumulated duplicate listings over years of data aggregation. A duplicate listing with incorrect information actively suppresses your rankings by creating conflicting signals. We identify and suppress duplicates across the directories we can reach, and document the ones that require manual outreach so nothing is left unaddressed.",
  },
  {
    title: "Data Aggregator Submission",
    desc: "Data aggregators like Neustar Localeze and Foursquare push NAP data to hundreds of downstream directories automatically. Getting your correct NAP into these aggregators multiplies the effect of citation work without requiring individual submissions to every minor directory. We include aggregator submission in every citation campaign.",
  },
  {
    title: "Ongoing Monitoring",
    desc: "Citation data degrades over time. Aggregators overwrite corrected listings, new duplicates appear, and directories change their data sources. We monitor your citation profile monthly and correct new inconsistencies as they appear, so the work you do today does not quietly decay over the following year.",
  },
];

const tiers = [
  {
    label: "Tier 1: Required for everyone",
    items: ["Google Business Profile", "Apple Maps", "Bing Places", "Yelp", "Facebook"],
  },
  {
    label: "Tier 2: Industry-specific examples",
    items: [
      "Insurance agents: Insurance.com, Insurify, state DOI directories",
      "Attorneys: Avvo, Martindale-Hubbell, FindLaw",
      "CPAs: AICPA directory, Accounting Today",
      "Medical: Healthgrades, Zocdoc, Vitals",
      "Financial advisors: FINRA BrokerCheck, NAPFA",
    ],
  },
];

const whyMatters = [
  {
    title: "Inconsistency is an active ranking suppressor",
    body: "NAP inconsistency does not just fail to help: it actively hurts. When Google finds your business listed with different phone numbers, addresses formatted differently, or business name variations across directories, it cannot confidently aggregate those signals into a single entity. The result is a lower prominence score and a weaker map pack position. Most businesses we audit have between 15 and 40 inconsistencies they have never addressed.",
  },
  {
    title: "Quality citations are authority signals for AI tools",
    body: "AI tools like ChatGPT and Perplexity build their understanding of a business's legitimacy partly from how consistently and widely it appears across authoritative sources. A business cited on Yelp, Avvo, the state bar directory, and Google carries more entity authority than one with only a GBP. Tier 2 industry citations specifically signal topical relevance alongside general prominence.",
  },
  {
    title: "Citation cleanup compounds with other signals",
    body: "Citation work done correctly amplifies everything else. A well-optimized GBP backed by consistent citations across 40 authoritative directories outperforms a well-optimized GBP with a messy citation profile. The signals reinforce each other. This is why citation work is part of every engagement we take on, not an optional add-on.",
  },
];

const faqs = [
  {
    q: "What is a citation in local SEO?",
    a: "A citation is any online mention of your business name, address, and phone number, commonly called NAP. Citations appear in business directories like Yelp, Google Business Profile, Bing Places, and industry-specific platforms. Google uses citations as a prominence signal: a business mentioned consistently across many authoritative sources is treated as more established and trustworthy than one with sparse or conflicting directory presence.",
  },
  {
    q: "How many citations do I need?",
    a: "Quality matters far more than quantity. The Tier 1 platforms (Google Business Profile, Apple Maps, Bing Places, Yelp, Facebook) are required for every local business. After that, 30 to 50 consistent, verified listings on authoritative general and industry-specific directories will outperform 200 scraped, low-quality listings every time. The right benchmark is being present and correct on the directories that carry actual weight in your industry, not accumulating a raw count.",
  },
  {
    q: "Does NAP inconsistency really affect rankings?",
    a: "Yes, and it is one of the most common ranking suppressors we find. When Google encounters your business with different phone numbers, suite numbers formatted inconsistently, abbreviated street names in some places and spelled out in others, or old addresses from a previous location, it cannot confidently establish your business as a single entity. That uncertainty translates directly into lower prominence scores and lower map pack rankings.",
  },
  {
    q: "Which citation directories matter most for my industry?",
    a: "It depends on your industry. For insurance agents: Insurance.com, Insurify, and state insurance department directories. For attorneys: Avvo, Martindale-Hubbell, and FindLaw. For CPAs: the AICPA member directory and Accounting Today. For medical practices: Healthgrades, Zocdoc, and Vitals. Industry-specific directories carry more weight for relevance signals than general directories, even if the general directories have higher overall domain authority.",
  },
];

const relatedServices = [
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Business Profile Optimization", href: "/services/google-business-profile" },
  { label: "Reputation Management", href: "/services/reputation" },
];

const relatedIndustries = [
  { label: "Insurance Agents", href: "/industries/insurance-agents" },
  { label: "Mortgage Brokers", href: "/industries/mortgage-brokers" },
];

export default function CitationsPage() {
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
              Citations and{" "}
              <span className="italic text-gold">NAP Consistency</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              NAP stands for Name, Address, Phone. Inconsistent variations across directories, suite numbers formatted differently, old phone numbers, abbreviated versus spelled-out street names, suppress your local rankings by making it impossible for Google to confidently treat your listings as a single entity.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8 max-w-xl">
              Most established businesses have 15 to 40 NAP inconsistencies accumulated over years and never addressed. We audit, correct, and build out your citation profile across the directories that actually move local rankings and AI visibility.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Check if your market is available
            </Link>
          </div>
        </div>
      </section>

      {/* CITATION TIERS */}
      <section className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {tiers.map((tier) => (
              <div key={tier.label}>
                <p className="font-serif text-lg text-gold mb-4">{tier.label}</p>
                <ul className="space-y-2">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-light mt-2 shrink-0" />
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,244,238,0.8)" }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">What is included</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              Audit, correct, build, monitor.
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
              Why inconsistent citations hurt more than missing ones.
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
              What to know before you start.
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
              A free audit includes a citation consistency check: how many inconsistencies you have, which directories are wrong, and how it is affecting your map pack position. No pitch if it is not a fit.
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
