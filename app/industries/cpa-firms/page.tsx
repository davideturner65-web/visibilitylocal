import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for CPA Firms | Visibility Local",
  description:
    "Local SEO for CPA firms and independent accountants. Year-round visibility beyond tax season. Compete against national chains on your own terms.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/cpa-firms",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://visibilitylocal.com/industries/cpa-firms#service",
      name: "Local SEO for CPA Firms",
      description:
        "Google Business Profile optimization, citation building, and year-round local search strategy for CPA firms and independent accountants.",
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
          name: "Should a CPA firm have a Google Business Profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it should be actively managed year-round, not just during tax season. Google Business Profile is often the first thing a prospective client sees when they search for a local accountant. A complete, active profile with accurate categories, strong reviews, and regular posts builds the kind of visibility that generates new client inquiries consistently. An unclaimed or neglected GBP listing often means a competitor's listing appears first.",
          },
        },
        {
          "@type": "Question",
          name: "How does local SEO help a CPA firm beyond tax season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clients switch accountants year-round. Business owners who had a bad tax season with their current CPA start looking for alternatives in May and June, not in January. Small business owners needing bookkeeping help search any time. Entity clients looking for estate planning support don't wait for filing deadlines. A CPA firm with consistent local visibility captures these searches in the off-season when competitors have gone quiet, which is often when the most motivated clients are looking.",
          },
        },
        {
          "@type": "Question",
          name: "What keywords should a CPA target for local search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most valuable local keyword clusters for CPAs are service-specific and audience-specific, not just 'CPA near me.' Targets include: 'small business CPA [city],' 'tax planning [city],' 'bookkeeping services [city],' 'real estate investor tax [city],' 'S-corp setup [city],' and 'estate tax planning [city].' Each of these represents a different client type with different needs and different willingness to pay. Targeting them with dedicated content pages is more effective than a single generic accounting page.",
          },
        },
        {
          "@type": "Question",
          name: "How can a small CPA firm compete with H&R Block?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "H&R Block competes on price and volume. Your advantage is expertise, relationship, and the fact that many clients specifically want a CPA who handles their account directly rather than a revolving door of seasonal staff. State that clearly in your GBP description and website content, and target the searches where expertise matters: 'CPA for small business,' 'tax planning for self-employed,' 'accountant for real estate investors.' These searchers have already decided they want more than a tax prep chain. You just need to be visible when they're looking.",
          },
        },
      ],
    },
  ],
};

export default function CpaFirmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / CPA Firms</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for CPA Firms and Independent Accountants
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              The tax season trap is real. Most CPA firms do their marketing
              push in January, go dark by May, and then wonder why their new
              client pipeline is thin by October. The problem: clients switch
              accountants in June. Business owners who had a frustrating
              experience with their CPA in April start looking for alternatives
              in late spring, not during the next filing season. If you're not
              visible in July, you're not capturing those clients.
            </p>
            <p>
              H&R Block and TurboTax compete on convenience and price. You
              compete on expertise, continuity, and the fact that you know your
              clients' financial lives well enough to give real advice. Local
              search is where clients who want that kind of relationship go to
              find it. Visibility Local builds the presence that makes you the
              obvious choice in your market, every month of the year.
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
            Three problems CPA firms face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                "CPA near me" is too broad to win on alone
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Small business CPA [city]," "tax planning [city]," and
                "bookkeeping [city]" are each a different search with different
                intent and different client quality. A firm targeting only
                "CPA near me" is competing against every accountant in the
                market for a search that attracts everything from sole
                proprietors needing basic returns to CFO-level clients with
                complex tax situations. Specificity wins in local search because
                it wins on intent match, not just on rank.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Seasonal marketing leaves off-season clients to competitors
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Clients looking for bookkeeping support, tax planning, business
                formation help, or a new accountant after a bad experience don't
                wait for January to search. A firm with a strong GBP presence,
                consistent posting cadence, and active reviews in the summer and
                fall captures clients that seasonally-marketed firms consistently
                miss. Those clients tend to be higher value because they're
                planning ahead rather than filing last minute.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Secondary GBP categories are underused
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Accountant" as a primary GBP category is correct, but
                secondary categories like "Tax Preparation Service," "Bookkeeper,"
                and "Business Management Consultant" each expand the search
                surface you're eligible to appear on. Most CPA firms have a
                primary category and nothing else, which means they're invisible
                for searches related to services they actively offer. Each
                additional relevant category is a direct expansion of search
                visibility.
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
            What we do for CPA firms
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Accounting firm local search has distinct requirements around service
            specificity, seasonal visibility, and professional credentialing.
            Here's what each service does for a CPA practice.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Full category configuration ('Accountant' primary plus all relevant secondary categories), services list built around your specific offerings, and a year-round posting cadence.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "On-page optimization targeting service-specific and audience-specific searches: small business accounting, tax planning, bookkeeping, real estate investor tax, each with dedicated content.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity establishment across AICPA, state CPA society, and professional directories so AI tools cite your firm when local clients ask for accountant recommendations.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Audit and cleanup across general and professional directories, with AICPA and state CPA society listings treated as priority authority citations.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Written content targeting the full range of local accounting searches, with particular focus on niche client types where your expertise creates a referral advantage.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "Review generation system built around the post-filing moment and the post-engagement moment, when clients are most satisfied and most willing to say so publicly.",
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
            What actually moves the needle for CPA firms
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Use secondary GBP categories to expand search surface
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                "Accountant" is the correct primary GBP category for a CPA, but
                every relevant secondary category adds a new search surface your
                listing can appear on. "Tax Preparation Service" captures a
                completely different set of searches than "Accountant." "Bookkeeper"
                captures yet another. "Business Management Consultant" reaches
                the small business owners searching for operational finance help.
                Most CPA firms leave these categories blank and then wonder why
                they don't rank for services they actively offer.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Build niche authority for specific client industries
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                CPAs who establish visible expertise in specific industries
                generate referrals within those communities. A CPA who ranks for
                "real estate investor tax [city]" gets referrals from local real
                estate investment groups. A CPA who ranks for "medical practice
                accounting [city]" gets referrals from healthcare professionals.
                This niche content serves two purposes: it ranks for specific
                searches, and it signals to referral sources that you understand
                their clients' specific tax situations.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Make the solo vs. firm distinction explicit if it applies
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Many clients specifically want a solo CPA who handles their
                account directly rather than a large firm where they're passed to
                a junior associate. This is a real preference, and clients search
                for it. If you're a solo practitioner or a small firm where
                clients work directly with a named CPA, state that clearly in
                your GBP description and website. It differentiates you from
                larger firms and converts clients who have specifically decided
                they want that relationship structure.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                AICPA and state CPA society memberships are citation authority
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Your AICPA membership and state CPA society membership each
                represent a directory listing from a highly authoritative
                professional organization. These listings often include a link to
                your website and your business contact information. They carry
                significant trust weight with Google and with prospective clients
                who verify credentials. Many CPA firms have the memberships but
                have never claimed or optimized the directory profiles that come
                with them.
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
            Common questions from CPA firms
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Should a CPA firm have a Google Business Profile?",
                a: "Yes, and it should be actively managed year-round. Your GBP is often the first result prospective clients see when searching for a local accountant. A complete profile with accurate categories, strong reviews, and regular posts builds consistent visibility. An unclaimed or neglected listing typically means a competitor appears first for searches you should be winning.",
              },
              {
                q: "How does local SEO help a CPA firm beyond tax season?",
                a: "Clients switch accountants year-round. Business owners who had a bad experience in April start searching for a new CPA in June, not in January. Bookkeeping clients search any month. Business formation clients search when they're starting a business, not on any predictable schedule. A firm with year-round local visibility captures these searches when competitors have gone quiet, which is when the most motivated clients are looking.",
              },
              {
                q: "What keywords should a CPA target for local search?",
                a: "The most valuable targets are service-specific and audience-specific: 'small business CPA [city],' 'tax planning [city],' 'bookkeeping services [city],' 'real estate investor tax [city],' 'S-corp setup [city].' Each represents a different client type with different complexity and different willingness to pay. Dedicated content pages for each are more effective than a single generic accounting page trying to rank for everything.",
              },
              {
                q: "How can a small CPA firm compete with H&R Block?",
                a: "By targeting the searches where H&R Block's model is a disadvantage. Clients searching for 'CPA for small business' or 'tax planning [city]' have already decided they want expertise and continuity, not a tax prep chain. Make your expertise and relationship model explicit in your GBP and content. That's the search intent match that H&R Block can't replicate regardless of how much they spend on advertising.",
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
                desc: "Independent agents who often serve the same small business and self-employed clients as CPA firms.",
              },
              {
                href: "/industries/mortgage-brokers",
                title: "Mortgage Brokers",
                desc: "Brokers who regularly refer clients to CPAs for tax documentation support and tax planning.",
              },
              {
                href: "/industries/financial-advisors",
                title: "Financial Advisors",
                desc: "Advisors whose clients overlap significantly with CPA clients in the high-net-worth and small business markets.",
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
            One CPA firm per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one accounting firm per geographic market. If your area
            is open, we begin with a GBP audit and a keyword gap analysis. Call
            (501) 554-2183 or send a message below.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
