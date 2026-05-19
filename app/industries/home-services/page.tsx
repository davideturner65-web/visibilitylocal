import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Home Services | Visibility Local",
  description:
    "Local SEO for plumbers, HVAC companies, electricians, and home services businesses. Highest search intent per query of any local category. One business per market.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/home-services",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://visibilitylocal.com/industries/home-services#service",
      name: "Local SEO for Home Services",
      description:
        "Google Business Profile optimization, service area page strategy, and reputation management for plumbers, HVAC contractors, electricians, and home services businesses.",
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
          name: "Should I have separate GBP listings for each city I serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You cannot create multiple GBP listings for the same business at different cities without a physical location in each city. Google's guidelines prohibit listing a business at an address where it doesn't have a real presence. The correct approach for home services businesses serving multiple cities from a single location is a single GBP listing set up as a service area business, with the service area configured to include all cities you serve. For local search visibility in each of those cities, you build dedicated service area pages on your website.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a service area business and a storefront on Google?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A storefront GBP listing shows your physical address and appears in searches near that address. A service area business GBP listing hides your address (appropriate if you work from home or a non-customer-facing location) and instead specifies the geographic areas you serve. Home services businesses that travel to the customer's location typically set up as service area businesses. The local search visibility mechanics are similar for both, but the configuration and ranking dynamics differ. We set up whichever structure is correct for your business.",
          },
        },
        {
          "@type": "Question",
          name: "How do service area pages help with local rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Service area pages give Google a location-specific page to rank for city-level searches that your homepage cannot target. 'Plumbing services Austin' and 'plumbing services Cedar Park' are different SERPs. Without a Cedar Park page, you will not rank for Cedar Park searches regardless of how good your homepage is. Each service area page should have unique content covering your services in that specific city, local landmarks and neighborhoods as context, and a locally relevant call to action. Generic pages that just swap the city name rank poorly and don't convert.",
          },
        },
        {
          "@type": "Question",
          name: "How do Google Local Services Ads work alongside GBP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Local Services Ads (LSA) appear above the organic map pack for many home services searches and are pay-per-lead rather than pay-per-click. The Google Guaranteed badge that comes with LSA verification is a significant trust signal. LSA and GBP are separate systems but both appear for the same searches. A home services business with both an active LSA campaign and a well-optimized GBP listing can occupy two different positions on the same results page. They complement each other and should be pursued in parallel.",
          },
        },
      ],
    },
  ],
};

export default function HomeServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / Home Services</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for Home Services Businesses
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              "Emergency plumber near me" at 11pm is the clearest possible
              statement of purchase intent. Whoever ranks first gets the call.
              There is no comparison shopping phase, no extended research, no
              brand preference. There is just the map pack and whoever answers.
              Home services searches have the highest intent per query of any
              local category, which means local search visibility is not a
              supplement to your business development strategy. It is the
              strategy.
            </p>
            <p>
              The practical problem for most home services businesses is that
              the same search intent that makes this category so valuable also
              makes the competition consistent and relentless. The businesses
              that dominate local home services searches have correct GBP
              categories, strong review counts, service area pages for every
              city they cover, and explicit emergency and same-day service
              content. Those elements together are what gets your number called
              at 11pm instead of someone else's.
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
            Three problems home services businesses face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Serving multiple cities with no city-specific pages
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Plumbing services Austin" and "plumbing services Cedar Park"
                are different SERPs. A homepage that says "serving Austin and
                surrounding areas" will not rank for Cedar Park searches. Each
                city you actively serve needs its own page with unique content
                to be eligible for that city's local searches. Generic area
                coverage language is invisible to Google for specific city
                searches, which means most multi-city home services businesses
                are ranking in exactly one city: the one their address is in.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Emergency and same-day service isn't stated where it matters
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Emergency plumber near me" and "same-day HVAC repair [city]"
                are among the highest-converting searches in home services.
                A business that offers emergency service but doesn't state it
                explicitly in the GBP services list, in the GBP description, in
                the website headline, and in its content is invisible to these
                searches. Competitors who state it clearly rank for it. The
                information exists in your business. It's just not where Google
                or clients can find it.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Trust signals are thin for businesses entering homes
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Homeowners make a specific kind of trust evaluation when they're
                letting someone into their home. License and insurance status,
                review volume and recency, and response patterns all factor in.
                A business with 14 reviews from 3 years ago is at a structural
                disadvantage against a competitor with 90 reviews from the past
                12 months, even if both businesses do identical quality work.
                Review volume and recency are addressable with a systematic
                process. License and insurance belong in GBP attributes,
                the website, and every directory listing.
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
            What we do for home services businesses
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Home services local search has specific requirements around service
            area coverage, emergency intent, and trust signal visibility. Here's
            how each service applies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Specific trade category ('Plumber,' 'HVAC Contractor,' 'Electrician'), service area configuration, emergency and same-day service attributes, license and insurance status visibility, and a consistent posting cadence.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "Service area pages for every city you serve, emergency service content, and trade-specific keyword targeting. Each city page is written as unique content, not a template with a swapped name.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity establishment across contractor directories, local publications, and the BBB so AI tools cite your business for local home services recommendations.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Audit and cleanup across contractor-specific directories, with HomeAdvisor, Angi, Houzz, and the state contractor license database treated as priority citation sources.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Service area pages, emergency service pages, seasonal maintenance content, and trade-specific FAQ pages targeting the questions homeowners search for before and during a service need.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "Post-job review request system with a proven follow-up sequence. In home services, review recency and velocity are both ranking signals and trust signals. Volume builds over time with a consistent process.",
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
            What actually moves the needle for home services businesses
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Be specific with GBP category. Not "Home Services."
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Google has specific GBP categories for every home services trade:
                "Plumber," "HVAC Contractor," "Electrician," "Roofer,"
                "Landscaper," "General Contractor." Using the specific category
                is non-negotiable. "Home Services" is a catch-all that
                effectively excludes you from every trade-specific search. Your
                primary category should match your primary trade. Secondary
                categories can cover additional services you offer. This is one
                of the most common and most damaging configuration errors in
                home services GBP listings.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                State emergency and same-day availability explicitly everywhere
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                "Emergency plumber near me" and "same-day HVAC repair [city]"
                convert at rates significantly above standard home services
                searches because the searcher is in a crisis. If you offer
                emergency service, state it in your GBP description, in the
                GBP services list with its own entry, in your website headline,
                in page title tags, and in a dedicated page on your site. The
                searcher at 11pm with a burst pipe doesn't read carefully. They
                scan. Make "24/7 emergency service" impossible to miss.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Build Google Local Services Ads alongside GBP, not instead of it
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Google Local Services Ads appear above the organic map pack for
                many home services searches. The Google Guaranteed badge that
                comes with LSA verification is a meaningful trust signal for
                homeowners. A business with an active LSA campaign and a
                well-optimized GBP listing can occupy two separate positions on
                the same results page. The background check and license
                verification required for LSA also produces content for your
                GBP attributes and website ("licensed, insured, and Google
                Guaranteed"), compounding the trust signals across surfaces.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Ask for reviews immediately after each completed job
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                The moment of highest satisfaction for a home services customer
                is when the job is done and the problem is solved. That moment
                is when a review request converts best. A text message sent
                within an hour of job completion with a direct Google review
                link will outperform any follow-up email sent a week later by
                a significant margin. Build this into the job completion process,
                not as an afterthought. Businesses that do this systematically
                accumulate review counts that are functionally impossible for
                competitors without the process to match.
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
            Common questions from home services businesses
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Should I have separate GBP listings for each city I serve?",
                a: "No. Google prohibits multiple listings for the same business without a physical presence at each address. The correct setup is a single GBP listing configured as a service area business, with your service area set to include all cities you cover. For local search visibility in each city, you build dedicated service area pages on your website. The GBP listing establishes your entity. The website pages capture city-specific searches.",
              },
              {
                q: "What is the difference between a service area business and a storefront on Google?",
                a: "A storefront GBP listing shows your physical address and ranks primarily near that address. A service area business listing hides your address and specifies the geographic areas you serve. Home services businesses that travel to the customer's location, and that don't have a customer-facing office, typically set up as service area businesses. Both can rank well in local search with proper configuration.",
              },
              {
                q: "How do service area pages help with local rankings?",
                a: "'Plumbing services Austin' and 'plumbing services Cedar Park' are different search results pages. Without a Cedar Park page, you will not rank for Cedar Park searches regardless of how well-optimized your homepage is. Each city needs its own page with unique content covering your services in that city, relevant local context, and a locally specific call to action. Generic pages that swap only the city name don't rank and don't convert.",
              },
              {
                q: "How do Google Local Services Ads work alongside GBP?",
                a: "Google Local Services Ads appear above the organic map pack for many home services searches and operate on a pay-per-lead model. The Google Guaranteed badge that comes with LSA verification is a trust signal. LSA and GBP are separate systems but both appear for the same searches. A business with both an active LSA campaign and a well-optimized GBP listing can occupy two separate positions on the same results page, which compounds click share and trust signals simultaneously.",
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
            Related industries in the property ecosystem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/industries/real-estate",
                title: "Real Estate Agents",
                desc: "Agents who regularly refer newly purchased homes to trusted contractors, creating ongoing referral relationships with home services businesses.",
              },
              {
                href: "/industries/attorneys",
                title: "Attorneys",
                desc: "Real estate and estate attorneys whose clients often need home services professionals during property transactions and estate work.",
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
            One home services business per trade per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one business per trade category per geographic market.
            If your trade and area are open, we can start with a GBP audit and
            a service area keyword analysis this week. Call (501) 554-2183 or
            send a message.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
