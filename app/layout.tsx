import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CONTACT_EMAIL,
  FOUNDER_ID,
  FOUNDER_SAME_AS,
  ORG_ID,
  ORG_SAME_AS,
  PHONE_E164,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  founderRef,
  orgRef,
} from "@/lib/site";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const DESCRIPTION =
  "Local SEO and AI search visibility for independent insurance agents, nationwide. Get found in the map pack, in ChatGPT, and in Google.";

export const metadata: Metadata = {
  title: {
    default: "Visibility Local | Local SEO for Independent Insurance Agents",
    template: "%s | Visibility Local",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

// The organization, the website and the founder are declared once, here, with stable ids.
// Every page's own schema refers to them by id (orgRef, founderRef in lib/site.ts) instead of
// redeclaring them. The type is Organization rather than LocalBusiness because there is no
// public street address, and LocalBusiness without one is invalid.
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Local SEO and AI search visibility for independent insurance agents and other independent professionals in the United States.",
      email: CONTACT_EMAIL,
      telephone: PHONE_E164,
      founder: founderRef,
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: [
        "Local SEO",
        "Google Business Profile",
        "AI search visibility",
        "Structured data",
        "Marketing for independent insurance agents",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        telephone: PHONE_E164,
        areaServed: "US",
        availableLanguage: "English",
      },
      ...(ORG_SAME_AS.length ? { sameAs: ORG_SAME_AS } : {}),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: orgRef,
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "David Turner",
      jobTitle: "Local SEO and AI search visibility consultant",
      url: `${SITE_URL}/about`,
      worksFor: orgRef,
      ...(FOUNDER_SAME_AS.length ? { sameAs: FOUNDER_SAME_AS } : {}),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="bg-paper font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
