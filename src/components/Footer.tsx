import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { CookieSettingsButton } from './cookies/CookieSettingsButton';
import { TrackedLink } from './tracking/TrackedLink';
import { ROUTES } from '../lib/routes';
import { business } from '../lib/siteConfig';

export function Footer() {
  return (
    <footer className="bg-sage-deep text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-sage-light/20 pb-10 mb-10 gap-6">
          <div className="flex items-center gap-3">
            <BrandLogo isLight={true} />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">About Us</h3>
            <p className="text-sage-pale/80 text-sm leading-relaxed">
              A premium, family-oriented residential care home offering exceptional
              accommodation, specialist dementia care, and a truly homely environment for up to 36 residents.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-sage-pale/80">
              <li><Link to={ROUTES.home} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to={ROUTES.about} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to={ROUTES.theHome} className="hover:text-white transition-colors">The Home</Link></li>
              <li><Link to={ROUTES.funding} className="hover:text-white transition-colors">Funding & Support</Link></li>
              <li><Link to={ROUTES.contact} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">Our Care</h3>
            <ul className="space-y-4 text-sm text-sage-pale/80">
              <li><Link to={ROUTES.care} className="hover:text-white transition-colors">Residential Care</Link></li>
              <li><Link to={ROUTES.care} className="hover:text-white transition-colors">Dementia Care</Link></li>
              <li><Link to={ROUTES.care} className="hover:text-white transition-colors">Respite Care</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-sage-pale/80">
              <li>{business.legalName}</li>
              <li>{business.streetAddress}</li>
              <li>{business.addressLocality}</li>
              <li>{business.addressRegion}</li>
              <li className="pt-2">
                <TrackedLink
                  href={business.telephoneHref}
                  event="phone_call_clicked"
                  eventParams={{ button_location: 'footer', link_type: 'tel' }}
                  className="text-gold-soft hover:text-white font-bold transition-colors"
                >
                  {business.telephone}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={business.emailHref}
                  event="email_clicked"
                  eventParams={{ button_location: 'footer', link_type: 'mailto' }}
                  className="hover:text-white transition-colors"
                >
                  {business.email}
                </TrackedLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-sage-light/20 text-xs text-sage-pale/60 gap-4">
          <p>© {new Date().getFullYear()} {business.legalName}. {business.streetAddress}, {business.addressLocality}. Registered in England.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to={ROUTES.privacyPolicy} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to={ROUTES.cookiePolicy} className="hover:text-white transition-colors">Cookie Policy</Link>
            <CookieSettingsButton className="hover:text-white transition-colors" />
            <div className="px-3 py-1 border border-sage-light/30 rounded-full text-white bg-sage/20 font-bold tracking-wider uppercase">
              CQC Rated: Good
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
