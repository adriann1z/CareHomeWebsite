import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

/** Scrolls to top and records a page_view on every client-side route change (including the first load). */
export function RouteAnalytics() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    isFirstRender.current = false;
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}
