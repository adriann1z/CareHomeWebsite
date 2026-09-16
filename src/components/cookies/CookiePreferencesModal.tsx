import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConsent } from '../../context/ConsentContext';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import type { ConsentCategory } from '../../lib/consent';

export function CookiePreferencesModal() {
  const { isModalOpen, closePreferences, categories, consent, acceptAll, rejectNonEssential, savePreferences } =
    useConsent();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState({ analytics: consent.analytics, marketing: consent.marketing });

  // Reset the draft to the last saved choice each time the modal opens.
  useEffect(() => {
    if (isModalOpen) {
      setDraft({ analytics: consent.analytics, marketing: consent.marketing });
    }
  }, [isModalOpen, consent.analytics, consent.marketing]);

  useFocusTrap(dialogRef, isModalOpen, closePreferences);

  if (!isModalOpen) return null;

  const toggle = (category: ConsentCategory) => {
    if (category === 'necessary') return;
    setDraft((prev) => ({ ...prev, [category]: !prev[category as 'analytics' | 'marketing'] }));
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-text-dark/40 backdrop-blur-sm p-0 sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePreferences();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        aria-describedby="cookie-preferences-desc"
        className="w-full sm:max-w-lg max-h-[90vh] overflow-y-auto bg-cream rounded-t-[2rem] sm:rounded-[2rem] shadow-lift border border-sage-light/20 p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 id="cookie-preferences-title" className="font-serif text-2xl text-sage-deep">
            Cookie preferences
          </h2>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Close cookie preferences"
            className="shrink-0 p-2 rounded-full text-text-mid hover:text-text-dark bg-sage-pale hover:bg-sage-light/30 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <p id="cookie-preferences-desc" className="text-sm text-text-mid leading-relaxed mb-6">
          Choose which categories of cookies we're allowed to use. Necessary cookies are always on. See our{' '}
          <Link to="/cookie-policy" onClick={closePreferences} className="text-sage-deep underline hover:text-gold-deep font-medium">
            Cookie Policy
          </Link>{' '}
          for full details.
        </p>

        <div className="space-y-4 mb-8">
          {categories.map((category) => {
            const checked = category.id === 'necessary' ? true : draft[category.id as 'analytics' | 'marketing'];
            const inputId = `consent-${category.id}`;
            return (
              <div
                key={category.id}
                className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-sage-light/20 bg-white"
              >
                <div className="flex-1">
                  <label htmlFor={inputId} className="font-serif text-lg text-text-dark block mb-1">
                    {category.label}
                    {category.required && (
                      <span className="ml-2 text-xs font-sans font-bold uppercase tracking-wide text-sage-deep bg-sage-pale px-2 py-0.5 rounded-full align-middle">
                        Always on
                      </span>
                    )}
                  </label>
                  <p className="text-sm text-text-mid leading-relaxed">{category.description}</p>
                </div>
                <button
                  type="button"
                  id={inputId}
                  role="switch"
                  aria-checked={checked}
                  aria-label={`${category.label} cookies ${category.required ? '(always on)' : ''}`}
                  disabled={category.required}
                  onClick={() => toggle(category.id)}
                  className={`relative shrink-0 mt-1 w-12 h-7 rounded-full transition-colors ${
                    checked ? 'bg-sage-deep' : 'bg-sage-light/40'
                  } ${category.required ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      checked ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="w-full sm:w-auto sm:flex-1 px-6 py-3 rounded-full border-2 border-sage-deep text-sage-deep font-bold text-sm tracking-wide hover:bg-sage-pale transition-colors"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="w-full sm:w-auto sm:flex-1 px-6 py-3 rounded-full border-2 border-transparent text-text-dark font-bold text-sm tracking-wide bg-sage-pale hover:bg-sage-light/30 transition-colors"
          >
            Save preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="w-full sm:w-auto sm:flex-1 px-6 py-3 rounded-full bg-gold hover:bg-gold-deep text-white font-bold text-sm tracking-wide transition-colors shadow-[0_4px_14px_rgba(200,169,110,0.39)]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
