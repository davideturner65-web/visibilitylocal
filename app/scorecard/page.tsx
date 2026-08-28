import type { Metadata } from "next";
import Scorecard from "@/components/Scorecard";

export const metadata: Metadata = {
  title: "Free Local Search Scorecard for Insurance Agents | Visibility Local",
  description:
    "Twelve checks you can run against your own Google Business Profile and website in about ten minutes. Score it yourself, no email required to see the result.",
  alternates: { canonical: "https://visibilitylocal.com/scorecard" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Score your own local search visibility as an independent insurance agent",
  description:
    "Twelve checks an independent insurance agent can run against their own Google Business Profile, citations, website and AI search presence in about ten minutes.",
  totalTime: "PT10M",
  step: [
    { "@type": "HowToStep", name: "Check your Google Business Profile primary category" },
    { "@type": "HowToStep", name: "Check your secondary categories" },
    { "@type": "HowToStep", name: "Confirm who owns your website domain" },
    { "@type": "HowToStep", name: "Test whether your website copy is a shared template" },
    { "@type": "HowToStep", name: "Compare your state DOI licensee record to your listing" },
    { "@type": "HowToStep", name: "Compare your name, address and phone across directories" },
    { "@type": "HowToStep", name: "Check your most recent Google Business Profile post" },
    { "@type": "HowToStep", name: "Compare your review count to the local map pack" },
    { "@type": "HowToStep", name: "Check for unanswered reviews" },
    { "@type": "HowToStep", name: "Check your listed services and descriptions" },
    { "@type": "HowToStep", name: "Test your website for structured data" },
    { "@type": "HowToStep", name: "Ask ChatGPT and Perplexity for an agent in your city" },
  ],
};

export default function ScorecardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-paper py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Free scorecard</p>
          <h1 className="font-serif text-5xl text-ink mt-4 mb-6 leading-tight">
            Grade your own listing in ten minutes
          </h1>
          <div className="space-y-4 font-sans text-lg text-ink-2 max-w-2xl">
            <p>
              Twelve checks, written for independent insurance agents specifically. Each one tells
              you where to look and why it matters. You will need your Google Business Profile
              open and about ten minutes.
            </p>
            <p className="text-base text-ink-3">
              The score and the explanations are yours immediately. No email, no gate. If you want
              the written fix list afterwards, there is a form at the bottom for that.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      <section className="bg-paper-2 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Scorecard />
        </div>
      </section>
    </>
  );
}
