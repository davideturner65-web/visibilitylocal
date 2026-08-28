// Removes every promised timeline for AI recommendation visibility.
//
// Nobody outside the model vendors can see retraining schedules or retrieval behaviour, so
// "sometimes within weeks" is a claim the site cannot support and the one a sceptical agent
// would screenshot. The replacements split the answer: the technical work runs on a schedule
// and is committed to, the AI outcome does not get a date, and a vendor who quotes one is a
// warning sign.
//
// Every replacement must match exactly once or the script aborts.
//
// Usage: node tools/fix-ai-timeline-claims.mjs
import fs from 'node:fs'

const FIXES = {
  'app/page.tsx': [
    [
      'text: "Google Business Profile improvements -- category corrections, citation cleanup, review velocity -- often show movement in 30 to 60 days. Organic content rankings typically take 90 to 180 days. AI search visibility builds faster than most people expect once your structured data and content authority are in place, sometimes within weeks.",',
      'text: "Google Business Profile work usually shows movement in 30 to 60 days, because it corrects things Google already measures: your primary category, citation consistency, review velocity. Organic content rankings take 90 to 180 days. For AI search I will not give you a date. Nobody outside OpenAI and Google can see when a model starts naming you, and any vendor quoting you a timeline for it is guessing. What I commit to is the work itself: the schema ships, the entity data agrees across the web, and the content is written to be citable.",',
    ],
    [
      'a: "GBP improvements often show movement in 30 to 60 days. Organic content rankings take 90 to 180 days. AI search visibility builds faster than most expect once your structured data and content authority are in place, sometimes within weeks.",',
      'a: "Google Business Profile work usually shows movement in 30 to 60 days, because it corrects things Google already measures: your primary category, citation consistency, review velocity. Organic content rankings take 90 to 180 days. For AI search I will not give you a date. Nobody outside the model vendors can see when a system starts naming you, and anyone quoting a timeline for it is guessing. What I commit to is the work: the schema ships, the entity data agrees across the web, and the content is written to be citable. Then we watch what the tools actually say about your market.",',
    ],
  ],

  'app/services/ai-search-visibility/page.tsx': [
    [
      'text: "Faster than most people expect, and slower than most people hope. Structured data improvements can start appearing in AI tools within weeks once pages are indexed. Entity establishment through directories and citations takes one to three months to build the signal strength that triggers consistent recommendations. Content-driven citations often appear within 30 to 60 days of publication. The compounding effect builds over six to twelve months.",',
      'text: "I do not know, and neither does anyone who tells you they do. The mechanics have schedules: schema gets validated and indexed, entity data across directories takes one to three months to agree, and content has to exist before it can be cited. Those steps I will commit to. When a specific model starts recommending you depends on retraining cycles and retrieval behaviour that no agency has visibility into. Treat a promised date as a reason to walk away from that vendor.",',
    ],
    [
      'a: "Faster than most people expect, and slower than most people hope. Structured data improvements can start appearing in AI tools within weeks once pages are indexed. Entity establishment through directories and citations takes one to three months to build the signal strength that triggers consistent recommendations. Content-driven citations often appear within 30 to 60 days of publication. The compounding effect builds over six to twelve months.",',
      'a: "I do not know, and neither does anyone who tells you they do. The mechanics have schedules: schema gets validated and indexed, entity data across directories takes one to three months to agree, and content has to exist before it can be cited. Those steps I will commit to. When a specific model starts recommending you depends on retraining cycles and retrieval behaviour that no agency has visibility into. Treat a promised date as a reason to walk away from that vendor.",',
    ],
  ],

  'app/resources/ai-search-visibility/page.tsx': [
    [
      'Timeline: how fast can AI visibility build?',
      'Timeline: what can be promised and what cannot',
    ],
    [
      'Faster than traditional SEO, in many cases. Schema markup changes can be indexed and recognized by AI tools within weeks of implementation. A Bing Places listing that is verified and complete can start affecting ChatGPT recommendations within a month. Citation cleanup, where you correct inconsistent data across existing listings, can show effects within 6 to 8 weeks as the corrected information propagates.',
      'The honest answer splits in two. The technical work runs on a schedule you can hold someone to: schema can be validated and submitted the week it is written, a Bing Places listing can be verified in days, and citation corrections move through the major directories over roughly six to eight weeks. Those are mechanical steps with observable completion, and you should expect dates for them.',
    ],
    [
      'Content authority takes longer. A FAQ page published today will not be a trusted source for AI tools immediately. Authority builds as the page ages, gets indexed, and is confirmed by other sources. But the foundational work, schema, Bing Places, citation consistency, can meaningfully improve your AI search visibility within 60 to 90 days of implementation.',
      'When a model actually starts naming you is a different question, and nobody selling this service can answer it. Retraining schedules are not published. Retrieval behaviour changes without announcement. A vendor who tells you that you will be appearing in ChatGPT by a particular month is describing something they can neither see nor control, and that is worth knowing about them before you sign anything.',
    ],
    [
      'The larger point about timing: most local businesses have not started this work yet. The window where these actions provide a significant competitive advantage is open now. It will narrow as more businesses and their agencies discover it. The businesses doing this work in 2025 are building a position that will be harder to displace in 2026 and beyond.',
      'What is true about timing is narrower than the pitch you usually hear. Most independent agents have not started any of this, so the advantage on offer comes from being early to work almost nobody in your market is doing. That advantage shrinks as it stops being unusual, which is an argument for starting rather than a deadline someone invented to rush you.',
    ],
  ],
}

let applied = 0
for (const [file, pairs] of Object.entries(FIXES)) {
  let text = fs.readFileSync(file, 'utf8')
  for (const [find, replace] of pairs) {
    const count = text.split(find).length - 1
    if (count !== 1) {
      console.error(`\nABORT: expected exactly 1 match in ${file}, found ${count}:\n  ${find.slice(0, 100)}...`)
      process.exit(1)
    }
    text = text.replace(find, replace)
    applied++
  }
  fs.writeFileSync(file, text)
  console.log(`${file}: ${pairs.length} fixed`)
}
console.log(`\ntotal: ${applied}`)
