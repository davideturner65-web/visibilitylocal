import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Services | Visibility Local",
  description:
    "Local SEO for independent professionals nationwide. Map pack rankings, on-page signals, citation building, and content strategy that drives local leads.",
  alternates: { canonical: "https://visibilitylocal.com/services/local-seo" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Local SEO",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Local SEO for independent professionals nationwide. Map pack rankings, on-page signals, citation building, and content strategy targeting proximity, prominence, and relevance signals that drive local leads.",
      url: "https://visibilitylocal.com/services/local-seo",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Google's local ranking factors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google has confirmed three primary local ranking factors: proximity (how close you are to the searcher), prominence (how well-known and authoritative your business is across the web), and relevance (how well your profile and content match the search query). Proximity is the one you cannot control. Prominence and relevance are where the work happens.",
          },
        },
        {
          "@type": "Question",
          name: "How is local SEO different from regular SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local SEO targets a specific geographic market and aims for map pack placement alongside organic rankings. The signals that matter are different: NAP consistency across directories, GBP optimization, local link signals, and city-specific content. National SEO agencies often apply the wrong framework to local clients. They optimize for domain authority and backlink profiles when the actual ranking gap is a miscategorized GBP and 40 inconsistent directory listings.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a website to rank in local search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, but you are severely limiting yourself without one. A well-optimized Google Business Profile can rank in the map pack without a website. But without location-specific landing pages, you cannot compete for organic results below the map pack, and you have no content for AI tools to cite. The GBP alone is a floor, not a ceiling.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my local SEO is working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three metrics tell the real story: GBP Insights (specifically direction requests, phone calls, and website clicks), rank tracking for map pack positions on your target keywords, and organic traffic from city-plus-service search queries. Vanity metrics like total impressions can look great while the actual lead-generating queries are not moving. We track what drives calls, not what looks good in a report.",
          },
        },
      ],
    },
  ],
};

const deliverables = [
  {
    title: "Local Ranking Factor Audit",
    desc: "We start by mapping where you stand on all three of Google's confirmed local ranking factors: proximity, prominence, and relevance. The audit identifies your specific gaps compared to the businesses currently ranking above you. Most clients have one or two concentrated problems, not twenty scattered ones.",
  },
  {
    title: "On-Page Local Signals",
    desc: "NAP consistency on your website, local schema markup, city and service page structure, and internal linking that reinforces your geographic relevance. These are the on-page signals Google uses to confirm your location and service area. Missing or inconsistent data here creates ranking drag that no amount of external optimization can fully offset.",
  },
  {
    title: "Citation Building and Cleanup",
    desc: "Inconsistent business listings across directories suppress local rankings. We audit your existing citations, correct discrepancies, suppress or remove duplicates, and build out listings on directories that carry actual ranking weight for your industry. Quality matters more than volume here.",
  },
  {
    title: "Location-Specific Content",
    desc: "City and service area pages built around specific local intent queries. Not thin pages with a city name swapped in, but substantive content that answers the questions your local clients are actually asking. These pages compete for organic results and provide AI tools with citable, authoritative content.",
  },
  {
    title: "Technical Local Signals",
    desc: "Page speed, mobile optimization, and Core Web Vitals for your key landing pages. Most local searches happen on phones. A slow mobile experience loses leads at the click level, before the visitor even reads your content. We audit and prioritize the technical fixes with the highest ranking impact.",
  },
  {
    title: "Rank Tracking and Reporting",
    desc: "Map pack tracking for your primary keyword targets, organic rank tracking for city-plus-service queries, and GBP Insights reporting that shows calls, direction requests, and website clicks. Monthly reports focused on the metrics that correlate with actual business results, not the ones that look impressive but measure nothing.",
  },
];

const whyMatters = [
  {
    title: "National SEO agencies optimize for the wrong signals",
    body: "The most common mistake independent professionals make is hiring a general SEO agency and assuming they understand local. They don't. Proximity, prominence, and relevance are the three primary local ranking factors Google has confirmed. Most SEO agencies build link profiles and target domain authority metrics that have minimal impact on map pack ranking. The work that moves local rankings, citation cleanup, GBP optimization, location-specific content, is different work.",
  },
  {
    title: "Your competitors have the same weaknesses you do",
    body: "In most local professional markets, no one is optimizing well. The independent insurance agent ranking in position one of your market's map pack probably has a GBP with two photos and 14 inconsistent directory listings. Beating them does not require a massive campaign. It requires doing the basic work correctly and consistently. The bar is lower than most people assume.",
  },
  {
    title: "Mobile search is local search",
    body: "The majority of local searches happen on phones, often with intent to act immediately. A prospect searching 'insurance agent near me' on a phone is about to call someone. Your ranking position and page speed at that moment determine whether it's you or a competitor. Page speed on mobile is a direct local ranking factor and a conversion factor simultaneously.",
  },
];

const faqs = [
  {
    q: "What are Google's local ranking factors?",
    a: "Google has confirmed three primary local ranking factors: proximity (how close you are to the searcher), prominence (how well-known and authoritative your business is across the web), and relevance (how well your profile and content match the search query). Proximity is the one you cannot control. Prominence and relevance are where the work happens.",
  },
  {
    q: "How is local SEO different from regular SEO?",
    a: "Local SEO targets a specific geographic market and aims for map pack placement alongside organic rankings. The signals that matter are different: NAP consistency across directories, GBP optimization, local link signals, and city-specific content. National SEO agencies often apply the wrong framework to local clients. They optimize for domain authority and backlink profiles when the actual ranking gap is a miscategorized GBP and 40 inconsistent directory listings.",
  },
  {
    q: "Do I need a website to rank in local search?",
    a: "No, but you are severely limiting yourself without one. A well-optimized Google Business Profile can rank in the map pack without a website. But without location-specific landing pages, you cannot compete for organic results below the map pack, and you have no content for AI tools to cite. The GBP alone is a floor, not a ceiling.",
  },
  {
    q: "How do I know if my local SEO is working?",
    a: "Three metrics tell the real story: GBP Insights (specifically direction requests, phone calls, and website clicks), rank tracking for map pack positions on your target keywords, and organic traffic from city-plus-service search queries. Vanity metrics like total impressions can look great while the actual lead-generating queries are not moving. We track what drives calls, not what looks good in a report.",
  },
];

const relatedServices = [
  { label: "Google Business Profile Optimization", href: "/services/google-business-profile" },
  { label: "Citations and NAP Consistency", href: "/services/citations" },
  { label: "Local Content Strategy", href: "/services/content" },
];

const relatedIndustries = [
  { label: "Insurance Agents", href: "/industries/insurance-agents" },
  { label: "Attorneys", href: "/industries/attorneys" },
];

export default function LocalSEOPage() {
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
              Local SEO{" "}
              <span className="italic text-gold">for independent professionals</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Local SEO is not the same discipline as national SEO. Google uses three primary ranking factors for local results: proximity, prominence, and relevance. Proximity is fixed. The other two are where the work happens, and most agencies optimize for neither one correctly.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8 max-w-xl">
              We work on the signals that actually move local rankings: citation consistency, on-page local signals, GBP optimization, and location-specific content that ranks organically and gets cited by AI tools.
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
              The unglamorous work that determines who ranks.
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
              Why most local professionals are leaving rankings on the table.
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
              Questions before the first conversation.
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
              A free audit takes 20 minutes. You will find out exactly where your local rankings are falling short, what your competitors are doing better, and whether your market is still open. No pitch if it is not a fit.
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
