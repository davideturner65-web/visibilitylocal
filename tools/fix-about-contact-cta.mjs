// Last of step 10. The about and contact pages carry the free-audit CTA in their own layouts
// rather than the shared closing block, so they are handled separately.
//
// Contact stops being an audit request form and becomes what it should have been: the place to
// ask a question. The report is the paid front door and the scorecard is the free one, so the
// form no longer has to carry the offer.
//
// Every replacement must match exactly once or the script aborts.
//
// Usage: node tools/fix-about-contact-cta.mjs
import fs from 'node:fs'

const FIXES = {
  'app/about/page.tsx': [
    ['<p className="section-label mb-4">Check Availability</p>', '<p className="section-label mb-4">Where to start</p>'],
    [
      `<h2 className="font-serif text-4xl lg:text-5xl text-ink mt-6 mb-5">
              Is your market available?
            </h2>`,
      `<h2 className="font-serif text-4xl lg:text-5xl text-ink mt-6 mb-5">
              Start with the diagnosis.
            </h2>`,
    ],
    [
      'Visibility Local works with one client per market. If your city and industry are open, a free audit is the right first step. It takes about 20 minutes, covers your GBP, citations, and current map pack position, and gives you a real picture of where you stand before any commitment is made.',
      'One agent per market, and once I take yours your competitor cannot hire me. The sensible first step is the Visibility Report: a written diagnostic of your listing, your citations, your map pack position and what the AI tools say about your city. It costs $297 and comes off your setup if we go on to work together.',
    ],
    [
      `<Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Request a Free Audit
              </Link>`,
      `<Link href="/visibility-report" className="btn-primary text-base px-7 py-3.5">
                Get Your Visibility Report
              </Link>`,
    ],
  ],

  'app/contact/page.tsx': [
    ['<p className="section-label mb-5">Free Audit Request</p>', '<p className="section-label mb-5">Get in touch</p>'],
    [
      `<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Your market may already<br />
              <span className="italic text-gold">be taken.</span>
            </h1>`,
      `<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight mb-6">
              Ask me something<br />
              <span className="italic text-gold">before you spend anything.</span>
            </h1>`,
    ],
    [
      `A free audit takes about 20 minutes. We look at your Google Business Profile, citation profile, and current map pack visibility. If your market is open and it looks like a fit, we'll talk about what working together looks like.`,
      `If you want the full diagnostic, that is the Visibility Report and you can buy it without talking to me first. This form is for everything else: whether your market is taken, whether your situation is one I can actually help with, or whether the thing you read on this site applies to you.`,
    ],
    [
      `<p className="font-sans text-base text-ink-3 leading-relaxed">
              No pitch deck. No proposal theater.
            </p>`,
      `<p className="font-sans text-base text-ink-3 leading-relaxed">
              I answer these myself, usually within a day. No pitch deck, no proposal theater.
            </p>`,
    ],
    [
      `<button type="submit" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
                  Request Free Audit
                </button>`,
      `<button type="submit" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
                  Send it
                </button>`,
    ],
    [
      'By submitting this form you agree to be contacted about your audit request. No spam. No list adds without permission.',
      'By submitting this form you agree to be contacted about your enquiry. No spam, and I will not add you to a list without asking.',
    ],
  ],
}

let applied = 0
for (const [file, pairs] of Object.entries(FIXES)) {
  let text = fs.readFileSync(file, 'utf8')
  for (const [find, replace] of pairs) {
    const count = text.split(find).length - 1
    if (count !== 1) {
      console.error(`\nABORT: expected exactly 1 match in ${file}, found ${count}:\n  ${find.slice(0, 80)}...`)
      process.exit(1)
    }
    text = text.replace(find, replace)
    applied++
  }
  fs.writeFileSync(file, text)
  console.log(`${file}: ${pairs.length} fixed`)
}
console.log(`\ntotal: ${applied}`)
