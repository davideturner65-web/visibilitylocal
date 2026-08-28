import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Case Study: Hillcrest Life and Health, Little Rock | Visibility Local",
  description:
    "What was built for Lancaster Cook, an independent life, health, Medicare and annuity agent in Little Rock, Arkansas, and what happened to his local search visibility.",
  alternates: {
    canonical: "https://visibilitylocal.com/results/hillcrest-life-and-health",
  },
  // Not indexed until the real figures replace the placeholders.
  robots: { index: false, follow: true },
};

export default function HillcrestCaseStudyPage() {
  return (
    <>
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Case study</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-ink mt-4 mb-6 leading-tight">
            Hillcrest Life and Health
          </h1>
          <p className="font-sans text-lg text-ink-2 leading-relaxed max-w-3xl">
            Lancaster Cook is an independent agent in Little Rock, Arkansas, writing life,
            health, Medicare and annuities. Arkansas license #8021079, AHIP certified for
            Medicare and FFM certified for the marketplace.
          </p>

          <Placeholder label="page status">
            This page is built and not published. It is set to noindex and is not linked from
            the nav. Fill in every placeholder below with real figures, then remove the robots
            noindex and add the links from the homepage, the insurance agents page and the
            visibility report page.
          </Placeholder>
        </div>
      </section>

      <div className="divider-gold" />

      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-5">Starting condition</h2>
            <Placeholder label="starting condition">
              What the agency looked like before. Include: the Google Business Profile primary
              category as found, whether secondary categories existed, citation inconsistencies
              counted, whether the site was an FMO template, who owned the domain, review count
              versus the map pack competitors, and whether ChatGPT or Perplexity named the
              agency when asked for an agent in Little Rock. Dates matter, so record when the
              baseline was taken.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-ink mb-5">What was built</h2>
            <div className="space-y-4 font-sans text-base text-ink-2 leading-relaxed">
              <p>
                A full site on a domain registered to the agency, covering life, health,
                Medicare and annuities, with topic pages for each product line and pages for the
                fifteen central Arkansas cities the agency serves.
              </p>
              <p>
                A dedicated Medicare section built around the enrollment calendar: the Annual
                Enrollment Period, the Initial Enrollment Period for people turning 65, Medicare
                Advantage Open Enrollment, Special Enrollment Periods, and the Part B late
                enrollment penalty. Enrollment content is seasonal and has to be indexed and
                aged before October 15 to be worth anything, so it was built in August.
              </p>
              <p>
                Editorial content written to be cited rather than to hit a keyword target,
                including material specific to Arkansas that is not on any other agent site in
                the state: that Arkansas community-rates Medigap so premiums are not tied to
                age, and that the state has no birthday rule, which makes the six-month Medigap
                window at 65 far more consequential here than in Oregon or California.
              </p>
              <p>
                Structured data throughout: InsuranceAgency and Person schema with the license
                number and the AHIP and FFM credentials, Article and FAQPage schema on the
                enrollment pages, and Event schema for each enrollment window.
              </p>
            </div>
            <Placeholder label="build specifics">
              Add: total page count at launch, the launch date, and which pieces went live in
              which order. If the city pages were rebuilt after the first version, say so and
              say why, because the duplication problem and the fix are both interesting.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-ink mb-5">Search Console</h2>
            <Placeholder label="Search Console: impressions and clicks">
              Impressions and clicks over time, from the baseline through to now. Export the
              chart from Search Console rather than retyping the numbers. Note the date the
              sitemap was submitted, because that is where the curve should start moving. If
              there is a spike at AEP, label it.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-ink mb-5">Google Business Profile</h2>
            <Placeholder label="GBP Insights: calls, direction requests, website clicks">
              Calls, direction requests and website clicks, before and after. These are the
              numbers an agent cares about far more than impressions, because they are people
              getting in touch. Pull the same date range as the Search Console figures so the
              two can be read together.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-ink mb-5">Map pack position</h2>
            <Placeholder label="heat map before and after">
              Grid heat map for the core searches, before and after, from the same tool and the
              same grid size both times. This is the single most persuasive image in the whole
              case study, so it is worth the effort of getting a clean matched pair.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-ink mb-5">In his words</h2>
            <Placeholder label="client quote">
              A quote from Lancaster Cook, approved by him in writing before it goes up. Ask
              specifically what changed in the office rather than what he thinks of the website,
              because "the phone rings from people I have never met" is worth more than a
              compliment about the design.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-ink mb-5">Timeline</h2>
            <Placeholder label="timeline">
              Dated milestones: engagement start, site live, sitemap submitted, GBP corrections
              made, first movement observed, AEP. Honest dates including the gaps. A timeline
              that shows nothing happening for six weeks and then movement is more credible
              than one that implies instant results.
            </Placeholder>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-paper mb-5">
            Your market is not Little Rock, but the problems are the same
          </h2>
          <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.72)" }}>
            The Visibility Report is where this starts: the same diagnostic that produced the
            starting condition above, run against your agency.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/visibility-report" className="btn-primary text-base px-8 py-4">
              Get Your Visibility Report
            </Link>
            <Link href="/industries/insurance-agents" className="btn-secondary text-base px-8 py-4">
              What usually goes wrong
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
