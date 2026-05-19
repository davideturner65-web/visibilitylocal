import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Content Strategy | Visibility Local",
  description:
    "Local content strategy for professionals who need to rank and be cited by AI tools. Service pages, guides, and location content written to win local search.",
  alternates: { canonical: "https://visibilitylocal.com/services/content" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Local Content Strategy",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Local content strategy for professionals who need to rank in local search and be cited by AI tools. Service pages, location pages, FAQ content, and resource guides written with structured data and topical authority in mind.",
      url: "https://visibilitylocal.com/services/content",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What kind of content helps local businesses rank?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three content types drive local rankings in combination. Location pages target city-plus-service queries and rank in organic results below the map pack. FAQ content answers specific questions that get pulled into AI Overviews and Perplexity results. Resource and guide content builds topical authority over time and earns citations from other websites. Generic blog posts accomplish none of these goals and should not be the focus of a local content strategy.",
          },
        },
        {
          "@type": "Question",
          name: "How is local content different from general blog content?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local content has a specific job: rank for a geographic-plus-service query, answer a question that a local prospect is asking, or establish your topical authority in a way that compounds over time. General blog content is often written without a specific ranking target, serves no particular local intent, and sits on the site accumulating nothing. Every piece of local content we write is mapped to a specific query, a specific audience, and a specific conversion goal.",
          },
        },
        {
          "@type": "Question",
          name: "How many pages do I need to rank locally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enough to cover your primary service in your primary market with authority, and then expand. For most independent professionals, that means one substantive page per service, one page per city or service area, and a set of FAQ content that covers the questions your prospects actually ask. The minimum viable local content footprint is probably 8 to 15 pages. What matters more than count is that every page targets a real query and has enough depth to actually rank.",
          },
        },
        {
          "@type": "Question",
          name: "Does content help with AI search recommendations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Directly. Perplexity surfaces content that answers specific questions clearly, and cites the source. Google AI Overviews pull from indexed content with explicit answers to the query. ChatGPT's underlying data includes indexed web content. Content written to answer questions directly, with clear structure and appropriate schema markup, is more likely to be cited by AI tools than content written for general engagement.",
          },
        },
      ],
    },
  ],
};

const deliverables = [
  {
    title: "Location Pages",
    desc: "Each service area city gets a distinct, substantive page targeting the '[city] + [service]' query. Not a thin page with the city name swapped into a template. Real content about serving that market, the specific concerns clients in that city have, and what makes your service relevant there. These are the pages that compete for organic results below the map pack and compound over time.",
  },
  {
    title: "Service Pages",
    desc: "A service page has two jobs: explain what you do clearly enough to convert a prospect, and rank for the specific queries your potential clients use when they are ready to hire someone. We write service pages that accomplish both, with appropriate schema markup that makes the page parseable by both Google and AI tools.",
  },
  {
    title: "FAQ Content",
    desc: "Google AI Overviews and Perplexity pull FAQ-style content heavily. We research the specific questions your potential clients ask when searching for your service and write explicit, direct answers to each one. FAQ content is marked up with FAQPage schema so it is parseable and citable by AI tools without any extra effort from the platform.",
  },
  {
    title: "Resource and Guide Pages",
    desc: "Longer resource content builds topical authority by demonstrating depth in your subject matter area. A mortgage broker's guide to the home buying process in Phoenix, or an attorney's guide to estate planning for business owners in Atlanta, earns citations from other sites and signals to Google that you are an authoritative source in your niche. This is the content that compounds most reliably over time.",
  },
  {
    title: "Schema Markup",
    desc: "Every content piece gets appropriate structured data: Service schema, LocalBusiness schema, FAQPage schema, Article schema where relevant. Schema markup is what makes your content parseable by AI tools without interpretation. Without it, an AI tool has to infer what your page is about. With it, you tell the AI tool directly.",
  },
  {
    title: "Content Audit and Strategy",
    desc: "Before writing anything new, we audit what you already have. Existing content that targets real queries with thin substance gets updated and expanded. Content that targets no real query gets evaluated for repurposing or removal. A clean, well-targeted content structure outperforms a large volume of unfocused pages every time.",
  },
];

const whyMatters = [
  {
    title: "Location pages are not optional for service area competition",
    body: "If you serve multiple cities, each city needs its own page. A single page that mentions eight city names accomplishes nothing for any of them. A dedicated page for each city, with substantive content about serving that specific market, competes for the '[city] + [service]' organic results that drive a significant portion of local search traffic. Without those pages, you are invisible to the searchers in your secondary markets.",
  },
  {
    title: "AI tools cite explicit answers, not general content",
    body: "When Perplexity or Google AI Overviews surface a local recommendation, they pull from content that answers the query directly. A page that explicitly states 'The best independent insurance agent in [city] should offer X, Y, and Z' with supporting detail is citable. A page that generally describes insurance services in vague terms is not. Writing to be cited requires knowing the exact question being asked and answering it without ambiguity.",
  },
  {
    title: "Topical authority compounds where most marketing spend does not",
    body: "A body of content that covers your service area and specialty with genuine depth builds a signal that compounds over time. Each new piece reinforces the others. Your ranking on a new piece benefits from the authority built by your existing pieces. This is the opposite of most marketing spend, which has to be repurchased each month to maintain its effect. Content authority, once built, keeps working.",
  },
];

const faqs = [
  {
    q: "What kind of content helps local businesses rank?",
    a: "Three content types drive local rankings in combination. Location pages target city-plus-service queries and rank in organic results below the map pack. FAQ content answers specific questions that get pulled into AI Overviews and Perplexity results. Resource and guide content builds topical authority over time and earns citations from other websites. Generic blog posts accomplish none of these goals and should not be the focus of a local content strategy.",
  },
  {
    q: "How is local content different from general blog content?",
    a: "Local content has a specific job: rank for a geographic-plus-service query, answer a question that a local prospect is asking, or establish your topical authority in a way that compounds over time. General blog content is often written without a specific ranking target, serves no particular local intent, and sits on the site accumulating nothing. Every piece of local content we write is mapped to a specific query, a specific audience, and a specific conversion goal.",
  },
  {
    q: "How many pages do I need to rank locally?",
    a: "Enough to cover your primary service in your primary market with authority, and then expand. For most independent professionals, that means one substantive page per service, one page per city or service area, and a set of FAQ content that covers the questions your prospects actually ask. The minimum viable local content footprint is probably 8 to 15 pages. What matters more than count is that every page targets a real query and has enough depth to actually rank.",
  },
  {
    q: "Does content help with AI search recommendations?",
    a: "Directly. Perplexity surfaces content that answers specific questions clearly, and cites the source. Google AI Overviews pull from indexed content with explicit answers to the query. ChatGPT's underlying data includes indexed web content. Content written to answer questions directly, with clear structure and appropriate schema markup, is more likely to be cited by AI tools than content written for general engagement.",
  },
];

const relatedServices = [
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
  { label: "Google Business Profile Optimization", href: "/services/google-business-profile" },
];

const relatedIndustries = [
  { label: "Attorneys", href: "/industries/attorneys" },
  { label: "Financial Advisors", href: "/industries/financial-advisors" },
];

export default function ContentPage() {
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
              Local Content{" "}
              <span className="italic text-gold">Strategy</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Content for local SEO is not the same as content marketing. It has specific jobs: location pages that rank for city-plus-service queries, FAQ content that gets pulled into AI Overviews, and resource pages that build topical authority and earn citations. Generic blog posts accomplish none of these things.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8 max-w-xl">
              We write content that targets real queries, answers specific questions directly, and compounds in value over time. Every piece is mapped to a ranking target and marked up with schema so AI tools can cite it without inference.
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
              Content with a specific ranking job.
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
              Why most local content fails, and what works instead.
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
              What local content can actually accomplish.
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
              A free audit includes an assessment of your current content coverage, which queries you are missing, and what it would take to rank in your market. No pitch if it is not a fit.
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
