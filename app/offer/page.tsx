import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { MONTHLY_PRICE, SETUP_FEE, orgRef } from "@/lib/site";

export const metadata = pageMetadata({
  title: "How the Work Runs",
  description:
    "What the engagement actually is: one setup fee, one flat monthly fee, no minimum term, you own the domain and the site from day one, and the buildout ships within 60 days or that month is free.",
  path: "/offer",
});

// Both numbers are set in lib/site.ts. Until they are, the page says they come on the call.
const priceIsPublished = Boolean(MONTHLY_PRICE && SETUP_FEE);

const faqs = [
  {
    q: "What does it cost?",
    a: priceIsPublished
      ? `${SETUP_FEE} once for the buildout, then ${MONTHLY_PRICE} a month. That covers everything on this page. There are no tiers and no add-ons you need in order to make it work.`
      : "One setup fee for the buildout, then one flat monthly fee that covers everything on this page. There are no tiers. You get both numbers on the market check call, before you agree to anything.",
  },
  {
    q: "What happens if I cancel?",
    a: "The monthly work stops at the end of the month you have paid for. The domain, the hosting account and the website were registered to you from the start, so they stay exactly where they are and keep working.",
  },
  {
    q: "Will you also work with other agents in my city?",
    a: "We may. We do not promise exclusivity as standard, and we would rather say so here than let you assume it. If you want your city reserved for your lines of business, ask on the call. We can agree to that in writing where the market is still open, and we will tell you if it is not.",
  },
  {
    q: "I already have a website. Do you have to rebuild it?",
    a: "Not always. If you own the domain and the site can be fixed, we fix it. If it is a shared template or sits on a domain you do not control, a rebuild on a domain in your name is usually the better answer, and we will show you why before recommending it.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No. We guarantee delivery, because that is the part we control. Nobody outside Google or the AI companies can promise a ranking, a lead count, or a date by which ChatGPT starts naming you.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Local search and AI visibility management for independent insurance agents",
      provider: orgRef,
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "Audience",
        audienceType: "Independent insurance agents",
      },
      description:
        "Ongoing management of Google Business Profile, website, citations and NAP data, structured data and AI search visibility, monthly content, review generation and monthly reporting, for independent insurance agents. No minimum term.",
      url: "https://visibilitylocal.com/offer",
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

const system = [
  {
    title: "Google Business Profile",
    body: "Categories, services, service areas, photos, weekly posts, review responses. The profile is the single biggest lever in local search and it needs attention every month, not once at setup.",
  },
  {
    title: "Your website",
    body: "Built or rebuilt, on a domain registered in your name. Fast, structured properly, and written about your agency and your city, so it reads like nobody else's site.",
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
    body: "What moved, what did not, and what we did about it. Sent whether or not the month was good.",
  },
];

const terms = [
  {
    title: "One price",
    body: priceIsPublished
      ? `${SETUP_FEE} once for the buildout, then ${MONTHLY_PRICE} a month for everything above. No tiers, and no add-ons you need in order to make it work.`
      : "One setup fee for the buildout, then one flat monthly fee for everything above. No tiers, and no add-ons you need in order to make it work. You get both numbers on the market check call, before you agree to anything.",
  },
  {
    title: "No minimum term",
    body: "Cancel any month. There is no twelve-month contract, no early termination fee, and no clause that turns leaving into a negotiation. If the work is worth paying for you will keep paying for it, and if it is not you should stop.",
  },
  {
    title: "You own everything, from day one",
    body: "The domain is registered in your name. The hosting account is in your name. The site is yours. If we stop working together, you take all of it and nothing breaks.",
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
              One offer. A buildout in the first sixty days, then seven things run every month.
              One setup fee and one flat monthly fee. No contract, and you own the assets. And a
              delivery guarantee you can hold us to.
            </p>
          </div>
        </div>
      </section>

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
              <div key={term.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-2xl text-ink mb-3">{term.title}</h3>
                <p className="font-sans text-base text-ink-2 leading-relaxed">{term.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">The guarantee</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-paper mt-4 mb-6">
            Everything in the buildout ships within 60 days, or that month is free
          </h2>
          <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            <p>
              Not a satisfaction guarantee, which cannot be measured. A delivery guarantee. The
              site, the profile work, the citation corrections, and the schema are all live
              within sixty days of starting, or you do not pay for that month.
            </p>
            <p>
              We can promise this because delivery is the part we control. What we will not promise
              is a ranking, a lead count, or a date by which ChatGPT starts naming you. Nobody
              can see far enough into those systems to commit to them, and an agency that offers
              you a number is either guessing or counting on you not checking.
            </p>
            <p>
              Ask anyone pitching you which parts of their promise they actually control. It is a
              short conversation and it tells you most of what you need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Rendered from the same array the FAQPage schema is built from. */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Questions</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-10">Before you start</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-serif text-xl text-ink mb-2">{faq.q}</h3>
                <p className="font-sans text-base text-ink-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/market-check" className="btn-primary text-base px-8 py-4">
              Check my market, free
            </Link>
            <Link href="/contact" className="btn-outline-accent text-base px-8 py-4">
              Ask us something first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
