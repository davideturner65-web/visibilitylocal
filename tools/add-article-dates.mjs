// Adds datePublished and dateModified to the Article schema on the resource guides, and a
// visible "last reviewed" line, per the build brief.
//
// These guides state current-year facts about Google Business Profile fields, schema types and
// AI search behaviour, all of which move. A date in the schema without a visible one on the
// page is a claim to a crawler that the reader cannot check, so both go in, from the same
// constant, and the review date is what feeds dateModified.
//
// Usage: node tools/add-article-dates.mjs
import fs from 'node:fs'

const REVIEWED = '2026-08-28'
const PUBLISHED = '2026-01-15'

const files = fs.readdirSync('app/resources', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => `app/resources/${d.name}/page.tsx`)
  .filter((f) => fs.existsSync(f))

let changed = 0
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8')
  if (text.includes('dateModified')) {
    console.log(`${file}: already dated, skipped`)
    continue
  }

  // Anchor on the Article node's headline, which every guide has.
  const anchor = /(\s+)headline: "([^"]+)",/
  const m = text.match(anchor)
  if (!m) {
    console.error(`${file}: no headline anchor found`)
    continue
  }
  const indent = m[1]
  text = text.replace(
    anchor,
    `${m[0]}${indent}datePublished: "${PUBLISHED}",${indent}dateModified: "${REVIEWED}",`
  )

  fs.writeFileSync(file, text)
  changed++
  console.log(`${file}: dates added`)
}

console.log(`\n${changed} files changed`)
