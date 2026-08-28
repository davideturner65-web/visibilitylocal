// Reports the JSON-LD types present on every rendered page, and checks them against what the
// build brief requires. Also verifies that FAQ answers exist in the server-rendered HTML rather
// than being injected on click, since FAQPage schema pointing at content a crawler cannot see
// is worse than no schema at all.
//
// Run `npx next build` first.
//
// Usage: node tools/audit-schema.mjs
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

function typesIn(node, out = new Set()) {
  if (Array.isArray(node)) {
    for (const n of node) typesIn(n, out)
    return out
  }
  if (node && typeof node === 'object') {
    const t = node['@type']
    if (typeof t === 'string') out.add(t)
    else if (Array.isArray(t)) t.forEach((x) => out.add(x))
    for (const v of Object.values(node)) typesIn(v, out)
  }
  return out
}

/** Every FAQ answer text in the page's FAQPage schema. */
function faqAnswers(node, out = []) {
  if (Array.isArray(node)) {
    node.forEach((n) => faqAnswers(n, out))
    return out
  }
  if (node && typeof node === 'object') {
    if (node['@type'] === 'Question' && node.acceptedAnswer?.text) out.push(node.acceptedAnswer.text)
    for (const v of Object.values(node)) faqAnswers(v, out)
  }
  return out
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
}

const REQUIRED = [
  [/^\/$/, ['ProfessionalService', 'LocalBusiness', 'FAQPage']],
  [/^\/about$/, ['Person']],
  [/^\/services\//, ['Service']],
  [/^\/industries\//, ['Service']],
  [/^\/resources\/[a-z-]+$/, ['Article']],
  [/^\/visibility-report$/, ['Service', 'Offer']],
]

const rows = []
for (const file of collect(ROOT)) {
  const route = '/' + path.relative(ROOT, file).split(path.sep).join('/').replace(/\.html$/, '')
  const page = route === '/index' ? '/' : route
  const html = fs.readFileSync(file, 'utf8')

  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  const types = new Set()
  let answers = []
  for (const b of blocks) {
    try {
      const json = JSON.parse(b[1].replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&'))
      typesIn(json, types)
      answers = answers.concat(faqAnswers(json))
    } catch {
      types.add('UNPARSEABLE')
    }
  }

  const missing = []
  for (const [pattern, required] of REQUIRED) {
    if (!pattern.test(page)) continue
    for (const t of required) if (!types.has(t)) missing.push(t)
  }

  // Are the FAQ answers actually in the served HTML?
  let uncrawlable = 0
  if (answers.length) {
    const text = visibleText(html)
    for (const a of answers) {
      const probe = a.slice(0, 60).replace(/\s+/g, ' ').trim()
      if (probe && !text.includes(probe)) uncrawlable++
    }
  }

  rows.push({ page, types: [...types].sort(), missing, faqs: answers.length, uncrawlable })
}

rows.sort((a, b) => a.page.localeCompare(b.page))

let problems = 0
for (const r of rows) {
  const flags = []
  if (r.missing.length) flags.push(`MISSING: ${r.missing.join(', ')}`)
  if (r.uncrawlable) flags.push(`${r.uncrawlable}/${r.faqs} FAQ ANSWERS NOT IN HTML`)
  if (r.types.includes('UNPARSEABLE')) flags.push('UNPARSEABLE JSON-LD')
  if (flags.length) problems++
  console.log(
    `${r.page.padEnd(46)} ${r.types.join(', ') || '(none)'}${flags.length ? '\n' + ' '.repeat(46) + ' ' + flags.join(' | ') : ''}`
  )
}

console.log(`\n${rows.length} pages, ${problems} with problems`)
if (problems) process.exit(1)
