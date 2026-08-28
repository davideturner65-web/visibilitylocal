// Steps 2 and 3 of the build: the sitewide AI-tell audit fixes and the date corrections.
//
// What is deliberately NOT changed, because the audit flags them but they are correct:
//   - "Landscaper" in the home services page is a Google Business Profile category name.
//   - Both "comprehensive" hits quote bad copy as an example of what not to write.
//   - "competitors have gone quiet" is literal seasonal inactivity, not a weight-adder.
//   - "does not quietly decay" is describing decay that goes unnoticed, which is the point.
//
// "highest-leverage" is a noun compound rather than the banned verb, but it appeared eight
// times across seven pages, which is a tic. Most instances are varied here.
//
// Every replacement must match exactly once or the script aborts.
//
// Usage: node tools/fix-copy-pass.mjs
import fs from 'node:fs'

const FIXES = {
  'app/page.tsx': [
    // Stray double hyphen left from an earlier em dash conversion.
    [
      'desc: "Citations, on-page signals, internal linking, and content strategy -- the unglamorous work that determines whether you show up in the map pack when clients search for what you do.",',
      'desc: "Citations, on-page signals, internal linking, and content strategy. The unglamorous work that decides whether you show up in the map pack when someone searches for what you do.",',
    ],
    // "leverage" tic, first of eight.
    [
      'desc: "Your GBP is the single highest-leverage asset in local search. Most businesses have it set up wrong. Category selection, service areas, photos, and posting cadence all affect whether you rank.",',
      'desc: "Your Google Business Profile does more for local ranking than your website does, and most agents have it set up wrong. Category selection, service areas, photos, and posting cadence all feed it.",',
    ],
    // Figurative "landscape", a stale 2020 reference, and the wrong year, in one sentence.
    [
      'Traditional SEO agencies are still optimizing for 2020. The local search landscape in 2025 includes AI Overviews, ChatGPT recommendations, and Perplexity citations. We build for where clients are looking now, not where they were looking five years ago.',
      'Most agencies still sell the same ten blue links they were selling a decade ago. Local search now runs through AI Overviews, ChatGPT recommendations, and Perplexity citations as well as the map pack, and those surfaces read structured data rather than keyword density. The work is different, so the deliverables are different.',
    ],
    // "domination"
    [
      'Every field, every setting, every signal Google uses to rank your listing. Step-by-step from creation to map pack domination.',
      'Every field, every setting, every signal Google uses to rank your listing. Step by step, from creating the profile to holding a map pack position.',
    ],
    [
      'Every item that matters for local search rankings in 2025. Not the padded 100-point versions. The 40 that actually drive results.',
      'Every item that moves local rankings, current for 2026. Not the padded 100-point versions. The 40 that actually change what happens.',
    ],
  ],

  'app/about/page.tsx': [
    [
      'That policy exists because the work requires full commitment to one side of each competitive landscape, not because it makes a better marketing headline.',
      'That policy exists because the work only makes sense when I am on one side of a competitive matchup, not because it makes a better headline.',
    ],
    // Em dash.
    [
      'Scope, deliverables, timeline — upfront',
      'Scope, deliverables and timeline, upfront',
    ],
  ],

  'app/contact/page.tsx': [
    // Em dash, in the meta description.
    [
      '"Request a free local SEO and Google Business Profile audit. One client per market — check if your spot is available.",',
      '"Request a local SEO and Google Business Profile review. One client per market, so check whether yours is open.",',
    ],
  ],

  'app/industries/home-services/page.tsx': [
    [
      'The businesses that dominate local home services searches have correct GBP categories, strong review counts, service area pages for every city they cover, and explicit emergency and same-day service content.',
      'The businesses that win local home services searches have correct GBP categories, strong review counts, a page for every city they actually cover, and explicit emergency and same-day language where it applies.',
    ],
  ],

  'app/industries/mortgage-brokers/page.tsx': [
    [
      'Local search is where that discovery happens, and right now most independent brokers are invisible in the searches they should dominate.',
      'Local search is where that discovery happens, and most independent brokers are missing from the searches they should be winning.',
    ],
  ],

  'app/industries/attorneys/page.tsx': [
    [
      'highest-leverage quick wins in legal local SEO.',
      'fastest wins available in legal local SEO.',
    ],
  ],

  'app/industries/medical-practices/page.tsx': [
    [
      'This is often the single highest-leverage change in a medical practice GBP optimization because it immediately opens specialty search surfaces that generic categories cannot access.',
      'This is usually the single biggest change available in a medical practice GBP, because it opens specialty search surfaces that a generic category cannot reach.',
    ],
  ],

  'app/services/reputation/page.tsx': [
    [
      'We identify which secondary platforms are highest-leverage for your industry.',
      'We work out which secondary platforms actually matter in your industry.',
    ],
  ],

  'app/resources/schema-markup/page.tsx': [
    [
      'priority: "High leverage for AI",',
      'priority: "Matters most for AI",',
    ],
  ],
}

// Year references that are simply out of date. These are exact-count replacements across the
// named files rather than one-offs.
const YEAR_UPDATES = [
  'app/resources/ai-search-visibility/page.tsx',
  'app/resources/google-business-profile-setup/page.tsx',
  'app/resources/local-seo-checklist/page.tsx',
]

let applied = 0
for (const [file, pairs] of Object.entries(FIXES)) {
  let text = fs.readFileSync(file, 'utf8')
  for (const [find, replace] of pairs) {
    const count = text.split(find).length - 1
    if (count !== 1) {
      console.error(`\nABORT: expected exactly 1 match in ${file}, found ${count}:\n  ${find.slice(0, 90)}...`)
      process.exit(1)
    }
    text = text.replace(find, replace)
    applied++
  }
  fs.writeFileSync(file, text)
  console.log(`${file}: ${pairs.length} fixed`)
}

let years = 0
for (const file of YEAR_UPDATES) {
  const text = fs.readFileSync(file, 'utf8')
  const count = (text.match(/\b2025\b/g) || []).length
  if (!count) continue
  fs.writeFileSync(file, text.replace(/\b2025\b/g, '2026'))
  years += count
  console.log(`${file}: ${count} year references updated to 2026`)
}

console.log(`\ntotal: ${applied} copy fixes, ${years} year references`)
