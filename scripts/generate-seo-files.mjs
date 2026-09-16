#!/usr/bin/env node
/**
 * Generates public/sitemap.xml and public/robots.txt before every build.
 *
 * Keep ROUTES in sync with src/lib/routes.ts — this script is plain JS so it
 * can't import the TypeScript source directly.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

/** Minimal .env parser (no dependency) — real env vars still take precedence. */
function loadDotEnv(filename) {
  const filePath = path.join(rootDir, filename);
  if (!existsSync(filePath)) return;
  const content = readFileSync(filePath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadDotEnv('.env.local');
loadDotEnv('.env');

const rawSiteUrl = process.env.VITE_SITE_URL?.trim();
const isLocalDev = process.env.npm_lifecycle_event === 'predev' || process.env.npm_lifecycle_event === 'dev';
const fallbackSiteUrl = isLocalDev ? 'http://localhost:3000' : 'https://www.example-set-vite-site-url.invalid';
const siteUrl = (rawSiteUrl && rawSiteUrl.replace(/\/+$/, '')) || fallbackSiteUrl;
const allowIndexing = process.env.VITE_ALLOW_INDEXING?.trim().toLowerCase() !== 'false';

if (!rawSiteUrl && !isLocalDev) {
  console.warn(
    '[generate-seo-files] VITE_SITE_URL is not set — sitemap.xml/robots.txt will use a placeholder domain. ' +
      'Set it in .env (see .env.example) before deploying to production.',
  );
}

// Keep in sync with src/lib/routes.ts
const ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/our-care', priority: '0.9', changefreq: 'monthly' },
  { path: '/the-home', priority: '0.7', changefreq: 'monthly' },
  { path: '/funding-and-support', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
];

const today = new Date().toISOString().slice(0, 10);

const urlEntries = ROUTES.map(
  (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const robots = allowIndexing
  ? `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
  : `# Indexing disabled for this deployment (VITE_ALLOW_INDEXING=false) — staging/preview build.
User-agent: *
Disallow: /
`;

writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemap);
writeFileSync(path.join(rootDir, 'public', 'robots.txt'), robots);

console.log(`[generate-seo-files] Wrote public/sitemap.xml and public/robots.txt for ${siteUrl} (indexing: ${allowIndexing ? 'allowed' : 'DISABLED'})`);
