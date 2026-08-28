// Shingles the rendered body text of every built page and reports pairs that overlap above a
// threshold. This is the check the project standard is written against: no two pages should
// share more than roughly 20% of their body text, and shared boilerplate should be limited to
// the CTA block, the disclaimer, and the footer.
//
// Run `npx next build` first; this reads the prerendered HTML from .next/server/app.
//
// Usage: node tools/check-duplicate-content.mjs [--threshold 0.2] [--filter medicare]
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const threshold = Number(args[args.indexOf('--threshold') + 1]) || 0.2
const filter = args.includes('--filter') ? args[args.indexOf('--filter') + 1] : null

const SHINGLE = 8

// Chrome that legitimately appears on every page. Counting it would swamp the real signal.
const BOILERPLATE = [
  /We are not affiliated with or endorsed by Medicare[^.]*\./gi,
  /This is a solicitation for insurance\./gi,
  /Insurance products and their features, costs, and availability[\s\S]*?underwriting approval\./gi,
  /Independent agent · Multiple carriers · No obligation · Arkansas licensed/gi,
  /Lancaster Cook is AHIP certified[^.]*\./gi,
]

function collectHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name)
    if (item.isDirectory()) collectHtml(full, acc)
    else if (item.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

/**
 * Returns the inner HTML of the element carrying data-article, tracking nesting depth so an
 * inner </div> does not end the match early. Returns null when the page has no marked region.
 */
function extractArticle(html) {
  const open = html.search(/<(?:div|article)[^>]*\sdata-article[^>]*>/)
  if (open === -1) return null
  const startTag = html.slice(open).match(/<(?:div|article)[^>]*\sdata-article[^>]*>/)[0]
  let i = open + startTag.length
  const bodyStart = i
  let depth = 1
  const tagRe = /<(\/?)(?:div|article)\b[^>]*>/g
  tagRe.lastIndex = i
  let m
  while ((m = tagRe.exec(html))) {
    depth += m[1] ? -1 : 1
    if (depth === 0) return html.slice(bodyStart, m.index)
  }
  return html.slice(bodyStart)
}

function bodyText(html) {
  // The project standard allows the CTA block, disclaimer and footer to be shared, and page
  // chrome (hero, breadcrumb, sidebar, related links) is navigational rather than editorial.
  // Where a page marks its article region with data-article, measure only that. Otherwise fall
  // back to the whole document, which is the right behaviour for pages not yet converted.
  let text = extractArticle(html) ?? html
  text = text
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
  for (const re of BOILERPLATE) text = text.replace(re, ' ')
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
}

function shingles(words) {
  const set = new Set()
  for (let i = 0; i + SHINGLE <= words.length; i++) set.add(words.slice(i, i + SHINGLE).join(' '))
  return set
}

const root = '.next/server/app'
const pages = []
for (const file of collectHtml(root)) {
  const route = '/' + path.relative(root, file).replace(/\\/g, '/').replace(/\.html$/, '')
  if (filter && !route.includes(filter)) continue
  const words = bodyText(fs.readFileSync(file, 'utf8'))
  if (words.length < 60) continue
  pages.push({ route: route === '/index' ? '/' : route, words: words.length, shingles: shingles(words) })
}

console.log(`comparing ${pages.length} pages, ${SHINGLE}-word shingles, threshold ${(threshold * 100).toFixed(0)}%\n`)

const hits = []
for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    const a = pages[i], b = pages[j]
    let shared = 0
    const [small, large] = a.shingles.size <= b.shingles.size ? [a, b] : [b, a]
    for (const s of small.shingles) if (large.shingles.has(s)) shared++
    // Overlap as a share of the smaller page: a short page duplicated inside a long one is
    // still a duplicate, and dividing by the union would hide it.
    const overlap = shared / Math.max(1, small.shingles.size)
    if (overlap >= threshold) hits.push({ a: a.route, b: b.route, overlap, shared })
  }
}

hits.sort((x, y) => y.overlap - x.overlap)
if (!hits.length) {
  console.log('no pairs above threshold')
} else {
  for (const h of hits) {
    console.log(`${(h.overlap * 100).toFixed(1).padStart(5)}%  ${h.a}\n        ${h.b}  (${h.shared} shared shingles)`)
  }
  console.log(`\n${hits.length} pair(s) above ${(threshold * 100).toFixed(0)}%`)
}
