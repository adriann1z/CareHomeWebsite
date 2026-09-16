/**
 * Central route path constants. Keep in sync with scripts/generate-seo-files.mjs,
 * which cannot import TypeScript and so keeps its own copy of this list.
 */
export const ROUTES = {
  home: '/',
  about: '/about',
  care: '/our-care',
  theHome: '/the-home',
  funding: '/funding-and-support',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
  cookiePolicy: '/cookie-policy',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
