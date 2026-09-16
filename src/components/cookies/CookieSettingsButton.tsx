import { useConsent } from '../../context/ConsentContext';

interface CookieSettingsButtonProps {
  className?: string;
}

/** Permanent, reusable trigger to reopen the cookie preferences modal (used in the footer). */
export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  const { openPreferences } = useConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      Cookie settings
    </button>
  );
}
