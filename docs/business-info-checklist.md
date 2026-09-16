# Business information checklist

Details already confirmed from the existing codebase (used throughout `src/lib/siteConfig.ts`, structured data, and the Privacy/Cookie policy pages):

- Care home name: The Meadows Care Home
- Parent organisation: Shire Care Homes
- Address: 88 Louth Road, Scartho, Grimsby, Lincolnshire, DN33 2HY
- Telephone: 01472 823287
- Email: jamie@shirecarehomes.com
- Approximate coordinates (from the existing Google Maps embed): 53.5312, -0.091724
- Services: Residential Care, Dementia Care, Respite Care
- Contact hours: "available 24 hours a day, 7 days a week" (per existing Contact page copy)

Please supply/confirm the following before relying on this implementation in production — nothing below has been fabricated, and placeholders have been left explicit in code/docs rather than guessed:

| Item | Where it's needed | Status |
|---|---|---|
| Final production domain | `VITE_SITE_URL`, canonical URLs, sitemap, structured data | **Needed** — currently a placeholder |
| GA4 Measurement ID | `VITE_GA_MEASUREMENT_ID` | **Needed** if analytics is wanted — site works without it |
| Enquiry form backend (Formspree/Netlify Forms/custom endpoint) | `VITE_ENQUIRY_FORM_ENDPOINT` | **Needed** — without it, the form falls back to a mailto: hand-off |
| Registered company name & Companies House number | Privacy Policy | **Needed** — marked as a placeholder in `src/pages/PrivacyPolicy.tsx` |
| ICO registration number | Privacy Policy | **Needed** — placeholder |
| Named Data Protection contact (if any) | Privacy Policy | **Needed** — placeholder |
| Exact data retention periods for enquiries that don't lead to admission | Privacy Policy | **Needed** — placeholder |
| Confirmed third-party form/email processor (once chosen) | Privacy Policy "sharing" section | **Needed** — placeholder |
| Official logo (raster image file, e.g. PNG/SVG export) | Structured data `logo` field, favicon | Not currently set — only an inline `LogoSvg` component and hero photo exist. Structured data currently omits `logo` rather than pointing at an inaccurate asset. |
| Google Business Profile URL | Local SEO (not yet linked anywhere) | Not confirmed — none referenced in the repo |
| Social media profiles (Facebook, Instagram, etc.) | Structured data `sameAs` | Not confirmed — intentionally omitted from JSON-LD rather than guessed |
| CQC registration/provider ID | Currently displayed as a badge only ("CQC Rated: Good"); no ID or link to the CQC report exists | Consider linking the badge to the home's actual CQC report page once confirmed |
| Brochure/PDF download | `brochure_downloaded` event is defined but unused | Add a real download link once a brochure exists |
| Legal review of Privacy Policy / Cookie Policy | Both pages are flagged in-page | **Recommended** before publishing |

## A note on the CQC rating and testimonials

The "CQC Rated: Good" badge and family testimonials already existed in the site content before this work and were left as-is (out of scope for this task, which focused on consent/analytics/SEO — not verifying existing marketing claims). If the CQC rating or any testimonial is no longer current, please update it directly in `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/components/Footer.tsx`.
