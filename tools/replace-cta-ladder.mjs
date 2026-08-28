// Step 10: replace the sitewide "free audit" call to action with the new ladder.
//
//   free scorecard  ->  $297 Visibility Report  ->  the engagement
//
// Each service and resource page ends with the same three-part block: an eyebrow, an h2, a
// paragraph selling the free audit, and a single button to /contact. The copy varies per page
// but the structure does not, so the eyebrow and h2 are left alone where they still make sense
// and the paragraph and button are replaced.
//
// /visibility-report is skipped deliberately: it argues against free audits, so the phrase
// appearing there is the point.
//
// Usage: node tools/replace-cta-ladder.mjs [--dry]
import fs from 'node:fs'
import path from 'node:path'

const DRY = process.argv.includes('--dry')
const SKIP = ['app/visibility-report/page.tsx', 'app/scorecard/page.tsx', 'app/offer/page.tsx']

const BUTTONS = `<div className="flex flex-wrap gap-3">
              <Link href="/visibility-report" className="btn-primary text-base px-8 py-4">
                Get Your Visibility Report
              </Link>
              <Link href="/scorecard" className="btn-secondary text-base px-8 py-4">
                Or grade your own listing, free
              </Link>
            </div>`

const PARAGRAPH = `The Visibility Report is a full diagnostic of how your agency turns up when somebody in your town goes looking for an agent: your Google listing, the map pack, your citation data, your website, and what the AI tools actually say. Written up, plus a call to go through it. If the honest answer is that you do not need me, the call will say so.`

function collect(dir, acc = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name)
    if (item.isDirectory()) collect(full, acc)
    else if (item.name === 'page.tsx') acc.push(full.split(path.sep).join('/'))
  }
  return acc
}

let changed = 0
const report = []

for (const file of collect('app')) {
  if (SKIP.includes(file)) continue
  let text = fs.readFileSync(file, 'utf8')
  const before = text
  const notes = []

  // 1. The paragraph selling the free audit.
  const paraRe = /<p className="font-sans text-base leading-relaxed mb-8"[^>]*>\s*[^<]*free audit[^<]*<\/p>/i
  if (paraRe.test(text)) {
    text = text.replace(paraRe, (m) => {
      const styleMatch = m.match(/style=\{\{[^}]*\}\}/)
      const style = styleMatch ? ` ${styleMatch[0]}` : ''
      return `<p className="font-sans text-base leading-relaxed mb-8"${style}>\n              ${PARAGRAPH}\n            </p>`
    })
    notes.push('CTA paragraph')
  }

  // 2. The single /contact button that follows it.
  const btnRe = /<Link href="\/contact" className="btn-primary text-base px-8 py-4">\s*[^<]*<\/Link>/
  if (btnRe.test(text)) {
    text = text.replace(btnRe, BUTTONS)
    notes.push('CTA buttons')
  }

  // 3. Headings that imply scarcity.
  if (text.includes('Check if your market is available.')) {
    text = text.replace(/Check if your market is available\./g, 'Find out what your town actually sees.')
    notes.push('scarcity heading')
  }

  if (text !== before) {
    if (!DRY) fs.writeFileSync(file, text)
    changed++
    report.push(`${file}: ${notes.join(', ')}`)
  }
}

for (const line of report) console.log(line)
console.log(`\n${DRY ? 'would change' : 'changed'} ${changed} files`)
