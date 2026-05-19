import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Financial Advisors | Visibility Local",
  description:
    "Local SEO for independent financial advisors and financial planners. Fully compliant with SEC and FINRA rules. One advisor per market.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/financial-advisors",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id":
        "https://visibilitylocal.com/industries/financial-advisors#service",
      name: "Local SEO for Financial Advisors",
      description:
        "Google Business Profile optimization, citation building, and local search strategy for independent financial advisors and planners, fully within SEC and FINRA compliance guidelines.",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        telephone: "(501) 554-2183",
        email: "info@visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Local SEO",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can financial advisors legally use Google Business Profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Google Business Profile is a business directory listing, not a form of investment advertising subject to testimonial rules. Financial advisors can and should have a fully optimized GBP listing. The categories, hours, photos, services list, and business description are all permissible. Posts can describe services, explain concepts, and promote educational content without triggering testimonial or performance claim rules.",
          },
        },
        {
          "@type": "Question",
          name: "Are there compliance issues with financial advisor SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The compliance considerations for SEO are narrower than many advisors assume. The primary restrictions are around testimonials and performance claims. GBP optimization, citation building, FAQ content, schema markup, and educational local content can all be done without touching either. We do not write testimonial-style content or make specific performance or return claims. Every tactic we use has been considered against the standard compliance concerns for RIAs and broker-dealers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best GBP category for a financial advisor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best primary GBP category is typically 'Financial Planner' or 'Financial Consultant,' depending on how your practice presents itself. Secondary categories like 'Investment Service,' 'Retirement Planning Service,' and 'Wealth Management Service' expand the search surfaces your listing appears on. The right combination depends on which services you lead with and which client types you're prioritizing. We audit your current categories and reconfigure them based on your target searches.",
          },
        },
        {
          "@type": "Question",
          name: "How do clients find financial advisors online before reaching out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients research extensively before initiating contact with a financial advisor. That research typically involves a local search, review reading on Google and Yelp, a visit to FINRA BrokerCheck, and a visit to the advisor's website. The research phase can span days or weeks. Local search is where the list of candidates is built, and the other touchpoints determine who gets the first meeting. Being present and credible across all of those surfaces, not just in search rankings, is what converts a search impression into an introduction meeting.",
          },
        },
      ],
    },
  ],
};

export default function FinancialAdvisorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / Financial Advisors</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for Independent Financial Advisors
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              Financial advisor relationships are high-stakes and long-term.
              Clients do not make this decision quickly, and they do not make it
              based on a single search result. They research. They check FINRA
              BrokerCheck. They read reviews. They look at your website. They
              ask their accountant. Local search is the entry point for all of
              that, and if you're not showing up clearly in local results, the
              research process never starts with you.
            </p>
            <p>
              The compliance concern is real but narrower than most advisors
              assume. GBP optimization, citation building, educational content,
              and FAQ pages are fully permissible within SEC and FINRA
              guidelines. We don't use testimonial language or make performance
              claims. We build the kind of local search presence that puts you
              in front of the right searches and builds enough credibility that
              your research process has somewhere to go.
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
            Three problems financial advisors face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                The trust problem compounds visibility problems
              </h3>
              <p className="font-sans text-ink-2 text-base">
                An advisor with 8 Google reviews and an incomplete GBP listing
                loses not just search rank but also the trust evaluation that
                follows the search. Clients who find you in search and then
                encounter a sparse, unverified online presence often move to the
                next result. Local search visibility and credibility signals must
                be built together, not separately.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Fee-only status is a search filter that most advisors don't use
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Fee-only financial advisor [city]" is a high-intent,
                self-qualifying search. The person running it has already
                decided they want a fee-only model and is filtering for it
                explicitly. An advisor who is fee-only and does not have that
                prominently stated in their GBP description and website content
                is invisible to a significant segment of motivated, qualified
                searchers.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                BrokerCheck and NAPFA profiles are untapped citation sources
              </h3>
              <p className="font-sans text-ink-2 text-base">
                FINRA BrokerCheck is an authoritative federal directory. A
                complete BrokerCheck profile with a current website link is a
                high-value citation that most advisors leave incomplete. NAPFA
                membership for fee-only advisors represents another authoritative
                directory profile. These are not just compliance requirements.
                They're citation sources that affect how Google evaluates your
                entity authority.
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
            What we do for financial advisors
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Financial advisor local search requires specific handling around
            compliance, trust signals, and the extended research process clients
            use before reaching out. Here's how each service applies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Category configuration for 'Financial Planner' or 'Financial Consultant' primary with all relevant secondary categories. Compliant description and services list. Review response management.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "On-page optimization targeting specific advisor searches: fee-only financial advisor, retirement planning, wealth management, CFP advisor, each by city and market.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity authority across FINRA BrokerCheck, NAPFA, and financial publications so AI tools cite you for local advisor recommendations.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Audit and cleanup across general and financial directories, with BrokerCheck and NAPFA treated as highest-priority authority citations.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Educational content targeting local financial planning searches, written within compliance parameters and designed to serve the research phase of the client decision process.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "Review generation strategy and response system for satisfied clients. Review volume and quality are critical at the trust evaluation stage that follows every local search.",
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
            What actually moves the needle for financial advisors
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                State fee-only status explicitly in GBP and content
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                "Fee-only financial advisor [city]" is searched by clients who
                have done enough research to know what they want and are now
                filtering for it. If you're fee-only and that phrase doesn't
                appear prominently in your GBP description, your services list,
                and your website, you're invisible to that search. This is one
                of the clearest cases where a single explicit content decision
                opens an entire search cluster to your listing.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Complete your BrokerCheck profile as a citation asset
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                FINRA BrokerCheck is a federal directory with high domain
                authority. A complete profile with your current website URL,
                accurate contact information, and current registration status is
                a top-tier citation that directly supports your entity authority
                in Google's local search systems. Many advisors treat BrokerCheck
                as a compliance requirement to be minimally satisfied, not as an
                SEO asset to be maximized. The profile takes 20 minutes to
                complete properly and has lasting citation value.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Make CFP certification prominent in GBP and schema
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                "CFP financial advisor [city]" is a search with explicit
                credential intent. Clients running this search have already
                decided they want a Certified Financial Planner and are
                filtering for it. Your CFP designation should appear in your GBP
                services list, your business description, your website headline,
                and in your JSON-LD schema markup. The CFP Board also maintains
                a public directory that functions as an authoritative citation
                source for advisors who have claimed their profile.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Build AI entity recognition across multiple authoritative sources
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                "Fee-only financial advisor in [city]" is a real AI query type.
                ChatGPT and Perplexity pull from sources they recognize as
                authoritative, not from advertisers. Appearing in those answers
                requires entity recognition across FINRA BrokerCheck, NAPFA (for
                fee-only advisors), local business publications, and professional
                organization directories. An advisor who is mentioned in a local
                business journal feature, listed on NAPFA, has a complete
                BrokerCheck profile, and maintains an active GBP is building the
                kind of multi-source authority that AI tools cite.
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
            Common questions from financial advisors
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Can financial advisors legally use Google Business Profile?",
                a: "Yes. GBP is a business directory listing, not investment advertising subject to testimonial rules. A fully optimized GBP with categories, hours, photos, services, and description is permissible. Posts can describe services and explain concepts without triggering performance claim restrictions.",
              },
              {
                q: "Are there compliance issues with financial advisor SEO?",
                a: "The compliance considerations are narrower than most advisors assume. The primary restrictions are around testimonials and performance claims. GBP optimization, citation building, FAQ content, schema markup, and educational local content are all fully permissible. We do not write testimonial-style content or make specific return claims. Every tactic has been considered against standard RIA and broker-dealer compliance concerns.",
              },
              {
                q: "What is the best GBP category for a financial advisor?",
                a: "The best primary category is typically 'Financial Planner' or 'Financial Consultant' depending on how your practice presents. Secondary categories like 'Investment Service,' 'Retirement Planning Service,' and 'Wealth Management Service' expand the search surfaces your listing appears on. We audit your current categories and reconfigure based on your target searches and client types.",
              },
              {
                q: "How do clients find financial advisors online before reaching out?",
                a: "Most clients research extensively before contacting an advisor. That process involves a local search, review reading on Google, a FINRA BrokerCheck visit, and a website review. The process spans days or weeks. Local search is where the list of candidates is built. The subsequent touchpoints determine who gets the meeting. Being present and credible across all of those surfaces, not just in search rankings, is what converts a search impression into an introduction call.",
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
                href: "/industries/insurance-agents",
                title: "Insurance Agents",
                desc: "Independent agents whose clients often overlap with financial planning clients in the personal finance ecosystem.",
              },
              {
                href: "/industries/mortgage-brokers",
                title: "Mortgage Brokers",
                desc: "Brokers who refer wealth management clients and receive referrals from advisors whose clients are buying property.",
              },
              {
                href: "/industries/cpa-firms",
                title: "CPA Firms",
                desc: "Accountants whose high-net-worth and small business clients frequently need parallel financial planning relationships.",
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
            One financial advisor per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one financial advisor per geographic market. If your
            area is open, we can start with a GBP audit and a compliance-reviewed
            search analysis this week. Call (501) 554-2183 or send a message.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
