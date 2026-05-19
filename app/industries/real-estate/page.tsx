import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Real Estate Agents | Visibility Local",
  description:
    "Local SEO for real estate agents and brokerages. Hyperlocal neighborhood search strategy, GBP optimization, and review management for agents and teams.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/real-estate",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://visibilitylocal.com/industries/real-estate#service",
      name: "Local SEO for Real Estate Agents",
      description:
        "Hyperlocal search strategy, Google Business Profile optimization, and reputation management for real estate agents and brokerages.",
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
          name: "Should a real estate agent have a Google Business Profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, with some nuance. Agents who operate from a brokerage office can claim the office address as their GBP location. Agents who work from home should set up a service area GBP without displaying a home address. Either way, the GBP listing is a critical local search asset because it's often the first result a buyer or seller sees when searching for a local agent. Without it, you're entirely dependent on Zillow and Realtor.com for local discovery.",
          },
        },
        {
          "@type": "Question",
          name: "How do neighborhood-specific pages help with local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buyers search by neighborhood, school district, and zip code long before they search for an agent. A page targeting 'homes for sale in [neighborhood name]' captures that early research search and introduces you before the buyer has chosen an agent. City-level pages cannot rank for these neighborhood searches because the search intent is too specific. Each neighborhood page also builds topical authority that supports your broader real estate SEO, signaling to Google that you have genuine local market knowledge.",
          },
        },
        {
          "@type": "Question",
          name: "What local search keywords should a real estate agent target?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most valuable keyword clusters are: neighborhood-specific buyer searches ('homes for sale in [neighborhood]'), agent-type searches ('real estate agent [city],' 'buyer's agent [city],' 'listing agent [city]'), and transaction-type searches ('first-time home buyer agent [city],' 'luxury homes [city]'). Each represents a different buyer type and stage. Trying to rank for all of them with a single page is ineffective. Dedicated pages for the highest-value clusters is the right approach.",
          },
        },
        {
          "@type": "Question",
          name: "How is real estate local SEO different from other industries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real estate local SEO is uniquely hyperlocal. Buyers search at a neighborhood and school district level of specificity that no other industry demands. It's also review-heavy in a way that reflects the stakes of the transaction. A buyer evaluating a $400,000 purchase will read every review before choosing an agent. And real estate involves a referral ecosystem, mortgage brokers, attorneys, inspectors, title companies, that creates parallel local search visibility opportunities that most agents never pursue.",
          },
        },
      ],
    },
  ],
};

export default function RealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / Real Estate</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for Real Estate Agents and Brokerages
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              Buyers don't start their search with "real estate agent [city]."
              They start with "[neighborhood name] homes" or "houses for sale
              near [school district]." By the time they search for an agent,
              they've usually already decided on the area and are ready to move.
              The agents who have content for those early neighborhood searches
              are already in the conversation before the agent search begins.
              Everyone else is competing only at the last step.
            </p>
            <p>
              Zillow and Realtor.com will always be part of the discovery
              process. But agents who treat those platforms as their only local
              visibility strategy give up the search channels where they have the
              most competitive control. A strong Google presence, consistent
              neighborhood content, and a review count that reflects your actual
              transaction volume builds a local reputation that Zillow profiles
              alone cannot replicate.
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
            Three problems real estate agents face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                City-level content doesn't capture neighborhood searches
              </h3>
              <p className="font-sans text-ink-2 text-base">
                A page titled "Real Estate Agent in [City]" cannot rank for
                "[Neighborhood] homes for sale" or "houses near [School
                District]." These are different searches with different levels
                of specificity. Buyers searching at the neighborhood level are
                further along in the decision process and more likely to contact
                an agent than buyers searching broadly. Generic city-level
                content misses those high-intent searches entirely.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Review count doesn't match transaction volume
              </h3>
              <p className="font-sans text-ink-2 text-base">
                An agent who has closed 80 transactions in the past three years
                and has 12 Google reviews has left most of their social proof
                unpublished. In real estate, where the transaction is among the
                largest a client will make, reviews are read carefully. An agent
                with 60 reviews at 4.9 stars and an agent with 12 reviews at
                4.8 stars are not competitive equals in a buyer's trust
                evaluation, even if the underlying performance was identical.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Zillow and Realtor.com profiles are incomplete
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Both platforms are major citation sources and independent
                discovery channels. Incomplete profiles on either represent
                missed visibility, not just missed citations. Many agents have
                profiles on both with outdated photos, missing website links, and
                no recent reviews synced. These profiles rank on their own in
                search results and are often the first thing a prospect sees
                after a Google search, before they even reach your website.
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
            What we do for real estate agents
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Real estate local search is hyperlocal, review-intensive, and
            referral-driven. Here's how each service maps to those specific
            requirements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Category configuration ('Real Estate Agent' or 'Real Estate Agency'), service area setup, photo optimization, and posting cadence targeting neighborhood and city searches.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "Neighborhood-level content pages, buyer and seller landing pages, school district content, and city-level optimization covering the full search journey from early research to agent selection.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity establishment across Zillow, Realtor.com, local publications, and real estate directories so AI tools cite you for local agent recommendations.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Full audit across real estate directories and general directories, with Zillow, Realtor.com, and the state real estate commission directory treated as priority citation sources.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Neighborhood guides, market update content, buyer and seller process pages, and school district profiles. Content that ranks and also builds the credibility buyers expect from a local expert.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "Systematic review generation at closing, with response management across Google, Zillow, and Realtor.com. Review volume and recency matter more in real estate than almost any other category.",
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
            What actually moves the needle for real estate agents
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Neighborhood pages capture the highest-intent searches
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                A buyer searching "[neighborhood name] homes for sale" is ready
                to start touring. They're not browsing. Creating a dedicated page
                for each neighborhood you serve, with content that demonstrates
                genuine local knowledge, market data, school district
                information, and lifestyle context, captures that search at the
                point of highest intent. These pages also build topical authority
                that supports your overall local real estate SEO, not just the
                individual neighborhood search.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Build referral visibility in the transaction ecosystem
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Real estate transactions involve mortgage brokers, real estate
                attorneys, inspectors, and title companies. Each of those
                professionals searches locally for agents to refer their clients
                to. Being visible in their professional searches creates referral
                relationships that compound over time. A mortgage broker who
                refers three clients a year from your referral relationship is
                worth more than most paid advertising channels. That referral
                visibility starts with the same local search presence that
                consumer visibility requires.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Treat Zillow and Realtor.com as citation sources, not competitors
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Zillow and Realtor.com rank independently in search results for
                agent name searches and local real estate searches. A complete,
                current profile on both, with matching contact information, a
                current website link, and a strong review count, is a citation
                that also generates independent discovery traffic. The agents who
                ignore these profiles because "I don't like Zillow" are leaving
                a significant visibility gap that competitors happily occupy.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Ask for reviews at closing, not weeks later
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                The moment of peak client satisfaction in a real estate
                transaction is at the closing table, not six weeks after move-in
                when the hot water heater has acted up. A review request sent
                within 24 hours of closing, with a direct link to your Google
                review page, converts at a significantly higher rate than a
                general follow-up weeks later. Systematizing this at closing is
                the single most effective review generation improvement most
                agents can make.
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
            Common questions from real estate agents
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Should a real estate agent have a Google Business Profile?",
                a: "Yes. Agents working from a brokerage office can claim the office address. Agents working from home should set up a service area GBP without displaying a home address. Either way, a GBP listing is a critical local search asset. Without one, you're entirely dependent on Zillow and Realtor.com for local discovery, which means no direct ranking control and no independent search presence.",
              },
              {
                q: "How do neighborhood-specific pages help with local SEO?",
                a: "Buyers search by neighborhood, school district, and zip code before they search for an agent. A neighborhood page captures that early research search and introduces you before the agent selection phase. City-level pages cannot rank for these specific searches. Each neighborhood page also builds topical authority that signals genuine local market knowledge, which supports your broader real estate SEO.",
              },
              {
                q: "What local search keywords should a real estate agent target?",
                a: "The most valuable clusters are: neighborhood-specific buyer searches ('homes for sale in [neighborhood]'), agent-type searches ('buyer's agent [city],' 'listing agent [city]'), and transaction-type searches ('first-time home buyer agent [city],' 'luxury homes [city]'). Each represents a different buyer type and stage, and each needs its own dedicated content to rank effectively.",
              },
              {
                q: "How is real estate local SEO different from other industries?",
                a: "Real estate local SEO is uniquely hyperlocal. Buyers search at neighborhood and school district level of specificity that no other industry demands. It's also review-intensive in proportion to the stakes of the transaction. And the referral ecosystem, mortgage brokers, attorneys, inspectors, creates parallel local search visibility opportunities that most agents never pursue systematically.",
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
            Professionals in the property transaction ecosystem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/industries/home-services",
                title: "Home Services",
                desc: "Contractors, plumbers, and HVAC companies whose clients are often the buyers and sellers in your transactions.",
              },
              {
                href: "/industries/attorneys",
                title: "Attorneys",
                desc: "Real estate and estate planning attorneys who are part of the same transaction ecosystem and referral network.",
              },
              {
                href: "/industries/mortgage-brokers",
                title: "Mortgage Brokers",
                desc: "Your most natural referral partner, searching locally for agents just as often as agents search for brokers.",
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
            One agent or team per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one real estate agent or team per geographic market. If
            your area is open, we can start with a GBP audit and a neighborhood
            keyword analysis this week. Call (501) 554-2183 or send a message.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
