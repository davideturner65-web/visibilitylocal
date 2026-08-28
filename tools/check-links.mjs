// Checks every internal href in the rendered pages against the routes the build produced.
// Catches links written against pages that were planned but not created, which is easy to do
// when the CTAs are updated before the pages they point at exist.
//
// Run `npx next build` first.
//
// Usage: node tools/check-links.mjs
import fs from 'node:fs'
import path from 'node:path'

const ROOT = '.next/server/app'

function collect(dir, acc = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name)
    if (item.isDirectory()) collect(full, acc)
    else if (item.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

const files = collect(ROOT)
const routes = new Set(
  files.map((f) => {
    const r = '/' + path.relative(ROOT, f).split(path.sep).join('/').replace(/\.html$/, '')
    return r === '/index' ? '/' : r
  })
)

const broken = new Map()
let checked = 0

for (const file of files) {
  const from = '/' + path.relative(ROOT, file).split(path.sep).join('/').replace(/\.html$/, '')
  const page = from === '/index' ? '/' : from
  const html = fs.readFileSync(file, 'utf8')
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1].replace(/\/$/, '') || '/'
    checked++
    if (href.startsWith('/_next') || href.startsWith('/api')) continue
    if (routes.has(href)) continue
    // Static assets in /public are served directly and have no rendered route.
    if (/\.[a-z0-9]{2,5}$/i.test(href)) continue
    if (!broken.has(href)) broken.set(href, new Set())
    broken.get(href).add(page)
  }
}

console.log(`routes built: ${routes.size}`)
console.log(`internal hrefs checked: ${checked}\n`)

if (!broken.size) {
  console.log('No broken internal links.')
} else {
  for (const [href, pages] of [...broken].sort()) {
    console.log(`BROKEN  ${href}`)
    console.log(`        linked from: ${[...pages].sort().join(', ')}`)
  }
  console.log(`\n${broken.size} broken target(s)`)
  process.exit(1)
}
