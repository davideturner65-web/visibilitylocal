// Remainder of the step 2 and 3 pass. These strings are wrapped across lines in the JSX
// source, so they are matched against the exact source text rather than the rendered sentence.
//
// Every replacement must match exactly once or the script aborts.
//
// Usage: node tools/fix-copy-pass-2.mjs
import fs from 'node:fs'

const FIXES = {
  'app/industries/home-services/page.tsx': [
    [
      `The businesses
              that dominate local home services searches have correct GBP
              categories, strong review counts, service area pages for every
              city they cover, and explicit emergency and same-day service
              content.`,
      `The businesses
              that win local home services searches have correct GBP categories,
              strong review counts, a page for every city they actually cover,
              and explicit emergency and same-day language where it applies.`,
    ],
  ],

  'app/industries/mortgage-brokers/page.tsx': [
    [
      `Local search is where that discovery
              happens, and right now most independent brokers are invisible in
              the searches they should dominate.`,
      `Local search is where that discovery
              happens, and most independent brokers are missing from the
              searches they should be winning.`,
    ],
  ],

  'app/industries/attorneys/page.tsx': [
    [
      `Adding the right secondary categories is one of the
                highest-leverage quick wins in legal local SEO.`,
      `Adding the right secondary categories is one of the
                fastest wins available in legal local SEO.`,
    ],
  ],

  'app/industries/medical-practices/page.tsx': [
    [
      `This is often the single highest-leverage
                change in a medical practice GBP optimization because it
                immediately opens specialty search surfaces that generic
                categories cannot access.`,
      `This is usually the single biggest change
                available in a medical practice GBP, because it opens specialty
                search surfaces that a generic category cannot reach.`,
    ],
  ],

  'app/services/reputation/page.tsx': [
    [
      'We identify which secondary platforms are highest-leverage for your industry.',
      'We work out which secondary platforms actually matter in your industry.',
    ],
  ],

  'app/resources/schema-markup/page.tsx': [
    ['priority: "High leverage for AI",', 'priority: "Matters most for AI",'],
  ],

  'app/resources/local-seo-checklist/page.tsx': [
    [
      '"FAQPage schema is the highest-leverage schema type for AI search visibility.',
      '"FAQPage schema is the one that matters most for AI search visibility.',
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
