import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Local SEO Audit | Visibility Local",
  description:
    "Request a free local SEO and Google Business Profile audit. One client per market — check if your spot is available.",
  alternates: { canonical: "https://visibilitylocal.com/contact" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Visibility Local",
      description:
        "Local SEO and AI search visibility consulting for independent professionals. One client per market.",
      url: "https://visibilitylocal.com",
      telephone: "(501) 554-2183",
      email: "info@visibilitylocal.com",
      founder: { "@type": "Person", name: "David Turner" },
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@type": "ContactPage",
      name: "Free Local SEO Audit Request",
      url: "https://visibilitylocal.com/contact",
      description:
        "Request a free local SEO and Google Business Profile audit from Visibility Local.",
    },
  ],
};

const nextSteps = [
  {
    number: "01",
    title: "We review your current visibility",
    description:
      "GBP setup, citation profile, map pack positions, and what competitors in your market are doing right that you aren't. We look at all of it before we talk.",
  },
  {
    number: "02",
    title: "You get a straight answer",
    description:
      "If your market is already taken, we'll say so. If it's open, we'll walk through what the work actually looks like, what to expect in the first 90 days, and where the biggest gaps are.",
  },
  {
    number: "03",
    title: "If it's a fit, we get started",
    description:
      "No retainer treadmill. Clear scope, clear deliverables, clear timeline. You know exactly what you're paying for before anything is signed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Free Audit Request</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Your market may already<br />
              <span className="italic text-gold">be taken.</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4">
              A free audit takes about 20 minutes. We look at your Google Business Profile, citation profile, and current map pack visibility. If your market is open and it looks like a fit, we'll talk about what working together looks like.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed">
              No pitch deck. No proposal theater.
            </p>
          </div>

          {/* Urgency note */}
          <div className="mt-8 inline-flex items-start gap-3 bg-paper-2 border border-paper-3 rounded-sm px-5 py-4 max-w-lg">
            <div className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
            <p className="font-sans text-sm text-ink-2 leading-relaxed">
              <span className="font-semibold text-ink">Visibility Local works with one client per market.</span>{" "}
              Check availability while your market is open.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">Request Your Audit</p>
              <div className="divider-gold" />

              <form
                action="https://formspree.io/f/xpzgdwrn"
                method="POST"
                className="mt-8 space-y-6"
              >
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                    >
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                    >
                      Last Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                  >
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="you@yourfirm.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>

                {/* Business name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                  >
                    Business / Practice Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="Your business name"
                  />
                </div>

                {/* Industry + Market row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="industry"
                      className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                    >
                      <option value="">Select your industry</option>
                      <option value="Insurance Agent">Insurance Agent</option>
                      <option value="Mortgage Broker">Mortgage Broker</option>
                      <option value="CPA Firm">CPA Firm</option>
                      <option value="Financial Advisor">Financial Advisor</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Attorney">Attorney</option>
                      <option value="Medical Practice">Medical Practice</option>
                      <option value="Home Services">Home Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="market"
                      className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                    >
                      City / Market
                    </label>
                    <input
                      type="text"
                      id="market"
                      name="market"
                      className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Phoenix, AZ"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm font-medium text-ink-2 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-paper border border-paper-3 rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Tell me a bit about your business and what you're trying to accomplish with local search."
                  />
                </div>

                <button type="submit" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
                  Request Free Audit
                </button>

                <p className="font-sans text-xs text-ink-4 leading-relaxed">
                  By submitting this form you agree to be contacted about your audit request. No spam. No list adds without permission.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">

              {/* Contact details */}
              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="section-label mb-4">Contact</p>
                <div className="divider-gold" />
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <p className="font-sans text-xs text-ink-4 uppercase tracking-wide mb-0.5">Phone</p>
                      <a href="tel:+15015542183" className="font-sans text-sm text-ink-2 hover:text-ink transition-colors">
                        (501) 554-2183
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="font-sans text-xs text-ink-4 uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:info@visibilitylocal.com" className="font-sans text-sm text-ink-2 hover:text-ink transition-colors">
                        info@visibilitylocal.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Related links */}
              <div className="bg-paper border border-paper-3 rounded-sm p-6">
                <p className="section-label mb-4">Learn More</p>
                <div className="divider-gold" />
                <div className="mt-4 space-y-3">
                  <Link
                    href="/industries/insurance-agents"
                    className="flex items-center gap-2 font-sans text-sm text-ink-2 hover:text-gold transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 text-ink-4 group-hover:text-gold transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    SEO for Insurance Agents
                  </Link>
                  <Link
                    href="/services/google-business-profile"
                    className="flex items-center gap-2 font-sans text-sm text-ink-2 hover:text-gold transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 text-ink-4 group-hover:text-gold transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    Google Business Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">After You Submit</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-4">
              What happens next
            </h2>
            <p className="font-sans text-base text-ink-2 leading-relaxed">
              Three steps. No ambiguity about where you are in the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-5">
                  <span className="font-serif text-4xl text-gold-light leading-none shrink-0 select-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink mb-2">{step.title}</h3>
                    <p className="font-sans text-sm text-ink-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
