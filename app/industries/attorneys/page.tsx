import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Attorneys and Law Firms | Visibility Local",
  description:
    "Local SEO for attorneys and law firms. High-competition, high-value local search strategy targeting practice area searches. One firm per market.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/attorneys",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://visibilitylocal.com/industries/attorneys#service",
      name: "Local SEO for Attorneys and Law Firms",
      description:
        "Google Business Profile optimization, legal directory citation building, and practice area search strategy for attorneys and law firms.",
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
          name: "Can law firms use Google Business Profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Google Business Profile is a standard business directory tool with no legal advertising restrictions beyond those that apply to all attorney advertising in your state. Law firms can and should have a fully optimized GBP listing with correct categories, complete services list, professional photos, and an active posting cadence. A well-managed GBP is often the difference between appearing in the local map pack and being invisible in it.",
          },
        },
        {
          "@type": "Question",
          name: "What GBP category should an attorney use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solo practitioners should use 'Lawyer' as the primary GBP category. Law firms with multiple attorneys should use 'Law Firm.' Practice area categories should be added as secondary categories: 'Personal Injury Attorney,' 'Estate Planning Attorney,' 'Family Law Attorney,' and so on. Each secondary category expands the search surfaces your listing appears on and connects your listing to practice area searches that the primary 'Law Firm' category alone won't capture.",
          },
        },
        {
          "@type": "Question",
          name: "Which legal directories matter most for local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Tier 1 legal citation sources are Avvo, Martindale-Hubbell, FindLaw, and Justia. These directories rank independently in search results and carry significant authority with Google. Beyond those, your state bar directory is the most authoritative single citation source available to you, followed by local and specialty bar association directories. Many attorneys have incomplete profiles on all of these, which means they're missing both citation authority and independent directory traffic.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get client reviews without violating bar association rules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ABA Model Rule 7.2 permits satisfied clients to leave voluntary reviews on their own initiative. You can ask clients to share their experience and provide them a direct link to your Google review page, as long as you're not offering anything of value in exchange and you're not making specific promises about outcomes. The bar restriction is on endorsements and testimonials that make misleading comparative claims, not on clients voluntarily sharing their honest experience. We structure review generation for attorneys within these parameters.",
          },
        },
      ],
    },
  ],
};

export default function AttorneysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / Attorneys</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for Attorneys and Law Firms
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              Legal local search is the highest-ROI vertical in local SEO.
              A single personal injury case from a map pack appearance can be
              worth six figures. An estate planning client from a local content
              page can generate five figures in fees and decades of referrals.
              No other local search category comes close to the per-client value,
              which means the firms that invest in local search visibility
              consistently operate at a different revenue level than those that
              don't.
            </p>
            <p>
              The competition is also real. Legal local search is contested in
              most markets, which means it rewards firms that do the technical
              work correctly rather than firms that simply know local SEO exists.
              Correct GBP categories, practice area specificity, authoritative
              legal directory citations, and a systematic review process are the
              building blocks. They're not complicated, but they require
              attention and consistency that most firms don't have in-house.
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
            Three problems attorneys face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                "Attorney near me" is too broad to be a strategy
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Personal injury attorney [city]," "estate planning attorney
                [city]," and "family law attorney [city]" are entirely different
                searches with different intent, different client types, and
                different revenue profiles. A firm trying to rank for all of
                them with a single homepage is competitive in none of them.
                Practice area pages, each with dedicated content and specific
                local search targeting, are how high-value legal searches
                actually get won.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Legal directories are major citation sources with incomplete profiles
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Avvo, Martindale-Hubbell, FindLaw, and Justia rank independently
                in search results for attorney name searches and practice area
                searches. Many attorneys have unclaimed or incomplete profiles
                on all four. These aren't just citation opportunities. They're
                independent discovery surfaces that generate traffic and client
                inquiries on their own, separate from your website or GBP.
                Leaving them incomplete is leaving leads on the table.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Review hesitation puts firms at a structural disadvantage
              </h3>
              <p className="font-sans text-ink-2 text-base">
                Many attorneys don't ask for reviews because they're unsure
                about bar rules. The result: competitors who do ask accumulate
                review counts that create a visible trust gap. A firm with 6
                reviews and a firm with 58 reviews are not competitive equals
                in a prospective client's evaluation, even if the work quality
                is identical. The bar rules on voluntary reviews are more
                permissive than most attorneys assume.
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
            What we do for attorneys and law firms
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Legal local search has specific requirements around practice area
            targeting, directory authority, and review strategy. Here's how
            each service applies to a law practice.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Category configuration ('Law Firm' or 'Lawyer' primary plus practice area secondary categories), photo optimization, services list, and a managed posting cadence.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "Practice area pages targeting specific searches: personal injury, estate planning, family law, criminal defense, each with city-level and neighborhood-level local optimization.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity establishment across Avvo, Martindale-Hubbell, state bar directory, and legal publications so AI tools cite your firm for local legal searches.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Audit and cleanup across legal-specific and general directories, with state bar directory, Avvo, and Martindale-Hubbell treated as highest-priority citations.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Practice area content answering the specific questions prospective clients search for, with local intent built into every page. Content that ranks and also builds credibility before the first call.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "Review generation strategy structured within bar association parameters, with response management across Google, Avvo, and other legal review platforms.",
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
            What actually moves the needle for attorneys
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Practice area secondary categories expand search surface substantially
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                A GBP primary category of "Law Firm" gets you into general
                attorney searches. Secondary categories like "Personal Injury
                Attorney," "Estate Planning Attorney," and "Family Law Attorney"
                put your listing in front of practice area searches that the
                primary category alone won't capture. Each secondary category is
                a direct expansion of the search surfaces your listing is
                eligible to appear on. Most firms have a primary category and
                nothing else. Adding the right secondary categories is one of the
                highest-leverage quick wins in legal local SEO.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Claim and complete all four major legal directories
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Avvo, Martindale-Hubbell, FindLaw, and Justia each rank
                independently in search results for attorney name and practice
                area searches. Claiming and completing all four is a citation
                cleanup exercise with immediate ranking benefit. For Avvo
                specifically, a complete profile with peer endorsements and
                client reviews ranks on its own for attorney name searches and
                often appears before a firm's website. Not claiming it means
                someone else's profile occupies that space.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                The state bar directory is your highest-authority citation
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Every state bar maintains a public attorney directory. That
                directory is a government-adjacent, highly authoritative domain
                that includes your name, bar number, practice information, and
                often a website link. It's the most authoritative citation
                available to any attorney in your state, and many attorneys have
                never checked whether the website link and contact information
                listed is current. Specialty bar association and local bar
                association directories add additional authoritative citation
                layers.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                ABA rules allow voluntary reviews. Ask for them.
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                ABA Model Rule 7.2 permits clients to voluntarily share their
                experience. You can send satisfied clients a direct link to your
                Google review page and ask them to share their honest feedback,
                as long as you're not offering compensation and not making
                specific outcome promises. The bar restriction is on misleading
                comparative claims, not on clients speaking honestly. Attorneys
                who ask for reviews consistently outrank those who don't because
                review count is a measurable local ranking signal and a decisive
                factor in client trust evaluation.
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
            Common questions from attorneys and law firms
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Can law firms use Google Business Profile?",
                a: "Yes. GBP is a standard business directory tool with no legal advertising restrictions beyond standard attorney advertising rules in your state. A fully optimized GBP listing with correct categories, complete services list, professional photos, and active posting cadence is one of the most effective local marketing investments a law firm can make.",
              },
              {
                q: "What GBP category should an attorney use?",
                a: "Solo practitioners should use 'Lawyer' as primary. Firms with multiple attorneys should use 'Law Firm.' Practice area secondary categories like 'Personal Injury Attorney,' 'Estate Planning Attorney,' and 'Family Law Attorney' should be added to expand the search surfaces your listing appears on. Each secondary category connects your listing to practice area searches that the primary category alone won't capture.",
              },
              {
                q: "Which legal directories matter most for local SEO?",
                a: "Tier 1 legal citation sources are Avvo, Martindale-Hubbell, FindLaw, and Justia. These rank independently in search results and carry significant authority. Your state bar directory is the single most authoritative citation source available, followed by local and specialty bar association directories. Many attorneys have incomplete profiles on all of these.",
              },
              {
                q: "How do I get client reviews without violating bar association rules?",
                a: "ABA Model Rule 7.2 permits satisfied clients to leave voluntary reviews. You can ask clients to share their experience and provide a direct link to your Google review page, without offering anything of value in exchange and without making specific outcome promises. The bar restriction applies to misleading comparative claims, not to clients voluntarily sharing their honest experience. We structure review generation for attorneys within these parameters.",
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
            Professionals in the same referral ecosystem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/industries/medical-practices",
                title: "Medical Practices",
                desc: "Physicians and specialists who work in adjacent professional networks and refer personal injury and medical malpractice clients.",
              },
              {
                href: "/industries/real-estate",
                title: "Real Estate Agents",
                desc: "Agents who regularly refer clients to real estate attorneys for transaction and title work.",
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
            One law firm per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one law firm per geographic market. If your area is
            open, we can begin with a GBP audit and a practice area keyword
            analysis this week. Call (501) 554-2183 or send a message.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
