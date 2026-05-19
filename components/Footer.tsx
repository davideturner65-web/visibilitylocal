import Link from "next/link";

const services = [
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
  { label: "Citations & NAP", href: "/services/citations" },
  { label: "Local Content", href: "/services/content" },
  { label: "Reputation Management", href: "/services/reputation" },
];

const industries = [
  { label: "Insurance Agents", href: "/industries/insurance-agents" },
  { label: "Mortgage Brokers", href: "/industries/mortgage-brokers" },
  { label: "CPA Firms", href: "/industries/cpa-firms" },
  { label: "Financial Advisors", href: "/industries/financial-advisors" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Attorneys", href: "/industries/attorneys" },
  { label: "Medical Practices", href: "/industries/medical-practices" },
  { label: "Home Services", href: "/industries/home-services" },
];

const resources = [
  { label: "GBP Setup Guide", href: "/resources/google-business-profile-setup" },
  { label: "Local SEO Checklist", href: "/resources/local-seo-checklist" },
  { label: "AI Search Visibility", href: "/resources/ai-search-visibility" },
  { label: "Citation Building", href: "/resources/citation-building" },
  { label: "Insurance Agent GBP", href: "/resources/insurance-agent-gbp" },
  { label: "Schema Markup Guide", href: "/resources/schema-markup" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper-3 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-xl text-paper">Visibility</span>
              <span className="font-serif text-xl text-gold italic">Local</span>
            </div>
            <p className="text-sm text-ink-4 leading-relaxed mb-5">
              Local SEO and AI search visibility for professionals who can&apos;t afford to be invisible. One client per market.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+15015542183" className="flex items-center gap-2 text-ink-4 hover:text-gold-light transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (501) 554-2183
              </a>
              <a href="mailto:info@visibilitylocal.com" className="flex items-center gap-2 text-ink-4 hover:text-gold-light transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@visibilitylocal.com
              </a>
              <p className="flex items-center gap-2 text-ink-4">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Serving businesses nationwide
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-ink-4 hover:text-gold-light transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-ink-4 hover:text-gold-light transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm text-ink-4 hover:text-gold-light transition-colors">
                    {r.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/resources" className="text-sm text-gold hover:text-gold-light transition-colors">
                  All Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-2 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-3">
            &copy; {new Date().getFullYear()} Visibility Local. All rights reserved.
          </p>
          <p className="text-xs text-ink-3">
            Serving independent professionals nationwide
          </p>
          <div className="flex gap-4 text-xs text-ink-3">
            <Link href="/about" className="hover:text-ink-4 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-ink-4 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
