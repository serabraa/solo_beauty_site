# Service Content and Local Profile Work

Status: editorial recommendations, not published pages. Armenian is first.
All new prose below is a draft requiring salon/native-language review. Existing
Armenian and Russian UI copy was reused in the technical release, not rewritten.

## Six Service Briefs

Use `/services/<slug>/` for Armenian, `/ru/services/<slug>/` for approved Russian,
and later `/en/services/<slug>/` for reviewed English. Do not create or list an
empty route. Each actual page needs its own canonical, reciprocal language links,
one H1, shared salon identity, and a Service node referencing `/#salon`.

| Proposed slug | Verified scope in current source | Primary customer question | Outline and facts still needed |
|---|---|---|---|
| `manicure-pedicure` | Manicure, pedicure and gel polish in `i18.js` | Where can I book manicure/pedicure in Gyumri? | Separate manicure/pedicure/gel options; explain what each includes; approved removal/add-on prices and duration; genuine nail photos; link to brows/lashes |
| `haircuts-styling` | Men's and women's haircuts, styling; barber card | Where can I get a haircut or styling in Gyumri? | Separate cut/styling/barber scope; which options fit requested look; confirm wash/blow-dry inclusion and duration; genuine results; link coloring |
| `hair-coloring` | Coloring in women's hair and pricing descriptions | Which Gyumri salon offers hair coloring? | Confirm techniques currently offered, consultation process, length/product pricing and time; consented before/after images; avoid treatment/safety promises; link cuts/styling |
| `makeup` | Everyday, evening and bridal makeup in pricing translations | Where can I book professional makeup in Gyumri? | Distinguish three contexts; ask for event date/look when booking; confirm trial policy, inclusions and prices; show genuine portfolio; link styling |
| `brows-lashes` | Brow correction/lamination, lash extensions; existing service descriptions | Where can I get brows or lashes done in Gyumri? | Separate brow and lash services; confirm exact lamination offerings, extension styles, maintenance and appointment length; approved aftercare only; link manicure |
| `facial-skincare` | Cleansing/care/peeling in cosmetology card | Which facial/skincare services does Solo Beauty offer? | Owner-approved menu and practitioner scope required; do not infer skin-condition suitability or credentials; contact for consultation; no injection/medical advice drafted from shorthand UI copy |

Common page structure: clear localized heading; factual 2–3 sentence scope;
available options; approved inclusions/prices/durations; real work photos with
consent and descriptive alt text; Gyumri address and map; existing booking/phone
links; useful short Q&A; two related services and homepage link.

No price is copied from the broad hair range into a specific coloring service.
No duration, guarantee, certification, payment acceptance or treatment suitability
is inferred. If a price is not approved, say to confirm the chosen option with
the salon. Do not build six pages that merely repeat the same general paragraph.

## Reviewable English Starter Copy

Not wired into production or hreflang. Review the complete resource before launch,
including header, footer, pricing, contact, accessibility labels and metadata.
Do not expose `en` while i18next silently falls back to Armenian.

- Homepage title: **Solo Beauty | Beauty Salon in Gyumri**
- Description draft: **Haircuts, coloring, manicure, pedicure, makeup, brows and
  lashes at Solo Beauty in Gyumri. Explore services and contact the salon to book.**
- Manicure heading: **Manicure and Pedicure in Gyumri**
- Manicure draft: **Solo Beauty offers manicure, pedicure and gel-polish services.
  Contact the salon to choose your service and confirm the current price and
  appointment length. Book through the salon's online booking page or Telegram.**
- Hair heading: **Haircuts, Styling and Coloring in Gyumri**
- Hair draft: **Solo Beauty lists men's and women's hairdressing, styling and
  coloring services. Tell the salon which service you need when booking, and
  confirm what is included before your appointment.**

Safe Q&A based on existing site facts: where is the salon; what categories are
listed; how to contact/book; what hours are currently published. Reconfirm hours
and address before new copy is approved. Questions requiring more facts: exact
price, duration, practitioner, product, trial, aftercare, cancellation policy.
FAQ content can help customers; FAQ schema is not added just to seek a rich result.

## Question-to-Content Map

| Intent | Existing answer | Improvement |
|---|---|---|
| Beauty salons in Gyumri | Site title + salon entity + services | Static homepage and factual local identity |
| Manicure/pedicure options | Short nail-card description | Detailed manicure/pedicure page |
| Hair coloring options | Broad hair card | Specific reviewed coloring menu |
| Makeup for an event | Pricing description lists contexts | Makeup page + portfolio |
| Online salon booking | Contact links to platform and Telegram | Static contact content; keep target availability check separate |
| Address / opening times | Footer and schema | Resolve directory street number discrepancy |
| English-language discovery | No full English site | Reviewed English copy and URL set |

These are intent opportunities, not measured keyword volumes or rankings.
Use the 24 multilingual prompts in the measurement plan as the initial keyword
inventory. Avoid publishing generic beauty blogs before these service gaps close.

## External Profile Checklist (Manual)

Observed on 2026-10-31 via web extracts; provider cache dates may be older.
No external profile was edited, claimed, or messaged.

| Profile | Evidence | Manual action |
|---|---|---|
| [Google Maps](https://maps.app.goo.gl/bz44w7t6oa5zqXrK9) | Linked from existing site/schema; fresh owner data unavailable | Verify real-world display name, primary beauty-salon category, map entrance, hours, phone and booking URL; remove promotional name additions if present and unsupported by signage |
| [Yandex](https://yandex.com/maps/org/solo_beauty/1371921405/) | Extract says Solo Beauty Salon Gyumri, Rizhkov 1, +37431253988, 5.0/52 ratings/30 reviews | Reconcile building/unit with site's 3/1; confirm categories and phone; verify manager access in owner console, not by the public claim prompt |
| [2GIS](https://2gis.am/ru/gyumri/firm/70000001090579585) | Extract says Solo, Rizhkov 1, site link, 4.9/19 ratings/16 reviews | Confirm name variant, entrance/unit, primary phone and current booking route; distinguish ratings from written reviews |
| [Instagram](https://www.instagram.com/solobeauty.gyumri/) | Existing official link | Verify bio address/primary phone/hours, keep website + booking reachable |
| [Facebook](https://www.facebook.com/solobeautygyumri) | Existing official link | Confirm city spelling, address, current recommendation count and primary contact |
| [Booking platform](https://apnt.app/solo_beauty) | Existing CTA; platform fetch unavailable in this audit | Confirm service availability, staff availability, menu and durations; align website prices with owner-approved menu |
| [Telegram](https://t.me/solobeauty) and booking bot | Existing separate channel and booking links | Confirm which is informational and which books; keep hours consistent |

Keep one approved business-facts sheet: official display name, Armenian/Russian/
English address forms, postal/building/unit convention, map entrance, primary
international phone, additional phones, regular/holiday hours, category list,
canonical site and booking URL, and date each fact was checked.

Ask actual customers for honest reviews without incentives tied to positive
ratings; never manufacture reviews or suppress customers' negative experiences.
The existing site's some `07.2026` review dates conflict with earlier source
observations of July 2025. Recheck originals before changing dates; screenshots
saying "two months ago" do not establish an exact day. Keep initials-only display.
Do not assume matching initials prove the same reviewer across platforms.

For citations, first correct existing listings, then seek legitimate local
directory/partner mentions with the same facts. No bulk directory spam or bought
endorsements. Available extracts identify other salons but do not establish the
"top competitors", relative authority, traffic, market share or SEO winners.
Compare those only after collecting a repeatable search baseline.
