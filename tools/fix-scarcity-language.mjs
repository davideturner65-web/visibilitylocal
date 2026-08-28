// Honesty pass on the exclusivity language.
//
// "If your market is open" and "check availability while your market is open" imply a client
// base that is filling up. The one-agent-per-market policy is real and worth stating; the
// scarcity it implies is not, yet. Rephrased as a commitment. When markets genuinely start
// filling, the scarcity framing becomes true and can come back.
//
// Every replacement must match exactly once or the script aborts.
//
// Usage: node tools/fix-scarcity-language.mjs
import fs from 'node:fs'

const FIXES = {
  'app/about/page.tsx': [
    [
      'Visibility Local takes one insurance agent per city. One mortgage broker per metro. If your market is open, you have exclusive local SEO representation. That policy exists because the work only makes sense when I am on one side of a competitive matchup, not because it makes a better headline.',
      'One insurance agent per city. One mortgage broker per metro. Once I take you on, I will not sell the same work to the agent across town for as long as you are a client. That policy exists because the work only makes sense when I am on one side of a competitive matchup, not because it makes a better headline.',
    ],
  ],

  'app/contact/page.tsx': [
    [
      `<span className="font-semibold text-ink">Visibility Local works with one client per market.</span>{" "}
              Check availability while your market is open.`,
      `<span className="font-semibold text-ink">Visibility Local works with one client per market.</span>{" "}
              Once I take your market, your competitor cannot hire me. Ask and I will tell you straight whether yours is spoken for.`,
    ],
  ],

  'app/page.tsx': [
    // Appears twice: once in the FAQ list, once duplicated into FAQPage schema.
    [
      'text: "Yes. Visibility Local works with independent professionals nationwide. Local SEO and AI search visibility are not geography-constrained on our end. If your market is open, we can work together.",',
      'text: "Yes. The work is not geography-constrained on my end, so the market I am in has no bearing on the market you are in. The only limit is the one-per-market policy: if I already represent an agent in your city, I will tell you rather than take you both.",',
    ],
    [
      'a: "Yes. Visibility Local works with independent professionals nationwide. Local SEO and AI search visibility are not geography-constrained on our end. If your market is open, we can work together.",',
      'a: "Yes. The work is not geography-constrained on my end, so the market I am in has no bearing on the market you are in. The only limit is the one-per-market policy: if I already represent an agent in your city, I will tell you rather than take you both.",',
    ],
  ],
}

let applied = 0
for (const [file, pairs] of Object.entries(FIXES)) {
  let text = fs.readFileSync(file, 'utf8')
  for (const [find, replace] of pairs) {
    const count = text.split(find).length - 1
    if (count !== 1) {
      console.error(`\nABORT: expected exactly 1 match in ${file}, found ${count}:\n  ${find.slice(0, 80)}...`)
      process.exit(1)
    }
    text = text.replace(find, replace)
    applied++
  }
  fs.writeFileSync(file, text)
  console.log(`${file}: ${pairs.length} fixed`)
}
console.log(`\ntotal: ${applied}`)
