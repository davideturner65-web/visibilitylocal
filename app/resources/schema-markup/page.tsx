import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schema Markup for Local Businesses: Complete Guide | Visibility Local",
  description:
    "How to implement schema markup for local business SEO and AI search visibility. LocalBusiness, Service, FAQPage, and Person schema for independent professionals.",
  alternates: { canonical: "https://visibilitylocal.com/resources/schema-markup" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Schema Markup for Local Businesses: Complete Guide",
      author: { "@type": "Person", name: "David Turner" },
      publisher: {
        "@type": "Organization",
        name: "Visibility Local",
        url: "https://visibilitylocal.com",
      },
      url: "https://visibilitylocal.com/resources/schema-markup",
      description:
        "How to implement schema markup for local business SEO and AI search visibility. LocalBusiness, Service, FAQPage, and Person schema for independent professionals.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does schema markup directly improve my Google ranking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schema markup does not directly add ranking points in Google's algorithm the way links or content quality do. What it does is make your content and entity data more legible to Google's crawlers and AI systems. This legibility has practical ranking effects: better entity recognition, eligibility for rich results that increase CTR, and improved AI search citation. Think of schema as removing ambiguity rather than adding authority.",
          },
        },
        {
          "@type": "Question",
          name: "What is JSON-LD and how do I add it to my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JSON-LD (JavaScript Object Notation for Linked Data) is the format Google recommends for schema markup. It is a block of structured JSON code added inside a script tag in your page's head or body HTML. In Next.js, this is typically added as a script tag with type='application/ld+json' and dangerouslySetInnerHTML containing your JSON schema object. In WordPress, plugins like Yoast SEO or RankMath handle some schema automatically, but manual JSON-LD blocks give you more control.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most important schema type for a local business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LocalBusiness (or its relevant subtype) is the most important schema type for establishing your entity with Google and AI tools. It confirms your name, address, phone, hours, and service area in machine-readable format. After LocalBusiness, FAQPage is the highest-leverage schema type specifically for AI search visibility, because it structures your answers in the exact format AI tools prefer for citation.",
          },
        },
        {
          "@type": "Question",
          name: "How do I test if my schema markup is working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Google's Rich Results Test (search.google.com/test/rich-results) to test any URL for schema markup. It shows which schema types were found, what data was extracted, and any errors or warnings. For a general schema validity check, use the Schema.org Markup Validator (validator.schema.org). Test your key pages, your homepage, your primary service page, and any pages with FAQ content, after adding or changing schema.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Does schema markup directly improve my Google ranking?",
    a: "Schema markup does not directly add ranking points in Google's algorithm the way links or content quality do. What it does is make your content and entity data more legible to Google's crawlers and AI systems. This legibility has practical ranking effects: better entity recognition, eligibility for rich results that increase CTR, and improved AI search citation. Think of schema as removing ambiguity rather than adding authority.",
  },
  {
    q: "What is JSON-LD and how do I add it to my website?",
    a: "JSON-LD (JavaScript Object Notation for Linked Data) is the format Google recommends for schema markup. It is a block of structured JSON code added inside a script tag in your page's head or body HTML. In Next.js, this is typically added as a script tag with type='application/ld+json' and dangerouslySetInnerHTML containing your JSON schema object. In WordPress, plugins like Yoast SEO or RankMath handle some schema automatically, but manual JSON-LD blocks give you more control.",
  },
  {
    q: "What is the most important schema type for a local business?",
    a: "LocalBusiness (or its relevant subtype) is the most important schema type for establishing your entity with Google and AI tools. It confirms your name, address, phone, hours, and service area in machine-readable format. After LocalBusiness, FAQPage is the highest-leverage schema type specifically for AI search visibility, because it structures your answers in the exact format AI tools prefer for citation.",
  },
  {
    q: "How do I test if my schema markup is working?",
    a: "Use Google's Rich Results Test (search.google.com/test/rich-results) to test any URL for schema markup. It shows which schema types were found, what data was extracted, and any errors or warnings. For a general schema validity check, use the Schema.org Markup Validator (validator.schema.org). Test your key pages, your homepage, your primary service page, and any pages with FAQ content, after adding or changing schema.",
  },
];

const localBusinessExample = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Your Business Name",
  "url": "https://yourbusiness.com",
  "telephone": "(555) 555-0100",
  "email": "info@yourbusiness.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street, Suite 100",
    "addressLocality": "Your City",
    "addressRegion": "AR",
    "postalCode": "72201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.7465,
    "longitude": -92.2896
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "Your City"
  },
  "priceRange": "$$"
}`;

const faqExample = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer free consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Initial consultations are free and carry no obligation."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Your City and the surrounding region including [neighboring communities]."
      }
    }
  ]
}`;

const personExample = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Professional Title",
  "url": "https://yourbusiness.com/about",
  "email": "you@yourbusiness.com",
  "telephone": "(555) 555-0100",
  "worksFor": {
    "@type": "Organization",
    "name": "Your Business Name",
    "url": "https://yourbusiness.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Your City",
    "addressRegion": "AR",
    "addressCountry": "US"
  }
}`;

const schemaTypes = [
  {
    type: "LocalBusiness / ProfessionalService",
    priority: "Essential",
    use: "Your homepage and primary landing page. Establishes the core entity: business name, address, phone, hours, service area.",
    required: ["name", "url", "telephone", "address", "areaServed"],
    subtypes: "ProfessionalService covers most independent professionals. More specific subtypes: Attorney, Physician, FinancialService, InsuranceAgency, LegalService.",
  },
  {
    type: "Service",
    priority: "Important",
    use: "Each service page. Tells Google and AI tools exactly what you offer, who provides it, and where.",
    required: ["name", "provider", "areaServed", "description"],
    subtypes: "No specific subtypes required. Use the generic Service type with a detailed description.",
  },
  {
    type: "FAQPage",
    priority: "High leverage for AI",
    use: "Any page with Q&A content. The single most direct schema type for AI search citation. Structures your answers for machine extraction.",
    required: ["mainEntity (array of Question/Answer pairs)"],
    subtypes: "N/A. Always use FAQPage as the parent type with Question and acceptedAnswer markup inside.",
  },
  {
    type: "Person",
    priority: "Important for solo practitioners",
    use: "About page. Establishes the professional person entity, connecting it to the business entity. Important for named professionals who are the primary trust signal.",
    required: ["name", "jobTitle", "url", "worksFor"],
    subtypes: "N/A. Use Person with specific professional attributes like hasCredential or memberOf for certifications and associations.",
  },
];

export default function SchemaMarkupGuidePage() {
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
            <p className="section-label mb-5">Guide</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Schema markup for{" "}
              <span className="italic text-gold">local businesses</span>
            </h1>
            <p className="font-sans text-lg text-ink-2 leading-relaxed mb-4 max-w-2xl">
              Schema markup is structured data that tells search engines and AI tools explicitly what your website content means. Without it, a machine reading your website has to infer whether the text in your header is a business name or a tagline, whether the number in your footer is a phone or a fax, whether the list on your services page is a menu or a product catalog.
            </p>
            <p className="font-sans text-base text-ink-3 leading-relaxed max-w-xl">
              With schema, you hand those machines a labeled dataset. For local businesses competing for AI tool recommendations, schema markup is the most direct technical action available. Most local businesses have zero schema on their websites. The ones that do have a structural advantage in AI search citation that will compound over time.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Why local businesses benefit more than most
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  AI tools are building knowledge graphs of real-world entities. When you ask ChatGPT or Perplexity about a local professional, those tools are not browsing the web fresh. They are drawing from knowledge graphs built from structured data, authoritative citations, and indexed content. Schema markup is the most direct way to insert your entity data into those knowledge graphs.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  National brands with large IT teams and content operations have been implementing schema markup for years. Local independent professionals typically have none. The gap is real and, in most markets, still wide open. An independent attorney with proper LocalBusiness, Service, FAQPage, and Person schema on their website is technically superior to the majority of their local competitors from an AI search perspective, regardless of domain authority or link profile.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  The other reason local businesses benefit disproportionately from schema: local entity data is less ambiguous when it is structured. A law firm in a small city has a unique name, a specific address, and a specific practice area. Schema markup makes that uniqueness machine-readable in a way that helps AI tools distinguish and confidently recommend your entity from others with similar names or service descriptions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SCHEMA TYPES */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="section-label mb-4">The four types that matter</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-10">
              Start with these before anything else.
            </h2>
            <div className="space-y-6">
              {schemaTypes.map((item) => (
                <div key={item.type} className="bg-paper-2 border border-paper-3 rounded-sm p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-2xl text-ink">{item.type}</h3>
                    <span className="font-sans text-xs font-semibold text-gold uppercase tracking-wide bg-gold/10 px-3 py-1 rounded-full shrink-0">
                      {item.priority}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="font-sans text-xs font-semibold text-ink-4 uppercase tracking-wide mb-1">Where to use it</p>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.use}</p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-ink-4 uppercase tracking-wide mb-1">Required fields</p>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.required.join(", ")}</p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-ink-4 uppercase tracking-wide mb-1">Subtypes and notes</p>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.subtypes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CODE EXAMPLES */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="section-label mb-4">Code examples</p>
            <div className="divider-gold" />
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-10">
              Working JSON-LD templates.
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-2xl text-ink mb-4">LocalBusiness / ProfessionalService</h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed mb-4">
                  Add this to your homepage and primary landing pages. Replace placeholder values with your actual business data. Ensure the address format matches your GBP exactly.
                </p>
                <div className="bg-ink rounded-sm p-6 overflow-x-auto">
                  <pre className="font-mono text-xs text-paper leading-relaxed whitespace-pre">{localBusinessExample}</pre>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-ink mb-4">FAQPage</h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed mb-4">
                  Add this to any page with FAQ content. Include as many Question/Answer pairs as you have real FAQs on the page. Do not add questions in schema that do not appear as visible content on the page.
                </p>
                <div className="bg-ink rounded-sm p-6 overflow-x-auto">
                  <pre className="font-mono text-xs text-paper leading-relaxed whitespace-pre">{faqExample}</pre>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-ink mb-4">Person (for solo practitioners)</h3>
                <p className="font-sans text-sm text-ink-2 leading-relaxed mb-4">
                  Add this to your about page. The Person schema connects the individual professional entity to the business entity. This matters for AI tools that prioritize named, credentialed professionals in local recommendations.
                </p>
                <div className="bg-ink rounded-sm p-6 overflow-x-auto">
                  <pre className="font-mono text-xs text-paper leading-relaxed whitespace-pre">{personExample}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISTAKES + INDUSTRY */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Common mistakes that make schema worthless
              </h2>
              <div className="space-y-5">
                {[
                  {
                    mistake: "Using Organization instead of LocalBusiness",
                    fix: "Organization is a generic type. LocalBusiness and its subtypes (ProfessionalService, Attorney, Physician, etc.) are what Google uses for local entity recognition. Using Organization means your schema is technically valid but misses the local signals entirely.",
                  },
                  {
                    mistake: "Missing required fields in LocalBusiness",
                    fix: "The minimum required fields for LocalBusiness are name, url, and telephone. Omitting these means the schema either fails validation or provides too little data to be useful. Address is technically optional in schema but practically required for local entity recognition.",
                  },
                  {
                    mistake: "Adding FAQPage schema for questions that are not on the page",
                    fix: "Google's guidelines require that schema markup reflects content that is actually visible on the page. Adding FAQPage schema for questions that exist only in the schema code and not in the visible page content violates guidelines and can trigger manual actions. Every question in your FAQPage schema must appear as visible text on the page.",
                  },
                  {
                    mistake: "Inconsistent address format between schema and GBP",
                    fix: "If your GBP says '123 Main Street, Suite 100' and your schema says '123 Main St #100,' that inconsistency is a data quality signal Google can read. Use identical formatting across your schema, your GBP, and your website's visible NAP content.",
                  },
                  {
                    mistake: "Never testing the implementation",
                    fix: "Schema markup errors are common and silent. A missing comma in JSON-LD breaks the entire block. Run every page you add schema to through Google's Rich Results Test before considering it done. A schema block with a syntax error provides exactly zero benefit.",
                  },
                ].map((item) => (
                  <div key={item.mistake} className="border-l-2 border-gold pl-5">
                    <p className="font-sans text-sm font-semibold text-ink mb-2">{item.mistake}</p>
                    <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                Industry-specific schema notes
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  Schema.org includes industry-specific subtypes of LocalBusiness and Person that carry additional structured fields relevant to your profession. Using the most specific applicable type gives AI tools and Google more precise entity data.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      industry: "Medical providers",
                      note: "Use schema type 'Physician' (a subtype of LocalBusiness) for physicians in private practice. Include 'medicalSpecialty' for specific practice areas, 'availableService' for procedures, and 'memberOf' for hospital affiliations. The MedicalOrganization type is available for larger practices.",
                    },
                    {
                      industry: "Attorneys",
                      note: "Use schema type 'Attorney' (a subtype of LocalBusiness). Include 'knowsAbout' for practice areas and 'memberOf' for bar associations. The Person schema for the attorney individually should reference their LegalService business entity.",
                    },
                    {
                      industry: "Financial advisors",
                      note: "Use 'FinancialService' as the business schema type. Include 'serviceType' for specific offerings (retirement planning, investment management). For registered advisors, 'hasCredential' can reference CFP, CFA, or other credentials.",
                    },
                    {
                      industry: "Insurance agents",
                      note: "Use 'InsuranceAgency' as the specific schema type. Include 'areaServed' for your geographic coverage and list individual insurance product types in 'hasOfferCatalog' or 'makesOffer' fields.",
                    },
                  ].map((item) => (
                    <div key={item.industry} className="bg-paper-2 border border-paper-3 rounded-sm p-5">
                      <h3 className="font-serif text-lg text-ink mb-2">{item.industry}</h3>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-4">
                How to implement and test
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  In Next.js (like this website), schema is added as a script tag with the type "application/ld+json" and the JSON content passed via dangerouslySetInnerHTML. This renders the schema in the page HTML where Google and AI tools can find it. Place it before the main page content in the component.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  In WordPress, the Yoast SEO and RankMath plugins generate LocalBusiness schema automatically from your site settings. However, they do not generate FAQPage schema from arbitrary FAQ sections unless you use their specific FAQ block types. For more control, add a Custom HTML block with your JSON-LD directly. Both approaches work. Manual JSON-LD gives you more precision.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  After implementation, test with Google's Rich Results Test. Input the URL of any page where you added schema. The tool shows you which schema types were detected, what data was extracted, and any validation errors. Fix errors before moving on. A schema block with errors is not just useless; it can trigger crawl warnings that affect how Google treats the page.
                </p>
                <p className="font-sans text-base text-ink-2 leading-relaxed">
                  For ongoing monitoring, Google Search Console shows schema errors in the Enhancements section once your pages have been crawled. Set up a quarterly review of Search Console's schema reports to catch any new errors introduced by site changes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-2 border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">Common questions</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              Questions about schema markup.
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

      {/* RELATED */}
      <section className="bg-paper border-b border-paper-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="section-label mb-6">Related guides</p>
              <div className="space-y-3">
                {[
                  { label: "AI Search Visibility Guide", href: "/resources/ai-search-visibility" },
                  { label: "GBP Setup Guide", href: "/resources/google-business-profile-setup" },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3 group">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-6">Related service</p>
              <Link href="/services/ai-search-visibility" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">AI Search Visibility Service</span>
              </Link>
            </div>
            <div>
              <p className="section-label mb-6">All resources</p>
              <Link href="/resources" className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-ink-2 group-hover:text-gold transition-colors duration-200">View all guides</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "#c8922a" }}>
              Want schema implemented correctly?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
              We implement and validate schema for every client.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.7)" }}>
              A free audit identifies what schema is currently on your site, what is missing, and what is implemented incorrectly. One client per market.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Request a free audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
