import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Setup Guide 2025 | Visibility Local",
  description:
    "Complete step-by-step guide to setting up and optimizing your Google Business Profile. Categories, photos, posts, Q&A, and everything that affects your map pack ranking.",
  alternates: { canonical: "https://visibilitylocal.com/resources/google-business-profile-setup" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Google Business Profile Setup Guide 2025",
      author: { "@type": "Person", name: "David Turner" },
      publisher: {
        "@type": "Organization",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      url: "https://visibilitylocal.com/resources/google-business-profile-setup",
      description:
        "Complete step-by-step guide to setting up and optimizing your Google Business Profile. Categories, photos, posts, Q&A, and everything that affects your map pack ranking.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take for a new GBP to start ranking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A brand new listing typically takes 4 to 12 weeks to start appearing in the map pack for competitive terms. The timeline depends on how established your business is in other signals: citation count, domain age, and whether you have any existing reviews. Fully completing your profile on day one compresses that timeline. An incomplete profile can sit dormant for months.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if Google changes my business category?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google occasionally updates category options, which can auto-migrate listings to a new category. Check your primary category once a month. If Google reassigns you to something incorrect, change it back immediately. Google also sometimes suggests category changes based on reviews or content on your linked website. You do not have to accept these suggestions.",
          },
        },
        {
          "@type": "Question",
          name: "Can I have multiple GBP listings for the same business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if you have multiple physical locations. One address, one listing. Creating duplicate listings for the same location violates Google's guidelines and can result in both listings being suspended. If you serve multiple cities from one office, use the service area feature rather than creating additional listings.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my GBP optimization is working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check three things monthly in your GBP dashboard: Search terms (what queries triggered your listing), Actions (calls, website clicks, direction requests), and Photo views. If calls are flat and search terms are showing irrelevant queries, your category selection or service descriptions need work. If photo views are low, add more photos. The GBP dashboard's Performance tab shows you exactly what's driving activity.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How long does it take for a new GBP to start ranking?",
    a: "A brand new listing typically takes 4 to 12 weeks to start appearing in the map pack for competitive terms. The timeline depends on how established your business is in other signals: citation count, domain age, and whether you have any existing reviews. Fully completing your profile on day one compresses that timeline. An incomplete profile can sit dormant for months.",
  },
  {
    q: "What happens if Google changes my business category?",
    a: "Google occasionally updates category options, which can auto-migrate listings to a new category. Check your primary category once a month. If Google reassigns you to something incorrect, change it back immediately. Google also sometimes suggests category changes based on reviews or content on your linked website. You do not have to accept these suggestions.",
  },
  {
    q: "Can I have multiple GBP listings for the same business?",
    a: "Only if you have multiple physical locations. One address, one listing. Creating duplicate listings for the same location violates Google's guidelines and can result in both listings being suspended. If you serve multiple cities from one office, use the service area feature rather than creating additional listings.",
  },
  {
    q: "How do I know if my GBP optimization is working?",
    a: "Check three things monthly in your GBP dashboard: Search terms (what queries triggered your listing), Actions (calls, website clicks, direction requests), and Photo views. If calls are flat and search terms are showing irrelevant queries, your category selection or service descriptions need work. If photo views are low, add more photos. The GBP dashboard's Performance tab shows you exactly what's driving activity.",
  },
];

export default function GBPSetupGuidePage() {
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
              Google Business Profile{" "}
              <span className="italic text-gold">Setup Guide</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Forty-six percent of all Google searches have local intent. That means nearly half of the searches happening right now are from someone looking for a local business, professional, or service. Your Google Business Profile determines whether you appear in those results or not.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed max-w-xl">
              Most businesses set up their GBP once, never revisit it, and wonder why they are not in the map pack. This guide walks through every field that matters, in the order it matters, with specific guidance on what to put in each one.
            </p>
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">

            {/* Step 1 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 1</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Claiming vs. creating: check before you build
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Before you create a new Google Business Profile, search Google Maps for your business name and address. Google frequently creates unverified listings automatically, pulling data from other directories and websites. If your listing already exists as an unverified entry, you need to claim it, not create a second one. Duplicate listings cause serious problems that take months to clean up.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  To claim an existing listing, click "Own this business?" on the Maps listing and go through the verification process. To create a new one, go to business.google.com and follow the setup flow. Verification typically happens via postcard (5 to 7 days), phone call, or video recording. Video verification has become more common and usually resolves within 48 hours.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  One important note: if a previous business operated at your address, their old listing might still exist. Contact Google Support to have it removed before claiming your new listing. Running both simultaneously creates category confusion that suppresses your map pack visibility.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 2</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Category selection: the most consequential field on your profile
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Primary category is the single most important field in your Google Business Profile. It controls which searches your listing is eligible to appear in. This is not a minor signal. The wrong category means you are invisible to the specific queries your best clients are running.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Google will suggest a category during setup. It is often wrong. For an independent insurance agent, Google might default to "Insurance Company" or "Life Insurance Agency" when the correct category is "Insurance Agency." These distinctions sound minor but they are not. "Life Insurance Agency" surfaces in life insurance searches. "Insurance Agency" surfaces in broader insurance queries. The choice changes your search footprint significantly.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Other industry examples where the category distinction matters:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="font-sans text-base text-ink-2 leading-relaxed list-disc">
                    Attorneys: "Lawyer" vs. "Personal Injury Attorney" vs. "Family Law Attorney" each surface in different searches. Use the specific practice area as primary if you specialize.
                  </li>
                  <li className="font-sans text-base text-ink-2 leading-relaxed list-disc">
                    Financial advisors: "Financial Planner" and "Financial Consultant" have different search volumes. "Investment Management Service" surfaces in different queries than either one.
                  </li>
                  <li className="font-sans text-base text-ink-2 leading-relaxed list-disc">
                    Medical practices: "Family Practice Physician" and "General Practitioner" are different categories with different search patterns. The distinction between "Medical Clinic" and "Doctor's Office" also matters.
                  </li>
                </ul>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  After selecting your primary category, add secondary categories for any other services you offer. A general practice law firm might use "Lawyer" as primary and add "Estate Planning Attorney," "Business Attorney," or specific practice areas as secondaries. Secondary categories expand your search footprint without diluting the primary signal.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 3</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Business description: write for the human, not the algorithm
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Your Google Business Profile description allows 750 characters total, but only 160 characters are visible in the search result before the "more" link. Write the first 160 characters as a complete, compelling sentence that stands on its own. Do not stuff it with keywords. Google can read them, but the person reading your description is deciding whether to call you.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The description should communicate: what you do specifically, who you serve, your differentiator, and your location. For an independent insurance agent: "Independent insurance agent serving Little Rock families and small businesses since 2010. I represent 12 carriers, which means you get the best rate rather than the only option I sell." That is more useful than a keyword-stuffed paragraph about "comprehensive insurance solutions for all your needs."
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  One thing to avoid: mentioning competitor names, making claims that include superlatives ("best," "top-rated," "#1"), or including URLs in the description. Google's guidelines prohibit these, and violations can trigger listing suspensions.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 4</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Services section: your complete offering, not a summary
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The Services section is underused by almost every business. You can list individual services with names and descriptions. Each service description can be up to 300 characters. This section feeds directly into how Google understands what you offer. More services, described specifically, means more search queries your listing is eligible for.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Do not list "Insurance" as a single service. List "Health Insurance," "Life Insurance," "Auto Insurance," "Homeowners Insurance," "Medicare Supplement Insurance," "ACA Marketplace Plans," and any other specific product you sell. Each one maps to a different set of search queries. This is how you appear in "health insurance agent Little Rock" searches when your primary category is the broader "Insurance Agency."
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The same principle applies to any profession. A family law attorney should list "Divorce," "Child Custody," "Child Support," "Adoption," "Prenuptial Agreements" as separate services with brief descriptions. A financial planner should list "Retirement Planning," "College Savings," "Investment Management," "Tax Planning," and so on. The services section is your opportunity to tell Google exactly what you do, in the specific language clients use to search for it.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 5</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Attributes: the filters that match searchers to you
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Attributes are checkboxes that describe your business's features. The available attributes vary by category, but common ones include accessibility features (wheelchair accessible entrance, accessible parking), payment types, appointment requirements, and service-specific attributes.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  For healthcare providers, insurance agents who handle Medicare plans, and financial advisors, attributes that indicate accepted plan types or certifications are especially important. These attributes feed into filtered searches. When someone uses Google's search filters to find a provider who accepts their insurance or speaks a specific language, attributes determine whether you appear.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Check all available attributes for your category and fill in every one that applies accurately. Do not check attributes you do not offer. A false attribute complaint from a customer can trigger a listing review. Incomplete attributes, however, cost you filtered search visibility with no downside risk. Fill them in.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 6</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Photos: the silent conversion factor
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Listings with photos receive significantly more direction requests and website clicks than listings without them. This is not a correlation caused by better businesses having photos. It is a direct conversion effect: a photo makes your listing real to a prospect who is evaluating three options in the map pack.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The minimum photo set for any local business: a profile photo (logo or professional headshot), a cover photo (exterior of your office or a professional image that represents the business), and at least five additional photos. For service businesses and professional practices, interior office photos, photos of any equipment or meeting spaces, and a professional headshot of the owner or primary practitioner are all valuable.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  For independent professionals, the headshot matters more than most people think. Clients choosing between an insurance agent, a financial advisor, or an attorney are making a relationship decision. A professional photo makes that relationship feel less abstract before the first conversation happens. Many independent agents skip the headshot because they think it is optional. It is not.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Photo technical requirements: minimum 720px by 720px, JPG or PNG format. Upload new photos on a regular schedule, not just once. Google tracks photo engagement, and fresh uploads signal active management.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 7</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Website link: point it to the right place
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Most businesses link their GBP website field to their homepage. This is often the wrong choice. Your homepage is designed for multiple audiences and purposes. A location-specific landing page, built around your primary service and city, sends a much more precise signal to Google and converts better for the visitor arriving from the map pack.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  If you have a single-location business with a well-built homepage that includes your city, services, and NAP information prominently, linking to the homepage is fine. But if your homepage is generic or serves multiple locations, create a specific page for your primary market and link to that instead. The page Google follows from your GBP is one of the strongest on-page local signals you can build.
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 8</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Posts: the 7-day freshness signal
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Posting to your GBP every 7 days keeps your listing active in Google's freshness signals. This is one of the most cited and least followed pieces of GBP advice. Most businesses post sporadically for two months after setup and then stop entirely.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  GBP posts have a short display window, roughly 7 days, before they fall off the visible listing. That expiration is the point: Google designed posts to require regular input. Consistent weekly posting signals that the business is actively managed. Sporadic or absent posting signals the opposite, and that signal factors into map pack ranking, especially in competitive markets.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  What to post: service highlights, seasonal content relevant to your industry (Medicare open enrollment for insurance agents, tax season for financial planners), answers to common client questions, or updates about your business. What not to post: generic tips from the internet, irrelevant promotional content, or anything that does not relate to your service or location. Google's algorithm reads post content and uses it to understand your business. Make the posts useful and on-topic.
                </p>
              </div>
            </div>

            {/* Step 9 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 9</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Q&A: seed it yourself before someone else does
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The Q&A section of your GBP allows anyone to ask a question about your business, and anyone to answer it. Most businesses ignore this section entirely, which means they have no control over what appears there. Some have Q&As sitting unanswered for years with incorrect information.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The right strategy is to seed the Q&A yourself. Log into your GBP, switch to your personal Google account, and post the questions prospects actually ask about your business. Then switch back to your business account and answer them. Start with 5 to 10 questions. Good questions to seed:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="font-sans text-base text-ink-2 leading-relaxed list-disc">
                    "Do you offer free consultations?" (Answer: yes, with specifics about length and format)
                  </li>
                  <li className="font-sans text-base text-ink-2 leading-relaxed list-disc">
                    "What areas do you serve?" (Answer: be specific about cities and counties)
                  </li>
                  <li className="font-sans text-base text-ink-2 leading-relaxed list-disc">
                    "What is your turnaround time for [common service]?" (Answer with a specific timeframe)
                  </li>
                  <li className="font-sans text-base text-ink-2 leading-relaxed list-disc">
                    "Do you work with [specific client type]?" (Answer with who you serve best)
                  </li>
                </ul>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Q&A content appears in search results and affects AI tool recommendations. When someone asks ChatGPT or Perplexity about a local service provider, Q&A content from well-established GBP listings can be surfaced. Seeded Q&As give you control over that content.
                </p>
              </div>
            </div>

            {/* Step 10 */}
            <div className="mb-14">
              <p className="section-label mb-3">Step 10</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Review strategy: timing is the variable most businesses ignore
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Review velocity matters more than review count. A business with 35 reviews collected in the past six months will often outrank a business with 150 reviews collected over five years. Recency is an active ranking signal. This means the review strategy is not "get reviews," it is "get reviews consistently."
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The highest-converting moment to ask for a review is within 48 hours of a positive client interaction. After a successful policy placement, a closed real estate transaction, a resolved legal matter, or any interaction where the client expressed satisfaction. At that moment, the experience is fresh and the emotional state is positive. Waiting a week or sending a mass email to your client list six months later produces dramatically lower response rates.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Create a short, direct Google review link using the Google Review Link Generator (search for it in your GBP dashboard under "Get more reviews"). Include that link in your post-service follow-up message. The fewer steps between your request and the review submission, the higher the conversion rate. A client who has to find your listing on Google themselves will often abandon the process.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Respond to every review, positive and negative. Google weighs response rate and recency of responses as engagement signals. More importantly, a thoughtful response to a negative review is visible to every prospect evaluating you. How you handle a complaint tells them more than the complaint itself.
                </p>
              </div>
            </div>

            {/* Ongoing */}
            <div className="mb-14">
              <p className="section-label mb-3">Ongoing</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Monthly GBP maintenance: what to check and why
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Setup is not a one-time task. Google allows users to suggest edits to your listing. Other businesses can claim your listing. Your category might get auto-updated. Google rolls out new profile features regularly. A monthly check takes 15 minutes and prevents the kind of slow degradation that leads to dropped map pack rankings without a clear cause.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Monthly check list: verify your primary category is still correct; confirm NAP information matches your website and major directories exactly; check the Performance tab for search terms (if you are getting impressions from irrelevant searches, your category or services section needs adjustment); review any pending user edits in the listing and approve or reject them; upload at least one new photo; and check Q&A for any new questions that need answers.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  GBP optimization is not a campaign with an end date. It is infrastructure maintenance. The businesses that hold map pack positions consistently are the ones treating their GBP as a live asset, not a one-time setup task.
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
              Questions about GBP setup.
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
                  { label: "Local SEO Checklist", href: "/resources/local-seo-checklist" },
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
              <div className="space-y-3">
                <Link href="/services/google-business-profile" className="flex items-center gap-3 group">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">GBP Optimization Service</span>
                </Link>
              </div>
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
              Want this done for you?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              We handle the setup and ongoing management.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit covers your current GBP status, what is missing, which category you should be in, and whether your market is open. No obligation, 20 minutes.
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
