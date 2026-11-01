# Solo Beauty: GEO / SEO Audit and Implementation

Audit date: 2026-10-31 (Asia/Yerevan). Repository baseline: branch
`chore/pricelist-link`, commit `13867f3`. This audit describes inspected source and the local
production build. It is not a claim that changes have been deployed or indexed.

## Summary

The current repository is materially better than the earlier chat audit. It
already has Armenian metadata, social previews, a real preview image, a canonical,
robots.txt, sitemap.xml, BeautySalon JSON-LD, a translated H1, and linked Google,
Yandex and 2GIS profiles. The highest-impact confirmed gap was an empty initial
HTML body. Services and contact information required client rendering, Russian
had no distinct URL, and English had no translation resource. The first release
addresses static rendering and Armenian/Russian discovery without redesigning
the site. Detailed service pages and English remain content-review tasks.

No ranking, search volume, backlink authority, conversion rate, AI recommendation
position, or Core Web Vitals result has been measured here. We cannot infer any
of them from follower counts, click totals, or an installed analytics tag.

## Architecture and Evidence

| Area | Observed baseline | Result / implication |
|---|---|---|
| Framework | React 19, Vite 6, Tailwind 4, i18next, AOS | Keep architecture; no framework migration or new npm dependencies |
| Rendering | `src/main.jsx` calls `createRoot`; source HTML has empty `#root` | Crawlers without JS receive metadata but no service/contact body |
| Entries | `vite.config.js` builds `/` and `/card/` | Cardholder offer is a separate entry; preserve its logic and privacy directive |
| Deployment | No production server, CDN or deployment manifest inspected in repo; README is Vite boilerplate | Build output is `dist`; hosting rules must be checked in deployment console |
| Metadata | `index.html` already contains title, Armenian description, canonical, OG and Twitter card | Not missing; language-specific generation replaces hardcoded duplication |
| Crawler policy | `public/robots.txt`: wildcard allow plus sitemap | Already allows search bots. No reason to broadly relax access controls |
| Sitemap | Only homepage | Add Russian URL; exclude card offer and unapproved future routes |
| Schema | BeautySalon with address, hours, phone, sameAs, logo and image | Extend with stable identity, localized WebPage, catalog and booking target |
| H1 | `Home.jsx` uses `siteTitle`; both locale resources now define it | Earlier missing-key issue is already fixed; H1 is visually hidden |
| Services | Nine cards under `#services`, no independent service URLs | Broad coverage but little answer depth; anchors are not separate indexable pages |
| Languages | `hy` and `ru` resources; buttons call changeLanguage, one URL; HTML stays `hy` | Russian lacks its own canonical, metadata and crawlable language selection |
| English | No `en` resource | Do not publish partial translations or Armenian fallback under `/en/` |
| Internal links | Homepage anchors, external booking/maps/social links | Valid contact links; language navigation should also be real links |
| Prices | Four ranges in Pricing, detailed price list in click-open Heyzine iframe | Detailed rates unavailable in initial HTML; reconcile before publishing structured prices |
| Address/hours | i18n + Footer + existing schema: Rizhkov 3/1, Gyumri, AM; daily 09:00–21:00 | Reuse site facts; check conflicting directory street numbers before changing |
| Phone | Owner-confirmed primary number: `+37493000217` | Correct as supplied; keep this primary number unchanged in website content and structured data. The separately listed footer landline is not a replacement for it. |
| Photos | Logo and agency logo; Gallery is disabled and uses placeholder paths | Do not fabricate a portfolio or turn missing images into broken links |
| Assets | Salon PNG ~252 KB; OG JPG ~46 KB; agency SVG ~7 KB | Earlier claim of a 574 KB agency image is no longer true |
| Analytics | Existing GA4 tag G-DWHP6DVX2S; card entry has qr_scan | Installation alone does not establish usable conversion tracking or historical results |
| Reviews | Initials-only mixed carousel with copied review dates and shortened excerpts | Preserve UI; verify text/dates separately; do not emit self-serving aggregate ratings |

## Priorities

| Severity | Confirmed issue | Action | Impact | Effort / dependency |
|---|---|---|---|---|
| Critical | Body requires JavaScript | Build static HTML from existing components | High crawler accessibility | Moderate; build pipeline and hosting must serve generated files |
| High | Russian has no indexable URL or matching metadata | `/ru/`, self-canonical, reciprocal hy/ru/x-default, real language links | High language relevance | Moderate; hosting route smoke test |
| High | Service cards lack service-specific detail | Six service-page briefs, Armenian first | High intent relevance | 1–2 days per reviewed batch; approved menu and photos |
| High | Address differs across owned site and directories | Confirm street/building/unit convention, reconcile profiles | High identity confidence | Owner confirmation and account access |
| High | Detailed prices depend on iframe; categories are very broad | Publish approved service-specific ranges with inclusions | High decision usefulness | Approved menu; no rates guessed in schema |
| High | English resource absent | Review full English resource before public `/en/` launch | English search coverage | Translator/editor approval and complete UI coverage |
| Medium | Schema lacks stable ID, catalog, localized page entity, booking target | Central shared metadata model | Clearer entity/service relationships | Small; implemented |
| Medium | Truncated footer landline | Correct href and displayed number | Contact consistency | Small; implemented |
| Medium | No-JS AOS content can remain transparent | No-script visibility override | Accessible static content | Small; implemented |
| Medium | Reviews have freshness/provenance concerns | Verify dates and distinguish excerpts from full quotes | Trust | Owner review; no unsupported aggregate schema |
| Medium | Missing CWV, referrer, query and crawl baseline | Run measurement plan and production inspection | Measurability | Analytics/Search Console/Bing access |

No observed robots prohibition or production `noindex` on the homepage is claimed.
The critical rendering issue is a limitation for non-JS crawlers, not proof Google
cannot index JavaScript-rendered pages.

## Implemented Release

- `src/seo/site.js`: shared public identity and hy/ru page metadata; one stable
  `https://solobeauty.am/#salon` ID. Catalog names come from existing translations.
- `scripts/seo-head.mjs`: escaped titles/descriptions, canonical, reciprocal
  hreflang, localized OG/Twitter, one JSON-LD graph per page.
- `src/entry-server.jsx` and `scripts/build.mjs`: Vite build plus temporary SSR
  bundle, render the unchanged App to `/index.html` and `/ru/index.html`; clean
  the temporary bundle; generate sitemap from the same page registry.
- `vite.config.js`: metadata generation for development and production entries.
- `src/main.jsx`: select locale from path before client rendering, set HTML lang.
- `Header.jsx`: language buttons become equally styled navigation links.
- `Footer.jsx`: fix the verified landline truncation.
- `index.html`: template with generated SEO head and no-JS AOS visibility.
- `public/sitemap.xml`: includes `/ru/`; robots comments document existing policy.
- `scripts/check-seo.py`: standard-library assertions over built HTML and XML.

`App.jsx`, cardholder code, price amounts, booking targets, the visual palette,
and review content are unchanged. Language selection now navigates to a URL and
therefore reloads the page; this is intentional for shareability/indexability.
The existing client render remounts the static markup; it does not hydrate it.
This avoids hydration mismatches from existing client-only behavior but leaves
hydration as a future performance improvement if field measurements justify it.

The catalog is broad existing service inventory, not a claim of real-time booking
availability. No prices, geographic coordinates, credentials, awards, review
counts, `AggregateRating`, or medical suitability claims were added. The old
unverified `priceRange` was omitted. Valid schema does not guarantee a rich result.

## Crawler Policy and Official Sources

The wildcard allow already covers OAI-SearchBot, Googlebot, Bingbot and
PerplexityBot. Adding separate groups can accidentally override general rules;
it is not necessary here. Training consent remains as previously configured.
The website can allow search discovery independently of training permissions.
If the owner later chooses to block GPTBot or Google-Extended, implement that as
an explicit policy change, not as a presumed SEO prerequisite.

- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots):
  OAI-SearchBot is for search; GPTBot is for training. Firewall verification must
  use the operator's published IP ranges, not just a spoofable user-agent string.
- [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers):
  PerplexityBot supports search discovery. Network access is separate from robots.
- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features):
  normal search eligibility and helpful crawlable content remain the foundation;
  a special AI file or schema is not required.
- [Bing crawler rules](https://www.bing.com/webmasters/help/how-to-create-a-robots-txt-file-cb7c31ec):
  check generic and specific groups; allow crawling to evaluate indexing rules.
- [Google language alternates](https://developers.google.com/search/docs/specialty/international/localized-versions):
  use reciprocal links between real localized URLs.
- [Schema.org BeautySalon](https://schema.org/BeautySalon) and
  [Google LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business):
  represent the actual business, without unsupported enrichment.

The card page remains crawlable with `noindex, nofollow`: blocking it in robots
could prevent a crawler from seeing its noindex. No private/admin endpoints were
opened. No `llms.txt` was added: it is not a substitute for indexable public HTML.

## Production Verification and Limits

The web fetch of the live homepage returned its title but no readable body.
Terminal HTTP requests failed DNS resolution in this environment. This does not
prove the public site is down. Production HTTP codes, X-Robots-Tag, redirects,
firewall settings, bot-specific access, CDN cache and unknown-route behavior
remain unverified. External profiles returned cached extracts, not owner-console
state. No claim that a profile is unclaimed is made from an ownership prompt.

Deployment owner checklist:

1. Deploy the complete `dist` directory produced by `npm run build`. Calling
   `vite build` alone skips static rendering and Russian output.
2. Serve `/ru/` from `dist/ru/index.html`, ahead of any SPA fallback. Redirect
   `/ru` to `/ru/` and explicit index.html variants to canonical directory URLs.
3. Return a real 404 for unknown paths. Vite preview fallback is not a production
   404 policy. Do not apply homepage fallback to unpublished `/en/` or service URLs.
4. Confirm `/` and `/ru/` return 200 with correct raw source, lang, title, canonical,
   alternates and one schema graph. Confirm assets and images return 200.
5. Confirm sitemap/robots return 200 and correct content types. Keep `/card/`
   noindex, outside sitemap. Check X-Robots-Tag does not override public indexability.
6. Check WAF/CDN logs against published search-crawler IP lists. A successful
   curl with a bot user-agent does not prove actual bot access.
7. Run Google Rich Results Test and Schema Markup Validator on deployed URLs.
   Local checks parse JSON and check consistency; they do not replace remote validation.
8. Inspect both URLs in Search Console and Bing Webmaster Tools, submit sitemap,
   and verify rendered screenshot + raw HTML. Request indexing once, then monitor.
9. Test language links, refresh `/ru/`, mobile navigation, price modal, Contact
   anchors, and card QR flow. Measure field LCP/INP/CLS after release; no CWV
   pass is asserted from a local build.

## Verification Commands

```sh
npm run lint
npm run build
python3 scripts/check-seo.py
npm run preview -- --host 127.0.0.1 --port 5180
```

No test/typecheck script or TypeScript configuration existed at baseline.
Build-time SSR currently emits an existing unused `FaTimes` import warning;
it is not a failed build. Browser verification and final results are recorded
in `geo-seo-validation.md`.

## Next Release Order

1. Review the facts/profile checklist and reconcile the authoritative menu.
2. Approve Armenian manicure and hair-page copy with genuine work photos.
3. Publish those pages using the same static pipeline; add Service entities,
   related-service links and sitemap URLs only when those pages exist.
4. Review Russian equivalents, then the complete English resource and metadata.
5. Establish the repeated AI-prompt baseline and analytics acquisition reports.
6. Review results after crawl/indexing confirmation and several repeat runs;
   prioritize qualified enquiries rather than a one-off AI mention.
