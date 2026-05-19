import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Medical Practices | Visibility Local",
  description:
    "Local SEO for private medical practices and specialty clinics. Insurance acceptance, proximity optimization, and HIPAA-compliant review strategy.",
  alternates: {
    canonical: "https://visibilitylocal.com/industries/medical-practices",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://visibilitylocal.com/industries/medical-practices#service",
      name: "Local SEO for Medical Practices",
      description:
        "Google Business Profile optimization, medical directory citation building, and HIPAA-compliant reputation management for private medical practices and specialty clinics.",
      provider: {
        "@type": "LocalBusiness",
        name: "Visibility Local",
        telephone: "(501) 554-2183",
        email: "info@visibilitylocal.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Local SEO",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does HIPAA affect responding to Google reviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HIPAA prohibits confirming or denying that a reviewer was a patient, or sharing any details about their care. When responding to a Google review, you should respond generically without acknowledging the reviewer as a patient, without mentioning any treatment, appointment, or medical details, and without using the reviewer's name in a way that implies a treatment relationship. A standard response like 'We appreciate all feedback and encourage you to contact our office directly' is compliant. We write all review responses for medical practices within these parameters.",
          },
        },
        {
          "@type": "Question",
          name: "What GBP category should a medical practice use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the most specific specialty category available. 'Dentist,' 'Family Practice Physician,' 'Dermatologist,' 'Orthopedic Surgeon,' 'Pediatrician' are all available as GBP categories and should be used as primary over generic categories like 'Medical Clinic' or 'Doctor.' The primary category determines which searches your listing is eligible to appear for. A dermatologist using 'Medical Clinic' as primary is losing visibility for every dermatology-specific search in their market.",
          },
        },
        {
          "@type": "Question",
          name: "Which medical directories are most important for local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The highest-authority medical citation sources are Healthgrades, Zocdoc, WebMD (physician profiles), Vitals, and the US News Health physician directory. Healthgrades in particular ranks independently in search results for physician name searches and often appears before a practice's own website. Your hospital affiliations, if applicable, also generate authoritative citations through hospital directory listings. Many physicians have profiles on all of these platforms but have never claimed or updated them.",
          },
        },
        {
          "@type": "Question",
          name: "How can a private practice compete with large hospital systems in local search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hospital systems have enormous brand authority but poor local search specificity. A private practice with a fully optimized GBP listing using the correct specialty category, complete insurance acceptance information, active review generation, and proximity-focused content can rank above a hospital system's location page for specific searches in its immediate area. Proximity is Google's strongest local ranking signal, and a private practice that is geographically closer to the searcher will generally outrank a hospital system that is further away, provided the practice has equivalent or better optimization.",
          },
        },
      ],
    },
  ],
};

export default function MedicalPracticesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Industries / Medical Practices</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-8 leading-tight">
            Local SEO for Private Medical Practices
          </h1>
          <div className="space-y-5 text-ink-2 font-sans text-lg max-w-3xl">
            <p>
              Patients don't search for doctors the way they search for
              restaurants. They search by specialty, by insurance acceptance,
              and by proximity to home or work. "Dermatologist near me that
              accepts Aetna" is a real search. A practice that doesn't have
              insurance acceptance explicitly stated in its GBP attributes and
              website content is invisible to that search, regardless of how
              close it is to the searcher.
            </p>
            <p>
              Private practices competing against hospital systems face a
              brand authority gap that feels insurmountable until you look at
              how local search actually works. Proximity is Google's strongest
              ranking signal. A private practice that is closer to the searcher
              and has a well-optimized GBP listing will rank above a hospital
              system's location page in most cases. The optimization work is
              what closes the gap between being close and being visible.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Challenge section */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">The Challenge</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">
            Three problems medical practices face in local search
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Insurance acceptance isn't stated anywhere searchable
              </h3>
              <p className="font-sans text-ink-2 text-base">
                "Dentist near me that accepts Delta Dental" is a real search
                query. It filters by insurance before it filters by anything
                else. A practice that accepts Delta Dental but doesn't list it
                as a GBP attribute and doesn't mention it on a website page is
                invisible to that search. Insurance acceptance belongs in GBP
                attributes, in website content, and in the meta description.
                This single gap causes significant invisible patient loss for
                most practices.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Generic GBP category suppresses specialty searches
              </h3>
              <p className="font-sans text-ink-2 text-base">
                A dermatologist using "Medical Clinic" as their GBP primary
                category is not appearing for dermatology-specific searches. A
                pediatrician using "Doctor" is missing pediatric searches.
                Google's specialty categories for medical practices are specific
                and correct, and using the right one is the difference between
                appearing in specialty searches and being absent from them. Most
                practices have the wrong category because no one corrected the
                default when the listing was created.
              </p>
            </div>
            <div className="bg-paper p-8 border border-paper-3">
              <h3 className="font-serif text-xl text-ink mb-4">
                Review gap against hospital systems is solvable
              </h3>
              <p className="font-sans text-ink-2 text-base">
                A hospital system's location might have 400 reviews accumulated
                over many years. A private practice with a systematic review
                request process can accumulate 80 to 120 reviews per year from
                satisfied patients. Star rating matters more than review count
                for patient decisions: 4.8 stars at 90 reviews converts better
                than 4.1 stars at 400 reviews. The rating difference is the
                addressable gap, and it starts with a review request process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Services</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-4">
            What we do for medical practices
          </h2>
          <p className="font-sans text-ink-2 text-lg mb-12 max-w-2xl">
            Medical local search requires specific handling around HIPAA
            compliance, insurance data, specialty categorization, and the
            patient trust signals that precede a first appointment. Here's
            how each service applies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/google-business-profile",
                title: "Google Business Profile",
                desc: "Specialty category correction, insurance acceptance attributes, appointment link integration, photo optimization, and a posting cadence with HIPAA-compliant content.",
              },
              {
                href: "/services/local-seo",
                title: "Local SEO",
                desc: "On-page optimization for specialty searches, insurance-specific content, neighborhood proximity optimization, and condition or procedure pages targeting local patient searches.",
              },
              {
                href: "/services/ai-search-visibility",
                title: "AI Search Visibility",
                desc: "Entity establishment across Healthgrades, Zocdoc, WebMD, and medical publications so AI tools cite your practice when patients ask for local specialist recommendations.",
              },
              {
                href: "/services/citations",
                title: "Citations & NAP",
                desc: "Audit and cleanup across medical-specific directories, with Healthgrades, Zocdoc, and hospital affiliation directories treated as priority citation sources.",
              },
              {
                href: "/services/content",
                title: "Local Content",
                desc: "Condition pages, procedure pages, insurance acceptance pages, and neighborhood proximity content. Written to serve patient search intent and built to rank locally.",
              },
              {
                href: "/services/reputation",
                title: "Reputation Management",
                desc: "HIPAA-compliant review generation system and response templates. Patient satisfaction surveys are a natural review request mechanism that most practices already have but don't connect to Google.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-paper-2 border border-paper-3 p-6 hover:border-gold transition-colors group"
              >
                <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans text-ink-3 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Tactics section */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Industry-Specific Tactics</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">
            What actually moves the needle for medical practices
          </h2>
          <div className="space-y-10">
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                State insurance acceptance explicitly and visibly
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Insurance acceptance is a primary search filter for patients
                choosing a provider. It should appear in your GBP attributes
                (where Google allows specific insurance providers to be listed),
                on a dedicated insurance page on your website, and mentioned
                explicitly in your GBP description. A patient who filters by
                "accepts [insurance name]" is a self-qualified lead. Capture
                them before they go to a practice that states its insurance
                acceptance more clearly.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Use the most specific specialty GBP category available
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Google has specific GBP categories for dozens of medical
                specialties. "Dermatologist," "Pediatrician," "Orthopedic
                Surgeon," "Family Practice Physician" each surface in different
                search results. Using the correct specialty category is the
                difference between appearing for specialty searches and being
                absent from them. This is often the single highest-leverage
                change in a medical practice GBP optimization because it
                immediately opens specialty search surfaces that generic
                categories cannot access.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                Claim and complete Healthgrades before anything else
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Healthgrades ranks on the first page of Google for most
                physician name searches. An unclaimed Healthgrades profile
                shows a physician's name with whatever information Healthgrades
                has scraped from public sources, which is often incomplete,
                outdated, or attached to a former employer's address. Claiming
                the profile, correcting the information, adding a current website
                link, and actively managing reviews on the platform is an
                immediate and lasting win that requires no ongoing technical work.
              </p>
            </div>
            <div className="bg-paper p-8 border-l-4 border-gold">
              <h3 className="font-serif text-2xl text-ink mb-4">
                HIPAA-compliant review responses are generic by design
              </h3>
              <p className="font-sans text-ink-2 text-base leading-relaxed">
                Responding to Google reviews without confirming anyone is a
                patient requires generic language. "We appreciate all feedback"
                and "We encourage you to contact our office directly" are
                compliant and still signal to prospective patients that you're
                engaged and responsive. The alternative, not responding at all,
                signals indifference. We write all review responses for medical
                practices within HIPAA parameters, so you get the trust benefit
                of active engagement without compliance exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">FAQ</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-12">
            Common questions from medical practices
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How does HIPAA affect responding to Google reviews?",
                a: "HIPAA prohibits confirming or denying that a reviewer was a patient or sharing any details about their care. Responses must be generic: don't acknowledge the reviewer as a patient, don't mention treatment details, and don't use language that implies a treatment relationship. A response like 'We appreciate all feedback and encourage you to contact our office directly' is compliant. We write all medical practice review responses within these parameters.",
              },
              {
                q: "What GBP category should a medical practice use?",
                a: "Use the most specific specialty category available: 'Dentist,' 'Family Practice Physician,' 'Dermatologist,' 'Orthopedic Surgeon,' 'Pediatrician.' Do not use generic categories like 'Medical Clinic' or 'Doctor' if a specialty-specific category exists. The primary category determines which searches your listing is eligible to appear for, and specialty categories access specialty searches that generic categories cannot reach.",
              },
              {
                q: "Which medical directories are most important for local SEO?",
                a: "Healthgrades, Zocdoc, WebMD (physician profiles), Vitals, and the US News Health physician directory are the highest-authority sources. Healthgrades in particular ranks independently in search results for physician name searches and often appears before your own website. Hospital affiliation directories add authoritative citations if applicable. Many physicians have profiles on all of these platforms but have never claimed or updated them.",
              },
              {
                q: "How can a private practice compete with large hospital systems in local search?",
                a: "Proximity is Google's strongest local ranking signal. A private practice closer to the searcher with a well-optimized GBP will rank above a hospital system's location page for local searches in most cases. Hospital systems have brand authority but poor local search specificity. A private practice with the correct specialty category, explicit insurance acceptance information, strong review rating, and proximity-focused content closes that gap effectively.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-paper-3 pb-8">
                <h3 className="font-serif text-xl text-ink mb-4">{faq.q}</h3>
                <p className="font-sans text-ink-2 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="bg-paper-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Related Industries</p>
          <h2 className="font-serif text-4xl text-ink mt-4 mb-10">
            Related professional services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/industries/attorneys",
                title: "Attorneys",
                desc: "Legal professionals in the same high-trust, high-stakes local search environment, with overlapping referral networks.",
              },
              {
                href: "/industries/home-services",
                title: "Home Services",
                desc: "Service businesses competing in local search with the same urgency-driven search patterns that drive medical appointment searches.",
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-paper border border-paper-3 p-6 hover:border-gold transition-colors group"
              >
                <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {r.title}
                </h3>
                <p className="font-sans text-ink-3 text-sm">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-gold">Get Started</p>
          <h2 className="font-serif text-4xl text-paper mt-4 mb-6">
            One practice per market
          </h2>
          <p className="font-sans text-paper/80 text-lg mb-10">
            We work with one medical practice per specialty per geographic
            market. If your area is open, we can begin with a GBP audit and a
            competitor visibility analysis this week. Call (501) 554-2183 or
            send a message.
          </p>
          <Link href="/contact" className="btn-primary">
            Check availability in your market
          </Link>
        </div>
      </section>
    </>
  );
}
