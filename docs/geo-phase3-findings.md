# Solo Beauty GEO Phase 3: Findings and Release Checklist

Prepared 2026-11-02 (Asia/Yerevan). Evidence: the unchanged
[Gemini baseline](ai-visibility-runs/2026-10-31/report.md), its
[follow-up audit](ai-visibility-follow-up-2026-11-01.md), repository source,
and public pages checked during this phase. The 72 raw Gemini answers and
screenshots were not edited. No change in AI recommendations is claimed.

## Priorities

| Priority | Finding | Action and state |
|---|---|---|
| P0 | Public profiles disagree on the street number; Gemini repeats both | Owner verifies the physical/postal address and entrance, then updates maps. The site still uses its published 3/1. No unverified alternate was added. |
| P0 | Production has the old description and serves Armenian homepage metadata at `/ru/` and new service paths | Deploy the complete `npm run build` output with correct route handling; verify raw responses before any retest. Not deployed in this phase. |
| P1 | Armenian manicure and hair-coloring prompts had 0/3 Solo mentions each; online-booking mentions were incidental | Added two focused, crawlable service pages in both existing languages, with direct booking and phone actions. The homepage design is unchanged by this phase. No unsupported service details or claims. |
| P1 | Local authority records are inconsistent; one Armenian-language listing also shows number 1 | Update existing Yandex, 2GIS and TookLook records after the owner confirms the address. Improve genuine profile completeness and review collection. |
| P2 | No owner-approved service prices, durations, technique list, or entrance photo | Add these only after the salon supplies and approves them. Do not fill pages with generic or invented copy. |

## Address inventory

The current published website/booking address is **Ryzhkov 3/1**. This is a
verified *site statement*, not independent verification of the official parcel,
suite or entrance number. The primary phone **+37493000217** was confirmed by
the owner in the prior task and was not changed.

| Surface | Current value | Confidence / decision |
|---|---|---|
| Armenian/Russian homepage descriptions, `src/seo/site.js` | 3/1 | Same published address; keep pending owner confirmation. |
| `BeautySalon.address.streetAddress` in `src/seo/site.js` | Armenian-script Ryzhkov 3/1 on both language pages | Same entity identity; keep. New service pages reuse this node. |
| `src/i18.js` footer address in both languages, rendered by `Footer.jsx` | 3/1 | Matches schema and the booking page's `3|1` notation. |
| New service page visible location block in `ServicePage.jsx` | 3/1 | Reuses the published address; no second location was invented. |
| `Footer.jsx` embedded Google map, directions button, `Reviews.jsx` Google review link, `business.hasMap` | Existing Google Maps place/short link | The short link resolved to a Solo Beauty Google Maps place URL, but its address and entrance text were not independently confirmed. The embedded map has a place identifier and coordinates; do not reinterpret them as a verified street number. |
| `https://apnt.app/solo_beauty` | `ул. Рыжкова 3|1` | Existing booking source supports the site's 3/1 notation and published services. |
| [Telegram profile](https://t.me/solobeauty) | `Рыжкова 3/1 (Кирова 3/1)` | Corroborates the site; the former street name needs owner verification before reuse elsewhere. |
| [Yandex Maps](https://yandex.com/maps/org/solo_beauty/1371921405/) | Ryzhkov 1 | Conflicts with the site; profile links to the same business. |
| [2GIS](https://2gis.am/ru/gyumri/firm/70000001090579585) | Ryzhkov 1 | Conflicts with the site; profile links to the same business. |
| [TookLook Armenian listing](https://tooklook.me/hy/salons/d473b4b8-5ea3-41ef-8400-6a5dff8ba282) | Ryzhkov 1 | Additional Armenian-language conflict; correction route and account ownership need checking. |
| [Waynst listing](https://waynst.com/ru/place/solo-beauty-salon-gyumri-gyvoumri-gegheckvouthyan-srah-solo-beauty-studio-gyumri-lavagvouyn-gegheckvouthyan-srahy-gyvoumrivoum) | “Rijkov St” only | Missing house number, not evidence for either variant. |
| Gemini baseline HY01-1 | Shared Solo/Restyle phrase with Shirakatsi Street | Ambiguous grouped attribution and contrary to inspected Solo listings; do not publish it. |

Before changing the canonical address, the owner should check the street sign,
building/entrance sign, business registration or lease, and actual walking route
from the map pin. Record whether 1 is a building/map address and 3/1 a unit or
separate entrance. Capture approved Armenian, Russian and English address forms.
Only then update the site and listings together if the site's 3/1 proves wrong.

**Profile corrections after confirmation:**

1. **Yandex:** In the owned [Yandex Business address editor](https://yandex.com/support/business-priority/en/manage/address), open *About the business → Data → Location and entrances*. Use **Edit address** or **Add an entrance** when correcting the same location, not **Moving** unless the salon actually moved. Check map pin, contact number, categories, service menu, booking URL and opening hours. Submit evidence and monitor moderation. The [address policy](https://yandex.com/support/business-priority/en/add-company/rules-address) permits a brief entrance detail but only one main address.
2. **2GIS:** Use the [business account correction flow](https://help.2gis.com/question/how-to-make-changes-to-the-company-card). Confirm the same street number, entrance, floor, primary phone, site URL, hours, manicure/pedicure and hair-coloring categories, and booking route. Retain the current profile/reviews rather than creating a duplicate business.
3. **Google Maps:** Use the linked, verified [Google Business Profile edit flow](https://support.google.com/business/answer/3039617). Check displayed address, pin, directions/entrance, business name, category, hours, phone, service list and appointment link. The current public short link resolves, but this investigation could not read its address text. Do not assert Google agrees with either 1 or 3/1.
4. **TookLook:** Request a correction or use its owner account if available, after the address decision. Include the direct business link and proof; do not create a duplicate entry.

**Location/directions section proposal:** The homepage already has address,
hours, embedded map and directions in its footer. Once the entrance is verified,
add a concise, unframed location band beside the booking/contact area: canonical
address in both languages, entrance photo with consent, one useful landmark or
street approach, opening hours, map directions link and call button. If 1 and
3/1 are both legitimate conventions, explain the distinction in one sentence.
No extra coordinates, map pin or alternate address should be published before
that verification. The new service pages use the existing address and map link.

## Armenian content and intent

The existing hy/ru homepages share the same structure: one H1, nine service
cards, broad pricing blocks, booking links, footer address and one
`BeautySalon`/`OfferCatalog` graph. Both had no dedicated service URLs. The
Armenian title and description were localized, but the service cards used very
short lists such as “Ներկում” and “Պեդիկյուր, Մանիկյուր,” without answering
what to book. Russian wording had similarly broad cards; the much stronger
Russian Gemini results do not establish that its website copy was the cause.
English had no complete site translation. The original hy description was
updated in the earlier follow-up, but production still serves the older version.

| Prompt gap | Baseline observation | Implemented answer surface |
|---|---|---|
| HY02 manicure: 0/3 | Other salons in 2GIS-heavy lists | `/services/manicure-pedicure/`: explicit manicure, pedicure, gel polish, booking, location and contact. Russian counterpart has reciprocal link. |
| HY03 pedicure: 1/3 | Only one standalone Solo candidate; two generic answers | Same page has a separate pedicure heading and direct booking, without splitting into two nearly duplicate thin pages. |
| HY04 hair coloring: 0/3 | Other salons or generic advice | `/services/hair-coloring/`: explicit coloring and published hair-care scope, booking, address and related service link. |
| HY05 bridal makeup: 1/3 | One standalone entry | Existing homepage and booking catalog verify makeup. A separate makeup page awaits confirmed menu, examples and portfolio; generic copy alone would add little value. |
| HY06 online booking: 3/3 incidental | Gemini treated Solo as a social-message example | Each new page links directly to the verified booking portal; the homepage already has a booking CTA. Profile booking links still need owner-console review. |

The new hy/ru pages have distinct titles, one visible H1, unique descriptions,
self-canonicals, reciprocal `hy`/`ru` and `x-default` alternates, a `Service`
entity linked to the existing salon ID, direct booking and phone actions, and
links between related services. The homepage service cards remain visually unchanged;
the standalone pages are discoverable through the sitemap and direct URLs.
The six public URLs are in the generated sitemap. No new price, specialist,
duration, safety claim, certification or review rating was added. The service
copy is intentionally concise until the owner approves more detailed menu facts.
Native Armenian editorial review remains recommended before public release.

## Local authority work

**Existing records first:** Yandex, 2GIS, Google Maps, TookLook and
[ProfiBank's existing Solo page](https://profibank.am/en/solobeauty_en).
Check address, categories, phone, hours, website, direct booking URL and service
names. Track each profile's current value, submitted value, proof, submission
date, moderation status and final public URL. Do not infer that a listing is
unclaimed from a public “Are you the owner?” button.

**Relevant opportunities:** [Spyur](https://www.spyur.am/en/companies/anahit-beauty-salon-gyumri/38069/)
has Gyumri beauty salon entries and an “Add a Company” route; check whether Solo
already has a record before adding one. [Celebrate.am's Gyumri beauty section](https://celebrate.am/getting-ready/city/gyumri)
lists wedding-related salons and manicure studios, making it a plausible fit
for Solo's bridal makeup and nail services; ask about editorial/listing criteria
rather than assuming inclusion. A local publication or partner mention should
come from a real event, collaboration or useful story, not a purchased citation.
No external listing, article or account was created in this phase.

**Review collection:** Ask all actual customers for honest feedback after a
completed visit using the platform's own review link or QR code, without
selecting only happy customers. Reply to reviews with care and without exposing
private appointment details. Keep displayed writer names as initials on the
site, as requested previously; check permission and exact quotes/dates before
republishing. [Google's review guidance](https://support.google.com/business/answer/3474122)
forbids incentives in exchange for a review or a changed/removed review.
Neither reviews nor external mentions should be fabricated to influence AI.

## Production and release gate

Fresh HTTP checks around 2026-11-02 00:00 Asia/Yerevan returned **200** for `/`,
`/ru/`, `/services/manicure-pedicure/`, `/robots.txt` and `/sitemap.xml`. The
homepage raw HTML still contained the **old** Armenian description, not the
previously edited “մազերի ներկում” description. `/ru/` and the new service
path both returned the Armenian homepage title, `lang="hy"` and canonical `/`:
they are generic 200 fallbacks, not published localized/service pages. The
production sitemap listed only `/`. Robots allowed `/`, but that is not proof
the new pages were crawled or indexed. No `X-Robots-Tag` header appeared in the
observed homepage response. The server `Last-Modified` header was 2026-09-28;
this is a server header, not a reliable deployment history.

**Deployment owner:** Run `npm run build` and deploy the entire `dist/` output.
The host must serve the four service `index.html` files and `/ru/index.html`
before its SPA fallback. Ensure an unknown path gets a real 404, `/ru/` keeps
Russian metadata, and `/card/` stays `noindex`. Confirm raw HTML, titles,
canonicals, hreflang, service schema, booking links, assets, sitemap and robots
from the public domain. Submit/index the six URLs in Search Console and the
appropriate webmaster tools; check indexing status rather than assuming it.
No deployment, external profile edit or indexing request was performed here.

## Verification

Local `npm run build`, `npm run lint` and `python3 scripts/check-seo.py` passed.
The SEO check covers all six generated URLs, locale, H1, self-canonical,
reciprocal alternates, salon/service schema, booking/phone/internal links,
stylesheet assets, sitemap and `/card/` noindex. Browser QA checked the
homepage and four new pages at 375px and 1280px: all returned 200 with the
expected locale/title, one H1, booking link, no horizontal overflow and no
uncaught page errors. The production site still serves old content; local
verification does not imply a successful release.

## Controlled retest and success criteria

1. Freeze the original [24 prompts](ai-visibility-measurement.md), especially
   HY01–HY06, without adding the brand to non-branded wording. Record the
   owner-approved address and deployment/indexing dates before interpreting
   changes. If the prompt wording changes after native review, version it and
   start a separate series.
2. After production indexing is confirmed, run three fresh signed-out Gemini
   sessions per prompt using the same model/product and default search setting
   where possible. Log UTC and Asia/Yerevan timestamps, browser locale,
   observed location/IP context, model, exact prompt, search-grounding status
   (`yes`, `no`, `unknown`), full answer, visible source labels, exact citation
   URLs, screenshot and any login/error state. If mode/model differs, annotate
   or start a new comparison series.
3. Code each completed answer as no mention, incidental, grouped or standalone
   recommendation. Separately score whether the offered service fits the prompt,
   whether the owner-approved address/phone are correct, whether the direct
   booking route is described accurately, and whether the site or a verified
   local profile is actually cited. Unverifiable facts remain `unknown`.
4. Report counts by prompt and language with denominators and the observed-search
   subset. The historical Armenian baseline was 7/18 mentions but only 3/18
   standalone candidate entries; accurate standalone recommendations were not
   fully scoreable until the address is owner-verified. The historical citation
   URLs are incomplete, so citation-rate comparison begins with the new wave.
5. An operational success target is **at least 9/18 accurate standalone Armenian
   recommendations in two consecutive comparable waves**, with **at least 2/3
   for HY02 and 2/3 for HY04**, no confirmed wrong address among Solo
   recommendations, and correct direct booking information when mentioned.
   This is a target, not a forecast or evidence of causal SEO impact. Repeat
   weekly for four weeks and monthly afterward; pair with qualified booking
   enquiries and Search Console evidence rather than mentions alone.
