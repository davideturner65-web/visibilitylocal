import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile for Insurance Agents: Complete Setup Guide | Visibility Local",
  description:
    "How to set up and optimize Google Business Profile for independent insurance agents. Category selection, attributes, and tactics for competing in local insurance searches.",
  alternates: { canonical: "https://visibilitylocal.com/resources/insurance-agent-gbp" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Google Business Profile for Insurance Agents: Complete Setup Guide",
      author: { "@type": "Person", name: "David Turner" },
      publisher: {
        "@type": "Organization",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      url: "https://visibilitylocal.com/resources/insurance-agent-gbp",
      description:
        "How to set up and optimize Google Business Profile for independent insurance agents. Category selection, attributes, and tactics for competing in local insurance searches.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What GBP category should an independent insurance agent use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Independent agents who sell multiple product lines should use 'Insurance Agency' as their primary category. This category has the broadest search footprint and matches how most clients search for an agent. 'Life Insurance Agency,' 'Health Insurance Agency,' and 'Auto Insurance Agency' are appropriate as secondary categories for agents who specialize in or want to emphasize those lines. 'Insurance Broker' has a different search footprint and a different meaning to consumers in many markets. 'Insurance Company' is incorrect for agents and limits visibility.",
          },
        },
        {
          "@type": "Question",
          name: "How do independent agents compete with State Farm in local search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "State Farm captive agents have large parent-company infrastructure behind them, but they also have GBP listings managed by agents who often do not know how to optimize them. The independent agent advantage is specificity: you can list all of your carriers, your specific service lines, and your local market knowledge in a way that a captive agent promoting one company cannot. Focus on GBP completeness, consistent review velocity, and FAQ content that highlights the independent agent value proposition. The map pack does not favor national brands automatically.",
          },
        },
        {
          "@type": "Question",
          name: "What should I post to my insurance agency GBP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seasonal and deadline-driven content performs best for insurance agencies. ACA open enrollment (October through December), Medicare open enrollment (October 15 through December 7), tax season reminders about HSA contributions, and state-specific open enrollment dates are all high-value posting topics. Avoid generic insurance tips. Post about actual deadlines, actual rate changes, and actual decisions your clients need to make. This type of content demonstrates genuine subject matter expertise and attracts high-intent searchers.",
          },
        },
        {
          "@type": "Question",
          name: "How do insurance clients find local agents online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common search patterns are 'insurance agent near me,' '[city] health insurance agent,' 'independent insurance agent [city],' and specific product searches like 'Medicare supplement insurance [city]' or 'ACA marketplace plans [city].' The term 'independent insurance agent' is an active search query used by clients who specifically want someone who represents multiple carriers. Including 'independent' in your GBP description and services section captures that traffic directly.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "What GBP category should an independent insurance agent use?",
    a: "Independent agents who sell multiple product lines should use 'Insurance Agency' as their primary category. This category has the broadest search footprint and matches how most clients search for an agent. 'Life Insurance Agency,' 'Health Insurance Agency,' and 'Auto Insurance Agency' are appropriate as secondary categories for agents who specialize in or want to emphasize those lines. 'Insurance Broker' has a different search footprint and a different meaning to consumers in many markets. 'Insurance Company' is incorrect for agents and limits visibility.",
  },
  {
    q: "How do independent agents compete with State Farm in local search?",
    a: "State Farm captive agents have large parent-company infrastructure behind them, but they also have GBP listings managed by agents who often do not know how to optimize them. The independent agent advantage is specificity: you can list all of your carriers, your specific service lines, and your local market knowledge in a way that a captive agent promoting one company cannot. Focus on GBP completeness, consistent review velocity, and FAQ content that highlights the independent agent value proposition. The map pack does not favor national brands automatically.",
  },
  {
    q: "What should I post to my insurance agency GBP?",
    a: "Seasonal and deadline-driven content performs best for insurance agencies. ACA open enrollment (October through December), Medicare open enrollment (October 15 through December 7), tax season reminders about HSA contributions, and state-specific open enrollment dates are all high-value posting topics. Avoid generic insurance tips. Post about actual deadlines, actual rate changes, and actual decisions your clients need to make. This type of content demonstrates genuine subject matter expertise and attracts high-intent searchers.",
  },
  {
    q: "How do insurance clients find local agents online?",
    a: "The most common search patterns are 'insurance agent near me,' '[city] health insurance agent,' 'independent insurance agent [city],' and specific product searches like 'Medicare supplement insurance [city]' or 'ACA marketplace plans [city].' The term 'independent insurance agent' is an active search query used by clients who specifically want someone who represents multiple carriers. Including 'independent' in your GBP description and services section captures that traffic directly.",
  },
];

const qaSeeds = [
  {
    q: "Do you work with multiple insurance carriers?",
    a: "Yes. As an independent agent, I represent multiple carriers and can compare rates and coverage across them. You get the best available option rather than whatever one company offers.",
  },
  {
    q: "What is the difference between an independent agent and a captive agent?",
    a: "A captive agent works exclusively for one insurance company, like State Farm or Allstate, and can only sell that company's products. An independent agent represents multiple carriers and can shop your coverage across them. For the client, this usually means better rates and more options.",
  },
  {
    q: "Do you offer free insurance quotes?",
    a: "Yes. Quotes are always free and carry no obligation. Contact me directly or use the form on my website to get started.",
  },
  {
    q: "What areas do you serve?",
    a: "I serve [city] and the surrounding [county/region]. I work with clients across [list specific communities]. Remote consultations are available for clients outside the local area.",
  },
  {
    q: "What types of insurance do you offer?",
    a: "I offer health insurance, life insurance, Medicare supplement and Advantage plans, ACA marketplace plans, auto insurance, homeowners insurance, and small business coverage. As an independent agent, I can place coverage with multiple carriers for each product line.",
  },
];

export default function InsuranceAgentGBPPage() {
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
            <p className="section-label mb-5">Industry Guide</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              GBP for{" "}
              <span className="italic text-gold">insurance agents</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Generic GBP advice does not account for the specific category choices, compliance considerations, and competitive dynamics that independent insurance agents face. This guide is written specifically for agents who sell multiple product lines, represent multiple carriers, and compete in local markets against both captive agents and national brand directories.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed max-w-xl">
              The decisions you make on your GBP setup determine which searches you appear in. For insurance agents, those decisions are more consequential than for most professions because the category distinctions in Google's taxonomy map directly to different product search queries.
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
                The category problem: why getting this wrong is catastrophic
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Google's business category taxonomy for insurance businesses includes at least six distinct options: Insurance Agency, Insurance Broker, Life Insurance Agency, Auto Insurance Agency, Health Insurance Agency, and Insurance Company. These sound similar. Their search footprints are very different.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  An independent agent who selects "Life Insurance Agency" as their primary category will receive significantly fewer impressions for health insurance queries, auto insurance queries, and general "insurance agent near me" searches. The category tells Google which search queries your listing is eligible for. Choosing a narrow category when you offer broad services means you are invisible to the majority of searches your prospects are running.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The correct primary category for most independent agents is "Insurance Agency." Here is the reasoning: it is the broadest category with the highest search volume, it matches how most clients search when they do not yet have a specific product in mind, and it does not exclude you from product-specific searches the way a narrow category does. Add "Life Insurance Agency," "Health Insurance Agency," and "Auto Insurance Agency" as secondary categories to capture product-specific search traffic on top of the broader "Insurance Agency" visibility.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  "Insurance Broker" is a separate category with a distinct search footprint. In some markets, "broker" searches are high volume and worth targeting. In others, consumers associate "broker" with commercial lines and search "agent" for personal lines. Research the actual search volume in your specific market before selecting "Insurance Broker" as a primary category. In most consumer-facing independent agency contexts, "Insurance Agency" remains the stronger primary choice.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Services section: every product line gets its own entry
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The worst thing an independent agent can do in the services section is list "Insurance" as a single entry. You offer multiple distinct products that map to different search queries. Each product needs its own service entry with a description.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Services to list individually (with brief descriptions for each):
                </p>
                <ul className="space-y-2 pl-6">
                  {[
                    "Health Insurance (individual and family plans, ACA marketplace, employer-sponsored options)",
                    "Life Insurance (term life, whole life, universal life)",
                    "Medicare Supplement Insurance (Medigap plans for Medicare beneficiaries)",
                    "Medicare Advantage Plans (Part C alternatives to Original Medicare)",
                    "Auto Insurance (personal and commercial vehicle coverage)",
                    "Homeowners Insurance (dwelling and personal property coverage)",
                    "Small Business Insurance (general liability, professional liability, commercial auto)",
                    "Disability Insurance (if offered)",
                    "Annuities (if applicable)",
                    "ACA Marketplace Plans (specifically for open enrollment traffic)",
                  ].map((svc) => (
                    <li key={svc} className="font-sans text-base text-ink-2 leading-relaxed list-disc">{svc}</li>
                  ))}
                </ul>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Each service entry appears in Google's understanding of what your business offers. "ACA Marketplace Plans" as a listed service directly influences your visibility in ACA-specific searches during open enrollment. "Medicare Supplement Insurance" directly influences Medicare-related searches. This is the services section working as intended.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Writing your description: the independent agent advantage
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Your GBP description allows 750 characters. The first 160 appear in search results before the "more" link. Use those first 160 characters to communicate the one thing that most differentiates an independent agent from a captive agent or a national insurance website: you represent multiple carriers and can shop the market on behalf of your client.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Example first 160 characters: "Independent insurance agent in Little Rock representing 12 carriers. I shop health, life, Medicare, and auto coverage across companies to find you the best rate."
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  In the remaining 590 characters, include: the specific geographic area you serve, how long you have been in business (if 5+ years), any specializations (Medicare, ACA, small business), and a direct statement about the consultation process. Do not use generic phrases like "comprehensive coverage solutions" or "all your insurance needs." These are content-free phrases that tell the reader nothing specific.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  One compliance note: do not list specific carrier names in your description. Some carriers have specific guidelines about how their name can be used in marketing materials. Your carrier appointments also change over time, making any carrier-specific claim in your description potentially inaccurate. Say "representing multiple carriers" rather than naming them.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Photos: the headshot your competitors skip
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Independent insurance agents skip the headshot more often than almost any other type of local professional. This is a mistake. Insurance is a relationship business. A client choosing between three agents in the map pack is not choosing between insurance products. They are choosing who to trust with their family's financial protection.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  A professional headshot on your GBP makes the relationship feel real before the first conversation. It also differentiates your listing from the corporate-looking State Farm and Allstate GBPs with brand photos. A photo of an actual person who will actually answer the phone is a conversion advantage.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Required photo set for insurance agents: professional headshot (primary profile photo), office exterior, office interior (your meeting space if you have one), and at minimum two additional photos. If you work from a home office, a professional headshot plus a clean background photo of your workspace are better than leaving the listing with no photos at all.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Posts: use insurance's natural content calendar
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Insurance has a built-in content calendar that most agents ignore for their GBP. The industry has specific, well-known deadlines and enrollment periods that are high-intent search periods. Post about these. They are exactly the kind of timely, relevant content that performs well in GBP posts.
                </p>
                <div className="bg-paper border border-paper-3 rounded-sm p-6 space-y-3">
                  <h3 className="font-serif text-xl text-ink">Insurance content calendar for GBP posts</h3>
                  {[
                    { period: "October 1-14", content: "Medicare open enrollment announcement. Post about what changes beneficiaries should review this year." },
                    { period: "October 15 - December 7", content: "Medicare open enrollment active. Post about Medicare Advantage vs. Supplement, Part D drug plans, and the deadline." },
                    { period: "November 1 - January 15", content: "ACA open enrollment. Post about marketplace plan changes, subsidy eligibility, and why comparing plans annually matters." },
                    { period: "January - February", content: "Tax season. Post about HSA contribution deadlines, health insurance premium deductions for self-employed clients." },
                    { period: "Ongoing", content: "Weekly posts about common questions (what does term life insurance cover, when should you review your coverage, how does an independent agent save you money)." },
                  ].map((item) => (
                    <div key={item.period} className="border-t border-paper-3 pt-3">
                      <p className="font-sans text-sm font-semibold text-ink mb-1">{item.period}</p>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Q&A to seed: control the narrative before someone else does
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The Q&A section is where the independent agent value proposition can be clearly stated before a prospect has to dig for it. Most captive agent GBPs have no seeded Q&A. This is an opportunity to answer the exact questions that are deciding factors for prospects comparing agents.
                </p>
                <div className="space-y-4">
                  {qaSeeds.map((item) => (
                    <div key={item.q} className="bg-paper border border-paper-3 rounded-sm p-5">
                      <p className="font-serif text-base text-ink font-medium mb-2">Q: {item.q}</p>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">A: {item.a}</p>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Customize the geographic and carrier details for your specific situation. The question "What is the difference between an independent agent and a captive agent?" is a real search query. Having it answered directly in your Q&A section positions you to capture that search intent both through the GBP itself and through AI tools that read Q&A content.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Citation sources specific to insurance agents
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Beyond the Tier 1 universal citations (GBP, Apple Maps, Bing Places, Yelp, Facebook, BBB), insurance agents have several industry-specific citation sources that carry significant authority for both traditional SEO and AI search visibility.
                </p>
                <div className="space-y-3">
                  {[
                    { source: "IIABA Directory", note: "Independent Insurance Agents & Brokers of America member directory. High authority for the independent agent search query specifically." },
                    { source: "State Department of Insurance licensee lookup", note: "A government-domain source that confirms your license status and location. AI tools weight government sources highly. Make sure your information here is current." },
                    { source: "NAIFA (National Association of Insurance and Financial Advisors)", note: "Professional association directory. Relevant for agents who are members." },
                    { source: "Insurance.com agent finder", note: "Consumer-facing insurance directory indexed by Google. Worth claiming if your profile is eligible." },
                    { source: "Local Chamber of Commerce", note: "Geographic authority citation. Shows community presence and business legitimacy simultaneously." },
                  ].map((item) => (
                    <div key={item.source} className="flex items-start gap-3 py-3 border-b border-paper-3 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <p className="font-sans text-sm font-semibold text-ink mb-1">{item.source}</p>
                        <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Proof this works: Hillcrest Life and Health
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Hillcrest Life and Health is an independent insurance agency in Little Rock, Arkansas. The market includes competition from captive agents for national carriers (State Farm, Allstate, Farmers) plus national insurance directory websites that target local searches. Independent agents in this market start at a structural disadvantage: lower brand recognition, smaller marketing budgets, and no parent company maintaining their digital presence.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The GBP optimization work for Hillcrest followed exactly the approach described in this guide: correct primary category selection, complete service entries for each product line, description written for the independent agent value proposition, seeded Q&A, headshot and office photos, and a consistent weekly posting cadence focused on enrollment deadlines and product-specific questions.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The result: Hillcrest now holds top local map pack positions for health insurance keywords in their market. They appear in searches where competing listings include State Farm and national health insurance directories. The work was not technically complex. It was thorough, consistent, and done correctly from the start. That combination, in a market where most competitors are doing none of it well, is sufficient to rank.
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
              Questions from insurance agents.
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
              <Link href="/services/google-business-profile" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">GBP Optimization Service</span>
              </Link>
            </div>
            <div>
              <p className="section-label mb-6">Industry page</p>
              <Link href="/industries/insurance-agents" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">Insurance Agent SEO</span>
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
              One insurance agent per market
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              Check if your market is available.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit covers your current GBP category, service entries, photo set, and competitive position in your local map pack. If your market is open, you will know exactly what it would take to rank.
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
