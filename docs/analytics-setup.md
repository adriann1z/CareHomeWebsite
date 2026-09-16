# Analytics setup (GA4 + consent)

This site uses a small, consent-gated GA4 wrapper — no analytics script is
ever fetched from Google until a visitor explicitly allows the "Analytics"
cookie category. See `src/lib/analytics.ts`, `src/lib/consent.ts` and
`src/context/ConsentContext.tsx` for the implementation.

## 1. Insert your GA4 Measurement ID

1. Create a GA4 property in [Google Analytics](https://analytics.google.com) and copy its Measurement ID (looks like `G-XXXXXXXXXX`).
2. Add it to your `.env` (copy from `.env.example` if you haven't already):
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Restart `npm run dev` / redeploy. No code changes are required.

If this variable is left unset, the site works normally — `trackEvent`/`trackPageView` become no-ops and nothing crashes.

## 2. How consent controls analytics

- On first load, `initConsentMode()` pushes Google Consent Mode v2 defaults (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization` all `denied`) to `window.dataLayer`. This is a local array push, **not** a network request.
- The GA4 script tag (`gtag/js`) is only injected into the page once the visitor accepts the "Analytics" category (via "Accept all" or "Manage preferences" → Analytics on → Save).
- If a visitor later reopens "Cookie settings" (footer link) and withdraws analytics consent, `setAnalyticsConsent(false)` pushes `analytics_storage: denied` — GA stops storing/sending further hits. There is no supported way to "unload" an already-loaded script, but no further data is sent once consent is denied.
- Marketing consent (`ad_storage`, `ad_user_data`, `ad_personalization`) is tracked the same way, ready for a future Ads/Meta Pixel integration — see `setMarketingConsent` in `src/lib/analytics.ts`. No advertising script exists in this codebase today.

## 3. Which events are tracked

All events are defined in `src/lib/analytics.ts` (`ConversionEventName`) and fired via the `TrackedLink`/`TrackedButton` components or a page's `useEffect`:

| Event | Fired from |
|---|---|
| `phone_call_clicked` | Every `tel:` link (footer, mobile sticky bar, contact page, CTAs) |
| `email_clicked` | Every `mailto:` link |
| `book_a_visit_clicked` | "Arrange a Visit" buttons (nav, home, care, funding) |
| `enquiry_started` | First focus into the contact form |
| `enquiry_submitted` | Only after the enquiry form endpoint returns a successful response — never on the mailto: fallback, since we can't confirm delivery |
| `directions_clicked` | The address/map link on the Contact page |
| `room_information_viewed` | The Home & Facilities page (`/the-home`) |
| `fees_information_viewed` | The Funding & Support page |
| `brochure_downloaded` | Not currently wired up — no downloadable brochure exists on the site yet. Add a link and call `trackEvent('brochure_downloaded', {...})` when one is added. |

Every event payload is restricted to a fixed allow-list of keys (`page_path`, `button_location`, `service_page`, `traffic_source`, `link_type`) — see `sanitizeParams` in `src/lib/analytics.ts`. Form field values (name, email, phone, message) are never included.

## 4. Testing events

- **Console (dev mode):** every `trackEvent`/`trackPageView` call logs to the browser console prefixed `[analytics:dev]`, regardless of consent — useful for confirming an event fires without needing real GA credentials.
- **GA4 DebugView:**
  1. Install the [Google Analytics Debugger](https://chromewebstore.google.com/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) extension, or run the site with `?gtm_debug=x`... actually simplest: temporarily add `debug_mode: true` to the `gtag('config', ...)` call in `src/lib/analytics.ts` while testing locally (remove before deploying).
  2. Open **GA4 → Admin → DebugView** and interact with the site (with analytics consent accepted) to see events arrive in near-real-time.
- **Confirm scripts stay blocked before consent:** open DevTools → Network, reload the site, and reject/ignore the cookie banner. Confirm no request to `googletagmanager.com` is made. Accept analytics and confirm the request now appears.

## 5. Adjusting Consent Mode

If Google updates its recommended Consent Mode implementation, the single place to change is `src/lib/analytics.ts` (`initConsentMode`, `setAnalyticsConsent`, `setMarketingConsent`). The rest of the app only calls `trackEvent`/`trackPageView`/`setAnalyticsConsent`/`setMarketingConsent`/`isAnalyticsAvailable`, so the integration can be swapped without touching UI code.
