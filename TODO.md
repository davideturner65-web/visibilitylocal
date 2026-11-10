# Before launch

## Blocking

- [ ] **Turn the forms on.** The market check, contact and scorecard forms post to `/api/lead`,
      which emails `info@visibilitylocal.com` through Resend. Create a Resend account, verify
      `visibilitylocal.com` as a sending domain there, and add `RESEND_API_KEY` to the Vercel
      project's environment variables, then redeploy. Until the key is set the pages show email
      and phone links instead of a form. Send a real test from each of the three forms.

- [ ] **Test a booking end to end.** The Google Calendar appointment schedule is wired in
      (`BOOKING_URL` and `BOOKING_EMBED_URL` in `lib/site.ts`). Once the forms are on, submit
      the market check form on the live site, confirm the calendar loads underneath, and book a
      test slot.

- [ ] **Set the price.** Put the setup fee and the monthly fee into `SETUP_FEE` and
      `MONTHLY_PRICE` in `lib/site.ts`. The offer page publishes them once both are set. Until
      then it says the numbers are given on the call.

- [ ] **Real figures in the Hillcrest case study.** `app/results/hillcrest-life-and-health/page.tsx`
      is built with loud placeholders and set to `noindex`. Fill in the starting condition,
      Search Console impressions and clicks, GBP performance figures, the heat map, the client
      quote (approved in writing by Lancaster Cook), and the timeline. The Hillcrest repo's git
      log dates the build; Search Console holds 16 months; GBP performance data only goes back
      about six months, so export it now. Then remove `noindex: true`, add the page to
      `app/sitemap.ts`, and link it from the homepage, the insurance agents page and the market
      check page. Run `node tools/check-placeholders.mjs` to confirm nothing is left.

## Worth doing

- [ ] **Link the outside profiles.** Add the Visibility Local Google Business Profile and
      LinkedIn URLs to `ORG_SAME_AS`, and David's LinkedIn to `FOUNDER_SAME_AS`, in `lib/site.ts`.
      Both are empty, so the schema currently carries no `sameAs` at all.

- [ ] **Sample snapshot on the market check page.** Redact one real snapshot and show it. A
      screenshot of the map pack and of an AI answer carries more weight than a description.

- [ ] **Add a photo to the About page.**

- [ ] **Turn on Web Analytics in the Vercel dashboard.** The code is in `app/layout.tsx`, and the
      forms send `lead_submitted` and `booking_link_click` events. No data arrives until
      analytics is enabled for the project. Custom events may need a paid Vercel plan.

- [ ] **Submit the sitemap in Google Search Console** and request indexing of the homepage,
      `/market-check` and `/industries/insurance-agents`.

- [ ] **Have a lawyer read `/privacy` and `/terms`.** They are a plain-language first draft. The
      legal entity name and governing state still need adding.

- [ ] **Get a vector version of the logo** before anything is printed.

- [ ] **Publish `/research`** once the Invisible Agent Index has data. The route exists and is
      noindex; add it to the nav when there is something to read.

## When content changes

- Bump the page's date in `app/sitemap.ts`. Dates there are set by hand on purpose.
- When a guide is revised, update `dateModified` in its Article schema and the visible
  "last reviewed" line together.

## Checks

Run before any deploy:

    npx next build
    node tools/check-placeholders.mjs
    node tools/check-links.mjs
    node tools/audit-copy.mjs
    node tools/audit-schema.mjs
    node tools/verify-sitemap.mjs
