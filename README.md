# Solo Beauty Website

## Build and SEO checks

```sh
npm ci
npm run lint
npm run build
python3 scripts/check-seo.py
npm run preview
```

Deploy the complete `dist/` output. `npm run build` now pre-renders the existing
React homepage in Armenian (`/`) and Russian (`/ru/`), plus two localized
service pages in each language, then generates the six-URL sitemap.
Do not substitute `vite build`: it skips the static-rendering stage. No running
Node server is required in production. `npm run dev` remains a client-rendered
development server; inspect the production preview for static HTML verification.

Hosting must serve `/ru/index.html` for `/ru/` before applying any SPA fallback.
Keep `/card/` excluded from indexing and return real 404s for unpublished routes.
Language links load their own URL; locale metadata lives in `src/seo/site.js`.
English is intentionally unpublished until the full translation is reviewed.

Documents:

- [GEO/SEO audit and prioritized implementation](docs/geo-seo-audit.md)
- [Service-page briefs and external-profile checklist](docs/service-content-and-profiles.md)
- [Phase 3 findings, owner actions, and retest plan](docs/geo-phase3-findings.md)
- [24-prompt AI measurement plan](docs/ai-visibility-measurement.md)
- [Validation and remaining deployment checks](docs/geo-seo-validation.md)

## Original template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
