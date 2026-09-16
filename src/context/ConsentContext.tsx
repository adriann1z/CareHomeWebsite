import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  CONSENT_CATEGORIES,
  DEFAULT_CONSENT_STATE,
  clearStoredConsent,
  readStoredConsent,
  writeStoredConsent,
  type ConsentState,
} from '../lib/consent';
import { initConsentMode, setAnalyticsConsent, setMarketingConsent } from '../lib/analytics';

interface ConsentContextValue {
  /** The visitor's current choice. Defaults to "necessary only" until they decide. */
  consent: ConsentState;
  /** Whether the visitor has made (and not since had expire) a stored choice. */
  hasDecided: boolean;
  isBannerOpen: boolean;
  isModalOpen: boolean;
  categories: typeof CONSENT_CATEGORIES;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (partial: Pick<ConsentState, 'analytics' | 'marketing'>) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  /** Resets to "necessary only" and reopens the banner so the visitor can choose again. */
  withdrawConsent: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

function applyConsentSideEffects(state: ConsentState) {
  setAnalyticsConsent(state.analytics);
  setMarketingConsent(state.marketing);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT_STATE);
  const [hasDecided, setHasDecided] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Consent Mode defaults must be set before anything else runs, and before
  // we know whether a prior choice exists.
  useEffect(() => {
    initConsentMode();

    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored.state);
      setHasDecided(true);
      applyConsentSideEffects(stored.state);
    } else {
      setIsBannerOpen(true);
    }
  }, []);

  const persist = useCallback((next: ConsentState) => {
    writeStoredConsent(next);
    setConsent(next);
    setHasDecided(true);
    applyConsentSideEffects(next);
  }, []);

  const acceptAll = useCallback(() => {
    persist({ necessary: true, analytics: true, marketing: true });
    setIsBannerOpen(false);
    setIsModalOpen(false);
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist({ necessary: true, analytics: false, marketing: false });
    setIsBannerOpen(false);
    setIsModalOpen(false);
  }, [persist]);

  const savePreferences = useCallback(
    (partial: Pick<ConsentState, 'analytics' | 'marketing'>) => {
      persist({ necessary: true, analytics: partial.analytics, marketing: partial.marketing });
      setIsBannerOpen(false);
      setIsModalOpen(false);
    },
    [persist],
  );

  const openPreferences = useCallback(() => setIsModalOpen(true), []);
  const closePreferences = useCallback(() => setIsModalOpen(false), []);

  const withdrawConsent = useCallback(() => {
    clearStoredConsent();
    setConsent(DEFAULT_CONSENT_STATE);
    setHasDecided(false);
    applyConsentSideEffects(DEFAULT_CONSENT_STATE);
    setIsModalOpen(false);
    setIsBannerOpen(true);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      hasDecided,
      isBannerOpen,
      isModalOpen,
      categories: CONSENT_CATEGORIES,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
      withdrawConsent,
    }),
    [
      consent,
      hasDecided,
      isBannerOpen,
      isModalOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
      withdrawConsent,
    ],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent must be used within a ConsentProvider');
  return ctx;
}
