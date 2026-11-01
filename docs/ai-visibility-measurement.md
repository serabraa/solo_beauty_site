# AI Search Visibility Measurement

An initial measurement wave was started October 31, 2026, with continuation
requested November 1. See the [execution report](ai-visibility-runs/2026-10-31/report.md)
and [288-cell results ledger](ai-visibility-runs/2026-10-31/results.json).
This is a partial cross-platform experiment: blocked platforms and incomplete
responses are excluded from visibility denominators. Web research and local
browser QA are not AI recommendation tests. Search mode, account state, and
source-capture limitations are recorded in the report.

## Prompt Inventory

Freeze the exact wording for longitudinal comparison. These are draft natural
language prompts; have a native Armenian reviewer approve wording before the
baseline and version any edits. Branded and non-branded results must be separate.

| ID | Language | Type | Exact prompt |
|---|---|---|---|
| HY01 | hy | non-branded | Գյումրիում լավ գեղեցկության սրահ ո՞րն է։ |
| HY02 | hy | non-branded | Որտե՞ղ կարելի է մատնահարդարում անել Գյումրիում։ |
| HY03 | hy | non-branded | Գյումրիում որտե՞ղ կարելի է պեդիկյուր անել։ |
| HY04 | hy | non-branded | Գյումրիում ո՞ր սրահներն են առաջարկում մազերի ներկում։ |
| HY05 | hy | non-branded | Որտե՞ղ ամրագրել հարսանեկան դիմահարդարում Գյումրիում։ |
| HY06 | hy | non-branded | Գյումրիում ո՞ր գեղեցկության սրահներում կարելի է առցանց ամրագրել։ |
| HY07 | hy | branded | Ի՞նչ ծառայություններ է առաջարկում Solo Beauty-ն Գյումրիում։ |
| HY08 | hy | branded | Ինչպե՞ս ամրագրել այց Solo Beauty Գյումրի սրահում։ |
| RU01 | ru | non-branded | Какие салоны красоты в Гюмри стоит рассмотреть? |
| RU02 | ru | non-branded | Где сделать маникюр в Гюмри? |
| RU03 | ru | non-branded | Где можно сделать педикюр в Гюмри? |
| RU04 | ru | non-branded | Какие салоны в Гюмри предлагают окрашивание волос? |
| RU05 | ru | non-branded | Где записаться на профессиональный макияж в Гюмри? |
| RU06 | ru | non-branded | В каких салонах красоты в Гюмри есть онлайн-запись? |
| RU07 | ru | branded | Какие услуги предлагает Solo Beauty в Гюмри? |
| RU08 | ru | branded | Как записаться в Solo Beauty в Гюмри и где находится салон? |
| EN01 | en | non-branded | What beauty salons should I consider in Gyumri? |
| EN02 | en | non-branded | Where can I get a manicure in Gyumri? |
| EN03 | en | non-branded | Where can I get a pedicure in Gyumri? |
| EN04 | en | non-branded | Which salons in Gyumri offer hair coloring? |
| EN05 | en | non-branded | Where can I book professional makeup in Gyumri? |
| EN06 | en | non-branded | Which beauty salons in Gyumri accept online bookings? |
| EN07 | en | branded | What services does Solo Beauty in Gyumri offer? |
| EN08 | en | branded | How can I book Solo Beauty in Gyumri and where is it located? |

## Recording Template

Use one row per independent prompt run. Do not prefill outcomes. Store the full
answer/screenshot separately so citations and order can be audited.

| Field | Record |
|---|---|
| prompt_id / prompt_version / exact_prompt | From frozen inventory |
| platform / product / model / search_mode | ChatGPT Search, Gemini or Google AI mode, Perplexity, Copilot; record actual mode |
| test_date_time / timezone | ISO timestamp, Asia/Yerevan |
| language / intended_market / observed_location | Fixed language and Gyumri market; log location/account variations |
| signed_in / fresh_session / run_number | Control personalization and carryover |
| search_actually_used | yes/no/unknown; do not equate generated prose with web grounding |
| solo_appeared | yes/no; unavailable/error is separate |
| recommendation_position | Number if an ordered recommendation list exists; otherwise N/A |
| website_cited / cited_site_urls | yes/no plus exact solobeauty.am URLs |
| other_cited_sources | Exact Google/Yandex/2GIS/other URLs |
| competitors_mentioned | Names exactly as shown |
| factual_accuracy | Correct/incorrect/unknown address, hours, phone, services |
| observations / evidence_path | Answer text or screenshot location; caveats |

## Repeatable Protocol

1. Take a pre-release baseline when possible; otherwise label the first run
   post-release and never invent a pre-release result. Log deployment date/commit.
2. Run each of the 24 prompts in four platforms, three independent fresh sessions
   per prompt/platform. Full wave: 288 runs. If capacity is limited, use a fixed
   smaller panel (e.g. 12 non-branded prompts, three per language/service mix),
   record the selection in advance, and never compare it with a different panel.
3. Keep search enabled, language, market, account state, device/location and exact
   prompt constant. Do not mention Solo in non-branded prompts or follow up asking
   why it was omitted. Avoid prior salon conversations in test sessions.
4. Repeat after indexing confirmation, then weekly for four weeks and monthly.
   Record model/product changes, unavailable features, query rewrites and errors.
5. Compare by platform, language and branded status: mention rate; website citation
   rate; local-profile citation rate; factual accuracy; position only among ranked
   lists. Use completed comparable runs as denominator; report failure count apart.
6. Report numerator/denominator and uncertainty, not just percentages. Three runs
   alone are noisy; require repeated movement across multiple waves/prompts.
   A single mention or rank jump is not proof of improvement or causation.
7. Preserve all outcomes, including omissions and competitors. Check whether an
   answer cites the website versus another directory; those imply different next steps.

## Analytics and Business Outcomes

The site already loads GA4. No account data was available and no new tracking
was silently installed. First verify consent settings and existing events in GA4.

- Build a Traffic acquisition report using session source/medium, landing page,
  language, and device. Group observed referrals from chatgpt.com, chat.openai.com,
  perplexity.ai, copilot.microsoft.com and gemini.google.com; retain raw values.
  Check any platform-specific UTM source actually observed rather than assuming it.
- Google AI features may be mixed into organic Search reporting; app/webview
  traffic can lose referrers and appear direct. Do not label all direct or Google
  organic traffic as AI. Referral reports are a lower-bound observable measure.
- Compare engaged sessions and contact/booking-outbound clicks by source. Audit
  whether GA4 enhanced measurement already tracks outbound clicks before adding
  duplicate handlers. Telephone, WhatsApp and booking clicks are microconversions,
  not confirmed appointments or revenue.
- Measure completed bookings only through consented booking-provider reporting
  or a valid completion integration. Do not infer them from the Google Business
  Profile interactions total, ad clicks or directions requests.
- Pair AI reports with Search Console non-branded query impressions/clicks,
  indexed language URLs, Bing crawling/indexation, and booked appointments.
  Keep date windows comparable and annotate promotions and seasonal changes.
- Check crawler logs separately using verified IPs. Crawler hits indicate access,
  not that a model cited or recommended the business.

Primary success criterion: more qualified enquiries and accurate citations across
repeated non-branded tests. No guaranteed recommendation, ranking or timetable.
