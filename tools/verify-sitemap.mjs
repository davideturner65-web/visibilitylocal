// Cross-checks every URL in the generated sitemap against the pages the build actually
// produced, and reports both directions: sitemap URLs with no page (which would be submitted
// to Search Console as 404s) and built pages missing from the sitemap.
//
// Written after finding that three topics listed for city pages never generated any, because
// the pair generators only looked at the first data file of each category. That advertised 45
// URLs the build had never produced.
//
// Run `npx next build` first.
//
// Usage: node tools/verify-sitemap.mjs
import fs from 'node:fs'
import path from 'node:path'

const BASE = 'https://www.hillcrestlifeandhealth.com'
const ROOT = '.next/server/app'
const SITEMAP = path.join(ROOT, 'sitemap.xml.body')

if (!fs.existsSync(SITEMAP)) {
  console.error(`No sitemap at ${SITEMAP}. Run npx next build first.`)
  process.exit(1)
}

const sitemapUrls = new Set(
  [...fs.readFileSync(SITEMAP, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace(BASE, '').replace(/\/$/, '') || '/'
  )
)

const built = new Set()
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name)
    if (item.isDirectory()) walk(full)
    else if (item.name.endsWith('.html')) {
      const route = '/' + path.relative(ROOT, full).split(path.sep).join('/').replace(/\.html$/, '')
      built.add(route === '/index' ? '/' : route)
    }
  }
}
walk(ROOT)

// Routes that exist as pages but are deliberately kept out of the sitemap.
const INTENTIONALLY_UNLISTED = new Set(['/_not-found'])

const missingPages = [...sitemapUrls].filter((u) => !built.has(u)).sort()
const unlisted = [...built].filter((b) => !sitemapUrls.has(b) && !INTENTIONALLY_UNLISTED.has(b)).sort()

console.log(`sitemap URLs: ${sitemapUrls.size}`)
console.log(`built pages:  ${built.size}\n`)

if (missingPages.length) {
  console.log(`IN SITEMAP BUT NOT BUILT (${missingPages.length}) - these would be submitted as 404s:`)
  for (const u of missingPages) console.log('  ' + u)
} else {
  console.log('Every sitemap URL has a built page.')
}

if (unlisted.length) {
  console.log(`\nBUILT BUT NOT IN SITEMAP (${unlisted.length}):`)
  for (const u of unlisted) console.log('  ' + u)
} else {
  console.log('Every built page is in the sitemap.')
}

process.exit(missingPages.length ? 1 : 0)
