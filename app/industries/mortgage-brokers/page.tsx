import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Mortgage Brokers | Visibility Local",
  description:
    "Local SEO and GBP optimization for independent mortgage brokers competing against big banks in local search. One broker per market.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/mortgage-brokers",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id":
        "https://visibilitylocal.com/industries/mortgage-brokers#service",
      name: "Local SEO for Mortgage Brokers",
      description:
        "Google Business Profile optimization, citation building, and local search strategy for independent mortgage brokers competing against banks and national lenders.",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        telephone: "(501) 554-2183",
        email: "info@visibilitylocal.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Little Rock",
          addressRegion: "AR",
          addressCountry: "US",
        },
      },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Local SEO",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can a mortgage broker compete with big banks in local search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proximity and personalization are where independent brokers win. Chase and Wells Fargo have enormous national GBP footprints but their individual branch listings are often generic and impersonal. An independent broker with a fully optimized GBP listing, accurate NMLS number displayed, strong review count, and consistent citations can rank above a bank branch for local mortgage searches. Banks also can't respond to 'broker near me' queries with the same relevance that an actual broker can. The key is that the search intent often already favors you.",
          },
        },
        {
          "@type": "Question",
          name: "What GBP category should a mortgage broker use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct primary category is 'Mortgage Broker.' Not 'Bank,' not 'Financial Institution,' and not 'Loan Agency.' This distinction is critical because 'Mortgage Broker' surfaces in different search results than bank-related categories and specifically captures the searchers who want a broker rather than a bank. Secondary categories like 'Mortgage Lender' can expand coverage, but 'Mortgage Broker' as primary is non-negotiable for an independent broker.",
          },
        },
        {
          "@type": "Question",
          name: "How do realtors find mortgage brokers online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Realtors search locally when looking for brokers to refer their clients to, and they pay attention to GBP reviews, response time signals, and professional directory presence. Being visible in searches like 'mortgage broker [city]' and 'local mortgage broker' captures both consumer and realtor traffic. Building a specific page or GBP service entry that mentions realtor partnerships, combined with active engagement on platforms realtors use, creates referral visibility as a parallel channel to direct client acquisition.",
          },
        },
        {
          "@type": "Question",
          name: "Should I target purchase loans and refinances differently in local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. 'Mortgage broker near me' captures general intent but 'first-time home buyer [city]' and 'refinance rates [city]' represent completely different stages of the decision process. First-time buyer searches convert slower but at a higher lifetime value. Refinance searches are often rate-driven and convert faster. Each keyword cluster needs its own content, its own page, and its own conversion path. Treating them identically loses efficiency in both directions.",
          },
        },
      ],
    },
  ],
};

export default function MortgageBrokersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / Mortgage Brokers</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for Independent Mortgage Brokers
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              Chase has a $3 billion marketing budget. You have a laptop and a
              referral network. In national advertising, that gap is
              insurmountable. In local search, it is almost irrelevant. A bank
              branch GBP listing is maintained by a regional marketing team that
              manages hundreds of locations at once. Your GBP is one listing.
              When it's managed correctly, you don't just compete with the bank
              branch down the street. You beat it.
            </p>
            <p>
              Independent mortgage brokers win on proximity, speed, and
              personalization. Clients already know this. The problem is they
              can't find you to confirm it. Local search is where that discovery
              happens, and right now most independent brokers are invisible in
              the searches they should dominate.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Challenge section */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">The Challenge</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">
            Three problems independent mortgage brokers face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                The wrong GBP category kills local visibility
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Mortgage Broker" and "Bank" appear in completely different
                search surfaces. Many brokers have a GBP listing that was set up
                years ago with a generic financial services category or no
                category at all. That single error makes you invisible for the
                searches where you have the clearest intent match. The fix is
                quick, but it doesn't happen if no one is watching the listing.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                NMLS visibility is a missed trust signal
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Your NMLS license number is a trust signal clients and realtors
                use to verify you before making contact. It should be visible on
                your GBP listing, your website, and consistent across every
                directory where your business appears. Most brokers have it on
                their website in the footer and nowhere else. That's a missed
                opportunity for both trust and citation consistency.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Purchase and refinance searches need separate strategies
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "First-time home buyer [city]" and "refinance rates [city]" are
                different searches with different intent, different timelines,
                and different conversion paths. A single homepage trying to
                serve both audiences serves neither well. Most broker websites
                have one page that mentions mortgages generally, and then wonder
                why they don't rank for either specific search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Services</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-4">
            What we do for mortgage brokers
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Local search for a mortgage broker has specific requirements around
            trust signals, license data, and search intent segmentation. Here's
            how each service function applies to your business.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Category correction to 'Mortgage Broker,' NMLS number integration, photo optimization, service area configuration, and a managed posting cadence targeting purchase and refinance search terms.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "On-page optimization targeting distinct search intents: first-time buyer, refinance, jumbo loans, VA loans, FHA loans. Each deserves its own optimized content.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity establishment across NMLS, Zillow, local publications, and financial directories so AI tools include you in local broker recommendations.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Audit and cleanup across general and financial-specific directories, with NMLS data treated as citation anchor data alongside your business name and contact info.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Content targeting local mortgage searches: purchase loans in [city], first-time buyer programs in [state], refinance options for [neighborhood] homeowners.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "Review generation system designed around the mortgage closing moment. That's when clients are most satisfied and most likely to leave a review if asked correctly.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-paper-2 border border-paper-3 p-6 hover:border-gold transition-colors group"
              >
                <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans text-ink-3 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Tactics section */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Industry-Specific Tactics</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">
            What actually moves the needle for mortgage brokers
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                "Mortgage Broker" as primary GBP category, with no exceptions
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                This is the single most important technical step for an
                independent broker. The category determines which search queries
                your listing is eligible to rank for. Using a bank or financial
                institution category puts you in a completely different search
                surface where consumers are looking for a different kind of
                service. Secondary categories like "Mortgage Lender" can expand
                your footprint, but the primary must be correct before anything
                else matters.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Treat NMLS as a citation data point, not just a compliance requirement
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                The NMLS Consumer Access database is a federal directory with
                high domain authority. Your NMLS profile should include a link
                to your current website, your correct business name, and an
                up-to-date address. Beyond NMLS, your license number should
                appear consistently on your GBP description, your website, and
                Zillow and Realtor.com profiles. Realtors specifically look for
                this before referring clients.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Build realtor search visibility as a parallel channel
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Realtors search locally when they need a trusted broker to refer
                their clients to. That search looks like "mortgage broker [city]"
                or "local mortgage broker who closes on time." A GBP services
                section that specifically addresses realtor relationships, a
                website page with language about your closing timeline and
                communication process, and active engagement on platforms
                realtors use puts you in front of that referral search alongside
                your consumer visibility.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Separate content for purchase and refinance intent
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                A first-time buyer comparing lenders is at a completely different
                decision stage than a current homeowner evaluating whether to
                refinance. The keywords are different. The questions are
                different. The timeline is different. A homepage that addresses
                both is optimized for neither. Creating distinct, thorough pages
                for each loan type and buyer situation is how you capture the
                high-intent local searches that your current site is likely
                missing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">FAQ</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">
            Common questions from mortgage brokers
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How can a mortgage broker compete with big banks in local search?",
                a: "Proximity and personalization are where independent brokers win. Bank branch GBP listings are managed regionally across hundreds of locations and are often generic. Your single, actively managed listing can outrank a bank branch when it has the correct category, a strong review count, consistent citations, and regular posting activity. The search intent also often already favors you. Someone searching 'mortgage broker near me' is specifically looking for a broker, not a bank.",
              },
              {
                q: "What GBP category should a mortgage broker use?",
                a: "The correct primary category is 'Mortgage Broker.' Not 'Bank,' not 'Financial Institution,' and not 'Loan Agency.' This matters because 'Mortgage Broker' as a category surfaces in different search results and specifically captures searchers looking for a broker rather than a bank product. Secondary categories like 'Mortgage Lender' can expand coverage appropriately.",
              },
              {
                q: "How do realtors find mortgage brokers online?",
                a: "Realtors search locally when looking for brokers to refer clients to, and they evaluate based on GBP reviews, closing timeline signals, and professional directory presence. Visibility in searches like 'mortgage broker [city]' captures both consumer and realtor traffic. A GBP listing and website that specifically address realtor partnerships, pre-approval speed, and communication practices position you in those professional searches.",
              },
              {
                q: "Should I target purchase loans and refinances differently in local SEO?",
                a: "Yes. 'First-time home buyer [city]' and 'refinance rates [city]' represent different stages of the decision process, different keyword sets, and different conversion paths. Each needs its own dedicated page with content addressing the specific questions, timelines, and concerns for that buyer situation. A single homepage attempting to serve both loses efficiency in both directions.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-paper-3 pb-8">
                <h3 className="font-serif text-xl text-ink mb-4">{faq.q}</h3>
                <p className="font-sans text-ink-2 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Related Industries</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-10">
            Other professionals in the financial and property ecosystem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/industries/insurance-agents",
                title: "Insurance Agents",
                desc: "Independent agents competing against captive agents and national carriers in local search.",
              },
              {
                href: "/industries/cpa-firms",
                title: "CPA Firms",
                desc: "Year-round local visibility for accountants who serve home buyers and real estate investors.",
              },
              {
                href: "/industries/financial-advisors",
                title: "Financial Advisors",
                desc: "Compliant local SEO for advisors whose clients often overlap with mortgage clients.",
              },
              {
                href: "/industries/real-estate",
                title: "Real Estate Agents",
                desc: "Agents who are also your best referral source, visible in the same local searches.",
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-paper border border-paper-3 p-6 hover:border-gold transition-colors group"
              >
                <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {r.title}
                </h3>
                <p className="font-sans text-ink-3 text-sm">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-gold">Get Started</p>
          <h2 className="font-serif text-4xl text-paper mt-4 mb-6">
            One mortgage broker per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one mortgage broker per geographic market. If your area
            is open, we can start with a GBP audit and citation analysis this
            week. Call (501) 554-2183 or send a message below.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
