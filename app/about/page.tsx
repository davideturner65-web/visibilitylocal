import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import { pageMetadata } from "@/lib/seo";
import { founderRef } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About David Turner",
  description:
    "David Turner runs Visibility Local: local SEO and AI search visibility for independent insurance agents, nationwide.",
  path: "/about",
});

// David Turner and the organization are declared once in app/layout.tsx.
const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://visibilitylocal.com/about",
  name: "About David Turner",
  mainEntity: founderRef,
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
              Local SEO and AI search visibility consultant. Working with independent insurance agents nationwide.
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
              <div className="divider-accent" />
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
                <p className="font-serif text-3xl text-accent mb-1">Insurance first</p>
                <p className="font-sans text-sm text-ink-3">Independent agents are the specialty. Not one vertical among twenty.</p>
              </div>
              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="font-serif text-3xl text-accent mb-1">Nationwide</p>
                <p className="font-sans text-sm text-ink-3">Serving clients nationwide. Local SEO doesn&apos;t require being in the same city.</p>
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
            <div className="divider-accent" />
            <h2 className="font-serif text-4xl text-ink mt-6 mb-5">
              No contract. No surprises.
            </h2>

            <div className="space-y-6 mt-8">
              <div className="flex gap-6 items-start">
                <div className="w-px bg-paper-3 self-stretch shrink-0" />
                <div className="pb-6">
                  <h3 className="font-serif text-xl text-ink mb-2">Month to month, and the assets are yours</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    There is no minimum term. The domain, the hosting account and the website are registered to you from the first day, so leaving never costs you the work that has been done. That is deliberate. It keeps the arrangement honest in both directions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-px bg-paper-3 self-stretch shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-ink mb-2">Scope, deliverables and price, upfront</h3>
                  <p className="font-sans text-sm text-ink-2 leading-relaxed">
                    You know what gets built, what gets done each month, and what it costs before you agree to anything. The buildout has a sixty-day delivery guarantee. What nobody can honestly put a date on is a ranking or an AI mention, so we do not.
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
            <div className="divider-accent" />
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

      <ClosingCta />
    </>
  );
}
