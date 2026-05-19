import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Citation Building for Local SEO: Tier-by-Tier Guide | Visibility Local",
  description:
    "How to build and clean up local business citations for better map pack rankings. Tier-by-tier guide to the directories that actually matter.",
  alternates: { canonical: "https://visibilitylocal.com/resources/citation-building" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Citation Building for Local SEO: Tier-by-Tier Guide",
      author: { "@type": "Person", name: "David Turner" },
      publisher: {
        "@type": "Organization",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      url: "https://visibilitylocal.com/resources/citation-building",
      description:
        "How to build and clean up local business citations for better map pack rankings. Tier-by-tier guide to the directories that actually matter.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I find all the places my business is listed online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use a citation audit tool like Whitespark's Citation Finder or BrightLocal's Citation Tracker. Input your business name, address, and phone number and the tool will pull existing listings across hundreds of directories. You can also search Google for your exact business name in quotes and your phone number in quotes to surface listings manually. Most established businesses find 30 to 80 existing listings, many with incorrect information.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I have duplicate listings in a directory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duplicate listings split authority and create conflicting data signals. Google sees two versions of your business at the same or different addresses and is less confident about which one is accurate. In Yelp and Google specifically, duplicate listings can also suppress each other's ranking. The fix is to claim both listings (if you can), merge or remove the duplicate, and verify the correct listing. Some directories have a formal duplicate suppression request process.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pay for citation services like Yext or Moz Local?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For the most important directories, no. Claim and manage GBP, Apple Maps, Bing Places, Yelp, Facebook, and BBB yourself. These listings require your direct ownership for ongoing management. For broad secondary citation distribution, Yext and Moz Local can accelerate the build-out, but be aware that if you cancel the subscription, the data they manage often reverts. The listings you own and manage directly are more stable long-term.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take for citation cleanup to affect rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Citation data propagates through the web at different speeds depending on the directory. Changes to major directories like Yelp and Bing Places can be picked up within weeks. Changes to aggregator sources like Foursquare and Neustar can take 60 to 90 days to propagate downstream to the hundreds of smaller directories that pull from them. Map pack ranking improvement from citation cleanup typically appears within 6 to 12 weeks of completing the major directory corrections.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How do I find all the places my business is listed online?",
    a: "Use a citation audit tool like Whitespark's Citation Finder or BrightLocal's Citation Tracker. Input your business name, address, and phone number and the tool will pull existing listings across hundreds of directories. You can also search Google for your exact business name in quotes and your phone number in quotes to surface listings manually. Most established businesses find 30 to 80 existing listings, many with incorrect information.",
  },
  {
    q: "What happens if I have duplicate listings in a directory?",
    a: "Duplicate listings split authority and create conflicting data signals. Google sees two versions of your business at the same or different addresses and is less confident about which one is accurate. In Yelp and Google specifically, duplicate listings can also suppress each other's ranking. The fix is to claim both listings (if you can), merge or remove the duplicate, and verify the correct listing. Some directories have a formal duplicate suppression request process.",
  },
  {
    q: "Should I pay for citation services like Yext or Moz Local?",
    a: "For the most important directories, no. Claim and manage GBP, Apple Maps, Bing Places, Yelp, Facebook, and BBB yourself. These listings require your direct ownership for ongoing management. For broad secondary citation distribution, Yext and Moz Local can accelerate the build-out, but be aware that if you cancel the subscription, the data they manage often reverts. The listings you own and manage directly are more stable long-term.",
  },
  {
    q: "How long does it take for citation cleanup to affect rankings?",
    a: "Citation data propagates through the web at different speeds depending on the directory. Changes to major directories like Yelp and Bing Places can be picked up within weeks. Changes to aggregator sources like Foursquare and Neustar can take 60 to 90 days to propagate downstream to the hundreds of smaller directories that pull from them. Map pack ranking improvement from citation cleanup typically appears within 6 to 12 weeks of completing the major directory corrections.",
  },
];

const tier1 = [
  { name: "Google Business Profile", note: "The most important citation source. Verified listing required." },
  { name: "Apple Maps", note: "Powers Siri and Apple device mapping. Claimed via Apple Business Connect." },
  { name: "Bing Places", note: "Powers ChatGPT local recommendations. Claimed at bingplaces.com." },
  { name: "Yelp", note: "High authority source indexed heavily by Google. Claim even if you do not seek Yelp reviews." },
  { name: "Facebook Business", note: "NAP data feeds Apple Maps and other aggregators. Must match GBP exactly." },
  { name: "BBB (Better Business Bureau)", note: "Government and AI tools treat BBB as high-authority. Free listing available without membership." },
];

const tier2 = [
  { name: "Yellow Pages (YP.com)", note: "Major aggregator. Data propagates to smaller directories." },
  { name: "Manta", note: "Business directory with reasonable authority. Free listing available." },
  { name: "Foursquare", note: "Powers a significant number of downstream aggregators. Listing here spreads to many others." },
  { name: "Hotfrog", note: "Indexed by Google. Clean listing adds citation consistency." },
  { name: "Citysearch", note: "Declining authority but still indexed and worth claiming if you are in the database." },
  { name: "Chamber of Commerce", note: "Local geographic authority. Find your city's Chamber and claim the listing." },
  { name: "Local business association directories", note: "Industry associations and local trade organizations. Geographic and category relevance combined." },
  { name: "Alignable", note: "Business network focused on local referrals. NAP citation value alongside community visibility." },
];

const tier3Industries = [
  {
    industry: "Insurance Agents",
    dirs: [
      "IIABA (Independent Insurance Agents & Brokers of America) directory",
      "Your state's Department of Insurance licensee lookup",
      "Insurance.com agent finder",
      "NAIFA (National Association of Insurance and Financial Advisors)",
    ],
  },
  {
    industry: "Attorneys",
    dirs: [
      "Avvo (high authority, heavily indexed by Google and AI tools)",
      "Martindale-Hubbell",
      "FindLaw lawyer directory",
      "Justia attorney directory",
      "Your state bar's public attorney directory",
    ],
  },
  {
    industry: "Medical Providers",
    dirs: [
      "Healthgrades (high authority medical directory)",
      "Zocdoc",
      "WebMD doctor finder",
      "Vitals",
      "Your state medical board's licensee lookup",
    ],
  },
  {
    industry: "Financial Advisors",
    dirs: [
      "FINRA BrokerCheck (government-backed authority source)",
      "NAPFA directory (fee-only advisors)",
      "CFP Board's advisor directory (if CFP certified)",
      "Local CPA society directory (if applicable)",
    ],
  },
  {
    industry: "Real Estate",
    dirs: [
      "Zillow agent profile",
      "Realtor.com agent profile",
      "Trulia",
      "Your MLS's public member directory",
    ],
  },
];

export default function CitationBuildingPage() {
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
              Citation building:{" "}
              <span className="italic text-gold">tier by tier</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              A citation is any mention of your business name, address, and phone number online. Google uses citations to verify that your business is real, operating, and located where you say it is. Inconsistent citations create doubt. Consistent citations across authoritative sources build the trust signals that drive map pack rankings.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed max-w-xl">
              This guide covers what citations are, why consistency matters more than count, and exactly which directories to prioritize in what order. It also covers industry-specific directories that most general SEO guides miss entirely.
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
                Why citation consistency matters more than citation count
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The most common citation mistake is prioritizing quantity over accuracy. Businesses use automated citation-building services that distribute their information to 200 directories in 48 hours. The problem is that many of those distributions contain the wrong phone number, an outdated address, or an abbreviated business name that does not match their GBP. The result is 200 citations that send mixed signals instead of 50 consistent ones that confirm the same accurate entity data.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Google cross-references citations to verify your business's legitimacy and location. When 40 directories say you are at 1234 Main Street and 20 say you are at 1234 Main St., that is a data quality problem. Google's local ranking algorithm applies a confidence score to your entity based on how consistently your NAP data appears across sources. Inconsistent data lowers that confidence score and suppresses your map pack visibility.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The same inconsistency problem affects AI tool recommendations. When ChatGPT or Perplexity builds a response about local businesses, it pulls from multiple data sources and expects them to confirm each other. An entity with conflicting data across directories is treated with less confidence than one with perfectly consistent data across fewer sources.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                The audit step: do this before building anything new
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Before you build a single new citation, audit what already exists. Most businesses that have been operating for more than two years have existing directory listings from data aggregators, previous owners, or the business owner creating accounts years ago and forgetting about them. Those old listings likely have incorrect or inconsistent data.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Use Whitespark's Citation Finder or BrightLocal's Citation Audit to find existing listings. Export the list. Sort by authority. Start with the highest-authority directories that have incorrect data and fix those first. Then claim any Tier 1 directories where you are not yet listed. Then work down the list.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Cleaning up 30 existing listings with wrong data will move your rankings more than building 100 new listings while the wrong data persists. This sequencing is the part most businesses and agencies get backwards.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                NAP format: pick one and never deviate
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Before you touch a single directory listing, decide on your canonical NAP format and write it down. This means: exact legal business name (not abbreviated, not keyword-stuffed), exact street address including suite number formatting, exact phone number with consistent formatting (either (501) 555-0100 or 501-555-0100, never both), and the exact city, state, zip format you will use everywhere.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Common format inconsistencies that create citation problems: "Suite 200" vs "Ste 200" vs "#200," "Street" vs "St.," "and" vs "&" in business names, "(501) 555-0100" vs "5015550100," local area codes formatted differently. These look like minor differences. To a machine parsing NAP data across hundreds of sources, they are different values that do not match.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TIER 1 */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="section-label mb-4">Tier 1</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-3">
              Required for every local business
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed mb-10 max-w-2xl">
              These six are the minimum citation set. If any one of them is missing, wrong, or unverified, fix it before moving to Tier 2. Every business regardless of industry needs all six.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tier1.map((dir) => (
                <div key={dir.name} className="bg-paper-2 border border-paper-3 rounded-sm p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg text-ink mb-1">{dir.name}</h3>
                      <p className="font-sans text-sm text-ink-3 leading-relaxed">{dir.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIER 2 */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="section-label mb-4">Tier 2</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-3">
              Important for most businesses
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed mb-10 max-w-2xl">
              These directories carry meaningful authority and feed other directories through data aggregator networks. Foursquare in particular syndicates to a large number of smaller directories. A correct Foursquare listing can fix dozens of downstream entries automatically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tier2.map((dir) => (
                <div key={dir.name} className="bg-paper border border-paper-3 rounded-sm p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg text-ink mb-1">{dir.name}</h3>
                      <p className="font-sans text-sm text-ink-3 leading-relaxed">{dir.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIER 3 */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="section-label mb-4">Tier 3</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-3">
              Industry-specific directories
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed mb-10 max-w-2xl">
              These carry extra authority within your profession because they are trusted sources for that specific type of service. AI tools, in particular, weight industry-specific credentialing directories very highly. A listing in Avvo carries more entity authority for an attorney than 20 generic business directories.
            </p>
            <div className="space-y-10">
              {tier3Industries.map((industry) => (
                <div key={industry.industry}>
                  <h3 className="font-serif text-2xl text-ink mb-4">{industry.industry}</h3>
                  <div className="space-y-2">
                    {industry.dirs.map((dir) => (
                      <div key={dir} className="flex items-start gap-3 py-2 border-b border-paper-3 last:border-0">
                        <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <p className="font-sans text-sm text-ink-2 leading-relaxed">{dir}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW MANY */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
              How many citations do you actually need?
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                Fifty accurate, verified citations in the right directories will outperform 200 inconsistent ones in every market. The diminishing returns on citation volume kick in faster than most people assume. After your Tier 1 and Tier 2 directories are complete and accurate, the highest-value next step is almost always industry-specific directories and local geographic sources, not more generic business directories.
              </p>
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                The citation gap in most local markets is not volume. It is accuracy and authority. Your competitor may have 150 directory listings, but if 80 of them have the wrong phone number or an outdated address, their citation profile is actively hurting their rankings. The business with 60 perfectly consistent, high-authority citations will beat them on citation signals every time.
              </p>
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                Monitor your citations every three to six months. Address changes, phone number updates, and business name changes all require citation updates across every directory. Set a calendar reminder. When your information changes, the citation update process starts immediately. Do not let incorrect data sit in directories for months.
              </p>
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
              Questions about citation building.
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
                  { label: "Local SEO Checklist", href: "/resources/local-seo-checklist" },
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
              <Link href="/services/citations" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">Citation & NAP Service</span>
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
              Want us to audit and build your citations?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              We handle the audit, cleanup, and build-out.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit identifies your current citation inconsistencies and the directories where you are missing. One client per market.
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
