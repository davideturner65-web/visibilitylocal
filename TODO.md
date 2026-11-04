# Before launch

## Blocking

- [ ] **Stripe Payment Link for the Visibility Report.** Create a $297 payment link and put it
      in `STRIPE_PAYMENT_LINK` in `lib/payment.ts`. Until it is set, the report page falls back to
      "Request the report" pointing at the /contact form, and you invoice by hand.

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

- [ ] **Link the outside profiles.** Add the Visibility Local Google Business Profile and LinkedIn
      URLs to `sameAs` in the `app/page.tsx` schema. It currently points only at the site itself.

- [ ] **Add a photo to the About page.**

- [ ] **Turn on Web Analytics in the Vercel dashboard.** The code is in `app/layout.tsx`; no data
      arrives until it is enabled for the project.

- [ ] **Have a lawyer read `/privacy` and `/terms`.** They are a plain-language first draft. The
      legal entity name, governing state and report refund policy still need adding.

- [ ] **Get a vector version of the logo** before anything is printed.

- [ ] **Publish `/research`** once the Invisible Agent Index has data. The route exists and is
      noindex; add it to the nav when there is something to read.

## Checks

Run before any deploy:

    npx next build
    node tools/check-placeholders.mjs
    node tools/check-links.mjs
    node tools/audit-copy.mjs
