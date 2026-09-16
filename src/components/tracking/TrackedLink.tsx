import { forwardRef } from 'react';
import type { AnchorHTMLAttributes } from 'react';
import { trackEvent, type ConversionEventName, type SafeEventParams } from '../../lib/analytics';

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  event: ConversionEventName;
  eventParams?: SafeEventParams;
}

/**
 * Drop-in replacement for <a> that fires a conversion event on click before
 * letting the browser handle the link natively (tel:, mailto:, external map
 * links, etc. all continue to work exactly as before).
 */
export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ event, eventParams, onClick, ...anchorProps }, ref) => {
    return (
      <a
        {...anchorProps}
        ref={ref}
        onClick={(e) => {
          trackEvent(event, { page_path: window.location.pathname, ...eventParams });
          onClick?.(e);
        }}
      />
    );
  },
);

TrackedLink.displayName = 'TrackedLink';
