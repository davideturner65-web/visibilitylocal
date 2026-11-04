import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Independent Insurance Agents | Visibility Local",
  description:
    "Local SEO and AI search visibility for independent insurance agents. One agent per market, nationwide. Get found in the map pack, in ChatGPT, and in Google.",
  alternates: { canonical: "https://visibilitylocal.com" },
};

const faqs = [
  {
    q: "What is AI search visibility?",
    a: "AI search visibility refers to how prominently your business appears when someone asks ChatGPT, Perplexity, or Google AI Overviews for a local recommendation. These tools pull from structured business data, authoritative content, and trusted citations. Without deliberate optimization, most local businesses are invisible to AI-generated recommendations.",
  },
  {
    q: "How is Visibility Local different from a regular SEO agency?",
    a: "Two things. First, we work with one client per market, so we're never splitting attention between you and a direct competitor. Second, the work is built for how local search runs now: the map pack, Google's AI Overviews, ChatGPT and Perplexity, not just the ten blue links.",
  },
  {
    q: "Do you work with businesses nationwide?",
    a: "Yes. The work is not geography-constrained on our end, so where we are has no bearing on the market you are in. The only limit is the one-per-market policy: if we already represent an agent in your city, we will tell you rather than take you both.",
  },
  {
    q: "What does 'one client per market' mean?",
    a: "It means we don't take a second insurance agent in Phoenix, a second mortgage broker in Austin, or a second CPA in Nashville while you're a client. You get exclusive local SEO representation in your market. We don't work both sides of the same competitive matchup.",
  },
  {
    q: "How long does it take to see results?",
    a: "Google Business Profile work usually shows movement in 30 to 60 days, because it corrects things Google already measures: your primary category, citation consistency, review velocity. Organic content rankings take 90 to 180 days. For AI search we will not give you a date. Nobody outside the model vendors can see when a system starts naming you, and anyone quoting a timeline for it is guessing. What we commit to is the work: the schema ships, the entity data agrees across the web, and the content is written to be citable. Then we watch what the tools actually say about your market.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      name: "Visibility Local",
      description:
        "Local SEO and AI search visibility consulting for independent professionals nationwide. One client per market.",
      url: "https://visibilitylocal.com",
      logo: "https://visibilitylocal.com/logo.png",
      telephone: "(501) 554-2183",
      email: "info@visibilitylocal.com",
      founder: { "@type": "Person", name: "David Turner" },
      areaServed: { "@type": "Country", name: "United States" },
      priceRange: "$$",
      sameAs: ["https://visibilitylocal.com"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const services = [
  {
    title: "Google Business Profile",
    desc: "Your Google Business Profile does more for local ranking than your website does, and most agents have it set up wrong. Category selection, service areas, photos, and posting cadence all feed it.",
    href: "/services/google-business-profile",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    title: "Local SEO",
    desc: "Citations, on-page signals, internal linking, and content strategy. The unglamorous work that decides whether you show up in the map pack when someone searches for what you do.",
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
            <p className="section-label mb-5">Local SEO for independent insurance agents</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              They went looking for an agent.<br />
              <span className="italic text-accent">They found the captive down the street.</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Every month, people in your town search for an insurance agent with nobody particular in mind. They read a few names off a map and call one. The agent they call usually does not have better carriers or better advice. He is just the one who turned up.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8 max-w-xl">
              We work with independent insurance agents, nationwide, one agent per market. Not because exclusivity sounds good in a pitch, but because we cannot run the same playbook for two agents fighting over the same map pack.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visibility-report" className="btn-primary text-base px-7 py-3.5">
                Get Your Visibility Report
              </Link>
              <Link href="/industries/insurance-agents" className="btn-secondary text-base px-7 py-3.5">
                Why agents specifically
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
              <p className="font-serif text-3xl text-accent">One per market</p>
              <p className="font-sans text-sm text-ink-4 mt-1">Your competitor cannot hire us.</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-accent">Three surfaces</p>
              <p className="font-sans text-sm text-ink-4 mt-1">The map pack, AI assistants, organic search.</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-accent">Agents first</p>
              <p className="font-sans text-sm text-ink-4 mt-1">The specialty. The same system also serves other independent professionals.</p>
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
              <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
              <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">AI tools are sending referrals</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                When someone asks ChatGPT "who is the best independent insurance agent in Chattanooga," it answers with names. Somebody is on that list already, and it is rarely the agent with the best carriers. It is the one whose data the model could actually read.
              </p>
            </div>

            <div className="bg-paper border border-paper-3 rounded-sm p-8">
              <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
            <Link href="/contact" className="btn-outline-accent self-start lg:self-auto whitespace-nowrap">
              Check your market
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-paper-2 border border-paper-3 rounded-sm p-6 hover:border-accent transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-200">
                  <svg className="w-4 h-4 text-accent-dark group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed">
                  {s.desc}
                </p>
                <p className="font-sans text-sm text-accent mt-4 flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
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
          <div className="max-w-2xl mb-10">
            <p className="section-label mb-4">Who this is for</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-4">
              Independent insurance agents.
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed">
              You are competing against captive agents with a national brand and a corporate marketing budget behind them, on a search results page where none of that shows. What shows is who set their listing up properly.
            </p>
          </div>

          {/* Insurance agents is the practice, so it gets the full-width treatment rather
              than sitting as one tile among eight. */}
          <Link
            href="/industries/insurance-agents"
            className="group block bg-ink rounded-sm p-8 lg:p-10 mb-10 hover:bg-ink-2 transition-colors duration-200"
          >
            <div className="max-w-3xl">
              <p className="section-label mb-3">
                The specialty
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl text-paper mb-4 group-hover:text-accent-bright transition-colors duration-200">
                Local SEO for independent agents
              </h3>
              <p className="font-sans text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.72)" }}>
                Four problems show up in nearly every independent agency we look at. The FMO handed you a template site that is identical to four hundred other agents. Your Google listing is set to a category somebody picked at random. Your pipeline runs on referrals, which works right up until it does not. And your Medicare and ACA seasons compress most of the year&apos;s revenue into a few weeks, which is exactly when being invisible costs the most.
              </p>
              <span className="font-sans text-sm font-medium text-accent">
                What that looks like fixed &rarr;
              </span>
            </div>
          </Link>

          <div className="max-w-2xl mb-6">
            <h3 className="font-serif text-2xl text-ink mb-2">The same system works elsewhere</h3>
            <p className="font-sans text-sm text-ink-2 leading-relaxed">
              The mechanics are not specific to insurance. If you are an independent professional in one of these fields and your market is open, the work is the same.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {industries
              .filter((ind) => ind.href !== "/industries/insurance-agents")
              .map((ind) => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  className="group bg-paper border border-paper-3 rounded-sm px-4 py-3.5 hover:border-accent transition-colors duration-200"
                >
                  <h4 className="font-sans text-sm font-medium text-ink group-hover:text-accent transition-colors duration-200">
                    {ind.label}
                  </h4>
                  <p className="font-sans text-xs text-ink-3 leading-relaxed mt-0.5">{ind.note}</p>
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
              No competitor conflicts. Built for AI search.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="divider-accent" />
              <h3 className="font-serif text-2xl text-ink mb-3">One client per market</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Most agencies will happily take your money and then take your competitor&apos;s money too. We don&apos;t. When you&apos;re our client in a market, we don&apos;t work with anyone who competes with you in that market. The territory is yours.
              </p>
            </div>
            <div>
              <div className="divider-accent" />
              <h3 className="font-serif text-2xl text-ink mb-3">Built for AI search</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Most agencies still sell the same ten blue links they were selling a decade ago. Local search now runs through AI Overviews, ChatGPT recommendations, and Perplexity citations as well as the map pack, and those surfaces read structured data rather than keyword density. The work is different, so the deliverables are different.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/offer" className="btn-outline-accent">
              See how the work runs
            </Link>
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
            <Link href="/resources" className="btn-outline-accent self-start lg:self-auto whitespace-nowrap">
              All guides
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/google-business-profile-setup" className="group bg-paper border border-paper-3 rounded-sm p-7 hover:border-accent transition-colors duration-200">
              <p className="section-label mb-3">Google Business Profile</p>
              <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                Complete GBP Setup and Optimization Guide
              </h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Every field, every setting, every signal Google uses to rank your listing. Step by step, from creating the profile to holding a map pack position.
              </p>
            </Link>

            <Link href="/resources/ai-search-visibility" className="group bg-paper border border-paper-3 rounded-sm p-7 hover:border-accent transition-colors duration-200">
              <p className="section-label mb-3">AI Search</p>
              <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                How to Get Recommended by ChatGPT and Perplexity
              </h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                What AI tools look at when making local recommendations, and exactly how to get your business on their shortlist.
              </p>
            </Link>

            <Link href="/resources/local-seo-checklist" className="group bg-paper border border-paper-3 rounded-sm p-7 hover:border-accent transition-colors duration-200">
              <p className="section-label mb-3">Local SEO</p>
              <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                40-Point Local SEO Checklist
              </h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Every item that moves local rankings, current for 2026. Not the padded 100-point versions. The 40 that actually change what happens.
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
            <p className="section-label mb-4">Start with the diagnosis</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              Find out what your town actually sees.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
              The Visibility Report is a full diagnostic of how your agency turns up when somebody goes looking for an agent: your Google listing, the map pack, your citation data, your site, and what the AI tools say when asked for an agent in your city. Written report, plus a call to walk through it. If the honest answer is that you do not need us, that is what the call will say.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visibility-report" className="btn-primary text-base px-8 py-4">
                Get Your Visibility Report
              </Link>
              <Link href="/scorecard" className="btn-secondary text-base px-8 py-4">
                Or grade your own listing, free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
