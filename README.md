# The Meadows Care Home - website

A React + Vite single-page site for The Meadows Care Home (Shire Care Homes), Scartho, Grimsby.

## Stack

- React 19 + TypeScript, built with Vite
- Tailwind CSS v4
- `react-router-dom` for client-side routing (`/`, `/about`, `/our-care`, `/the-home`, `/funding-and-support`, `/contact`, `/privacy-policy`, `/cookie-policy`)
- No backend - the enquiry form either POSTs to an external form endpoint (see below) or falls back to a `mailto:` hand-off

## Run locally

**Prerequisites:** Node.js

1. `npm install`
2. Copy `.env.example` to `.env` and fill in what you have (all variables are optional for local development - see table below)
3. `npm run dev`

## Environment variables

| Variable | Purpose | Required? |
|---|---|---|
| `VITE_SITE_URL` | Production domain, used for canonical URLs, Open Graph tags, JSON-LD and the generated sitemap | Recommended for production; falls back to a placeholder otherwise |
| `VITE_GA_MEASUREMENT_ID` | GA4 Measurement ID. Analytics stays fully disabled (and the site still works) if unset | Optional |
| `VITE_ENQUIRY_FORM_ENDPOINT` | Where the enquiry form POSTs. If unset, the form opens a pre-filled `mailto:` instead | Optional |
| `VITE_ALLOW_INDEXING` | Set to `false` on staging/preview deployments to keep them out of search engines | Optional (defaults to allowed) |

See `docs/analytics-setup.md`, `docs/search-console-setup.md` and `docs/business-info-checklist.md` for more detail.

## Scripts

- `npm run dev` - start the dev server (regenerates `public/sitemap.xml`/`robots.txt` first)
- `npm run build` - production build (regenerates SEO files first)
- `npm run lint` - TypeScript type-check (`tsc --noEmit`)
- `npm run seo:generate` - manually regenerate `public/sitemap.xml` and `public/robots.txt`

## Cookies, analytics & privacy

This site implements a first-party cookie consent system (Necessary / Analytics / Marketing categories), a consent-gated GA4 analytics wrapper with Google Consent Mode v2, and conversion event tracking on key enquiry actions (calls, emails, directions, "arrange a visit", enquiry form). See:

- `src/lib/consent.ts`, `src/context/ConsentContext.tsx`, `src/components/cookies/` - consent system
- `src/lib/analytics.ts`, `src/components/tracking/` - analytics + conversion tracking
- `src/components/seo/` - per-page metadata and JSON-LD structured data
- `src/pages/PrivacyPolicy.tsx`, `src/pages/CookiePolicy.tsx` - policy pages (contain explicit placeholders where business/legal sign-off is required)
- `docs/business-info-checklist.md` - everything still needed from the business before going live
