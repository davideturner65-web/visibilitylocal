"use client";

import { useState } from "react";
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-paper-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-serif text-xl text-ink">Visibility</span>
            <span className="font-serif text-xl text-gold italic">Local</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-sans font-medium text-ink-2 hover:text-ink transition-colors rounded">
                Services
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-paper border border-paper-3 shadow-lg rounded-sm py-1 mt-0.5">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm font-sans text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-sans font-medium text-ink-2 hover:text-ink transition-colors rounded">
                Industries
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 w-56 bg-paper border border-paper-3 shadow-lg rounded-sm py-1 mt-0.5">
                  {industries.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      className="block px-4 py-2.5 text-sm font-sans text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/resources" className="px-3 py-2 text-sm font-sans font-medium text-ink-2 hover:text-ink transition-colors rounded">
              Resources
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-sans font-medium text-ink-2 hover:text-ink transition-colors rounded">
              About
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-ink-2 hover:text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-paper-3 px-4 pb-6 pt-2">
          <div className="space-y-1">
            <p className="section-label pt-3 pb-1">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-2 text-sm font-sans text-ink-2 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}

            <p className="section-label pt-4 pb-1">Industries</p>
            {industries.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="block py-2 text-sm font-sans text-ink-2 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {i.label}
              </Link>
            ))}

            <div className="pt-4 space-y-1 border-t border-paper-3 mt-2">
              <Link href="/resources" className="block py-2 text-sm font-sans font-medium text-ink-2 hover:text-ink" onClick={() => setMobileOpen(false)}>Resources</Link>
              <Link href="/about" className="block py-2 text-sm font-sans font-medium text-ink-2 hover:text-ink" onClick={() => setMobileOpen(false)}>About</Link>
            </div>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
                Free Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
