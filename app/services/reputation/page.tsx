import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reputation Management & Review Generation | Visibility Local",
  description:
    "Review generation and reputation management for local professionals. Consistent reviews improve local rankings and build trust before the first call.",
  alternates: { canonical: "https://visibilitylocal.com/services/reputation" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Reputation Management and Review Generation",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Review generation systems and reputation management for local professionals. Consistent reviews improve local rankings and build trust before clients make the call.",
      url: "https://visibilitylocal.com/services/reputation",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many reviews do I need to rank in the map pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no fixed number. Google weights review velocity and recency more than total count. A business receiving 2 to 3 reviews per month consistently will often outrank one with 80 reviews from three years ago and none since. Getting 10 reviews and stopping is worse than getting 2 per month indefinitely.",
          },
        },
        {
          "@type": "Question",
          name: "Is it against Google's rules to ask clients for reviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Google explicitly allows businesses to ask clients for reviews. What Google prohibits is incentivizing reviews with discounts or gifts, and review gating (only sending review requests to clients you believe will leave positive reviews). Asking satisfied clients to share their experience is fully within the rules.",
          },
        },
        {
          "@type": "Question",
          name: "How should I respond to a negative review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Respond quickly, professionally, and without specifics. Acknowledge the concern, apologize for a poor experience, and invite them to contact you directly to resolve it. Do not get defensive. Do not include details that could confirm the reviewer as a client (important for HIPAA-regulated businesses). A well-handled negative response often reads as more trustworthy than a business with nothing but 5-star reviews.",
          },
        },
        {
          "@type": "Question",
          name: "Do reviews on Yelp and Facebook help my Google ranking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google is the priority and where most local ranking impact is felt. But Yelp, Facebook, and industry-specific platforms (Avvo for attorneys, Healthgrades for medical) feed into your overall authority signals and appear in search results for your business name. A strong review profile across multiple platforms contributes to the entity authority that affects both Google rankings and AI search recommendations.",
          },
        },
      ],
    },
  ],
};

const deliverables = [
  {
    title: "Review request system",
    desc: "A timing-optimized process for requesting reviews within 48 hours of a positive client interaction, when satisfaction is highest and the ask feels natural.",
  },
  {
    title: "Direct review links",
    desc: "Most clients won't find your Google review page on their own. We create and distribute a direct link that takes them straight to the review form with zero friction.",
  },
  {
    title: "Response templates",
    desc: "Professional, on-brand response templates for positive and negative reviews. Responding to reviews is a ranking signal. Most businesses don't respond at all.",
  },
  {
    title: "Platform strategy",
    desc: "Google is the priority, but Yelp, Facebook, and industry directories (Avvo, Healthgrades, Avvo) also matter. We identify which secondary platforms are highest-leverage for your industry.",
  },
  {
    title: "Review monitoring",
    desc: "Alerts for new reviews across platforms so nothing goes unresponded. A negative review sitting unanswered for two weeks does more damage than the review itself.",
  },
  {
    title: "Velocity tracking",
    desc: "Monthly review counts tracked against competitors in your market. If a competitor is pulling ahead on review velocity, you'll know before it affects your ranking.",
  },
];

const faqs = [
  {
    q: "How many reviews do I need to rank in the map pack?",
    a: "There is no fixed number. Google weights review velocity and recency more than total count. A business receiving 2 to 3 reviews per month consistently will often outrank one with 80 reviews from three years ago and none since. Getting 10 reviews and stopping is worse than getting 2 per month indefinitely.",
  },
  {
    q: "Is it against Google's rules to ask clients for reviews?",
    a: "No. Google explicitly allows businesses to ask clients for reviews. What Google prohibits is incentivizing reviews with discounts or gifts, and review gating. Asking satisfied clients to share their experience is fully within the rules.",
  },
  {
    q: "How should I respond to a negative review?",
    a: "Respond quickly, professionally, and without specifics. Acknowledge the concern, apologize for a poor experience, and invite them to contact you directly to resolve it. Do not get defensive. A well-handled negative response often reads as more trustworthy than a business with nothing but 5-star reviews.",
  },
  {
    q: "Do reviews on Yelp and Facebook help my Google ranking?",
    a: "Google is the priority. But Yelp, Facebook, and industry-specific platforms also appear in search results for your business name and contribute to overall entity authority signals. A strong review profile across multiple platforms reinforces your credibility to both Google and AI search tools.",
  },
];

const relatedServices = [
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Citations & NAP", href: "/services/citations" },
];

const relatedIndustries = [
  { label: "Medical Practices", href: "/industries/medical-practices" },
  { label: "Attorneys", href: "/industries/attorneys" },
  { label: "Home Services", href: "/industries/home-services" },
];

export default function ReputationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Service</p>
            <h1 className="font-serif text-5xl lg:text-6xl text-ink mb-6">
              Reputation Management
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4">
              Review velocity signals to Google that your business is active, trusted, and
              worth recommending. A business that earns 3 reviews a month consistently will
              outrank one with 60 old reviews and nothing recent. Most businesses treat reviews
              as something that happens to them. We build the system that makes it happen for you.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed mb-8">
              The same review profile that improves your local ranking also builds trust before
              the first call. A prospect who finds your business with 4.9 stars and a dozen
              thoughtful responses decides differently than one who finds three reviews from 2021
              and silence.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Check your market
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl mb-12">
            <p className="section-label mb-4">What&apos;s included</p>
            <h2 className="font-serif text-4xl text-ink">
              A system, not a one-time ask.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d) => (
              <div key={d.title} className="bg-paper border border-paper-3 rounded-sm p-6">
                <div className="divider-gold" />
                <h3 className="font-serif text-xl text-ink mb-2">{d.title}</h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl mb-12">
            <p className="section-label mb-4">Why reviews move rankings</p>
            <h2 className="font-serif text-4xl text-ink">
              Recency beats volume. Velocity beats both.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <div className="divider-gold" />
              <h3 className="font-serif text-2xl text-ink mb-3">48-hour timing matters</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                The best time to ask for a review is within 48 hours of a positive client interaction.
                Satisfaction is at its peak, the experience is fresh, and clients are most likely to
                follow through. Waiting a week drops completion rates significantly. Most businesses
                either wait too long or never ask at all.
              </p>
            </div>
            <div>
              <div className="divider-gold" />
              <h3 className="font-serif text-2xl text-ink mb-3">Responses are a ranking signal</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                Google rewards active business profiles. Responding to reviews, positive and negative,
                signals that the business is engaged and legitimate. Response rate shows up in GBP
                quality metrics. Businesses that never respond look abandoned to both Google and
                prospective clients reading the profile.
              </p>
            </div>
            <div>
              <div className="divider-gold" />
              <h3 className="font-serif text-2xl text-ink mb-3">Negative reviews handled right convert</h3>
              <p className="font-sans text-sm text-ink-2 leading-relaxed">
                A business with 4.6 stars and professional responses to critical reviews often converts
                better than one with 5.0 stars and zero substantive responses. Prospects know perfect
                scores mean no one is asking. A business that handles criticism gracefully demonstrates
                how they&apos;ll handle problems in the actual relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl mb-10">
            <p className="section-label mb-4">Questions</p>
            <h2 className="font-serif text-4xl text-ink">Common questions about reviews.</h2>
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

      {/* Related */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="section-label mb-4">Related services</p>
              <div className="space-y-2">
                {relatedServices.map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-2 font-sans text-sm text-ink-2 hover:text-gold transition-colors py-1">
                    <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Industries we serve</p>
              <div className="space-y-2">
                {relatedIndustries.map((ind) => (
                  <Link key={ind.href} href={ind.href} className="flex items-center gap-2 font-sans text-sm text-ink-2 hover:text-gold transition-colors py-1">
                    <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {ind.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "#c8922a" }}>One client per market</p>
            <h2 className="font-serif text-4xl text-paper mb-4">
              Check if your market is available.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit shows you exactly where your review profile stands relative to
              competitors in your market, and what it would take to close the gap.
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
