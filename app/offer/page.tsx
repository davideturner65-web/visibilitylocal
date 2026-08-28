import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How the Work Runs | Visibility Local",
  description:
    "What the engagement actually is: the full buildout, one agent per market, no minimum term, you own the domain and the code from day one, and everything ships within 60 days or that month is free.",
  alternates: { canonical: "https://visibilitylocal.com/offer" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local search and AI visibility management for independent insurance agents",
  provider: {
    "@type": "LocalBusiness",
    name: "Visibility Local",
    url: "https://visibilitylocal.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "Audience",
    audienceType: "Independent insurance agents",
  },
  description:
    "Ongoing management of Google Business Profile, website, citations and NAP data, structured data and AI search visibility, monthly content, review generation and monthly reporting, for one independent insurance agent per market.",
  url: "https://visibilitylocal.com/offer",
};

const system = [
  {
    title: "Google Business Profile",
    body: "Categories, services, service areas, photos, weekly posts, review responses. The profile is the single biggest lever in local search and it needs attention every month, not once at setup.",
  },
  {
    title: "Your website",
    body: "Built or rebuilt, on a domain registered in your name. Fast, structured properly, and written so it does not read like the four hundred other agents on the same FMO template.",
  },
  {
    title: "Citations and NAP",
    body: "Audited and corrected across the directories that carry weight for insurance, including your state Department of Insurance record. Then monitored, because these drift.",
  },
  {
    title: "Structured data and AI search",
    body: "Schema that makes your business machine-readable, and content written to be citable rather than to hit a keyword density. This is the part almost nobody in your market is doing yet.",
  },
  {
    title: "Monthly content",
    body: "Written for the lines you actually want more of, and for your city specifically. Not syndicated carrier blog posts that a hundred other agents also published.",
  },
  {
    title: "Review generation",
    body: "A system for asking that your office can actually run, because review count and recency both feed ranking and the ask is what everyone skips.",
  },
  {
    title: "Monthly reporting",
    body: "What moved, what did not, and what I did about it. Sent whether or not the month was good, which is not universal in this business.",
  },
];

const terms = [
  {
    title: "One independent agent per market",
    body: "Once I take your market, your competitor cannot hire me for as long as you are a client. This is the whole reason the work is worth doing properly, and it is also why I will sometimes tell you the answer is no.",
  },
  {
    title: "No minimum term",
    body: "Cancel any month. There is no twelve-month contract, no early termination fee, and no clause that turns leaving into a negotiation. If the work is worth paying for you will keep paying for it, and if it is not you should stop.",
  },
  {
    title: "You own everything, from day one",
    body: "The domain is registered in your name. The hosting account is in your name. The code is yours. If we part company, you take all of it and nothing breaks. This is the opposite of the FMO arrangement, and it is deliberate.",
  },
];

export default function OfferPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">How the work runs</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-ink mt-4 mb-6 leading-tight">
            What you are actually buying
          </h1>
          <div className="space-y-5 font-sans text-lg text-ink-2 max-w-3xl">
            <p>
              Most agency websites describe services without ever saying what the engagement is.
              You get six cards explaining what SEO means and no idea what happens if you say yes.
              Here is the shape of it.
            </p>
            <p>
              One agent per market. Everything below, run monthly. No contract. You own the
              assets. And a delivery guarantee with teeth in it rather than a satisfaction promise
              nobody can enforce.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">The system</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">Seven things, every month</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {system.map((item) => (
              <div key={item.title} className="bg-paper p-8 border border-paper-3">
                <h3 className="font-serif text-xl text-ink mb-4">{item.title}</h3>
                <p className="font-sans text-ink-2 text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">The terms</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">Three commitments</h2>
          <div className="space-y-10">
            {terms.map((term) => (
              <div key={term.title} className="border-l-2 border-gold pl-6">
                <h3 className="font-serif text-2xl text-ink mb-3">{term.title}</h3>
                <p className="font-sans text-base text-ink-2 leading-relaxed">{term.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label" style={{ color: "#c8922a" }}>
            The guarantee
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-paper mt-4 mb-6">
            Everything in the buildout ships within 60 days, or that month is free
          </h2>
          <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: "rgba(247,244,238,0.75)" }}>
            <p>
              Not a satisfaction guarantee, which means nothing and cannot be measured. A delivery
              guarantee. The site, the profile work, the citation corrections, and the schema are
              all live within sixty days of starting, or you do not pay for that month.
            </p>
            <p>
              I can promise this because delivery is the part I control. What I will not promise
              is a ranking, a lead count, or a date by which ChatGPT starts naming you. Nobody
              can see far enough into those systems to commit to them, and an agency that offers
              you a number is either guessing or counting on you not checking.
            </p>
            <p>
              That distinction is the whole thing, really. Ask anyone pitching you which parts of
              their promise they actually control. It is a short conversation and it tells you
              most of what you need to know.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/visibility-report" className="btn-primary text-base px-8 py-4">
              Start with the Visibility Report
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">
              Ask me something first
            </Link>
          </div>

          <p className="font-sans text-sm mt-6" style={{ color: "rgba(247,244,238,0.5)" }}>
            Pricing is worked out on the report call, once I have seen what your market and your
            current setup actually require. I am not going to put a number here and then change it.
          </p>
        </div>
      </section>
    </>
  );
}
