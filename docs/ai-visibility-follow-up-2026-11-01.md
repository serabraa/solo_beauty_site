# Gemini visibility follow-up: Solo Beauty

Investigation date: 2026-11-01 (Asia/Yerevan). This is a review of the October 31
Gemini Flash-Lite wave, not a new prompt wave. The 72 original answer JSON files,
screenshots, and [baseline report](ai-visibility-runs/2026-10-31/report.md) are
unchanged. One local metadata edit is recorded below; its deployment and indexing
have not been verified. The observed Gemini answers cannot be attributed to that
edit or to the earlier local SEO work.

## Evidence and authority

- The [published website](https://solobeauty.am/) and current local Armenian/Russian
  content and `BeautySalon` JSON-LD say **Ռիժկովի փողոց 3/1**. The
  [booking page](https://apnt.app/solo_beauty) says **ул. Рыжкова 3|1**, and the
  [salon's Telegram profile](https://t.me/solobeauty) says **Рыжкова 3/1
  (Кирова 3/1)**. These corroborate the website's *published* address, but they
  do not independently prove the legal building/entrance numbering.
- The [Yandex business listing](https://yandex.com/maps/org/solo_beauty/1371921405/)
  and [2GIS business listing](https://2gis.am/ru/gyumri/firm/70000001090579585)
  both show **Nikolay Rizhkov Street 1**. They link to `solobeauty.am`, so this is
  a conflicting record for the same business, not a namesake. A
  [Yandex house page](https://yandex.com/maps/10259/gyumri/house/YEoYfgNkQEQPQFpqfXt5dn1qZQ%3D%3D/)
  also associates the business with a building whose page title is 1/1 and whose
  business entry says 1. This may reflect an address convention, but that is
  unverified.
- [Waynst's listing](https://waynst.com/ru/place/solo-beauty-salon-gyumri-gyvoumri-gegheckvouthyan-srah-solo-beauty-studio-gyumri-lavagvouyn-gegheckvouthyan-srahy-gyvoumrivoum)
  gives only “Rijkov St,” without a number. It cannot resolve the disagreement.
  Gemini showed source *labels* in many answers, but the original capture usually
  lacks the source-chip destination URLs. A label near a claim is evidence of what
  Gemini displayed, not proof that a particular page supplied the claim.

## Address audit

The comparison standard is the address published by Solo Beauty, **Ryzhkov 3/1**.
Until the owner confirms the official entrance/building convention, “conflicting”
means different from that published standard; it does not prove a map entry is
geographically wrong.

| Variant in Gemini | Example baseline files | Assessment and likely source |
|---|---|---|
| Ryzhkov/Rizhkov/Rijkov **1**, including “No. 1” and Armenian/Russian spellings | `wave-gemini-HY03-3.json`, `HY08-3`, `RU02-1/2/3`, `RU03-1/2/3`, `RU07-1/2/3`, `EN02-1/2/3`, `EN07-2` | Conflicts with site/booking 3/1. Yandex and 2GIS publicly show 1; their labels appear beside several Gemini examples. Actual Gemini source URLs are unavailable for most runs. |
| **3/1 or 1** (both presented as alternatives) | `HY07-3`, `HY08-1/2`, `RU04-1`, `RU06-2`, `RU08-1/2/3` | Explicitly exposes the same public-source conflict; not an acceptable single visitor-facing address. `RU04-2` also says “1 or 3,” dropping the unit. |
| **Shirakatsi Street** in a grouped Solo/Restyle entry | `HY01-1` | Conflicts with every inspected Solo address. The phrase attaches one parenthetical street to two salons, so attribution to Solo alone is ambiguous. Yandex's Solo listing does not say Shirakatsi; no inspected external source corroborates this for Solo. Treat as Gemini grouping/misattribution, not evidence of a Solo listing to edit. |
| **Ryzhkov 3/1** or street name without number | `HY07-1`, `RU01-2/3`, `RU06-1/3`, `EN08-3` | Consistent or non-specific; do not classify as address error. The booking page's `3|1` is its own separator for the site's 3/1, not an additional street number. |

The number-1 variant recurs on manicure/pedicure queries as well as branded
location queries. Changing site schema from 3/1 to 1 would make the site disagree
with its own contact content and booking page. Owner review of the physical
entrance, official address, map pin and directions route must precede edits to
Yandex/2GIS or any alternative-address statement on the website. No owner-console
access or right to edit those profiles was established in this investigation.

## Non-branded comparison

The six prompt triplets ask equivalent categories, but wording is not a controlled
translation and model behavior varied. Counts below are Solo *mentions* in three
repeats; they are not rankings. Raw answers are in
`ai-visibility-runs/2026-10-31/wave-gemini-<ID>-<repeat>.json`.

| Intent | Armenian | Russian | English | What the answers show |
|---|---:|---:|---:|---|
| General salon (01) | 2/3 | 3/3 | 3/3 | RU01 lists Solo first in all three. HY01 lists it individually once, groups it with Restyle once, and omits it once. |
| Manicure (02) | 0/3 | 3/3 | 3/3 | HY02 twice gives 2GIS-heavy lists of other salons and once gives an unsourced list. RU02/EN02 each put Solo in their candidate lists, usually with 2GIS/Yandex labels and the disputed address 1. |
| Pedicure (03) | 1/3 | 3/3 | 3/3 | HY03's first two answers are generic and show no verified search indicator; its third lists Solo with a 2GIS label. All RU03/EN03 answers list Solo. |
| Hair coloring (04) | 0/3 | 3/3 | 3/3 | HY04 gives other salons or broad suggestions; RU04 and EN04 give Solo a dedicated entry. At least one HY04 answer indicated web search, so lack of search alone cannot explain every omission. |
| Professional/bridal makeup (05) | 1/3 | 3/3 | 3/3 | HY05 has one standalone Solo entry; other repeats give generic alternatives. EN05 includes one “other local studios” group rather than a standalone recommendation. |
| Online booking (06) | 3/3 | 3/3 | 1/3 | HY06 mentions Solo only as an example among salons taking social messages, despite the verified `apnt.app/solo_beauty` online-booking page. RU06 lists the booking platform and treats Solo as a specific option. EN06-2 places Solo under “Direct Message / Phone,” rather than the dedicated booking portal. |

Across all 18 Armenian non-branded answers, the 7 mentions comprise **3 standalone
candidate entries** (`HY01-2`, `HY03-3`, `HY05-1`), **1 grouped candidate** with the
ambiguous Shirakatsi street (`HY01-1`), and **3 incidental example mentions**
(`HY06-1/2/3`). Russian has 18 standalone candidate entries. English has 16
mentions; `EN05-2` is grouped under “Other Local Studios” and `EN06-2` is a
secondary, inaccurately described booking option. This qualitative distinction
is more useful than treating all 41 non-branded mentions as equal recommendations.

**Grounding caveat:** the saved page text showed “Searching the web” for 10/18
Armenian non-branded runs, versus 18/18 Russian and 18/18 English. Seven of the
10 Armenian runs with that indicator mentioned Solo. The other eight have
*unknown* search status, not confirmed no-search. Gemini's mode, query rewriting,
source selection, language coverage and response variability are plausible
contributors; this experiment cannot isolate their effects. The Armenian site
already has service content, but its local metadata did not explicitly contain
“մազերի ներկում” or “պեդիկյուր.” That is a concrete content gap, not proof it
caused Gemini's omissions. External Armenian service evidence found during this
spot check was mainly the salon's own page; this is not an exhaustive index or
ranking study. Yandex/2GIS labels appear in Russian and English Solo entries and
some Armenian alternatives, but exact citation URLs were rarely captured.

## Completed fix

`src/seo/site.js`: the Armenian page description now explicitly names the
already-published manicure, pedicure, hair-coloring and bridal-makeup services,
the site's Ryzhkov 3/1 address, online booking and the owner-confirmed primary
phone `+37493000217`. This affects the Armenian HTML meta description, social
descriptions and localized page/business description generated from that file.
It does not add a new service or claim a ranking benefit. Existing `BeautySalon`
address and `hasOfferCatalog` were already present, so no new schema entity or
alternate address was fabricated. Visual components and `App.jsx` were not edited.

## Proposed, pending verification

1. Owner confirms the official building, suite/entrance and exact map pin. Then
   reconcile Yandex and 2GIS through their normal business edit channels, with
   the same verified address and primary phone. Preserve the distinct business
   URL and name variants where the platforms require them. If 1 is a valid map
   entrance and 3/1 a postal/unit address, document that relationship precisely
   before putting it on the site or in schema.
2. Review natural Armenian wording with a native editor. After checking the
   actual service menu and photography, develop dedicated Armenian manicure,
   pedicure and hair-coloring content or pages. Service details, prices, results
   and availability must come from the salon, not Gemini's answers. Add relevant
   structured `Service` descriptions only where matching visible page content
   exists; the current `OfferCatalog` is already valid for broad services.
3. Check the booking portal and local profiles for a direct booking URL in each
   language. If the platform supports it, publish the verified booking link on
   the profile. Do not present social messaging as the only booking method.
4. Verify live deployment of the static Armenian/Russian build and indexing of
   `/` and `/ru/`. The baseline collection did not establish that local source
   edits had been deployed. Google Search Console and profile owner-console
   status were unavailable; no indexing or profile edit is claimed.

## Controlled retest

1. Record deployment timestamp and commit, raw production HTML/JSON-LD, server
   response codes, and Search Console indexing confirmation before the first
   post-release wave. If any are unavailable, label the wave “deployment/indexing
   unverified”; do not call it a before/after SEO result.
2. Reuse the exact 24 prompt IDs/strings in
   [the inventory](ai-visibility-measurement.md), three independent new sessions
   each (72 Gemini runs). Keep Gemini product/model, search settings, signed-in
   status, browser locale, timezone, market/IP or VPN exit, device and session
   isolation as close to this baseline as possible. Log changes and start a new
   comparison series if the model or search mode materially changes. Have a
   native Armenian speaker review the frozen prompts; version any edits rather
   than silently changing the baseline.
3. For every run capture exact prompt, UTC timestamp and Asia/Yerevan date/time,
   product/model, search status **yes/no/unknown**, complete answer, full visible
   source-chip URL (click/open it when possible), final source URL, and screenshot.
   Record inaccessible/captcha/login/empty runs separately. Do not infer a URL
   from a source label; do not bypass access controls.
4. Code each answer as no mention, standalone candidate, grouped candidate, or
   incidental mention. Record recommendation position only for numbered lists;
   code whether Solo is actually offered for the asked service/booking method.
   Audit every Solo-associated address against the owner-verified address, plus
   phone, booking method and any concrete service claims. Mark ambiguous street
   attributions and unverifiable facts separately from confirmed errors.
5. Report numerators/denominators by language and intent for *standalone accurate
   recommendations*, all mentions, observed-search subset, website citation,
   local-profile citation and factual accuracy. The old wave lacks complete source
   URLs and owner-verified entrance numbering, so those dimensions begin as new
   measurements. Compare equivalent prompt IDs and repeat sessions; do not pool
   branded prompts into discovery rates. Repeat after indexing, weekly for four
   weeks and monthly thereafter, noting model/source changes and seasonality.

No change in Gemini answers or enquiries is guaranteed by the metadata edit.
