import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "40-Point Local SEO Checklist for 2025 | Visibility Local",
  description:
    "The 40 local SEO factors that actually drive map pack rankings and local search visibility in 2025. Audit your business against this list.",
  alternates: { canonical: "https://visibilitylocal.com/resources/local-seo-checklist" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "40-Point Local SEO Checklist for 2025",
      author: { "@type": "Person", name: "David Turner" },
      publisher: {
        "@type": "Organization",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      url: "https://visibilitylocal.com/resources/local-seo-checklist",
      description:
        "The 40 local SEO factors that actually drive map pack rankings and local search visibility in 2025. Audit your business against this list.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How often should I run through this checklist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Run a full checklist audit quarterly. Some items, like GBP posting cadence and review monitoring, need weekly attention. Others, like schema markup and citation consistency, are set-and-monitor tasks you check every three months. A quarterly audit takes about 2 hours and will surface any drift from competitors who are actively optimizing.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most important item on this list?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Primary GBP category. Every other item on this list can be perfectly executed and still fail to move rankings if your GBP is filed under the wrong category. Category determines which search queries your listing is even eligible to appear in. Fix the category first, then work through everything else.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know which items I have already completed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Run a GBP audit inside your dashboard (completeness score is visible under 'Edit profile'), run your NAP through Whitespark or BrightLocal to see citation consistency, and use Google's Rich Results Test to check schema markup. For on-page items, a crawl with Screaming Frog or Sitebulb will surface missing title tags, meta descriptions, and schema errors.",
          },
        },
        {
          "@type": "Question",
          name: "Does this checklist apply to all business types?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The GBP, NAP, on-page, and review sections apply universally. The AI search section applies to any business that wants to appear in ChatGPT, Perplexity, or Google AI Overviews. The content section is more important for service businesses and professionals than for retail locations. Industry-specific citation sources vary by profession.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How often should I run through this checklist?",
    a: "Run a full checklist audit quarterly. Some items, like GBP posting cadence and review monitoring, need weekly attention. Others, like schema markup and citation consistency, are set-and-monitor tasks you check every three months. A quarterly audit takes about 2 hours and will surface any drift from competitors who are actively optimizing.",
  },
  {
    q: "What is the most important item on this list?",
    a: "Primary GBP category. Every other item on this list can be perfectly executed and still fail to move rankings if your GBP is filed under the wrong category. Category determines which search queries your listing is even eligible to appear in. Fix the category first, then work through everything else.",
  },
  {
    q: "How do I know which items I have already completed?",
    a: "Run a GBP audit inside your dashboard (completeness score is visible under 'Edit profile'), run your NAP through Whitespark or BrightLocal to see citation consistency, and use Google's Rich Results Test to check schema markup. For on-page items, a crawl with Screaming Frog or Sitebulb will surface missing title tags, meta descriptions, and schema errors.",
  },
  {
    q: "Does this checklist apply to all business types?",
    a: "The GBP, NAP, on-page, and review sections apply universally. The AI search section applies to any business that wants to appear in ChatGPT, Perplexity, or Google AI Overviews. The content section is more important for service businesses and professionals than for retail locations. Industry-specific citation sources vary by profession.",
  },
];

const sections = [
  {
    label: "Google Business Profile",
    range: "1-10",
    items: [
      {
        n: 1,
        title: "Primary category matches your highest-value service",
        detail:
          "Do not accept Google's suggested category without verifying it against actual search volume data. The category you choose determines which queries your listing is eligible for. An incorrect primary category is the most common cause of invisible GBP listings.",
      },
      {
        n: 2,
        title: "Secondary categories added for additional services",
        detail:
          "You can add up to 9 secondary categories. Each one expands your search footprint. An insurance agent might add 'Life Insurance Agency,' 'Health Insurance Agency,' and 'Auto Insurance Agency' as secondaries behind 'Insurance Agency' as primary.",
      },
      {
        n: 3,
        title: "Business description filled to 750 characters, first 160 written for the reader",
        detail:
          "Only 160 characters show without clicking 'more.' Write the first 160 characters as a standalone statement that communicates what you do and who you serve. No keyword stuffing. No superlatives that Google will flag.",
      },
      {
        n: 4,
        title: "All individual services listed with descriptions",
        detail:
          "Each service should be its own entry, not a single umbrella term. A law firm should list 'Divorce,' 'Child Custody,' and 'Estate Planning' separately, not just 'Legal Services.' Each service entry maps to different search queries.",
      },
      {
        n: 5,
        title: "All applicable attributes checked",
        detail:
          "Available attributes vary by category. Accessibility features, payment types, appointment requirements, and service-specific attributes all affect filtered searches. Fill in every attribute that applies accurately.",
      },
      {
        n: 6,
        title: "Profile photo and cover photo uploaded, plus 5+ additional photos",
        detail:
          "Photos affect click-through rate from map pack results. Listings with 10+ photos see higher engagement than listings with 2 to 3. Upload interior, exterior, team photos, and a professional headshot if you are an independent practitioner.",
      },
      {
        n: 7,
        title: "Website link points to a location-specific landing page",
        detail:
          "Linking to your homepage is usually the wrong choice. A city-and-service-specific landing page sends a more precise local signal and converts better for visitors arriving from the map pack.",
      },
      {
        n: 8,
        title: "New GBP post published every 7 days",
        detail:
          "Posts expire from visible display after roughly 7 days. Weekly posting is the minimum cadence to maintain active listing signals in Google's freshness algorithm. Posts about your services and local community outperform generic tips.",
      },
      {
        n: 9,
        title: "Q&A section seeded with 5+ questions and answers",
        detail:
          "Most businesses have zero entries in Q&A. Seed it yourself by posting common questions from your personal Google account and answering them from your business account. These answers appear in search results and feed AI tool recommendations.",
      },
      {
        n: 10,
        title: "Review request process in place with direct review link",
        detail:
          "Generate a short review link from your GBP dashboard. Include it in post-service follow-up messages. Ask within 48 hours of a positive interaction, not in bulk months later. Respond to every review, positive and negative.",
      },
    ],
  },
  {
    label: "NAP & Citations",
    range: "11-18",
    items: [
      {
        n: 11,
        title: "Business name, address, and phone are identical across all directories",
        detail:
          "Even small variations, 'St.' vs. 'Street,' suite number formats, punctuation in the phone number, create citation inconsistency that Google reads as doubt about your business's legitimacy. Pick one format and use it everywhere.",
      },
      {
        n: 12,
        title: "Google Business Profile, Apple Maps, and Bing Places are all verified",
        detail:
          "These three form the core citation set. AI tools including ChatGPT pull from Bing's index. Apple Maps powers Siri recommendations. All three need to be claimed, verified, and consistent. Most businesses claim Google and ignore the other two.",
      },
      {
        n: 13,
        title: "Yelp listing claimed and complete",
        detail:
          "Yelp remains a high-authority citation source regardless of whether you actively pursue Yelp reviews. It is indexed heavily by Google and pulls from its data to power other directories. An unclaimed Yelp listing often has wrong information.",
      },
      {
        n: 14,
        title: "Facebook Business page active with correct NAP",
        detail:
          "Facebook Business pages function as citation sources. The NAP on your Facebook page should match your GBP exactly. Facebook also feeds data to Apple Maps and other aggregators.",
      },
      {
        n: 15,
        title: "BBB listing active, regardless of membership status",
        detail:
          "The Better Business Bureau is an authority-weighted citation source that AI tools trust. A basic free listing with accurate NAP data is sufficient. Paid membership is not required for the citation value.",
      },
      {
        n: 16,
        title: "No duplicate listings in any major directory",
        detail:
          "Duplicates occur when a business moves, changes phone numbers, or has multiple staff members creating listings independently. Duplicate listings split authority and create conflicting data signals. Identify and suppress or merge them.",
      },
      {
        n: 17,
        title: "Industry-specific directories claimed and accurate",
        detail:
          "Every industry has authoritative directories that carry extra weight in local search. Insurance agents need the IIABA directory and state Department of Insurance licensee listings. Attorneys need Avvo, Martindale-Hubbell, and Justia. Medical providers need Healthgrades. Identify the three to five most authoritative directories for your profession.",
      },
      {
        n: 18,
        title: "Chamber of Commerce and local business association listings verified",
        detail:
          "Local citations carry geographic relevance signals that national directories do not. A listing in your city's Chamber of Commerce directory confirms both your location and your legitimacy as an operating business. These are easy wins that most businesses overlook.",
      },
    ],
  },
  {
    label: "On-Page Website Signals",
    range: "19-26",
    items: [
      {
        n: 19,
        title: "LocalBusiness schema markup on every key page",
        detail:
          "JSON-LD schema in the page head tells Google explicitly what your business name, address, phone, hours, and service area are. Without schema, Google has to infer this from your content. With schema, you are feeding it the answer. This directly feeds AI tool knowledge graphs.",
      },
      {
        n: 20,
        title: "NAP on website matches GBP and citation sources exactly",
        detail:
          "Your website's NAP information should be identical to your GBP and all directory listings. Include it in the footer of every page, not just the contact page. This is one of the strongest on-page local signals available.",
      },
      {
        n: 21,
        title: "Title tags include city and primary service term",
        detail:
          "A page titled 'Services' is invisible. A page titled 'Health Insurance Agent in Little Rock, AR' is specific. Title tags are one of the most direct on-page local signals. Every service page and location page should include city and service in the title.",
      },
      {
        n: 22,
        title: "Meta descriptions written for the searcher, not the algorithm",
        detail:
          "Meta descriptions do not directly influence ranking, but they affect click-through rate. A compelling, specific meta description that matches the searcher's intent will outperform a generic keyword-stuffed one on every query.",
      },
      {
        n: 23,
        title: "Mobile page speed score above 75 on Google PageSpeed Insights",
        detail:
          "The majority of local searches happen on phones. A slow mobile experience is a ranking factor and a conversion killer simultaneously. Run your key landing pages through PageSpeed Insights and fix the highest-impact issues first.",
      },
      {
        n: 24,
        title: "Dedicated service area or location page for each market served",
        detail:
          "If you serve multiple cities or counties, each market deserves its own page with unique, substantive content. Thin pages with only a city name swapped in do not rank. Pages with genuine local content about that specific market do.",
      },
      {
        n: 25,
        title: "Embedded Google Map on contact page",
        detail:
          "An embedded Google Map on your contact page reinforces your location signal and provides a direct GBP touchpoint. It also confirms the physical address association between your website and your GBP.",
      },
      {
        n: 26,
        title: "Internal links connect service pages to location pages",
        detail:
          "Internal link architecture tells Google which pages are most important. A service page linking to a city-specific landing page and vice versa reinforces both the service relevance and the geographic targeting simultaneously.",
      },
    ],
  },
  {
    label: "Content",
    range: "27-32",
    items: [
      {
        n: 27,
        title: "Each service you offer has a dedicated page with 500+ words of specific content",
        detail:
          "A single 'Services' page listing ten items with one-line descriptions does not rank. Each service needs its own page with enough content to demonstrate expertise and answer the questions a prospective client would have about that specific service.",
      },
      {
        n: 28,
        title: "FAQ content on service pages answers real client questions",
        detail:
          "AI tools pull FAQ-formatted content to answer conversational queries. FAQs on your service pages that answer questions like 'how much does [service] cost in [city]?' or 'what is the difference between [option A] and [option B]?' increase the probability of AI citation.",
      },
      {
        n: 29,
        title: "Primary location page explicitly states city, county, and surrounding areas served",
        detail:
          "Your primary location page should name your city, the surrounding communities you serve, and contain genuine content about why your service matters in that specific market. Not boilerplate swapped-in location text.",
      },
      {
        n: 30,
        title: "At least one piece of content per quarter that demonstrates genuine subject matter expertise",
        detail:
          "Blog posts or guides that show you know your industry deeply build topical authority over time. An insurance agent writing about the specific health insurance options available to small business owners in Arkansas is more authoritative than one publishing generic tips from press releases.",
      },
      {
        n: 31,
        title: "Content mentions specific local landmarks, institutions, or community context",
        detail:
          "Genuinely local content references things that are true about your specific market. Mentioning the specific neighborhoods you serve, local employers you work with, or local events your business is involved in signals genuine local presence rather than templated location pages.",
      },
      {
        n: 32,
        title: "Author bylines and bio pages link to relevant credentials or profiles",
        detail:
          "For professional service providers, author credibility signals matter to both Google's E-E-A-T evaluation and AI tool trustworthiness assessments. A bio page that links to your state licensure, professional associations, and relevant credentials reinforces your authority entity.",
      },
    ],
  },
  {
    label: "Reviews & Reputation",
    range: "33-37",
    items: [
      {
        n: 33,
        title: "At least one new Google review per month",
        detail:
          "Review velocity is a ranking signal. Consistent monthly new reviews outperform sporadic large batches followed by months of silence. One new review per month as a floor is achievable for any active business and keeps freshness signals positive.",
      },
      {
        n: 34,
        title: "Average rating of 4.0 or higher across all platforms",
        detail:
          "Average rating affects both ranking and click-through rate. Businesses with ratings below 4.0 see significantly lower CTR from map pack results. If your rating is below 4.0, the priority is understanding and resolving the underlying service issues, not the review strategy.",
      },
      {
        n: 35,
        title: "Every Google review has a response from the business",
        detail:
          "Response rate is an engagement signal in GBP's algorithm. More practically, every unanswered negative review is a prospect-visible statement that you do not address problems. Respond to every review within 7 days.",
      },
      {
        n: 36,
        title: "Reviews collected on Yelp, Facebook, and industry-specific platforms",
        detail:
          "Google reviews are most important for map pack ranking, but multi-platform review presence signals broad legitimacy to AI tools. Yelp reviews, Facebook recommendations, and industry directory reviews all contribute to your overall reputation entity.",
      },
      {
        n: 37,
        title: "Review request system triggers within 48 hours of positive interactions",
        detail:
          "A review request sent within 48 hours of a positive interaction converts at 3 to 5x higher rates than requests sent days or weeks later. Systematize this. It should not depend on memory.",
      },
    ],
  },
  {
    label: "AI Search Visibility",
    range: "38-40",
    items: [
      {
        n: 38,
        title: "FAQPage schema markup present on pages with Q&A content",
        detail:
          "FAQPage schema is the highest-leverage schema type for AI search visibility. When your FAQ content is structured in schema, AI tools can parse and cite your answers directly. Most local businesses have Q&A content on their websites with no FAQPage schema.",
      },
      {
        n: 39,
        title: "Business entity appears consistently across 10+ authoritative sources",
        detail:
          "AI tools work with entities, not just websites. Your business entity (name, address, category, ownership) should appear consistently across at minimum: GBP, Yelp, Facebook, BBB, Apple Maps, Bing Places, LinkedIn, and relevant industry directories. The more authoritative sources confirm your entity, the more confident AI tools are in recommending you.",
      },
      {
        n: 40,
        title: "Bing Places listing verified and complete",
        detail:
          "ChatGPT pulls local business data from Bing's web index. An unclaimed or incomplete Bing Places listing means ChatGPT has less accurate data about your business when generating local recommendations. Claiming and completing your Bing Places listing is one of the most direct AI search optimization actions available.",
      },
    ],
  },
];

export default function LocalSEOChecklistPage() {
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
              40-Point Local SEO{" "}
              <span className="italic text-gold">Checklist</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Most local SEO checklists are vague category labels with no actionable specifics. "Optimize your GBP" is not a checklist item. These 40 items are. Each one is a specific task with a specific reason it matters, written for businesses that want to audit themselves against the actual factors that drive map pack rankings.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed max-w-xl">
              Run through this list quarterly. The items in the first three sections (GBP, NAP, on-page) are where most local businesses have the largest gaps. Start there.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section) => (
              <div key={section.label}>
                <div className="flex items-baseline gap-4 mb-8">
                  <p className="section-label">{section.label}</p>
                  <span className="font-sans text-xs text-ink-4">Items {section.range}</span>
                </div>
                <div className="space-y-0 border border-paper-3 rounded-sm overflow-hidden">
                  {section.items.map((item, idx) => (
                    <div
                      key={item.n}
                      className={`flex gap-5 p-6 ${idx < section.items.length - 1 ? "border-b border-paper-3" : ""} bg-paper`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 border border-paper-3 rounded-sm flex items-center justify-center">
                        <span className="font-sans text-xs font-semibold text-ink-4">{item.n}</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-ink mb-2">{item.title}</h3>
                        <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="section-label mb-4">How to use this list</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-4xl text-ink mt-6 mb-5">
              Start with the items that move rankings fastest.
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                If you are starting from zero, work through the GBP section first. Items 1 through 10 can be completed in a single focused afternoon and they have more ranking impact than any other section on this list. Fixing a wrong primary category alone has moved businesses from invisible to page one of the map pack without changing anything else.
              </p>
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                After GBP, audit your NAP consistency. This requires going through your major directory listings and finding inconsistencies. Tools like Whitespark's Citation Finder or BrightLocal's Citation Audit make this faster. Inconsistent NAP data is silent ranking suppression. You will not see an error message. You will just rank lower than you should.
              </p>
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                On-page and content items (19 through 32) require website access and take longer. If your website is on a platform you cannot edit easily, prioritize the GBP and NAP items first and handle the website items when you have the resources to do so.
              </p>
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                Items 38 through 40, the AI search section, are still underexploited by most local businesses. The window where completing these items provides a meaningful competitive advantage will close as more businesses discover them. These three items take less than a day to implement and position you ahead of the majority of your local competitors in AI-generated recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Common questions</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              Questions about this checklist.
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
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="section-label mb-6">Related guides</p>
              <div className="space-y-3">
                {[
                  { label: "GBP Setup Guide", href: "/resources/google-business-profile-setup" },
                  { label: "Citation Building Guide", href: "/resources/citation-building" },
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
              <Link href="/services/local-seo" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">Local SEO Service</span>
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
              Want us to run this audit for you?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              We will tell you exactly where you stand.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit covers your GBP, citations, on-page signals, and current map pack position. You will know which items on this list are gaps before any commitment is made.
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
