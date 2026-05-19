import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About David Turner | Visibility Local",
  description:
    "David Turner is a local SEO and AI search visibility consultant based in Little Rock, AR. Direct work, one client per market, no agency overhead.",
  alternates: { canonical: "https://visibilitylocal.com/about" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "David Turner",
      jobTitle: "Local SEO & AI Search Visibility Consultant",
      url: "https://visibilitylocal.com/about",
      email: "info@visibilitylocal.com",
      telephone: "(501) 554-2183",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Little Rock",
        addressRegion: "AR",
        addressCountry: "US",
      },
      worksFor: {
        "@type": "ProfessionalService",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Visibility Local",
      description:
        "Local SEO and AI search visibility consulting for independent professionals. One client per market.",
      url: "https://visibilitylocal.com",
      telephone: "(501) 554-2183",
      email: "info@visibilitylocal.com",
      founder: { "@type": "Person", name: "David Turner" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Little Rock",
        addressRegion: "AR",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
    },
  ],
};

export default function AboutPage() {
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
            <p className="section-label mb-5">About</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              David Turner
            </h1>
            <p className="font-sans text-xl text-ink-2 leading-relaxed mb-4">
              Local SEO and AI search visibility consultant. Based in Little Rock, Arkansas. Working directly with independent professionals nationwide.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed">
              No agency overhead. No junior staff. One client per market.
            </p>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="section-label mb-4">Background</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl text-ink mt-6 mb-5">
                A psychology degree taught him how clients decide
              </h2>
              <div className="space-y-4 prose-editorial">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  David studied psychology before he ever touched SEO. That background shaped how he thinks about local search. Most consultants focus on the technical signals. He starts one layer back, with how people decide who to call.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  When someone searches for a financial advisor or an insurance agent, they&apos;re looking for signals that one of these businesses is the established, credible, active option in their area. Recency of reviews, consistency of business information, presence in the right categories, visibility across multiple platforms. These aren&apos;t just ranking factors. They&apos;re the same trust signals humans use to assess whether a business is legitimate before they pick up the phone.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Google and AI tools are running that same trust assessment, algorithmically. The technical work of local SEO is, at its core, making those trust signals legible to machines. Understanding the psychology of the decision is what tells you which signals matter most for a given market and profession.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stat callout boxes */}
              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="font-serif text-3xl text-gold mb-1">One client</p>
                <p className="font-sans text-sm text-ink-3">per market, per industry. Never both sides of a competitive matchup.</p>
              </div>
              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="font-serif text-3xl text-gold mb-1">Direct work</p>
                <p className="font-sans text-sm text-ink-3">David handles every client personally. No account managers relaying messages to someone else doing the work.</p>
              </div>
              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="font-serif text-3xl text-gold mb-1">Nationwide</p>
                <p className="font-sans text-sm text-ink-3">Based in Little Rock. Open markets across the country. Local SEO doesn&apos;t require being in the same city.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW HE WORKS */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="section-label mb-4">How It Works</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-4xl text-ink mt-6 mb-5">
              Direct. Exclusive. No surprises.
            </h2>

            <div className="space-y-6 mt-8">
              <div className="flex gap-6 items-start">
                <div className="w-px bg-paper-3 self-stretch shrink-0" />
                <div className="pb-6">
                  <h3 className="font-serif text-xl text-ink mb-2">You work with David, not a team assigned to you</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    There&apos;s no account manager who translates your goals to a strategist who hands off to an implementation team. David does the audit, sets the strategy, and executes the work. That compression eliminates the translation failures that make most agencies frustrating to work with.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-px bg-paper-3 self-stretch shrink-0" />
                <div className="pb-6">
                  <h3 className="font-serif text-xl text-ink mb-2">One client per market, per industry</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    Visibility Local takes one insurance agent per city. One mortgage broker per metro. If your market is open, you have exclusive local SEO representation. That policy exists because the work requires full commitment to one side of each competitive landscape, not because it makes a better marketing headline.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-px bg-paper-3 self-stretch shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-ink mb-2">Scope, deliverables, timeline — upfront</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    Every engagement starts with a clear scope. What gets done, what the deliverables look like, and when to expect results. No vague monthly retainers where you&apos;re paying for effort rather than outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF OF WORK */}
      <section className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4 text-gold">Proof of Work</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl text-paper mt-6 mb-5">
                Hillcrest Life and Health
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-paper leading-relaxed opacity-80">
                  Hillcrest Life and Health is an independent insurance agency in Little Rock. Independent agents run against a significant structural disadvantage in local search. The national carriers and captive-agent networks have large content budgets, well-established domain authority, and IT teams maintaining their digital presence.
                </p>
                <p className="font-sans text-base text-paper leading-relaxed opacity-80">
                  Despite that, Hillcrest now ranks in top local positions for health insurance keywords in their market. They show up in the map pack for searches where the competition includes State Farm, Blue Cross, and national insurance directories. The work was foundational: GBP category optimization, citation cleanup, review system, and local content with genuine subject matter depth.
                </p>
                <p className="font-sans text-base text-paper leading-relaxed opacity-80">
                  The lesson isn&apos;t that smaller players can always outrank national brands. The lesson is that most national brands ignore local SEO hygiene because they&apos;re managing hundreds of locations. That gap is real and, in most markets, still exploitable.
                </p>
              </div>
            </div>

            <div className="bg-ink-2 border border-ink-3 rounded-sm p-8">
              <p className="font-sans text-xs text-ink-4 uppercase tracking-wide mb-6">Result snapshot</p>
              <div className="space-y-5">
                <div className="border-b border-ink-3 pb-5">
                  <p className="font-serif text-2xl text-gold mb-1">Map pack rankings</p>
                  <p className="font-sans text-sm text-ink-4 leading-relaxed">
                    Top local positions for health insurance keywords in Little Rock, competing against national carriers with established authority.
                  </p>
                </div>
                <div className="border-b border-ink-3 pb-5">
                  <p className="font-serif text-2xl text-gold mb-1">Citation cleanup</p>
                  <p className="font-sans text-sm text-ink-4 leading-relaxed">
                    Inconsistent NAP data across directories corrected and rebuilt. Eliminated the conflicting signals that were suppressing map pack visibility.
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-gold mb-1">GBP optimization</p>
                  <p className="font-sans text-sm text-ink-4 leading-relaxed">
                    Category selection, service areas, attributes, and posting cadence aligned to what Google rewards in the insurance vertical.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Philosophy</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-4xl text-ink mt-6 mb-5">
              Local SEO isn&apos;t tricks. It&apos;s signal clarity.
            </h2>

            <div className="space-y-5">
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                The businesses that win in local search aren&apos;t gaming anything. They have consistent information across every directory. Active, recent reviews from real clients. A Google Business Profile that clearly communicates what they do and where they do it. Content that demonstrates genuine expertise in their subject area. These are the same things that would make a business appear credible to a person walking down the street.
              </p>
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                Google&apos;s job is to identify who the trustworthy, authoritative, active local option is. So is Perplexity&apos;s. So is ChatGPT&apos;s. The technical work of local SEO is building the data structure and content that makes those signals readable to an algorithm. The algorithm is trying to do exactly what a human would do, with the information available online. Give it better information.
              </p>
              <p className="font-sans text-base text-ink-2 leading-relaxed">
                AI search visibility is the same problem one layer up. When someone asks ChatGPT for a recommendation, the tool pulls from structured business data, authoritative citations, and content from sources it trusts. The businesses getting recommended are the ones who built those signals before the question was asked. That window is still open in most markets. It won&apos;t be indefinitely.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resources/ai-search-visibility" className="btn-secondary text-sm">
                Read: AI Search Visibility
              </Link>
              <Link href="/services/google-business-profile" className="btn-secondary text-sm">
                GBP Optimization
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Check Availability</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mt-6 mb-5">
              Is your market available?
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed mb-8">
              Visibility Local works with one client per market. If your city and industry are open, a free audit is the right first step. It takes about 20 minutes, covers your GBP, citations, and current map pack position, and gives you a real picture of where you stand before any commitment is made.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Request a Free Audit
              </Link>
              <Link href="/industries/insurance-agents" className="btn-secondary text-base px-7 py-3.5">
                Insurance Agent SEO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
