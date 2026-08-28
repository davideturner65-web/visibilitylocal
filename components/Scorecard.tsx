"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Self-assessment an independent agent can run against their own listing in about ten minutes.
 *
 * The score and every explanation are given without asking for anything. The email form at the
 * end is for the written action plan, which is a separate thing from the diagnosis. Gating the
 * score itself would make this a lead form wearing a checklist costume, and an agent who has
 * sat through two "free audits" can tell the difference.
 */

interface Check {
  id: string;
  question: string;
  how: string;
  why: string;
  weight: number;
}

const CHECKS: Check[] = [
  {
    id: "category",
    question: "Is your Google Business Profile primary category the most specific one that fits?",
    how: 'Open your Business Profile, go to Edit profile, Business category. Note what the primary says. "Insurance agency" is the generic default. "Insurance broker", "Life insurance agency", "Health insurance agency", and "Auto insurance agency" are separate categories that surface in different searches.',
    why: "The primary category does more to decide which searches you appear in than anything else on the profile. Most agents are sitting on whatever was picked when the listing was created, often by somebody else.",
    weight: 3,
  },
  {
    id: "secondary",
    question: "Have you added secondary categories for the other lines you write?",
    how: "Same screen, below the primary. Add one for each line you genuinely write and want more of.",
    why: "Each secondary category opens search surfaces you are otherwise invisible on. It costs nothing and most agents have none set.",
    weight: 2,
  },
  {
    id: "domain",
    question: "Do you personally own your website domain?",
    how: "Look up your domain on any WHOIS lookup, or check whether the renewal invoice comes to you. If your FMO set the site up, the registrant is often them.",
    why: "If you do not own the registration, every bit of authority the site earns belongs to somebody else. Change FMOs and you start from zero. This outranks everything else on this list.",
    weight: 3,
  },
  {
    id: "template",
    question: "Is your website meaningfully different from other agents' sites?",
    how: 'Copy a full sentence from your homepage, paste it into Google inside quotation marks, and see how many other agencies come back with the identical sentence.',
    why: "Template sites handed out by an FMO share their copy across hundreds of agents. Google shows one of them and treats the rest as duplicates. If that search returns other agencies, you are one of the rest.",
    weight: 3,
  },
  {
    id: "doi",
    question: "Does your state Department of Insurance licensee record match your GBP exactly?",
    how: "Look yourself up in your state DOI licensee search. Compare the business name, street address, and suite number character for character against your Google listing.",
    why: "The DOI record is the most authoritative citation an agent has, and it is very often stale. A mismatch there undercuts the rest of your citation profile.",
    weight: 2,
  },
  {
    id: "nap",
    question: "Do your name, address, and phone match across Yelp, Facebook, and Bing Places?",
    how: "Search your business name on each. Compare against your GBP, including whether you use Ste, Suite, or nothing at all.",
    why: "Inconsistent listing data is a direct negative signal for local ranking, and it is the most common thing I find that nobody has ever looked at.",
    weight: 2,
  },
  {
    id: "posts",
    question: "Have you published a Google Business Profile post in the last 30 days?",
    how: "Business Profile, then Promote or Add update. Check the date on the most recent one.",
    why: "Posting is a freshness signal and takes about five minutes. During AEP it is also the cheapest way to put enrollment dates in front of people already looking at your listing.",
    weight: 1,
  },
  {
    id: "reviews",
    question: "Do you have as many Google reviews as the three agencies currently in your map pack?",
    how: 'Search "insurance agent" plus your city in an incognito window. Note the review counts on the three results in the map box. Compare with yours.',
    why: "Review count and recency both feed local ranking. This tells you the actual bar in your market rather than a number from an article.",
    weight: 2,
  },
  {
    id: "replies",
    question: "Have you replied to every review from the past year, including the good ones?",
    how: "Business Profile, Reviews. Look for the ones with no response underneath.",
    why: "Google has said publicly that responding to reviews affects local ranking. It also takes a minute each and almost nobody does it consistently.",
    weight: 1,
  },
  {
    id: "services",
    question: "Are your services listed individually on the profile with real descriptions?",
    how: "Business Profile, Services. Check whether Medicare Advantage, Medicare Supplement, ACA plans, final expense, term life and the rest are entered separately with a sentence each.",
    why: "Service entries are searchable text on your listing. Leaving them empty leaves matches on the table for exactly the specific searches worth having.",
    weight: 2,
  },
  {
    id: "schema",
    question: "Does your website have InsuranceAgency or LocalBusiness structured data?",
    how: "Paste your homepage URL into Google's Rich Results Test and see what it detects.",
    why: "Structured data is how a machine reads your business rather than guessing. It matters for Google and it matters more for the AI tools, which have no patience for parsing a page.",
    weight: 2,
  },
  {
    id: "ai",
    question: 'Does ChatGPT name you when asked for an independent insurance agent in your city?',
    how: 'Open ChatGPT and ask, plainly: "who is the best independent insurance agent in [your city]". Then ask Perplexity the same thing. Write down who comes back.',
    why: "This is the surface nobody in your market is thinking about yet, and it is the one where being absent is least visible to you. Somebody is on that list already.",
    weight: 2,
  },
];

const MAX_SCORE = CHECKS.reduce((sum, c) => sum + c.weight, 0);

function band(pct: number) {
  if (pct >= 85) {
    return {
      label: "In good shape",
      note: "Your fundamentals are genuinely in order, which puts you ahead of most independent agencies I look at. The remaining gains are in content and AI citation rather than in fixing what is broken. Honestly, you may not need to hire anyone.",
    };
  }
  if (pct >= 60) {
    return {
      label: "Workable, with real gaps",
      note: "Nothing here is on fire, but you are leaving searches on the table. The items you marked no are worth doing in order of weight, and most of them are an afternoon of work rather than a project.",
    };
  }
  if (pct >= 35) {
    return {
      label: "Losing business you cannot see",
      note: "There is enough missing here that people in your market are searching, finding somebody else, and you have no way of knowing it happened. Start with the domain ownership and the primary category. Those two carry the most weight and neither costs anything.",
    };
  }
  return {
    label: "Effectively invisible",
    note: "Your listing is not competing. That is not a criticism of the agency, it is a description of the setup, and almost all of it is fixable without spending money. Work top down through what you marked no.",
  };
}

export default function Scorecard() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [expanded, setExpanded] = useState<string | null>(CHECKS[0].id);

  const answered = CHECKS.filter((c) => answers[c.id] !== undefined && answers[c.id] !== null);
  const score = CHECKS.reduce((sum, c) => sum + (answers[c.id] === true ? c.weight : 0), 0);
  const complete = answered.length === CHECKS.length;
  const pct = Math.round((score / MAX_SCORE) * 100);
  const result = band(pct);
  const failed = CHECKS.filter((c) => answers[c.id] === false).sort((a, b) => b.weight - a.weight);

  return (
    <div>
      {/* Progress */}
      <div className="sticky top-16 z-10 bg-paper border-b border-paper-3 py-4 mb-10">
        <div className="flex items-baseline justify-between mb-2">
          <p className="font-sans text-sm text-ink-2">
            {answered.length} of {CHECKS.length} answered
          </p>
          {complete && (
            <p className="font-serif text-2xl text-ink">
              {score}
              <span className="text-ink-3 text-lg">/{MAX_SCORE}</span>
            </p>
          )}
        </div>
        <div className="h-1.5 bg-paper-3 rounded-sm overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${(answered.length / CHECKS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Checks */}
      <ol className="space-y-3">
        {CHECKS.map((check, i) => {
          const state = answers[check.id];
          const isOpen = expanded === check.id;
          return (
            <li key={check.id} className="border border-paper-3 rounded-sm bg-paper">
              <div className="p-5">
                <div className="flex gap-4 items-start">
                  <span className="font-serif text-xl text-ink-3 shrink-0 w-6">{i + 1}</span>
                  <div className="flex-1">
                    <p className="font-sans text-base text-ink font-medium mb-3">{check.question}</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setAnswers({ ...answers, [check.id]: true })}
                        className={`px-4 py-1.5 text-sm font-sans rounded-sm border transition-colors ${
                          state === true
                            ? "bg-ink text-paper border-ink"
                            : "border-paper-3 text-ink-2 hover:border-ink-3"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setAnswers({ ...answers, [check.id]: false })}
                        className={`px-4 py-1.5 text-sm font-sans rounded-sm border transition-colors ${
                          state === false
                            ? "bg-ink text-paper border-ink"
                            : "border-paper-3 text-ink-2 hover:border-ink-3"
                        }`}
                      >
                        No
                      </button>
                      <button
                        onClick={() => setExpanded(isOpen ? null : check.id)}
                        className="px-4 py-1.5 text-sm font-sans text-gold hover:underline"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? "Hide" : "How do I check?"}
                      </button>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 ml-10 pl-4 border-l-2 border-gold space-y-3">
                    <div>
                      <p className="section-label mb-1">How to check</p>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">{check.how}</p>
                    </div>
                    <div>
                      <p className="section-label mb-1">Why it matters</p>
                      <p className="font-sans text-sm text-ink-2 leading-relaxed">{check.why}</p>
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Result */}
      {complete && (
        <div className="mt-12 bg-ink rounded-sm p-8 lg:p-10">
          <p className="section-label mb-3" style={{ color: "#c8922a" }}>
            Your score
          </p>
          <p className="font-serif text-5xl text-paper mb-2">
            {score}
            <span className="text-ink-4 text-3xl">/{MAX_SCORE}</span>
          </p>
          <p className="font-serif text-2xl text-gold mb-4">{result.label}</p>
          <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(247,244,238,0.72)" }}>
            {result.note}
          </p>

          {failed.length > 0 && (
            <div className="mb-8">
              <p className="section-label mb-3" style={{ color: "#c8922a" }}>
                Fix in this order
              </p>
              <ol className="space-y-2">
                {failed.map((c, i) => (
                  <li key={c.id} className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,244,238,0.8)" }}>
                    <span className="text-gold font-medium">{i + 1}.</span> {c.question}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="border-t pt-8" style={{ borderColor: "rgba(247,244,238,0.15)" }}>
            <p className="font-sans text-base text-paper mb-2 font-medium">
              Want this written up, with the specific fix for each one?
            </p>
            <p className="font-sans text-sm mb-5" style={{ color: "rgba(247,244,238,0.6)" }}>
              I will send the action plan for the items you missed. One email, no sequence, and I
              will not add you to anything.
            </p>
            <form
              action="https://formspree.io/f/xpzgdwrn"
              method="POST"
              className="flex flex-wrap gap-3"
            >
              <input type="hidden" name="_subject" value="Scorecard action plan request" />
              <input type="hidden" name="scorecard_score" value={`${score}/${MAX_SCORE}`} />
              <input type="hidden" name="scorecard_missed" value={failed.map((c) => c.id).join(", ")} />
              <label htmlFor="scorecard-email" className="sr-only">
                Email address
              </label>
              <input
                id="scorecard-email"
                type="email"
                name="email"
                required
                placeholder="you@youragency.com"
                className="flex-1 min-w-[16rem] px-4 py-3 rounded-sm bg-paper text-ink font-sans text-sm border border-paper-3 focus:outline-none focus:border-gold"
              />
              <button type="submit" className="btn-primary text-sm px-6 py-3">
                Send me the plan
              </button>
            </form>
          </div>
        </div>
      )}

      {!complete && (
        <p className="mt-10 font-sans text-sm text-ink-3">
          Answer all {CHECKS.length} to see your score. Nothing is submitted anywhere, and there
          is no email required to get it.
        </p>
      )}

      <p className="mt-10 font-sans text-sm text-ink-3">
        Would rather I did this properly, from the outside, with the AI transcripts and the map
        grid?{" "}
        <Link href="/visibility-report" className="text-gold hover:underline">
          That is the Visibility Report
        </Link>
        .
      </p>
    </div>
  );
}
