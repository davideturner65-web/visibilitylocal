import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { leadFormEnabled } from "@/lib/lead";
import { pageMetadata } from "@/lib/seo";
import { orgRef } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Free Market Check for Independent Insurance Agents",
  description:
    "A free one-page snapshot of how your agency shows up when someone in your town looks for an insurance agent: your Google listing, the map pack, and what ChatGPT and Claude say. Back within two business days.",
  path: "/market-check",
});

const faqs = [
  {
    q: "What do I actually get?",
    a: "A one-page written snapshot of your agency, sent by email within two business days. It covers three things: how your Google Business Profile is set up, who holds the map pack for the main searches in your city, and what ChatGPT and Claude answer when asked for an agent in your town. If you ask for the call, we spend fifteen minutes going through it.",
  },
  {
    q: "What does it cost?",
    a: "Nothing, and there is no obligation afterwards. It is the fastest way for both of us to find out whether there is anything worth fixing.",
  },
  {
    q: "Is this a sales call?",
    a: "The call is fifteen minutes and it is about what the snapshot found. If there is work worth doing, we will say what it is and what it costs. If your listing is in good shape, we will tell you that instead, and you will have lost fifteen minutes.",
  },
  {
    q: "What do you need from me?",
    a: "Your agency name, your city, and your website if you have one. Everything in the snapshot is checked from the outside, the way a person searching in your town would see it, so you do not need to give us access to anything.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Free market check",
      serviceType: "Local search snapshot for independent insurance agents",
      provider: orgRef,
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", audienceType: "Independent insurance agents" },
      description:
        "A free one-page snapshot of how an independent insurance agency appears in Google Business Profile, the local map pack, and AI search tools, with an optional fifteen-minute call.",
      url: "https://visibilitylocal.com/market-check",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        url: "https://visibilitylocal.com/market-check",
      },
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

const snapshot = [
  {
    title: "Your Google listing",
    body: "The primary category you are in and the one you should be in, your secondary categories, and how your review count and recency compare with the agents ranking above you.",
  },
  {
    title: "Who holds the map pack",
    body: "The three agencies Google shows for the main searches in your city, and where you sit relative to them. Checked for your town specifically.",
  },
  {
    title: "What the AI tools say",
    body: "The answers ChatGPT and Claude give when asked for an insurance agent in your town: who they name, and which sources they lean on to do it.",
  },
];

export default function MarketCheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="section-label mb-5">Free market check</p>
              <h1 className="font-serif text-5xl lg:text-6xl text-ink leading-tight mb-6">
                See what your town sees when it looks for an agent
              </h1>
              <p className="font-sans text-lg text-ink-2 leading-relaxed mb-8">
                Tell us your agency and your city. Within two business days you get a one-page
                snapshot of how you show up, checked from the outside, the way a person searching
                in your town would see it. Free, and yours to keep whatever you decide.
              </p>

              <div className="space-y-6">
                {snapshot.map((item) => (
                  <div key={item.title} className="border-l-2 border-accent pl-5">
                    <h2 className="font-serif text-xl text-ink mb-1">{item.title}</h2>
                    <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="form" className="bg-paper-2 border border-paper-3 rounded-sm p-6 sm:p-8 scroll-mt-24">
              <LeadForm mode="market" enabled={leadFormEnabled()} />
            </div>
          </div>
        </div>
      </section>

      {/* Rendered from the same array the FAQPage schema is built from, so the two cannot
          drift apart. */}
      <section className="bg-paper-2 border-b border-paper-3 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Questions</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-10">Before you send it</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-serif text-xl text-ink mb-2">{faq.q}</h3>
                <p className="font-sans text-base text-ink-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-sm text-ink-3 mt-12">
            Would rather look for yourself first?{" "}
            <Link href="/scorecard" className="text-accent hover:underline">
              Grade your own listing in ten minutes
            </Link>{" "}
            with the free scorecard, or{" "}
            <Link href="/offer" className="text-accent hover:underline">
              see what working together looks like
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
