/**
 * Single source of truth for confirmed business information.
 * Only facts that are directly confirmed elsewhere in this repository
 * (existing copy, footer, contact page, embedded map) are recorded here.
 * Do not add unconfirmed details (e.g. registration numbers, social profiles)
 * without sign-off from the business — see docs/business-info-checklist.md.
 */

const rawSiteUrl = import.meta.env.VITE_SITE_URL?.trim();

/** Falls back to a clearly-fake placeholder so canonical/OG URLs never silently point at the wrong domain. */
export const SITE_URL = (rawSiteUrl && rawSiteUrl.replace(/\/+$/, '')) || 'https://www.example-set-vite-site-url.invalid';

export const SITE_URL_IS_PLACEHOLDER = !rawSiteUrl;

export const business = {
  legalName: 'The Meadows Care Home',
  brandName: 'The Meadows',
  parentOrganisation: 'Shire Care Homes',
  tagline: 'A care home with heart',
  description:
    'A premium, family-oriented residential care home in Scartho, Grimsby, offering residential care, dementia care and respite care for up to 36 residents.',
  streetAddress: '88 Louth Road',
  addressLocality: 'Scartho, Grimsby',
  addressRegion: 'Lincolnshire',
  postalCode: 'DN33 2HY',
  addressCountry: 'GB',
  telephone: '01472 823287',
  telephoneHref: 'tel:+441472823287',
  email: 'jamie@shirecarehomes.com',
  emailHref: 'mailto:jamie@shirecarehomes.com',
  // Taken from the existing Google Maps embed in Contact.tsx — not fabricated.
  geo: {
    latitude: 53.5312,
    longitude: -0.091724,
  },
  // Confirmed by existing site copy ("available 24 hours a day, 7 days a week").
  contactHoursNote: 'Our team is available 24 hours a day, 7 days a week to assist residents and families.',
  services: ['Residential Care', 'Dementia Care', 'Respite Care'] as const,
  maxResidents: 36,
} as const;

export const fullPostalAddress = `${business.streetAddress}, ${business.addressLocality}, ${business.addressRegion} ${business.postalCode}`;

export const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${business.legalName}, ${fullPostalAddress}`,
)}`;

/** GA4 measurement ID — optional. When absent, analytics stays fully disabled without crashing the app. */
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || undefined;

/**
 * Optional endpoint the enquiry form POSTs to (e.g. Formspree, Netlify Forms, a custom function).
 * When absent, the form falls back to a mailto: hand-off rather than pretending to submit.
 */
export const ENQUIRY_FORM_ENDPOINT = import.meta.env.VITE_ENQUIRY_FORM_ENDPOINT?.trim() || undefined;

/** Set VITE_ALLOW_INDEXING=false on staging/preview deployments to keep them out of search results. */
export const ALLOW_INDEXING = import.meta.env.VITE_ALLOW_INDEXING?.trim().toLowerCase() !== 'false';
