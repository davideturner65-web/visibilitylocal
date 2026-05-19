import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visibility Local | Local SEO & AI Search Visibility for Small Businesses",
  description:
    "Local SEO and AI search visibility for independent professionals nationwide. One client per market. Get found on Google Maps, ChatGPT, and Perplexity.",
  alternates: { canonical: "https://visibilitylocal.com" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      name: "Visibility Local",
      description:
        "Local SEO and AI search visibility consulting for independent professionals nationwide. One client per market.",
      url: "https://visibilitylocal.com",
      telephone: "(501) 554-2183",
      email: "info@visibilitylocal.com",
      founder: { "@type": "Person", name: "David Turner" },
      areaServed: { "@type": "Country", name: "United States" },
      priceRange: "$$",
      sameAs: ["https://visibilitylocal.com"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI search visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI search visibility refers to how prominently your business appears when someone asks ChatGPT, Perplexity, Google AI Overviews, or similar tools for a local recommendation. These tools pull from structured business data, authoritative content, and trusted citations. Without deliberate optimization, most local businesses are invisible to AI-generated recommendations.",
          },
        },
        {
          "@type": "Question",
          name: "How is Visibility Local different from a regular SEO agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Two things. First, we work with one client per market, so we're never splitting our attention between you and a direct competitor. Second, there are no account managers or junior staff. David Turner handles every client directly. That means the person you talk to is the person doing the work.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with businesses nationwide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Visibility Local works with independent professionals nationwide. Local SEO and AI search visibility are not geography-constrained on our end. If your market is open, we can work together.",
          },
        },
        {
          "@type": "Question",
          name: "What does one client per market mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It means we don't take a second insurance agent in Phoenix, a second mortgage broker in Austin, or a second CPA in Nashville while you're a client. You get exclusive local SEO representation in your market. We don't work both sides of the same competitive matchup.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see results in local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Business Profile improvements -- category corrections, citation cleanup, review velocity -- often show movement in 30 to 60 days. Organic content rankings typically take 90 to 180 days. AI search visibility builds faster than most people expect once your structured data and content authority are in place, sometimes within weeks.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    title: "Google Business Profile",
    desc: "Your GBP is the single highest-leverage asset in local search. Most businesses have it set up wrong. Category selection, service areas, photos, and posting cadence all affect whether you rank.",
    href: "/services/google-business-profile",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    title: "Local SEO",
    desc: "Citations, on-page signals, internal linking, and content strategy -- the unglamorous work that determines whether you show up in the map pack when clients search for what you do.",
    href: "/services/local-seo",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "AI Search Visibility",
    desc: "ChatGPT and Perplexity are already recommending local professionals. Getting on that list requires structured data, authoritative content, and citations from sources AI tools actually trust.",
    href: "/services/ai-search-visibility",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Citations & NAP",
    desc: "Inconsistent name, address, and phone data across directories actively hurts your local rankings. We audit, correct, and build out your citation profile across the directories that actually move the needle.",
    href: "/services/citations",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Local Content",
    desc: "Content that ranks locally and gets cited by AI tools requires specificity, authority signals, and genuine subject matter depth. Generic blog posts accomplish nothing. We write to rank.",
    href: "/services/content",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Reputation Management",
    desc: "Review velocity signals to Google that your business is active and trusted. We build systems that generate reviews consistently, respond professionally, and protect your star rating.",
    href: "/services/reputation",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
];

const industries = [
  { label: "Insurance Agents", href: "/industries/insurance-agents", note: "Independent agents competing with captives" },
  { label: "Mortgage Brokers", href: "/industries/mortgage-brokers", note: "Win purchase referrals on local search" },
  { label: "CPA Firms", href: "/industries/cpa-firms", note: "Visibility beyond tax season" },
  { label: "Financial Advisors", href: "/industries/financial-advisors", note: "Build trust before the first call" },
  { label: "Real Estate", href: "/industries/real-estate", note: "Hyperlocal market authority" },
  { label: "Attorneys", href: "/industries/attorneys", note: "Practice area and location targeting" },
  { label: "Medical Practices", href: "/industries/medical-practices", note: "Insurance filters and proximity signals" },
  { label: "Home Services", href: "/industries/home-services", note: "Service area pages that rank" },
];

const faqs = [
  {
    q: "What is AI search visibility?",
    a: "AI search visibility refers to how prominently your business appears when someone asks ChatGPT, Perplexity, or Google AI Overviews for a local recommendation. These tools pull from structured business data, authoritative content, and trusted citations. Without deliberate optimization, most local businesses are invisible to AI-generated recommendations.",
  },
  {
    q: "How is Visibility Local different from a regular SEO agency?",
    a: "Two things. First, we work with one client per market, so we're never splitting attention between you and a direct competitor. Second, there are no account managers or junior staff. David Turner handles every client directly. The person you talk to is the person doing the work.",
  },
  {
    q: "Do you work with businesses nationwide?",
    a: "Yes. Visibility Local works with independent professionals nationwide. Local SEO and AI search visibility are not geography-constrained on our end. If your market is open, we can work together.",
  },
  {
    q: "What does 'one client per market' mean?",
    a: "It means we don't take a second insurance agent in Phoenix, a second mortgage broker in Austin, or a second CPA in Nashville while you're a client. You get exclusive local SEO representation in your market. We don't work both sides of the same competitive matchup.",
  },
  {
    q: "How long does it take to see results?",
    a: "GBP improvements often show movement in 30 to 60 days. Organic content rankings take 90 to 180 days. AI search visibility builds faster than most expect once your structured data and content authority are in place, sometimes within weeks.",
  },
];

export default function HomePage() {
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
            <p className="section-label mb-5">Local SEO + AI Search Visibility</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Local search changed.<br />
              <span className="italic text-gold">Most businesses haven&apos;t.</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Your clients are using Google Maps, ChatGPT, and Perplexity to find professionals before they ever visit a website. Visibility Local builds your presence across all three surfaces. Exclusively. One client per market.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8 max-w-xl">
              Working with independent professionals nationwide. If your market is open, there&apos;s a window.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get a Free Audit
              </Link>
              <Link href="/services/local-seo" className="btn-secondary text-base px-7 py-3.5">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl text-gold">1 per market</p>
              <p className="font-sans text-sm text-ink-4 mt-1">Exclusive territory. No competitor conflicts.</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">3 surfaces</p>
              <p className="font-sans text-sm text-ink-4 mt-1">Google Maps, AI tools, and organic search.</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">Nationwide</p>
              <p className="font-sans text-sm text-ink-4 mt-1">Open markets across the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / OPPORTUNITY */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">The shift happening right now</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-4">
              Your clients aren&apos;t just searching Google anymore.
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed">
              The decision to call a professional happens across multiple platforms now. Each one has different ranking signals, and almost none of your competitors have addressed all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-paper border border-paper-3 rounded-sm p-8">
              <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">Google Maps is table stakes</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                The map pack captures most of the clicks for high-intent local searches. Most independent professionals are either absent or buried. The wrong primary GBP category alone can knock you out of searches you should be winning.
              </p>
            </div>

            <div className="bg-paper border border-paper-3 rounded-sm p-8">
              <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">AI tools are sending referrals</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                When someone asks ChatGPT &ldquo;who is the best independent insurance agent in Denver,&rdquo; they get names back. Those names are already optimized for AI citation. Businesses that set this up now have a head start that compounds.
              </p>
            </div>

            <div className="bg-paper border border-paper-3 rounded-sm p-8">
              <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">The window is still open</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Most independent professionals have not started optimizing for AI search. The businesses who move now will be the default recommendations when the window closes. Your market may still be available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-4">What we do</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-ink">
                Every surface. Every signal.
              </h2>
            </div>
            <Link href="/contact" className="btn-outline-gold self-start lg:self-auto whitespace-nowrap">
              Check your market
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-paper-2 border border-paper-3 rounded-sm p-6 hover:border-gold transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-gold-light flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-200">
                  <svg className="w-4 h-4 text-gold-dark group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-gold transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed">
                  {s.desc}
                </p>
                <p className="font-sans text-sm text-gold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Who we work with</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-4">
              Independent professionals in high-trust markets.
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed">
              These industries share a common problem: the client decision happens locally, trust is the primary factor, and the right search presence can generate referrals that compound for years.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group bg-paper border border-paper-3 rounded-sm p-5 hover:border-gold transition-colors duration-200"
              >
                <h3 className="font-serif text-lg text-ink mb-1.5 group-hover:text-gold transition-colors duration-200">
                  {ind.label}
                </h3>
                <p className="font-sans text-xs text-ink-3 leading-relaxed">{ind.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VISIBILITY LOCAL */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Why Visibility Local</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              No agency overhead. No competitor conflicts.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <div className="divider-gold" />
              <h3 className="font-serif text-2xl text-ink mb-3">One client per market</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Most agencies will happily take your money and then take your competitor&apos;s money too. We don&apos;t. When you&apos;re our client in a market, we don&apos;t work with anyone who competes with you in that market. The territory is yours.
              </p>
            </div>
            <div>
              <div className="divider-gold" />
              <h3 className="font-serif text-2xl text-ink mb-3">Direct access</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                David Turner works every account. No handoff to a junior SEO, no account manager translating your questions through three layers of hierarchy. You get the person who built the system, not someone who read a summary of it.
              </p>
            </div>
            <div>
              <div className="divider-gold" />
              <h3 className="font-serif text-2xl text-ink mb-3">Built for AI search</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Traditional SEO agencies are still optimizing for 2020. The local search landscape in 2025 includes AI Overviews, ChatGPT recommendations, and Perplexity citations. We build for where clients are looking now, not where they were looking five years ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES PREVIEW */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-4">Free guides</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-ink">
                Learn the system.
              </h2>
            </div>
            <Link href="/resources" className="btn-outline-gold self-start lg:self-auto whitespace-nowrap">
              All guides
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/google-business-profile-setup" className="group bg-paper border border-paper-3 rounded-sm p-7 hover:border-gold transition-colors duration-200">
              <p className="section-label mb-3">Google Business Profile</p>
              <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-gold transition-colors duration-200">
                Complete GBP Setup and Optimization Guide
              </h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Every field, every setting, every signal Google uses to rank your listing. Step-by-step from creation to map pack domination.
              </p>
            </Link>

            <Link href="/resources/ai-search-visibility" className="group bg-paper border border-paper-3 rounded-sm p-7 hover:border-gold transition-colors duration-200">
              <p className="section-label mb-3">AI Search</p>
              <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-gold transition-colors duration-200">
                How to Get Recommended by ChatGPT and Perplexity
              </h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                What AI tools look at when making local recommendations, and exactly how to get your business on their shortlist.
              </p>
            </Link>

            <Link href="/resources/local-seo-checklist" className="group bg-paper border border-paper-3 rounded-sm p-7 hover:border-gold transition-colors duration-200">
              <p className="section-label mb-3">Local SEO</p>
              <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-gold transition-colors duration-200">
                40-Point Local SEO Checklist
              </h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Every item that matters for local search rankings in 2025. Not the padded 100-point versions. The 40 that actually drive results.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Common questions</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              What people ask before they reach out.
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

      {/* CTA */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: '#c8922a' }}>Your market may already be taken</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              Find out if your spot is open.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: 'rgba(247,244,238,0.7)' }}>
              A free audit takes 20 minutes. You&apos;ll find out where you stand on Google Maps, what your GBP is missing, and whether your market is still available. No pitch, no obligation. If it&apos;s not a fit, we&apos;ll say so.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
