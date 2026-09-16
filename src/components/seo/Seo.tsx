import { createPortal } from 'react-dom';
import { SITE_URL } from '../../lib/siteConfig';

export interface SeoProps {
  title: string;
  description: string;
  /** Path only, e.g. "/our-care" — combined with SITE_URL to build the canonical/OG URL. */
  path: string;
  /** Absolute or root-relative image URL for social sharing. Falls back to the hero image. */
  image?: string;
  noindex?: boolean;
}

/**
 * Per-page metadata: title, description, canonical link and Open Graph/Twitter
 * tags. Renders via a portal into <head> so React owns the lifecycle — when a
 * route unmounts, its tags are cleanly removed rather than accumulating.
 *
 * Caveat: this is a client-rendered SPA, so these tags exist only after JS
 * runs. Googlebot renders JS and will pick them up, but crawlers that don't
 * execute JavaScript (many social-media link-preview scrapers) will only ever
 * see the tags baked into index.html. See docs/seo-and-search-console.md.
 */
export function Seo({ title, description, path, image, noindex }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const resolvedImage = image ? `${SITE_URL}${image}` : `${SITE_URL}/hero-image.jpg`;

  return createPortal(
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Meadows Care Home" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={resolvedImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
    </>,
    document.head,
  );
}
