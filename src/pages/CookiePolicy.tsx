import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { Seo } from '../components/seo/Seo';
import { CookieSettingsButton } from '../components/cookies/CookieSettingsButton';
import { ROUTES } from '../lib/routes';
import { business } from '../lib/siteConfig';
import { CONSENT_MAX_AGE_DAYS } from '../lib/consent';

const LAST_UPDATED = '26 July 2026';

const COOKIE_TABLE: Array<{ name: string; category: string; purpose: string; duration: string }> = [
  {
    name: 'meadows.cookieConsent',
    category: 'Necessary',
    purpose: "Remembers your cookie preferences (accepted/rejected categories) so we don't ask again unnecessarily.",
    duration: `${CONSENT_MAX_AGE_DAYS} days (about 6 months), stored in your browser's local storage`,
  },
  {
    name: '_ga',
    category: 'Analytics',
    purpose: 'Google Analytics 4 — distinguishes unique visitors. Only set after you allow analytics cookies.',
    duration: "13 months (Google's standard default)",
  },
  {
    name: '_ga_<container-id>',
    category: 'Analytics',
    purpose: 'Google Analytics 4 — persists session state for a specific GA4 property. Only set after you allow analytics cookies.',
    duration: "13 months (Google's standard default)",
  },
];

export default function CookiePolicy() {
  return (
    <div className="w-full">
      <Seo
        title="Cookie Policy | The Meadows Care Home"
        description="How The Meadows Care Home in Scartho, Grimsby uses cookies and similar technologies, and how to change your preferences."
        path={ROUTES.cookiePolicy}
      />

      <section className="relative py-20 md:py-28 flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="page-hero-title text-4xl md:text-5xl font-medium mb-4">Cookie Policy</h1>
            <p className="text-sage-pale">Last updated: {LAST_UPDATED}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="space-y-10 text-text-mid leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">What are cookies?</h2>
              <p>
                Cookies are small text files (and similar technologies, like local storage) that websites store on
                your device. We use them to remember your preferences and, if you allow it, to understand how
                visitors use this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">The categories we use</h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-sage-light/20">
                  <h3 className="font-serif text-lg text-text-dark mb-1">Necessary</h3>
                  <p className="text-sm">
                    Required for the website to function — security, remembering your cookie choice, and basic
                    operation of forms. These are always active and cannot be switched off.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-sage-light/20">
                  <h3 className="font-serif text-lg text-text-dark mb-1">Analytics</h3>
                  <p className="text-sm">
                    Helps us understand how visitors use the site — page views, traffic sources and which pages lead
                    to enquiries — using Google Analytics 4. Disabled by default until you allow this category. We
                    configure Google Analytics to avoid collecting the content of enquiry forms, names, email
                    addresses, phone numbers or health-related information.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-sage-light/20">
                  <h3 className="font-serif text-lg text-text-dark mb-1">Marketing</h3>
                  <p className="text-sm">
                    Would be used for advertising and remarketing (for example, Google Ads or Meta Pixel), should we
                    enable these in future. No marketing or advertising cookies are currently active on this site.
                    Disabled by default, and only ever enabled with your explicit consent.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Cookies and storage in detail</h2>
              <div className="overflow-x-auto rounded-2xl border border-sage-light/20">
                <table className="w-full text-sm bg-white">
                  <thead>
                    <tr className="bg-sage-pale text-left">
                      <th className="p-3 font-serif text-text-dark">Name</th>
                      <th className="p-3 font-serif text-text-dark">Category</th>
                      <th className="p-3 font-serif text-text-dark">Purpose</th>
                      <th className="p-3 font-serif text-text-dark">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIE_TABLE.map((row) => (
                      <tr key={row.name} className="border-t border-sage-light/20 align-top">
                        <td className="p-3 font-mono text-xs">{row.name}</td>
                        <td className="p-3">{row.category}</td>
                        <td className="p-3">{row.purpose}</td>
                        <td className="p-3">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">How your consent is stored</h2>
              <p>
                When you make a choice in the cookie banner or preferences panel, we store it as a single entry named{' '}
                <code className="text-xs bg-sage-pale px-1.5 py-0.5 rounded">meadows.cookieConsent</code> in your
                browser's local storage — not a tracking cookie itself. It records which categories you allowed and
                when. We ask again after about 6 months, or sooner if we change what a category is used for.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Changing your choice</h2>
              <p>
                You can change your mind at any time. Use the "Cookie settings" link in the footer of every page, or
                the button below, to reopen your preferences and update or withdraw consent.
              </p>
              <CookieSettingsButton className="mt-4 inline-flex px-6 py-3 rounded-full bg-sage-deep text-white font-bold text-sm hover:bg-sage transition-colors" />
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Questions</h2>
              <p>
                If you have questions about this policy, contact us at{' '}
                <a href={business.emailHref} className="text-sage-deep underline hover:text-gold-deep">{business.email}</a>{' '}
                or <a href={business.telephoneHref} className="text-sage-deep underline hover:text-gold-deep">{business.telephone}</a>.
                See also our{' '}
                <Link to={ROUTES.privacyPolicy} className="text-sage-deep underline hover:text-gold-deep">Privacy Policy</Link>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
