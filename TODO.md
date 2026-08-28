# Before launch

## Blocking

- [ ] **Stripe Payment Link for the Visibility Report.** Create a $297 payment link and put it
      in `STRIPE_PAYMENT_LINK` in `app/visibility-report/page.tsx`. Until it is set, the page
      falls back to "Request the report" pointing at /contact, which works but is manual.

- [ ] **Real figures in the Hillcrest case study.** `app/results/hillcrest-life-and-health/page.tsx`
      is built with loud placeholders and set to `noindex`. Fill in the starting condition,
      Search Console impressions and clicks, GBP Insights, the before and after heat map, the
      client quote (approved in writing by Lancaster Cook), and the timeline. Then remove the
      `robots: { index: false }` and link it from the homepage, the insurance agents page and
      the visibility report page.
      Run `node tools/check-placeholders.mjs` to confirm nothing is left.

## Worth doing

- [ ] **Sample excerpt on the Visibility Report page.** Take two or three pages from a real
      report, redact the agency name and address, and add them back as a section. The GBP
      category finding and the AI transcript are the most persuasive parts. A screenshot of the
      map pack grid carries more weight than a paragraph describing one.

- [ ] **Decide on "we" versus "I".** The site currently mixes them: older copy says "we work
      with one client per market" while the new copy says "I". It is a solo practice and the
      About page already says David Turner handles every client directly, so "I" is the honest
      choice, but it is a brand decision rather than a bug.

- [ ] **Publish `/research`** once the Invisible Agent Index has data. The route exists and is
      noindex; add it to the nav when there is something to read.

## Checks

Run before any deploy:

    npx next build
    node tools/check-placeholders.mjs
    node tools/check-links.mjs
    node tools/audit-copy.mjs
