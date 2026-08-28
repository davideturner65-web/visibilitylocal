// Adds audience with an audienceType matching the profession to the Service schema on each
// industry page, per the build brief. Without it the Service schema says what is offered but
// not who it is for, which is the one thing an industry page exists to state.
//
// Usage: node tools/add-industry-audience.mjs
import fs from 'node:fs'

const AUDIENCE = {
  'insurance-agents': 'Independent insurance agents',
  'mortgage-brokers': 'Independent mortgage brokers',
  'cpa-firms': 'CPA firms and accountants',
  'financial-advisors': 'Financial advisors and RIAs',
  'real-estate': 'Real estate agents and brokerages',
  attorneys: 'Attorneys and law firms',
  'medical-practices': 'Medical and dental practices',
  'home-services': 'Home services contractors',
}

let changed = 0
for (const [slug, audienceType] of Object.entries(AUDIENCE)) {
  const file = `app/industries/${slug}/page.tsx`
  let text = fs.readFileSync(file, 'utf8')

  if (text.includes('"@type": "Audience"')) {
    console.log(`${slug}: already has audience, skipped`)
    continue
  }

  // Attach it to the Service node, which every industry page anchors on serviceType.
  const anchor = /(\s+)serviceType: "([^"]+)",/
  const m = text.match(anchor)
  if (!m) {
    console.error(`${slug}: no serviceType anchor found`)
    continue
  }

  const indent = m[1]
  const addition = `${indent}audience: {${indent}  "@type": "Audience",${indent}  audienceType: "${audienceType}",${indent}},`
  text = text.replace(anchor, `${m[0]}${addition}`)
  fs.writeFileSync(file, text)
  changed++
  console.log(`${slug}: audience added (${audienceType})`)
}

console.log(`\n${changed} files changed`)
