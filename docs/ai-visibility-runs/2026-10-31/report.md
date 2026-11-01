# AI Visibility Measurement: 2026-10-31

## Status

Partial execution, not a completed four-platform baseline. The planned wave contains 288 cells (24 prompts x 4 platforms x 3 fresh sessions). 72 usable Gemini answers were captured. ChatGPT returned an HTTP 403 access challenge; Copilot required sign-in. Perplexity returned one exploratory answer before requiring sign-in; its main panel was stopped. Missing/blocked tests are not negative visibility results. Collection began October 31; continuation requested November 1 (Asia/Yerevan). Raw files preserve the execution host's timestamps; those timestamps should not override the client-provided continuation date.

Gemini model: Flash-Lite, signed out, fresh isolated context per prompt. Browser locale en-US; timezone Asia/Yerevan; actual IP location uncontrolled. Exact prompts were preserved. Armenian native-review approval was not established. This is an exploratory first observation, not proof of improvement from the local SEO changes; public deployment/indexing status was not verified.

## Gemini Mention Results

Non-branded: **41/54** captured answers mention Solo. Branded: **18/18**. Branded mentions do not demonstrate discovery because the prompt names the business.

| Language | Prompt type | Captured answers | Solo mentions | Mentions / observed-search answers |
|---|---|---:|---:|---:|
| hy | non-branded | 18 | 7/18 | 7/10 |
| hy | branded | 6 | 6/6 | 6/6 |
| ru | non-branded | 18 | 18/18 | 18/18 |
| ru | branded | 6 | 6/6 | 6/6 |
| en | non-branded | 18 | 16/18 | 16/18 |
| en | branded | 6 | 6/6 | 6/6 |

The last column includes only answers whose captured page showed “Searching the web”. Others have unknown search use, not confirmed absence of search. Default Gemini decided whether to search; forced search was not available in this test setup. Do not combine these with a future forced-search panel without labeling the protocol change. Repeats are correlated and this small wave does not establish a stable ranking.

## Per-Prompt Results

| Prompt | Type | Mentions / completed | Repeat 1 / 2 / 3 |
|---|---|---:|---|
| HY01 | non-branded | 2/3 | mentioned / mentioned / not mentioned |
| HY02 | non-branded | 0/3 | not mentioned / not mentioned / not mentioned |
| HY03 | non-branded | 1/3 | not mentioned / not mentioned / mentioned |
| HY04 | non-branded | 0/3 | not mentioned / not mentioned / not mentioned |
| HY05 | non-branded | 1/3 | mentioned / not mentioned / not mentioned |
| HY06 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| HY07 | branded | 3/3 | mentioned / mentioned / mentioned |
| HY08 | branded | 3/3 | mentioned / mentioned / mentioned |
| RU01 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| RU02 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| RU03 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| RU04 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| RU05 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| RU06 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| RU07 | branded | 3/3 | mentioned / mentioned / mentioned |
| RU08 | branded | 3/3 | mentioned / mentioned / mentioned |
| EN01 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| EN02 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| EN03 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| EN04 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| EN05 | non-branded | 3/3 | mentioned / mentioned / mentioned |
| EN06 | non-branded | 1/3 | not mentioned / mentioned / not mentioned |
| EN07 | branded | 3/3 | mentioned / mentioned / mentioned |
| EN08 | branded | 3/3 | mentioned / mentioned / mentioned |

## Evidence And Scoring Limits

- Raw JSON and available screenshots are saved for wave answers; screenshots may show only the visible portion of the scrollable answer, while JSON preserves full extracted text. Exact wave-PLATFORM-ID-REPEAT.json files form the scored panel; probes and prior-attempt files are excluded to prevent double counting. results.json contains all 288 planned cells, including not-run and error states. Retried technical failures retain their original evidence.
- Mention detection examines the answer only, never the prompt, and accepts Solo / Armenian / Russian spelling. Mentions are not necessarily recommendations. Recommendation positions and exhaustive competitor/factual coding remain unscored.
- Source chips such as Yandex and 2GIS appear in answer text, but their destinations were not consistently exposed as ordinary anchor links. Full source-URL coverage and website citation rate remain unknown, not zero. 1 captured answers include an explicit solobeauty.am hyperlink; a bare domain mention is not counted as a verified link.
- The Perplexity exploratory response is preserved in perplexity-retry.json/png: it did not confidently recommend a salon and showed seven sources. It is not pooled into the Gemini panel or presented as a complete Perplexity result.
- Interrupted captures remain errors, excluded from mention-rate denominators. No login, CAPTCHA, or quota restriction was bypassed.

## Follow-Up

Spot-checked issues: HY01 repeat 1 associates Solo with Shirakatsi Street, conflicting with the site's Ryzhkov Street address. HY08 and RU08 answers alternate between house numbers 1 and 3/1. Contact checks: EN08 repeats 1 and 2 include +374 33 025125, matching the additional 033025125 number already in src/components/Footer.jsx; this is not classified as an AI fabrication. The owner-confirmed primary remains +37493000217. RU08 references apnt.app/solo_beauty, matching the booking URL in src/components/Contact.jsx and src/seo/site.js. These are answer observations, not verified changes to the business facts. No website content or App.jsx was changed during measurement.

Complete the unavailable platforms with authorized signed-in sessions and explicit search modes. Preserve this prompt version, label the account/mode change, and collect the missing exact citation URLs. Confirm address consistency and online-booking details across site and local profiles before comparing another wave. Do not infer a before/after SEO lift from this report.

## Platform Accounting

```json
{
  "chatgpt": {
    "not_run": 72
  },
  "gemini": {
    "response_captured": 72
  },
  "perplexity": {
    "error": 3,
    "not_run": 68,
    "access_blocked": 1
  },
  "copilot": {
    "not_run": 72
  }
}
```
