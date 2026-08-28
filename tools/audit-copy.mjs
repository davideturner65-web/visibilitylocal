// Scans the rendered pages for the AI-tells listed in the build brief: punctuation artifacts,
// banned vocabulary, banned setup phrases, emoji, and overused contrast framing.
//
// Reads the prerendered HTML in .next/server/app rather than the .tsx source. Parsing copy out
// of JSX means guessing which quotes are prose and which are attributes, and getting it wrong
// in either direction. The rendered output is exactly what a visitor and a crawler see, which
// is what the standard is actually about. Run `npx next build` first.
//
// Usage: node tools/audit-copy.mjs [--json] [--page /services/local-seo]
import fs from 'node:fs'
import path from 'node:path'

const ROOT = '.next/server/app'

const BANNED_WORDS = [
  'delve', 'tackle', 'unlock', 'empower', 'embark', 'game-changing', 'groundbreaking',
  'multifaceted', 'tapestry', 'testament', 'robust', 'seamless', 'leverage', 'realm',
  'crucial', 'vital', 'dominate', 'crush', 'comprehensive',
]

const BANNED_FIGURATIVE = [
  [String.raw`\bnavigat(?:e|ing|es|ed)\b(?!\s+(?:to|back|between)\b)`, 'figurative "navigate"'],
  [String.raw`\blandscape\b`, 'figurative "landscape"'],
]

const BANNED_PHRASES = [
  "here's the thing", "here's the kicker", 'the best part', "here's the breakdown",
  'let that sink in', 'in a world where', "let's face it", "here's what most people miss",
  "you're not alone", "you're not imagining", 'ready to go deeper', 'want to sit with that',
  'in conclusion', 'key takeaways', 'final thoughts', 'wrapping up', 'honestly?',
]

const CHAR_ISSUES = [
  [/—/g, 'em dash'],
  [/(?<![0-9])\s–\s(?![0-9])/g, 'en dash as punctuation'],
  [/\s--\s|\w--\w/g, 'stray double hyphen'],
  [/\S {2,}\S/g, 'double space'],
  [/\S\s+[,.;:?!](?:\s|$)/g, 'space before punctuation'],
  [/[\u{1F300}-\u{1FAFF}\u{2190}-\u{21FF}\u{2600}-\u{27BF}\u{FE0F}]/gu, 'emoji'],
  [/\bquiet(?:ly)?\b/gi, '"quiet" as a weight-adder (review each)'],
]

const CONTRAST_FRAMING = /\b(?:it'?s|this is|that'?s) not (?:just|only|about) [^.]{2,70}?,?\s+it'?s\b/gi

/** Visible text of a rendered page, with scripts, styles and the shared chrome removed. */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 1)
    .join('\n')
}

function collect(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name)
    if (item.isDirectory()) collect(full, acc)
    else if (item.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

const pageFilter = process.argv.includes('--page') ? process.argv[process.argv.indexOf('--page') + 1] : null
const pages = collect(ROOT)

if (!pages.length) {
  console.error(`No rendered pages under ${ROOT}. Run: npx next build`)
  process.exit(1)
}

const findings = []

for (const file of pages) {
  const route = '/' + path.relative(ROOT, file).split(path.sep).join('/').replace(/\.html$/, '')
  const clean = route === '/index' ? '/' : route
  if (pageFilter && !clean.includes(pageFilter)) continue

  const text = visibleText(fs.readFileSync(file, 'utf8'))
  const lower = text.toLowerCase()

  for (const [re, label] of CHAR_ISSUES) {
    const hits = text.match(re)
    if (hits) findings.push({ page: clean, kind: label, count: hits.length, sample: hits[0].trim() })
  }
  for (const word of BANNED_WORDS) {
    // "Core Web Vitals" is a metric name, not the banned adjective.
    const re = word === 'vital' ? /\bvital(?!s\b)\w*\b/gi : new RegExp(`\\b${word}\\w*\\b`, 'gi')
    const hits = text.match(re)
    if (hits) findings.push({ page: clean, kind: `banned word: ${word}`, count: hits.length, sample: hits[0] })
  }
  for (const [pattern, label] of BANNED_FIGURATIVE) {
    const hits = text.match(new RegExp(pattern, 'gi'))
    if (hits) findings.push({ page: clean, kind: label, count: hits.length, sample: hits[0] })
  }
  for (const phrase of BANNED_PHRASES) {
    if (lower.includes(phrase)) findings.push({ page: clean, kind: `banned phrase: ${phrase}`, count: 1 })
  }
  const contrast = text.match(CONTRAST_FRAMING)
  if (contrast && contrast.length > 1) {
    findings.push({ page: clean, kind: 'contrast framing more than once', count: contrast.length, sample: contrast[0].slice(0, 50) })
  }
  const curly = (text.match(/[‘’“”]/g) || []).length
  const straight = (text.match(/(?<=\w)'(?=\w)/g) || []).length
  if (curly > 0 && straight > 0) {
    findings.push({ page: clean, kind: 'mixed straight and curly quotes', count: curly + straight })
  }
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(findings, null, 2))
} else {
  const byKind = new Map()
  for (const f of findings) {
    const cur = byKind.get(f.kind) || { count: 0, pages: new Set(), sample: f.sample }
    cur.count += f.count
    cur.pages.add(f.page)
    byKind.set(f.kind, cur)
  }
  for (const [kind, v] of [...byKind].sort((a, b) => b[1].count - a[1].count)) {
    console.log(
      String(v.count).padStart(4),
      kind.padEnd(44),
      `${String(v.pages.size).padStart(2)} page(s)`,
      v.sample ? `e.g. ${JSON.stringify(String(v.sample).slice(0, 46))}` : ''
    )
  }
  console.log(
    '\ntotal:',
    findings.reduce((n, f) => n + f.count, 0),
    'findings across',
    new Set(findings.map((f) => f.page)).size,
    'pages'
  )
}
