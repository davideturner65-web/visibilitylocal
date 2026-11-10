import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms for using the Visibility Local website, its free guides, scorecard and market check.",
  path: "/terms",
});

const sections = [
  {
    "heading": "Guides and scorecard",
    "body": "The guides and scorecard on this site are general information, provided as they are. They are not legal, compliance, or financial advice. Check licensing and advertising rules for your own profession and state before acting on them."
  },
  {
    "heading": "The market check",
    "body": "The market check is free and carries no obligation. It is a snapshot of publicly visible information about your business at the time it is made, and search results change. It is general information, not a guarantee of any outcome."
  },
  {
    "heading": "No guaranteed rankings",
    "body": "We do not promise any particular ranking, lead count, or date by which an AI tool will name your business. Those outcomes depend on systems nobody outside those companies controls. Our delivery guarantee is described on the How It Works page and covers delivery, not rankings."
  },
  {
    "heading": "Exclusivity",
    "body": "We do not promise exclusivity in any city or line of business unless it is agreed in writing as part of a client's scope. An inquiry or a market check does not reserve a market."
  },
  {
    "heading": "Content on this site",
    "body": "The content on this site belongs to Visibility Local. You are welcome to use the guides for your own business, but please do not republish them without permission."
  },
  {
    "heading": "Limits on liability",
    "body": "To the extent the law allows, Visibility Local is not liable for indirect or consequential losses from using this website, and our total liability for a purchase made through this site is limited to the amount you paid for it."
  },
  {
    "heading": "Questions",
    "body": "Email info@visibilitylocal.com or call (501) 554-2183."
  }
];

export default function TermsPage() {
  return (
    <section className="bg-paper py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Effective November 10, 2026</p>
        <h1 className="font-serif text-5xl text-ink mt-4 mb-6 leading-tight">Terms of Use</h1>
        <p className="font-sans text-base text-ink-2 leading-relaxed mb-10">
          These terms cover your use of this website. Monthly client work is also covered by the written scope agreed before it starts, and that scope controls if the two differ.
        </p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-2xl text-ink mb-2">{s.heading}</h2>
              <p className="font-sans text-base text-ink-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
