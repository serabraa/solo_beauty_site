# GEO / SEO Release Validation

Date: 2026-10-31. Local changes, not deployed. Baseline `13867f3`.

## Checks

| Check | Result |
|---|---|
| Baseline lint | Passed before changes |
| Production build | Passed: client assets, existing card entry, SSR, two static homepage files |
| Full ESLint | Passed, including new `.mjs` build scripts |
| Static HTML regression checks | Passed for `/` and `/ru/` without JS execution |
| JSON-LD | Parses; one graph/page; stable salon ID; 9 catalog names match visible translated service names |
| Metadata | One title/H1/description/canonical per language, self-canonical and reciprocal hy/ru/x-default |
| Images/assets | Referenced local scripts/styles/logo/OG image exist in output |
| Booking anchors | At least 13 existing #contact links remain; browser click lands at contact |
| Sitemap/robots | Both public language URLs included, card excluded; public bots allowed |
| Card | Existing noindex,nofollow preserved; card entry and QR logic untouched |
| Browser | Chromium at 375 and 1280 pixels; Armenian and Russian; JavaScript on/off: 8 combinations passed |
| UI | Existing page and review design retained; mobile full-page screenshot inspected; no horizontal page overflow in all tested cases |
| Interactions | Language URL navigation, correct post-load locale, pricing-to-contact anchors and Contact visibility passed with JS enabled |
| Runtime | No uncaught page errors in browser checks; external requests blocked during tests to avoid analytics/booking side effects |
| Scope | `git diff -- src/App.jsx card/index.html src/card` is empty |

The browser smoke script used the installed Playwright runtime and Chromium,
outside project dependencies: `/private/tmp/solo-seo-browser-check.mjs`.
Screenshots: `/private/tmp/solo-seo-{hy,ru}-{375,1280}-{true,false}.png`.
The reproducible no-JavaScript HTML assertions are included as source in
`scripts/check-seo.py`; run them after every build. No commit was created by this task.

Static homepage HTML is approximately 161 KB uncompressed per locale because it
contains the existing review carousel and SVG icons. Enable host compression and
measure field performance before optimizing those components. Existing visual
animations and their accessibility limitations are not redesigned in this release.

## Not Verified / Not Published

- Production DNS/HTTP behavior, X-Robots-Tag, CDN redirects/firewall and actual
  crawler IP access: unavailable from the terminal environment.
- Schema.org remote validator / Google Rich Results Test acceptance: run after
  deployment; local semantic assertions do not guarantee eligibility or display.
- Live indexation, Core Web Vitals, analytics events, AI recommendation rankings,
  referral traffic and completed bookings: no account access or baseline supplied.
- English pages and dedicated service pages: not published; reviewed source copy,
  precise menu/prices, durations and authentic images remain dependencies.
- Directory/profile edits: manual checklist only. Conflicting street numbers
  remain unresolved; existing site address is retained.
- Review dates/counts/provenance: noted for owner review, not rewritten or added
  to structured ratings. Do not infer a current Google aggregate from old screenshots.

## Deployment Gate

Run the production checks in `geo-seo-audit.md` before calling the release live.
In particular, the host must serve the generated Russian file rather than the
Armenian SPA fallback. A successful local build does not establish that behavior.
