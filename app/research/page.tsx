import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research | Visibility Local",
  description:
    "Original research on how independent insurance agents appear in local and AI search.",
  alternates: { canonical: "https://visibilitylocal.com/research" },
  // Route reserved so the URL structure is settled. Not indexed and not in the nav until
  // there is something here.
  robots: { index: false, follow: false },
};

export default function ResearchPage() {
  return (
    <section className="bg-paper py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Research</p>
        <h1 className="font-serif text-5xl text-ink mt-4 mb-6 leading-tight">
          The Invisible Agent Index
        </h1>
        <div className="space-y-5 font-sans text-lg text-ink-2 max-w-2xl">
          <p>
            This is where the Invisible Agent Index will live: a survey of how independent
            insurance agencies actually appear across Google Business Profile, the map pack and
            AI search, measured rather than asserted.
          </p>
          <p className="text-base text-ink-3">
            The route is reserved. There is nothing to read yet, and there will not be until
            the data exists and can be published with its method attached.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/" className="btn-secondary text-base px-7 py-3.5">
            Back to the site
          </Link>
        </div>
      </div>
    </section>
  );
}
