/**
 * GA4 analytics abstraction with Google Consent Mode (v2) readiness.
 *
 * Design rules (do not weaken these without re-reading the cookie/privacy
 * policy first):
 *  - gtag.js is never fetched from the network until analytics consent is granted.
 *  - Consent Mode defaults are pushed to the dataLayer immediately (a local
 *    array push, not a network request), so if/when gtag.js does load it
 *    picks up the correct state straight away.
 *  - Event payloads are restricted to a fixed allow-list of keys — no free-form
 *    objects are ever forwarded, so form content/PII cannot leak into analytics.
 */
import { GA_MEASUREMENT_ID } from './siteConfig';

type GtagArgs = [command: string, ...rest: unknown[]];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

export type ConversionEventName =
  | 'phone_call_clicked'
  | 'email_clicked'
  | 'book_a_visit_clicked'
  | 'enquiry_started'
  | 'enquiry_submitted'
  | 'directions_clicked'
  | 'brochure_downloaded'
  | 'room_information_viewed'
  | 'fees_information_viewed';

/**
 * Strict allow-list of metadata keys that may ever be sent to analytics.
 * Never add free-text fields (name, email, message, phone, etc.) here.
 */
export interface SafeEventParams {
  page_path?: string;
  button_location?: string;
  service_page?: string;
  traffic_source?: string;
  link_type?: 'tel' | 'mailto' | 'external' | 'internal' | 'download';
}

const ALLOWED_PARAM_KEYS: Array<keyof SafeEventParams> = [
  'page_path',
  'button_location',
  'service_page',
  'traffic_source',
  'link_type',
];

/** Strips anything outside the allow-list and removes query strings from any path-like values. */
function sanitizeParams(params: SafeEventParams): Record<string, string> {
  const clean: Record<string, string> = {};
  for (const key of ALLOWED_PARAM_KEYS) {
    const value = params[key];
    if (typeof value !== 'string' || value.length === 0) continue;
    clean[key] = key === 'page_path' ? stripQueryAndHash(value) : value.slice(0, 200);
  }
  return clean;
}

function stripQueryAndHash(path: string): string {
  return path.split('?')[0].split('#')[0];
}

let gaScriptLoaded = false;
let analyticsConsentGranted = false;
let marketingConsentGranted = false;
let consentModeInitialised = false;

function pushDataLayer(...args: GtagArgs) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

function gtag(...args: GtagArgs) {
  pushDataLayer(...args);
}

/**
 * Sets Google Consent Mode defaults to "denied" for all non-essential
 * storage. Safe to call multiple times; only pushes to the dataLayer
 * (no network request), so it never violates the "no scripts before
 * consent" rule.
 */
export function initConsentMode(): void {
  if (consentModeInitialised || typeof window === 'undefined') return;
  consentModeInitialised = true;
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
}

function loadGaScript(): void {
  if (gaScriptLoaded || !GA_MEASUREMENT_ID || typeof document === 'undefined') return;
  if (document.querySelector(`script[data-ga-loader="${GA_MEASUREMENT_ID}"]`)) {
    gaScriptLoaded = true;
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  script.dataset.gaLoader = GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // we send page_view manually so SPA route changes are tracked correctly
    anonymize_ip: true,
  });

  gaScriptLoaded = true;

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[analytics] GA4 script loaded after consent (dev mode — no production data implied).');
  }
}

/** Called by the consent system whenever the analytics category changes. */
export function setAnalyticsConsent(granted: boolean): void {
  analyticsConsentGranted = granted;
  initConsentMode();
  gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });

  if (granted) {
    if (!GA_MEASUREMENT_ID) {
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.info('[analytics] Analytics consent granted, but VITE_GA_MEASUREMENT_ID is not set — nothing to load.');
      }
      return;
    }
    loadGaScript();
  }
  // Note: gtag.js has no supported "unload" API. Once granted+loaded, later
  // withdrawal is honoured by pushing analytics_storage: 'denied' above,
  // which stops it from storing/sending further hits.
}

/** Called by the consent system whenever the marketing category changes. Isolated so ads can be added later. */
export function setMarketingConsent(granted: boolean): void {
  marketingConsentGranted = granted;
  initConsentMode();
  gtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
  });
  // No marketing/ads tag is loaded by this codebase today. When one is added,
  // gate its script injection on `marketingConsentGranted`/isMarketingAvailable()
  // exactly the way loadGaScript() is gated above.
}

export function isAnalyticsAvailable(): boolean {
  return Boolean(GA_MEASUREMENT_ID) && analyticsConsentGranted && gaScriptLoaded;
}

export function isMarketingAvailable(): boolean {
  return marketingConsentGranted;
}

export function trackPageView(pathname: string): void {
  const clean = stripQueryAndHash(pathname);
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[analytics:dev] page_view', clean);
  }
  if (!isAnalyticsAvailable()) return;
  gtag('event', 'page_view', { page_path: clean });
}

export function trackEvent(name: ConversionEventName, params: SafeEventParams = {}): void {
  const safeParams = sanitizeParams(params);
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[analytics:dev]', name, safeParams);
  }
  if (!isAnalyticsAvailable()) return;
  gtag('event', name, safeParams);
}
