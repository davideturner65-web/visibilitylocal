import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    default: "Visibility Local | Local SEO for Independent Insurance Agents",
    template: "%s | Visibility Local",
  },
  description:
    "Local SEO and AI search visibility for independent insurance agents. One agent per market, nationwide. Get found in the map pack, in ChatGPT, and in Google.",
  metadataBase: new URL("https://visibilitylocal.com"),
  alternates: { canonical: "https://visibilitylocal.com" },
  openGraph: {
    siteName: "Visibility Local",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="bg-paper font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
