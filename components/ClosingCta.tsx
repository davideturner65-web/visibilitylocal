import Link from "next/link";

/**
 * The closing call to action shared by the home page, services, industries and guides. It
 * lives in one place so the offer cannot drift between thirty pages again.
 */
export default function ClosingCta({
  label = "Start with your own market",
  heading = "Find out what your town actually sees.",
  body = "The market check is free. Tell us your agency and your city, and you get a one-page snapshot back within two business days: your Google listing, who holds the map pack, and what ChatGPT and Perplexity say when asked for an agent in your town. Then fifteen minutes on the phone if you want to go through it. If the answer is that you are in good shape, that is what you will hear.",
}: {
  label?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="section-label mb-4">{label}</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">{heading}</h2>
          <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            {body}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/market-check" className="btn-primary text-base px-8 py-4">
              Check my market
            </Link>
            <Link href="/scorecard" className="btn-secondary text-base px-8 py-4">
              Or grade your own listing, free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
