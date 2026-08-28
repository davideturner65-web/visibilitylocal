// Fails while any page still carries an unfilled placeholder, so a page built ahead of its
// data cannot be published by accident.
//
// Two things are checked in the rendered output:
//   - the data-placeholder blocks from components/Placeholder.tsx
//   - the literal string REPLACE_WITH_, used for the Stripe payment link
//
// A page carrying placeholders is only a problem if it is also indexable, so pages set to
// noindex are reported as expected rather than as failures.
//
// Run `npx next build` first.
//
// Usage: node tools/check-placeholders.mjs
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

const blocking = []
const expected = []

for (const file of collect(ROOT)) {
  const route = '/' + path.relative(ROOT, file).split(path.sep).join('/').replace(/\.html$/, '')
  const page = route === '/index' ? '/' : route
  const html = fs.readFileSync(file, 'utf8')

  const count =
    (html.match(/data-placeholder/g) || []).length +
    (html.match(/REPLACE_WITH_/g) || []).length +
    (html.match(/PLACEHOLDER, DO NOT PUBLISH/gi) || []).length

  if (!count) continue

  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(html)
  ;(noindex ? expected : blocking).push({ page, count, noindex })
}

if (expected.length) {
  console.log('Placeholders on noindex pages (expected, not blocking):')
  for (const e of expected) console.log(`  ${e.page}  (${e.count})`)
  console.log()
}

if (blocking.length) {
  console.log('PLACEHOLDERS ON INDEXABLE PAGES:')
  for (const b of blocking) console.log(`  ${b.page}  (${b.count})`)
  console.log('\nFill these in, or set the page to noindex until the data exists.')
  process.exit(1)
}

console.log('No placeholders on indexable pages.')
