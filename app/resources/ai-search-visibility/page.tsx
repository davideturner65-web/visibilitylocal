import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Get Recommended by ChatGPT, Perplexity, and Google AI | Visibility Local",
  description:
    "A practical guide to getting your local business recommended by AI search tools in 2025. GEO, AEO, and AI citation strategy for small businesses.",
  alternates: { canonical: "https://visibilitylocal.com/resources/ai-search-visibility" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How to Get Recommended by ChatGPT, Perplexity, and Google AI",
      author: { "@type": "Person", name: "David Turner" },
      publisher: {
        "@type": "Organization",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      url: "https://visibilitylocal.com/resources/ai-search-visibility",
      description:
        "A practical guide to getting your local business recommended by AI search tools in 2025. GEO, AEO, and AI citation strategy for small businesses.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can a small local business actually appear in ChatGPT recommendations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it is more achievable than most people assume. ChatGPT pulls local business data from Bing's web index. A claimed, verified, complete Bing Places listing is one of the most direct actions a local business can take to appear in ChatGPT local recommendations. Combined with consistent citations across authoritative directories and clear schema markup, a small local business with no national brand recognition can appear in AI-generated local recommendations.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between SEO and GEO (Generative Engine Optimization)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional SEO optimizes for keyword ranking in Google's 10 blue links. GEO optimizes for citation in AI-generated responses. The underlying assets, accurate citations, authoritative content, structured data, overlap significantly. But GEO places more emphasis on entity establishment (being recognized as a specific, real, located business), FAQ-format content that AI tools can cite directly, and presence in the sources those tools trust.",
          },
        },
        {
          "@type": "Question",
          name: "Does schema markup really help with AI search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, for a specific reason. Schema markup puts your business data in a structured, machine-readable format. When an AI tool is building a response about local businesses, structured data is exactly what it is looking for: unambiguous information it can confidently cite. A LocalBusiness schema with accurate name, address, phone, hours, and service area removes the need for the AI to infer or interpolate any of that data.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my business is showing up in AI search results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Test it directly. Open ChatGPT, Perplexity, and Google AI Overviews. Ask variations of 'who is the best [your profession] in [your city]?' and 'recommend a [your service] near [your city].' If you are not appearing, note which competitors are. Look at their citation profile, schema implementation, and GBP completeness. The gap between you and the businesses appearing is the work to be done.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Can a small local business actually appear in ChatGPT recommendations?",
    a: "Yes, and it is more achievable than most people assume. ChatGPT pulls local business data from Bing's web index. A claimed, verified, complete Bing Places listing is one of the most direct actions a local business can take to appear in ChatGPT local recommendations. Combined with consistent citations across authoritative directories and clear schema markup, a small local business with no national brand recognition can appear in AI-generated local recommendations.",
  },
  {
    q: "What is the difference between SEO and GEO (Generative Engine Optimization)?",
    a: "Traditional SEO optimizes for keyword ranking in Google's 10 blue links. GEO optimizes for citation in AI-generated responses. The underlying assets, accurate citations, authoritative content, structured data, overlap significantly. But GEO places more emphasis on entity establishment (being recognized as a specific, real, located business), FAQ-format content that AI tools can cite directly, and presence in the sources those tools trust.",
  },
  {
    q: "Does schema markup really help with AI search?",
    a: "Yes, for a specific reason. Schema markup puts your business data in a structured, machine-readable format. When an AI tool is building a response about local businesses, structured data is exactly what it is looking for: unambiguous information it can confidently cite. A LocalBusiness schema with accurate name, address, phone, hours, and service area removes the need for the AI to infer or interpolate any of that data.",
  },
  {
    q: "How do I know if my business is showing up in AI search results?",
    a: "Test it directly. Open ChatGPT, Perplexity, and Google AI Overviews. Ask variations of 'who is the best [your profession] in [your city]?' and 'recommend a [your service] near [your city].' If you are not appearing, note which competitors are. Look at their citation profile, schema implementation, and GBP completeness. The gap between you and the businesses appearing is the work to be done.",
  },
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
            <p className="section-label mb-5">Guide</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Getting recommended by{" "}
              <span className="italic text-gold">AI search tools</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              When someone asks ChatGPT, Perplexity, or Google's AI Overviews for a local professional recommendation, the response they get is not a list of whoever ranks highest on Google. It is a synthesized answer drawn from structured data, authoritative sources, and content that AI tools can confidently cite.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed max-w-xl">
              Most local businesses have not thought about any of this yet. That is the current opportunity. This guide explains how AI tools find local businesses and what you can do to appear in those recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                How AI tools actually find local businesses
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Here is what AI search tools do not do: they do not browse your website and decide you seem trustworthy. They rely on structured data sources they already index, citation networks that confirm your business exists and is located where you say, and content from sources they consider authoritative.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The practical implication is that your website alone is not enough. The business with the nicest website that no authoritative source has cited is invisible to AI tools. The business with a complete GBP, consistent citations across 30 authoritative directories, and FAQ content structured in schema markup is the business that gets recommended.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  AI tools are building knowledge graphs of real-world entities. Your business is an entity: a name, a location, a category, a set of services, an owner, a phone number. The more authoritative sources that confirm your entity accurately, the more confident an AI tool is in recommending you. This is not a technical abstraction. It is the reason citation consistency and structured data directly affect whether you appear in AI-generated recommendations.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                The three AI search surfaces, and how they differ
              </h2>
              <div className="space-y-6">
                <div className="bg-paper border border-paper-3 rounded-sm p-6">
                  <h3 className="font-serif text-2xl text-ink mb-3">ChatGPT</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    ChatGPT's training data has a knowledge cutoff, but its web browsing capability (when enabled) pulls from Bing's web index. For local business recommendations, ChatGPT uses Bing's indexed data, which means Bing Places is directly relevant. A business that has never claimed its Bing Places listing is giving ChatGPT less accurate, less complete data to work with.
                  </p>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed mt-3">
                    What to do: claim and fully complete your Bing Places listing. Verify it. Add all services, hours, photos, and a complete description. This is the most direct action a local business can take to improve ChatGPT visibility. Most businesses have never done it.
                  </p>
                </div>

                <div className="bg-paper border border-paper-3 rounded-sm p-6">
                  <h3 className="font-serif text-2xl text-ink mb-3">Perplexity</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    Perplexity runs live web searches and synthesizes the results. It is more current than ChatGPT's training data and tends to cite sources explicitly, which makes it possible to see exactly what it is pulling from. The businesses appearing in Perplexity local recommendations typically have strong citation profiles across authoritative directories and substantive content that directly answers the question asked.
                  </p>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed mt-3">
                    What to do: ensure your business is listed accurately in high-authority directories (Yelp, BBB, Healthgrades, Avvo, or your industry equivalents), and that your website has substantive content answering the specific questions prospects ask. Perplexity reads your content. Make it worth citing.
                  </p>
                </div>

                <div className="bg-paper border border-paper-3 rounded-sm p-6">
                  <h3 className="font-serif text-2xl text-ink mb-3">Google AI Overviews</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    Google AI Overviews pulls from Google's existing index, which means GBP strength and organic ranking still matter significantly here. Businesses appearing in AI Overviews for local queries tend to have well-optimized GBPs, relevant on-page content, and structured data that Google can parse directly.
                  </p>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed mt-3">
                    What to do: treat GBP optimization and on-page schema markup as your primary levers for Google AI Overviews. The better your GBP signals and the more cleanly your website data is structured, the more likely your business appears in AI Overview answers to local queries.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Entity establishment: the foundation of AI search visibility
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  AI tools work with entities. An entity is a distinct, real-world thing with clear attributes. Your business is an entity. Your goal is to make sure that entity is confirmed, accurately, across enough authoritative sources that AI tools recognize it with confidence.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Minimum entity confirmation footprint for a local business in 2025: Google Business Profile (verified), Apple Maps (claimed), Bing Places (verified), Yelp (claimed and complete), Facebook Business page (accurate NAP), BBB listing (accurate), LinkedIn company page (if applicable), and at minimum two industry-specific directories appropriate to your profession. That is roughly 8 to 10 sources. More is better, but these 8 to 10 form the base that AI tools expect to find.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Inconsistency across these sources undermines entity confidence. If your Yelp listing has your old phone number, your GBP has your current number, and your Facebook page has no phone number at all, AI tools see three slightly different versions of your entity and are less confident in any of them. Consistency is not just an SEO best practice. It is the data quality standard that AI tools require to recommend you with confidence.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Schema markup: making your data directly parseable
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Schema markup is structured data you add to your website that tells search engines and AI tools explicitly what your content means. Without it, a machine reading your website has to infer that your name is your business name, that the number in the header is your phone, and that the text on your services page describes what you offer. With schema, you are handing those machines a labeled dataset.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The schema types that matter most for local AI search visibility: LocalBusiness (or a subtype like ProfessionalService, Attorney, Physician), Service, FAQPage, and Person (for named professionals). Most local businesses have zero schema markup on their websites. The ones that do, even if everything else is equal, have a structural advantage in AI search citation.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  FAQPage schema deserves special mention. When your website has questions and answers formatted in FAQPage schema, AI tools can pull those answers directly to respond to user queries. An insurance agent with FAQPage schema on their site answering "what is the difference between term and whole life insurance" is more likely to be cited when someone asks that question in ChatGPT or Perplexity.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                FAQ content strategy: write answers AI tools want to cite
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  AI tools are, at their core, question-answering machines. They look for content that directly answers questions. The format they prefer is the same format your clients ask in: "Who is the best health insurance agent in [city]?" or "What is the difference between an independent agent and a captive agent?"
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Write content that explicitly answers those questions. Not a general article about insurance that tangentially relates. A direct answer to a specific question, followed by enough context to demonstrate genuine expertise. The question should appear verbatim or near-verbatim in your content. The answer should be complete enough to stand alone.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Identify the five most common questions your best clients ask before they hire you. Write direct, substantive answers to each one. Put them on your website with FAQPage schema. Put the most important ones on your GBP Q&A as well. These two placements, your website and your GBP, are the two most accessible surfaces for AI tool citation.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Authority signals: the sources AI tools trust most
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Not all citations carry equal weight with AI tools. A listing in a directory that aggregates thousands of businesses with no editorial process carries less authority than a listing in an industry-specific directory with verified credentials.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The highest-authority sources for local business AI visibility: Google Business Profile, Apple Maps, Yelp, BBB, industry-specific credentialing directories (state bar, state insurance department licensee lookup, AMA physician finder, FINRA BrokerCheck), local news mentions or features, and professional association directories. A single mention in a local newspaper that has been indexed by Google carries more entity authority than 50 low-quality directory listings.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  If your profession has a state licensing body that publishes a public licensee lookup, make sure your information there is current. These government-domain sources are among the highest-trust citation sources available to local professionals.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Timeline: how fast can AI visibility build?
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Faster than traditional SEO, in many cases. Schema markup changes can be indexed and recognized by AI tools within weeks of implementation. A Bing Places listing that is verified and complete can start affecting ChatGPT recommendations within a month. Citation cleanup, where you correct inconsistent data across existing listings, can show effects within 6 to 8 weeks as the corrected information propagates.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Content authority takes longer. A FAQ page published today will not be a trusted source for AI tools immediately. Authority builds as the page ages, gets indexed, and is confirmed by other sources. But the foundational work, schema, Bing Places, citation consistency, can meaningfully improve your AI search visibility within 60 to 90 days of implementation.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The larger point about timing: most local businesses have not started this work yet. The window where these actions provide a significant competitive advantage is open now. It will narrow as more businesses and their agencies discover it. The businesses doing this work in 2025 are building a position that will be harder to displace in 2026 and beyond.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Common questions</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              Questions about AI search visibility.
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

      {/* RELATED */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="section-label mb-6">Related guides</p>
              <div className="space-y-3">
                {[
                  { label: "GBP Setup Guide", href: "/resources/google-business-profile-setup" },
                  { label: "Schema Markup Guide", href: "/resources/schema-markup" },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3 group">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-6">Related service</p>
              <Link href="/services/ai-search-visibility" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">AI Search Visibility Service</span>
              </Link>
            </div>
            <div>
              <p className="section-label mb-6">All resources</p>
              <Link href="/resources" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">View all guides</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "#c8922a" }}>
              Ready to get in front of AI recommendations?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              We build the signals that AI tools trust.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              One client per market. A free audit shows you exactly what is missing from your AI search visibility footprint and whether your market is available.
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
