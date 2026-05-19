import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Guides & Resources | Visibility Local",
  description:
    "Free local SEO guides, GBP tutorials, and AI search visibility resources for independent professionals. Written to rank and be cited by AI tools.",
  alternates: { canonical: "https://visibilitylocal.com/resources" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Local SEO Guides & Resources",
  description:
    "Free local SEO guides, GBP tutorials, and AI search visibility resources for independent professionals.",
  url: "https://visibilitylocal.com/resources",
  publisher: {
    "@type": "Organization",
    name: "Visibility Local",
    url: "https://visibilitylocal.com",
  },
};

const resources = [
  {
    category: "Foundation",
    title: "Google Business Profile Setup Guide",
    description:
      "A step-by-step guide covering every field that affects your map pack ranking. Category selection, services, photos, posts, Q&A, and the monthly maintenance routine that keeps your listing competitive.",
    href: "/resources/google-business-profile-setup",
    length: "10-step guide",
  },
  {
    category: "Audit",
    title: "40-Point Local SEO Checklist",
    description:
      "Forty specific, actionable checklist items across GBP, citations, on-page signals, content, reviews, and AI search visibility. Each item includes a brief explanation of why it matters. Use this to audit your current state.",
    href: "/resources/local-seo-checklist",
    length: "40 items",
  },
  {
    category: "AI Search",
    title: "How to Get Recommended by ChatGPT, Perplexity, and Google AI",
    description:
      "A practical explanation of how AI tools find local businesses, which signals they weight, and what you can do to appear in AI-generated local recommendations. Includes specific actions for each of the three main AI search surfaces.",
    href: "/resources/ai-search-visibility",
    length: "Full guide",
  },
  {
    category: "Citations",
    title: "Citation Building: Tier-by-Tier Guide",
    description:
      "What citations are, why consistency outweighs quantity, and exactly which directories to prioritize in what order. Includes Tier 1 universals, Tier 2 secondaries, and industry-specific directories for insurance, legal, medical, financial, and real estate.",
    href: "/resources/citation-building",
    length: "Tiered directory guide",
  },
  {
    category: "Industry Guide",
    title: "GBP for Insurance Agents: Complete Setup Guide",
    description:
      "The most detailed GBP guide available for independent insurance agents. Covers the category taxonomy problem in full, how to structure services by product line, what to post during enrollment periods, and Q&A seeds that highlight the independent agent value proposition.",
    href: "/resources/insurance-agent-gbp",
    length: "Industry-specific guide",
  },
  {
    category: "Technical",
    title: "Schema Markup for Local Businesses",
    description:
      "What schema markup is, why it matters more for local businesses than any other site type, the four schema types that drive AI search citation, working JSON-LD code examples, common implementation mistakes, and how to test that your markup is working.",
    href: "/resources/schema-markup",
    length: "Technical guide with code examples",
  },
];

export default function ResourcesIndexPage() {
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
            <p className="section-label mb-5">Resources</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Free guides.{" "}
              <span className="italic text-gold">Real information.</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              These guides are written to be useful, not to generate leads. If you learn something from them, great. If you want help applying it, you know where to find us.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed max-w-xl">
              Every guide is written for local business owners and independent professionals who want to understand what actually drives local search rankings, not a summary of things you already know. The content takes stances. It names specific tools, specific directories, specific schema types, and specific mistakes. That is the only kind of guide worth reading.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCE GRID */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group bg-paper border border-paper-3 rounded-sm p-7 flex flex-col hover:border-gold transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="section-label">{resource.category}</p>
                  <span className="font-sans text-xs text-ink-4">{resource.length}</span>
                </div>
                <div className="divider-gold mb-4" />
                <h2 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                  {resource.title}
                </h2>
                <p className="font-sans text-sm text-ink-2 leading-relaxed flex-1">
                  {resource.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-gold">
                  <span className="font-sans text-sm font-semibold">Read guide</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE GUIDES */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="section-label mb-4">Why these guides exist</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl text-ink mt-6 mb-5">
                Most local SEO content is written for search engines, not for you.
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The typical local SEO guide tells you to "optimize your Google Business Profile" and "build citations" without telling you how to choose a GBP category, which citation sources actually matter, or why the distinction between "Insurance Agency" and "Life Insurance Agency" determines which searches your listing appears in.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  These guides are different because they are written by someone who works on these problems daily for actual clients in competitive local markets. The AI search guide explains exactly which actions affect ChatGPT vs. Perplexity vs. Google AI Overviews because those platforms pull from different sources. The schema guide includes working code examples because an explanation without implementation is useless.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  There is also a self-interested reason: these guides are written to be cited by AI tools. FAQPage schema, specific claims, authoritative content, consistent entity data. If you found this page through an AI recommendation, that is the strategy working. It is also the strategy described in the guides.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                {
                  stat: "6 guides",
                  desc: "Covering GBP setup, local SEO auditing, AI search visibility, citations, insurance-specific optimization, and schema markup.",
                },
                {
                  stat: "1000+ words each",
                  desc: "Every guide contains substantive body content with specific claims, concrete examples, and actionable direction.",
                },
                {
                  stat: "No lead walls",
                  desc: "No email required. No gated PDF. Everything is on the page. The CTA at the bottom is for people who want help with implementation, not people who want to read.",
                },
              ].map((item) => (
                <div key={item.stat} className="bg-paper-2 border border-paper-3 rounded-sm p-6">
                  <p className="font-serif text-2xl text-gold mb-1">{item.stat}</p>
                  <p className="font-sans text-sm text-ink-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO READ FIRST */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Where to start</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-4xl text-ink mt-6 mb-5">
              Depends on your biggest gap.
            </h2>
            <div className="space-y-6 mt-8">
              {[
                {
                  condition: "You have never set up your GBP or you are not sure it is correct",
                  guide: "Start with the GBP Setup Guide. Work through it step by step. The category section alone will tell you if your listing is misconfigured.",
                  href: "/resources/google-business-profile-setup",
                  label: "GBP Setup Guide",
                },
                {
                  condition: "You want to audit your entire local presence",
                  guide: "Use the 40-Point Checklist. Go through every item. The ones you cannot check off are your priority list.",
                  href: "/resources/local-seo-checklist",
                  label: "40-Point Checklist",
                },
                {
                  condition: "You want to appear in ChatGPT, Perplexity, or Google AI results",
                  guide: "Read the AI Search Visibility Guide, then the Schema Markup Guide. Implement Bing Places and schema markup in that order.",
                  href: "/resources/ai-search-visibility",
                  label: "AI Search Guide",
                },
                {
                  condition: "You are an independent insurance agent",
                  guide: "The Insurance Agent GBP Guide is written specifically for your situation. Read it before touching your GBP.",
                  href: "/resources/insurance-agent-gbp",
                  label: "Insurance Agent Guide",
                },
              ].map((item) => (
                <div key={item.condition} className="flex gap-6 items-start">
                  <div className="w-px bg-paper-3 self-stretch shrink-0" />
                  <div className="pb-4">
                    <p className="font-sans text-sm font-semibold text-ink mb-1">{item.condition}</p>
                    <p className="font-sans text-sm text-ink-2 leading-relaxed mb-3">{item.guide}</p>
                    <Link href={item.href} className="font-sans text-sm text-gold hover:text-gold-dark transition-colors duration-200 font-semibold flex items-center gap-1">
                      {item.label}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
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
              Want help applying any of this?
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit takes 20 minutes and shows you exactly where your local presence stands. GBP, citations, on-page signals, and current map pack position. No pitch if it is not a fit.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Request a free audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
