// Makes every page's FAQPage schema derive from the same array that renders the visible FAQ.
//
// The two were written separately and had drifted: on ten pages the schema answers were longer
// paraphrases of the visible ones. Google requires FAQPage content to match what is on the
// page, so mismatched text risks the rich result rather than earning it. Deriving one from the
// other removes the whole class of problem.
//
// Two shapes exist in this codebase:
//   - a module-level `const faqs = [...]` (services, resources, homepage)
//   - an array written inline inside the JSX (industry pages)
// The inline ones are hoisted to a const first.
//
// The faqs const must sit above the schema const, because schema references it at module
// evaluation and const is not hoisted out of the temporal dead zone.
//
// Usage: node tools/derive-faq-schema.mjs [--dry]
import fs from 'node:fs'
import path from 'node:path'

const DRY = process.argv.includes('--dry')

const DERIVED = `mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),`

function collect(dir, acc = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name)
    if (item.isDirectory()) collect(full, acc)
    else if (item.name === 'page.tsx') acc.push(full.split(path.sep).join('/'))
  }
  return acc
}

/** Matches a balanced [...] starting at `start`, respecting strings. */
function matchArray(text, start) {
  let depth = 0
  let quote = null
  for (let i = start; i < text.length; i++) {
    const c = text[i]
    const prev = text[i - 1]
    if (quote) {
      if (c === quote && prev !== '\\') quote = null
      continue
    }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue }
    if (c === '[') depth++
    else if (c === ']') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

const report = []

for (const file of collect('app')) {
  let text = fs.readFileSync(file, 'utf8')
  const original = text
  const notes = []

  // 1. Hoist an inline JSX FAQ array to a module-level const.
  if (!/^const faqs = \[/m.test(text)) {
    const marker = text.indexOf('{[\n              {\n                q: "')
    if (marker !== -1) {
      const openBracket = text.indexOf('[', marker)
      const closeBracket = matchArray(text, openBracket)
      if (closeBracket !== -1) {
        const arrayLiteral = text.slice(openBracket, closeBracket + 1)
        // Replace the inline literal with a reference to the new const.
        text = text.slice(0, openBracket) + 'faqs' + text.slice(closeBracket + 1)
        // Insert the const above the schema so it exists when schema is evaluated.
        const schemaAt = text.indexOf('const schema = {')
        if (schemaAt !== -1) {
          text = text.slice(0, schemaAt) + `const faqs = ${arrayLiteral};\n\n` + text.slice(schemaAt)
          notes.push('hoisted inline FAQ array')
        }
      }
    }
  } else {
    // 2. Move an existing faqs const above the schema const if it sits below it.
    const faqsAt = text.search(/^const faqs = \[/m)
    const schemaAt = text.indexOf('const schema = {')
    if (faqsAt !== -1 && schemaAt !== -1 && faqsAt > schemaAt) {
      const openBracket = text.indexOf('[', faqsAt)
      const closeBracket = matchArray(text, openBracket)
      let end = text.indexOf('\n', closeBracket)
      const block = text.slice(faqsAt, end + 1)
      text = text.slice(0, faqsAt) + text.slice(end + 1)
      const newSchemaAt = text.indexOf('const schema = {')
      text = text.slice(0, newSchemaAt) + block + '\n' + text.slice(newSchemaAt)
      notes.push('moved faqs above schema')
    }
  }

  // 3. Replace a hand-written FAQPage mainEntity with the derived version.
  const faqPageAt = text.indexOf('"@type": "FAQPage"')
  if (faqPageAt !== -1 && /^const faqs = \[/m.test(text)) {
    const meAt = text.indexOf('mainEntity: [', faqPageAt)
    if (meAt !== -1) {
      const openBracket = text.indexOf('[', meAt)
      const closeBracket = matchArray(text, openBracket)
      if (closeBracket !== -1) {
        let end = closeBracket + 1
        if (text[end] === ',') end++
        text = text.slice(0, meAt) + DERIVED + text.slice(end)
        notes.push('schema derived from faqs')
      }
    }
  }

  if (text !== original) {
    if (!DRY) fs.writeFileSync(file, text)
    report.push(`${file}: ${notes.join(', ')}`)
  }
}

for (const line of report) console.log(line)
console.log(`\n${DRY ? 'would change' : 'changed'} ${report.length} files`)
