import { Link } from 'react-router-dom';
import { useConsent } from '../../context/ConsentContext';

/**
 * First-visit cookie banner. Accept / Reject are given equal visual weight
 * (same size, same row) so rejecting is never harder to find or click than
 * accepting — no dark patterns.
 */
export function CookieConsentBanner() {
  const { isBannerOpen, acceptAll, rejectNonEssential, openPreferences } = useConsent();

  if (!isBannerOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-[1.25rem] sm:rounded-[1.5rem] border border-sage-light/30 bg-cream shadow-lift p-4 sm:p-8">
        <h2 className="font-serif text-lg sm:text-xl text-sage-deep mb-2">We value your privacy</h2>
        <p className="text-[13px] sm:text-[15px] text-text-mid leading-relaxed mb-4 sm:mb-6">
          We use necessary cookies to run this website. With your permission, we also use analytics and marketing
          cookies. You can change your mind at any time.{' '}
          <Link to="/cookie-policy" className="text-sage-deep underline hover:text-gold-deep font-medium">
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="w-full sm:w-auto sm:flex-1 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border-2 border-sage-deep text-sage-deep font-bold text-sm tracking-wide hover:bg-sage-pale transition-colors"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="w-full sm:w-auto sm:flex-1 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border-2 border-transparent text-text-dark font-bold text-sm tracking-wide bg-sage-pale hover:bg-sage-light/30 transition-colors"
          >
            Manage preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="w-full sm:w-auto sm:flex-1 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gold hover:bg-gold-deep text-white font-bold text-sm tracking-wide transition-colors shadow-[0_4px_14px_rgba(200,169,110,0.39)]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
