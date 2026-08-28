// Prints each audit finding with the sentence around it, and the source file and line where
// that text lives, so fixes can be made precisely rather than by search-and-hope.
//
// Usage: node tools/show-findings.mjs
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const ROOT = '.next/server/app'

const PATTERNS = [
  [/\bleverag\w*/gi, 'leverage'],
  [/\blandscape\w*/gi, 'landscape'],
  [/\bquiet(?:ly)?\b/gi, 'quiet'],
  [/\bdominat\w*/gi, 'dominate'],
  [/\bcomprehensive\w*/gi, 'comprehensive'],
  [/—/g, 'em dash'],
  [/\s--\s|\w--\w/g, 'double hyphen'],
]

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
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 1)
    .join('\n')
}

function collect(dir, acc = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name)
    if (item.isDirectory()) collect(full, acc)
    else if (item.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

/** Find the source file and line holding a phrase, via ripgrep-style search of app/ and components/. */
function locate(phrase) {
  const needle = phrase.replace(/["'`\\]/g, '.').slice(0, 40)
  try {
    const out = execSync(`grep -rn --include=*.tsx -- ${JSON.stringify(needle)} app components`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    })
    const first = out.split('\n')[0] || ''
    return first.split(':').slice(0, 2).join(':')
  } catch {
    return '(source line not found)'
  }
}

for (const file of collect(ROOT)) {
  const route = '/' + path.relative(ROOT, file).split(path.sep).join('/').replace(/\.html$/, '')
  const text = visibleText(fs.readFileSync(file, 'utf8'))
  const hits = []

  for (const [re, label] of PATTERNS) {
    for (const m of text.matchAll(re)) {
      // Grab the sentence containing the match.
      const start = text.lastIndexOf('\n', m.index) + 1
      const lineEnd = text.indexOf('\n', m.index)
      const line = text.slice(start, lineEnd === -1 ? undefined : lineEnd)
      const sentences = line.split(/(?<=[.!?])\s+/)
      const sentence = sentences.find((s) => s.includes(m[0])) ?? line
      hits.push({ label, match: m[0], sentence: sentence.trim() })
    }
  }

  if (!hits.length) continue
  console.log(`\n### ${route === '/index' ? '/' : route}`)
  for (const h of hits) {
    console.log(`  [${h.label}] ${locate(h.sentence.slice(0, 40))}`)
    console.log(`     ${h.sentence.slice(0, 240)}`)
  }
}
