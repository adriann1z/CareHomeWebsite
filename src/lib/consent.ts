/**
 * Strongly-typed cookie/consent primitives: category definitions, storage
 * shape, versioning and expiry. No React or analytics code lives here so it
 * stays trivially unit-testable.
 */

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

/** Necessary is always `true` — it cannot be disabled, so it is typed as a literal. */
export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

/**
 * Bump this whenever the cookie policy or the categories/purposes described to
 * visitors change. A stored consent whose version doesn't match is treated as
 * expired and the banner is shown again.
 */
export const CONSENT_VERSION = 1;

/** How long a recorded choice remains valid before we ask again. */
export const CONSENT_MAX_AGE_DAYS = 183; // ~6 months

export const CONSENT_STORAGE_KEY = 'meadows.cookieConsent';

export const DEFAULT_CONSENT_STATE: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export interface StoredConsent {
  version: number;
  state: ConsentState;
  /** ISO 8601 timestamp of when the choice was recorded. */
  decidedAt: string;
}

export interface ConsentCategoryDefinition {
  id: ConsentCategory;
  label: string;
  description: string;
  required: boolean;
}

export const CONSENT_CATEGORIES: ConsentCategoryDefinition[] = [
  {
    id: 'necessary',
    label: 'Necessary',
    description:
      'Essential for the website to function: page security, remembering your cookie choice, and basic operation of forms. These cannot be switched off.',
    required: true,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    description:
      'Helps us understand how visitors use the site (page views, traffic sources) so we can improve it. No analytics data is collected until you allow this category.',
    required: false,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description:
      'Used for advertising and remarketing (for example, Google Ads or Meta Pixel), should we enable these in future. Nothing in this category is loaded unless you explicitly allow it.',
    required: false,
  },
];

function isConsentState(value: unknown): value is ConsentState {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return v.necessary === true && typeof v.analytics === 'boolean' && typeof v.marketing === 'boolean';
}

function isStoredConsent(value: unknown): value is StoredConsent {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return typeof v.version === 'number' && typeof v.decidedAt === 'string' && isConsentState(v.state);
}

export function isConsentExpired(stored: StoredConsent, now: Date = new Date()): boolean {
  const decidedAt = new Date(stored.decidedAt).getTime();
  if (Number.isNaN(decidedAt)) return true;
  const ageMs = now.getTime() - decidedAt;
  const maxAgeMs = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
  return ageMs > maxAgeMs;
}

/**
 * Reads and validates the stored consent record. Returns `null` when nothing
 * is stored, the payload is malformed, the version is stale, or the choice
 * has expired — all of which mean "treat this visitor as undecided".
 */
export function readStoredConsent(storage: Storage = window.localStorage, now: Date = new Date()): StoredConsent | null {
  let raw: string | null;
  try {
    raw = storage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null; // storage unavailable (private browsing, disabled storage, etc.)
  }
  if (!raw) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  if (!isStoredConsent(parsed)) return null;
  if (parsed.version !== CONSENT_VERSION) return null;
  if (isConsentExpired(parsed, now)) return null;

  return parsed;
}

export function writeStoredConsent(state: ConsentState, storage: Storage = window.localStorage, now: Date = new Date()): StoredConsent {
  const record: StoredConsent = {
    version: CONSENT_VERSION,
    state,
    decidedAt: now.toISOString(),
  };
  try {
    storage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage unavailable — consent simply won't persist across page loads.
  }
  return record;
}

export function clearStoredConsent(storage: Storage = window.localStorage): void {
  try {
    storage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }
}
