# Google Search Console setup

## 1. Verify the domain

Once `VITE_SITE_URL` is set to the real production domain and the site is deployed:

1. Go to [Google Search Console](https://search.google.com/search-console) and add a property for the domain (domain-level verification via DNS TXT record is recommended, since it covers `http`/`https` and all subdomains in one go).
2. Follow Google's DNS verification instructions with your domain registrar/DNS provider.

## 2. Submit the sitemap

The sitemap is generated automatically before every `npm run build` (and `npm run dev`) by `scripts/generate-seo-files.mjs`, using the routes in that script (kept in sync with `src/lib/routes.ts`) and `VITE_SITE_URL`.

Once verified in Search Console:

1. Go to **Search Console → Sitemaps**.
2. Submit: `https://<your-domain>/sitemap.xml`

## 3. Request indexing

For a new site, or after significant page changes:

1. Go to **Search Console → URL Inspection**.
2. Enter the full URL of the page (e.g. `https://<your-domain>/our-care`).
3. If it says "URL is not on Google", click **Request indexing**.

Note: this site is a client-rendered single-page app (React + Vite, no server-side rendering). Googlebot does render JavaScript and can index client-routed pages, but indexing can be slower/less reliable than a server-rendered site, and other crawlers/social scrapers that don't execute JavaScript will only see the static tags baked into `index.html` (the home page's). If indexing of inner pages proves unreliable over time, consider adding a prerendering/SSG step (e.g. migrating to Astro/Next.js or adding a prerender build step) as a follow-up project.

## 4. Inspect indexing errors

- **Search Console → Pages** shows which URLs are indexed vs excluded, and why (e.g. "Discovered — currently not indexed", "Crawled — currently not indexed").
- **Search Console → URL Inspection** on a specific URL shows the exact rendered HTML Google saw, coverage status, and mobile usability issues.
- **Search Console → Sitemaps** shows whether the submitted sitemap was read successfully and how many URLs were discovered from it.

## 5. Ongoing checks

- Re-run `npm run seo:generate` (or just `npm run build`) whenever pages are added/removed, and update the `ROUTES` list in `scripts/generate-seo-files.mjs` and `src/lib/routes.ts` together.
- Confirm `robots.txt` (`https://<your-domain>/robots.txt`) allows `/` and points at the correct sitemap URL — especially after any staging/preview deploy, where `VITE_ALLOW_INDEXING=false` should be set to keep it out of search results.
