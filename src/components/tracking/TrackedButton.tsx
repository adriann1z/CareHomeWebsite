import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { trackEvent, type ConversionEventName, type SafeEventParams } from '../../lib/analytics';

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  event: ConversionEventName;
  eventParams?: SafeEventParams;
}

/** Drop-in replacement for <button> that fires a conversion event before running the existing onClick handler. */
export const TrackedButton = forwardRef<HTMLButtonElement, TrackedButtonProps>(
  ({ event, eventParams, onClick, type = 'button', ...buttonProps }, ref) => {
    return (
      <button
        {...buttonProps}
        type={type}
        ref={ref}
        onClick={(e) => {
          trackEvent(event, { page_path: window.location.pathname, ...eventParams });
          onClick?.(e);
        }}
      />
    );
  },
);

TrackedButton.displayName = 'TrackedButton';
