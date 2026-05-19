import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Insurance Agents | Visibility Local",
  description:
    "Local SEO and GBP optimization for independent insurance agents. One agent per market. Compete against captive agents and national carriers in local search.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/insurance-agents",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://visibilitylocal.com/industries/insurance-agents#service",
      name: "Local SEO for Insurance Agents",
      description:
        "Google Business Profile optimization, citation building, and local search strategy for independent insurance agents competing against captive agents and national carriers.",
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
          name: "Can an independent insurance agent compete with State Farm in local search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and in many cases more easily than agents expect. State Farm and Allstate locations rely on corporate GBP templates that are often generic. An independent agent with a fully optimized, actively managed profile, correct primary category, and consistent citations can rank above captive agents in the local map pack. The key is that many searchers are specifically looking for independent agents, which means you're not just competing on rank but also on fit. Searchers who type 'independent insurance agent' are already filtering for you.",
          },
        },
        {
          "@type": "Question",
          name: "What GBP category should an independent insurance agent use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct primary category for most independent agents is 'Insurance Agency.' Not 'Insurance Broker' and not 'Life Insurance Agency.' Those categories surface in different search results and often have lower search volume for local queries. Google frequently assigns the wrong default category when a listing is first created, so correcting it is one of the first steps we take. Secondary categories like 'Auto Insurance Agency,' 'Home Insurance Agency,' and 'Health Insurance Agency' expand your search footprint without diluting the primary signal.",
          },
        },
        {
          "@type": "Question",
          name: "Which directories matter most for insurance agent citations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The highest-authority citation sources for insurance agents are: your state's Department of Insurance licensee lookup (this is a government domain and carries significant trust), the IIABA (Independent Insurance Agents and Brokers of America) directory, Insurance.com, your local Chamber of Commerce, and the major general directories like Google, Yelp, and Facebook. The state DOI listing is often overlooked and is one of the strongest citations available because it's official, authoritative, and almost always matches exactly how your business is registered.",
          },
        },
        {
          "@type": "Question",
          name: "How does local SEO generate insurance referrals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local search generates referrals two ways. First, direct client acquisition: someone in your market searches 'independent insurance agent [city]' and finds your optimized GBP listing or local page. Second, professional referrals: CPAs, financial advisors, and mortgage brokers in your area search for local professionals to refer their clients to. Being visible in those professional searches positions you as the obvious referral partner. Both channels require the same foundation: consistent NAP, correct categories, active GBP management, and authoritative citations.",
          },
        },
      ],
    },
  ],
};

export default function InsuranceAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / Insurance Agents</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for Independent Insurance Agents
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              State Farm agents have a corporate marketing team. Allstate agents
              have co-op advertising budgets. You have a Google Business Profile
              that was probably set up once and never touched, a primary category
              that may be wrong, and citations scattered across directories with
              three different versions of your business name. That gap is where
              captive agents win, and it does not have to be that way.
            </p>
            <p>
              Independent agents have a real competitive advantage in local
              search: clients who distrust captive agents on pricing are already
              searching for you by type. "Independent insurance agent in [city]"
              is a high-intent, self-qualifying search. The person doing it has
              already decided they want what you offer. Visibility Local puts
              you in front of that search, and builds the citation authority and
              entity recognition that keeps you there.
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
            Three problems independent agents face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Wrong GBP category from day one
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Google defaults to a generic or incorrect category when your
                listing is created. "Insurance Agency" and "Life Insurance
                Agency" appear in different search surfaces with different
                traffic volumes. Most agents have never checked which category
                they're in, let alone whether it's the right one. A wrong
                primary category suppresses your visibility for the searches
                that actually convert.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Citation inconsistency across directories
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Your business name, address, and phone number across Yelp,
                Facebook, Insurance.com, and thirty other directories probably
                don't all match. Inconsistent NAP data is one of the clearest
                signals to Google that a business is untrustworthy, and it
                suppresses local rankings. The state Department of Insurance
                licensee lookup, which should be your most authoritative
                citation, often has a version of your name or address that
                doesn't match anything else.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                No AI search presence
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Best independent insurance agent in [city]" is a real query
                type in ChatGPT, Perplexity, and Google's AI Overviews. These
                tools pull from authoritative sources, not from who pays the
                most. An agent with recognized entity status across the state
                DOI directory, IIABA, and multiple local publications gets
                cited. An agent whose online presence is a single GBP listing
                with missing hours does not.
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
            What we do for insurance agents
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Every service we offer has a specific function in your local search
            presence. None of it is filler. Here's what each one does for an
            insurance agency.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Category correction, complete attribute configuration, photo optimization, Q&A seeding, and a managed posting cadence. Your GBP is your most important local ranking asset.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "On-page optimization for your website targeting the specific searches your clients use: independent insurance, health insurance, auto insurance, by city and neighborhood.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity establishment across authoritative sources so AI tools cite you when local clients ask for insurance agent recommendations.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Audit and cleanup of your business data across 40+ directories, with priority given to the state DOI listing, IIABA, and the major data aggregators.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Written content that targets specific local search queries: auto insurance in [city], health insurance broker near [neighborhood], independent insurance vs captive agent.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "A system for requesting reviews from satisfied clients, responding to existing reviews, and monitoring your rating across Google, Yelp, and insurance-specific directories.",
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
            What actually moves the needle for insurance agents
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Fix the GBP primary category first
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                For most independent agents, "Insurance Agency" is the correct
                primary category. Not "Insurance Broker" (different search
                surface, smaller volume for most markets), not "Life Insurance
                Agency" (too narrow for a multi-line independent). The primary
                category determines which search queries your listing is
                eligible to appear for. Getting it wrong means you're invisible
                to the searches you should be winning. Google creates listings
                with the wrong default constantly, and most agents never check.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Use the state DOI listing as your anchor citation
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Every state's Department of Insurance maintains a public
                licensee lookup database. That page is a government domain, it
                links to your website, and it contains your official business
                name and address. It is one of the highest-authority citations
                available in the insurance vertical, and most agents have never
                checked whether it accurately reflects their current business
                name or website. We audit that listing first and use it as the
                canonical reference for every other citation we build or clean.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Write content that targets the "independent vs captive" question
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Many clients search "independent vs captive insurance agent"
                before they search for a specific agent. That search is
                educational intent that converts to commercial intent within the
                same session. A well-written page that explains the difference,
                answers it thoroughly, and ends with a local call to action
                captures both. It also builds topical authority that supports
                ranking for the more competitive local insurance terms.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Build referral visibility alongside client visibility
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Your best referral partners, CPAs, financial advisors, and
                mortgage brokers, search locally for professionals to send their
                clients to. Being visible in those professional searches requires
                the same citation consistency and GBP quality that client
                searches require, but the content angle is different. A GBP
                services section that mentions "referral partnerships" and a
                website page that speaks directly to professional referrers
                positions you in those searches alongside your general consumer
                visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case reference */}
      <section className="bg-ink py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-gold">Client Result</p>
          <h2 className="font-serif text-3xl text-paper mt-4 mb-6">
            Hillcrest Life and Health, Little Rock, AR
          </h2>
          <p className="font-sans text-paper/80 text-lg leading-relaxed max-w-3xl">
            Hillcrest Life and Health is an independent health insurance agency
            competing in a market dominated by national carriers and ACA
            marketplace comparison sites. The work: GBP category correction from
            an incorrect default, citation cleanup across 40+ directories
            anchored to the state DOI listing, and a monthly posting cadence.
            The result: top local map pack positions for health insurance
            keywords in Little Rock, consistent new client inquiries from search,
            and visibility in AI tools for "independent health insurance agent
            Little Rock" queries.
          </p>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">FAQ</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">
            Common questions from insurance agents
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Can an independent insurance agent compete with State Farm in local search?",
                a: "Yes, and more often than agents expect. State Farm and Allstate locations use corporate GBP templates that are often generic and under-managed. An independent agent with a fully optimized, actively managed profile, correct primary category, and consistent citations can rank above captive agents in the local map pack. Many searchers are specifically looking for independent agents, which means ranking above a captive agent also converts better because the search intent matches what you offer.",
              },
              {
                q: "What GBP category should an independent insurance agent use?",
                a: "The correct primary category for most independent agents is 'Insurance Agency.' Not 'Insurance Broker' and not 'Life Insurance Agency.' Those categories surface in different search results with different traffic volumes. Google frequently assigns the wrong default when a listing is first created. Secondary categories like 'Auto Insurance Agency,' 'Home Insurance Agency,' and 'Health Insurance Agency' expand your search footprint appropriately.",
              },
              {
                q: "Which directories matter most for insurance agent citations?",
                a: "The highest-authority sources are: your state's Department of Insurance licensee lookup (government domain, enormous trust signal), the IIABA directory, Insurance.com, your local Chamber of Commerce, and the major general directories. The state DOI listing is the most commonly missed and most valuable. We audit and correct it first because it's the reference point for every other citation we build.",
              },
              {
                q: "How does local SEO generate insurance referrals?",
                a: "Two channels. First, direct client acquisition: someone searches 'independent insurance agent [city]' and finds you. Second, professional referrals: CPAs, financial advisors, and mortgage brokers search locally for insurance professionals to refer clients to. Both require the same foundation, consistent NAP, correct GBP category, active management, and authoritative citations, but the content strategy for each channel is different. We build visibility in both.",
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
            Other financial professionals we work with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/industries/mortgage-brokers",
                title: "Mortgage Brokers",
                desc: "Local search strategy for independent mortgage brokers competing against large banks in purchase and refinance searches.",
              },
              {
                href: "/industries/cpa-firms",
                title: "CPA Firms",
                desc: "Year-round local visibility for accountants and tax professionals, not just during filing season.",
              },
              {
                href: "/industries/financial-advisors",
                title: "Financial Advisors",
                desc: "Compliant local SEO for fee-only and commission-based advisors competing for high-trust client relationships.",
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
            One insurance agent per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one insurance agent per geographic market. If your area
            is open, we can begin with a GBP audit and a citation analysis
            within this week. Call (501) 554-2183 or send a message.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
