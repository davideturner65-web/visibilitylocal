import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Search Visibility | Get Recommended by ChatGPT & Perplexity | Visibility Local",
  description:
    "Get your business recommended by ChatGPT, Perplexity, and Google AI Overviews. AI search visibility optimization for local professionals nationwide.",
  alternates: { canonical: "https://visibilitylocal.com/services/ai-search-visibility" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Search Visibility",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "AI search visibility optimization for local professionals. Get recommended by ChatGPT, Perplexity, and Google AI Overviews through structured data, entity establishment, and authoritative content strategy.",
      url: "https://visibilitylocal.com/services/ai-search-visibility",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is GEO (Generative Engine Optimization)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generative Engine Optimization is the practice of structuring your web presence so that AI tools like ChatGPT, Perplexity, and Google AI Overviews will cite or recommend your business when users ask relevant questions. It combines traditional SEO signals with structured data, entity establishment across authoritative directories, and content written to answer specific questions explicitly.",
          },
        },
        {
          "@type": "Question",
          name: "How do AI tools decide which businesses to recommend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each tool draws from different sources. ChatGPT uses Bing's web index and its training data. Perplexity performs live web searches and cites sources directly. Google AI Overviews pull from Google's index with preference for structured, authoritative pages. All three share a common pattern: they prefer businesses with consistent entity data across multiple authoritative sources, structured markup that makes the information parseable, and content that answers specific questions clearly.",
          },
        },
        {
          "@type": "Question",
          name: "How is AI search visibility different from regular SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional SEO optimizes for ranked lists of blue links. AI search visibility optimizes for recommendation and citation in conversational answers. The signals that matter are similar but weighted differently: structured data becomes critical because AI tools need parseable information, entity consistency across the web builds the trust signal that triggers recommendations, and direct question-and-answer content gives AI tools something specific to cite.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to appear in AI recommendations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Faster than most people expect, and slower than most people hope. Structured data improvements can start appearing in AI tools within weeks once pages are indexed. Entity establishment through directories and citations takes one to three months to build the signal strength that triggers consistent recommendations. Content-driven citations often appear within 30 to 60 days of publication. The compounding effect builds over six to twelve months.",
          },
        },
      ],
    },
  ],
};

const deliverables = [
  {
    title: "Structured Data Implementation",
    desc: "LocalBusiness, ProfessionalService, and FAQPage schemas make your data parseable by AI tools. Without proper schema markup, AI tools have to guess at your service area, your specialty, and what questions you answer. With it, you give them a direct feed of exactly what you want cited. We implement schema across every relevant page on your site.",
  },
  {
    title: "Entity Establishment",
    desc: "AI tools build trust in a business by finding it mentioned consistently across multiple authoritative sources. We build your entity presence across the top general directories, industry-specific platforms, and relevant associations. The goal is for ChatGPT, Perplexity, and Google to encounter your business name, location, and specialty from multiple independent sources and treat you as an established, credible entity.",
  },
  {
    title: "Question-Targeted Content",
    desc: "Perplexity and Google AI Overviews pull heavily from content that answers specific questions directly. We map the actual queries your potential clients are asking AI tools, then write content that answers those questions explicitly with citable information. This is not general blog content. It is structured to be pulled into AI-generated answers.",
  },
  {
    title: "GBP Data Optimization for AI Parsing",
    desc: "Google AI Overviews read your GBP data directly. Complete service attributes, accurate category selection, and a fully built-out profile all feed into AI Overview recommendations for local queries. We optimize every GBP field with AI parsing in mind, not just traditional map pack ranking.",
  },
  {
    title: "Citation Audit for AI Authority Signals",
    desc: "AI tools weight citations from authoritative directories more heavily than scraped or low-quality listings. Yelp, BBB, industry associations, and platform-specific directories all contribute to the trust signal that triggers AI recommendations. We audit your existing citation profile and prioritize the platforms that carry the most weight for AI tools specifically.",
  },
  {
    title: "Monitoring and Tracking",
    desc: "We track your appearance in AI-generated answers for target queries monthly, monitoring changes as your entity signal strengthens. This is early-stage measurement work. The industry does not yet have perfect tooling for AI citation tracking, but we build the closest approximation available and adapt as the tools mature.",
  },
];

const whyMatters = [
  {
    title: "This is early-mover territory",
    body: "Most local businesses have not started optimizing for AI search visibility. The professionals who build their entity presence, complete their structured data, and create question-targeted content now will be the default recommendations when these AI tools become the primary way clients find local professionals. That window is open. It will not stay open indefinitely.",
  },
  {
    title: "Each AI tool has different sources and different trust signals",
    body: "ChatGPT pulls from web data via Bing and its training data. Perplexity performs live searches and surfaces citations directly. Google AI Overviews pull from Google's index with a preference for structured, E-E-A-T-strong pages. Optimizing for all three requires a systematic approach, not a single tactic. Entity consistency across authoritative sources is the common thread that works for all of them.",
  },
  {
    title: "AI recommendations convert at a different level than regular search",
    body: "When a potential client asks ChatGPT who the best independent insurance agent in their city is, and your name comes back in the answer, they arrive at your contact page with a completely different level of trust than a cold organic search visitor. AI recommendations carry implied endorsement. The conversion rate from that kind of referral is substantially higher than standard organic traffic.",
  },
];

const faqs = [
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "Generative Engine Optimization is the practice of structuring your web presence so that AI tools like ChatGPT, Perplexity, and Google AI Overviews will cite or recommend your business when users ask relevant questions. It combines traditional SEO signals with structured data, entity establishment across authoritative directories, and content written to answer specific questions explicitly.",
  },
  {
    q: "How do AI tools decide which businesses to recommend?",
    a: "Each tool draws from different sources. ChatGPT uses Bing's web index and its training data. Perplexity performs live web searches and cites sources directly. Google AI Overviews pull from Google's index with preference for structured, authoritative pages. All three share a common pattern: they prefer businesses with consistent entity data across multiple authoritative sources, structured markup that makes the information parseable, and content that answers specific questions clearly.",
  },
  {
    q: "How is AI search visibility different from regular SEO?",
    a: "Traditional SEO optimizes for ranked lists of blue links. AI search visibility optimizes for recommendation and citation in conversational answers. The signals that matter are similar but weighted differently: structured data becomes critical because AI tools need parseable information, entity consistency across the web builds the trust signal that triggers recommendations, and direct question-and-answer content gives AI tools something specific to cite.",
  },
  {
    q: "How long does it take to appear in AI recommendations?",
    a: "Faster than most people expect, and slower than most people hope. Structured data improvements can start appearing in AI tools within weeks once pages are indexed. Entity establishment through directories and citations takes one to three months to build the signal strength that triggers consistent recommendations. Content-driven citations often appear within 30 to 60 days of publication. The compounding effect builds over six to twelve months.",
  },
];

const relatedServices = [
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Local Content Strategy", href: "/services/content" },
  { label: "Google Business Profile Optimization", href: "/services/google-business-profile" },
];

const relatedIndustries = [
  { label: "Insurance Agents", href: "/industries/insurance-agents" },
  { label: "Financial Advisors", href: "/industries/financial-advisors" },
];

export default function AISearchVisibilityPage() {
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
              AI Search{" "}
              <span className="italic text-gold">Visibility</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              ChatGPT and Perplexity are already recommending local professionals to people who ask for them. The businesses showing up in those recommendations have done specific things to get there: structured data, consistent entity presence across authoritative directories, and content written to answer specific questions directly.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8 max-w-xl">
              Most local businesses have not started. This is the window. When someone asks an AI tool who the best independent insurance agent in their city is, someone will get recommended. The work we do determines whether that is you.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Check if your market is available
            </Link>
          </div>
        </div>
      </section>

      {/* HOW AI TOOLS WORK */}
      <section className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-serif text-xl text-gold mb-2">ChatGPT</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,244,238,0.75)" }}>
                Pulls from Bing's web index and training data. Prefers businesses with consistent entity data across multiple sources and well-structured web pages. Bing search presence is a direct input.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl text-gold mb-2">Perplexity</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,244,238,0.75)" }}>
                Performs live web searches and cites sources directly in the answer. Content that answers specific questions explicitly is more likely to be surfaced. Source citations are visible to the user.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl text-gold mb-2">Google AI Overviews</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,244,238,0.75)" }}>
                Pulls from Google's index with preference for structured, authoritative pages. GBP data feeds directly into local AI Overviews. Schema markup is critical for parseable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">What is included</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              Building the presence AI tools cite.
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
              AI recommendations are a different kind of referral.
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
              How AI search visibility works in practice.
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
              A free audit shows you exactly where you stand in AI search results for your market, what structured data you are missing, and whether your market is still open. No pitch if it is not a fit.
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
