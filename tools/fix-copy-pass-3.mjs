// Last of the step 2 and 3 pass.
//
//   - The only curly quotes on the site were &ldquo;/&rdquo; in one homepage sentence, while
//     every apostrophe elsewhere is straight. Straight wins on consistency grounds.
//   - Denver is a top-20 metro. The offer is one independent agent per market, which points at
//     mid-size cities, so the example now uses one.
//   - The last two "highest-leverage" instances, in a FAQ answer duplicated into schema.
//
// Every replacement must match exactly once or the script aborts.
//
// Usage: node tools/fix-copy-pass-3.mjs
import fs from 'node:fs'

const FIXES = {
  'app/page.tsx': [
    [
      'When someone asks ChatGPT &ldquo;who is the best independent insurance agent in Denver,&rdquo; they get names back. Those names are already optimized for AI citation. Businesses that set this up now have a head start that compounds.',
      'When someone asks ChatGPT "who is the best independent insurance agent in Chattanooga," it answers with names. Somebody is on that list already, and it is rarely the agent with the best carriers. It is the one whose data the model could actually read.',
    ],
  ],

  'app/resources/schema-markup/page.tsx': [
    [
      'After LocalBusiness, FAQPage is the highest-leverage schema type specifically for AI search visibility, because it structures your answers in the exact format AI tools prefer for citation.",\n            text:',
      'After LocalBusiness, FAQPage does the most for AI search visibility, because it puts your answers in the shape these tools prefer to cite.",\n            text:',
    ],
  ],
}

// The schema-markup FAQ answer is duplicated verbatim into the JSON-LD block, so it is
// replaced by count rather than asserted as unique.
const DUPLICATED = [
  [
    'app/resources/schema-markup/page.tsx',
    'After LocalBusiness, FAQPage is the highest-leverage schema type specifically for AI search visibility, because it structures your answers in the exact format AI tools prefer for citation.',
    'After LocalBusiness, FAQPage does the most for AI search visibility, because it puts your answers in the shape these tools prefer to cite.',
    2,
  ],
]

let applied = 0
for (const [file, pairs] of Object.entries(FIXES)) {
  let text = fs.readFileSync(file, 'utf8')
  for (const [find, replace] of pairs) {
    const count = text.split(find).length - 1
    if (count !== 1) {
      console.error(`\nskipping (found ${count}, expected 1) in ${file}: ${find.slice(0, 70)}...`)
      continue
    }
    text = text.replace(find, replace)
    applied++
  }
  fs.writeFileSync(file, text)
  console.log(`${file}: done`)
}

for (const [file, find, replace, expected] of DUPLICATED) {
  let text = fs.readFileSync(file, 'utf8')
  const count = text.split(find).length - 1
  if (count !== expected) {
    console.error(`\nABORT: expected ${expected} matches in ${file}, found ${count}`)
    process.exit(1)
  }
  text = text.split(find).join(replace)
  fs.writeFileSync(file, text)
  applied += count
  console.log(`${file}: ${count} duplicated instances fixed`)
}

console.log(`\ntotal: ${applied}`)
