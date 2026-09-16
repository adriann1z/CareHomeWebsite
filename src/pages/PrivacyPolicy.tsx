import type { ReactNode } from 'react';
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { Seo } from '../components/seo/Seo';
import { ROUTES } from '../lib/routes';
import { business } from '../lib/siteConfig';

const LAST_UPDATED = '26 July 2026';

function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gold-soft/60 text-text-dark px-1.5 py-0.5 rounded font-medium">
      [PLACEHOLDER — confirm before publishing: {children}]
    </span>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      <Seo
        title="Privacy Policy | The Meadows Care Home"
        description="How The Meadows Care Home in Scartho, Grimsby collects, uses and protects personal information submitted through this website."
        path={ROUTES.privacyPolicy}
      />

      <section className="relative py-20 md:py-28 flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="page-hero-title text-4xl md:text-5xl font-medium mb-4">Privacy Policy</h1>
            <p className="text-sage-pale">Last updated: {LAST_UPDATED}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="mb-10 flex items-start gap-3 p-5 rounded-2xl bg-blue-soft/40 border border-blue-soft text-sm text-text-dark">
            <ShieldAlert size={20} className="shrink-0 mt-0.5 text-blue-deep" />
            <p>
              This policy is a structured starting point drafted from the confirmed details available in this
              repository. Sections marked <Placeholder>example</Placeholder> require sign-off from {business.legalName}
              /{business.parentOrganisation} (and ideally a legal review) before this page is relied upon publicly.
            </p>
          </FadeIn>

          <FadeIn className="prose-content space-y-10 text-text-mid leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Who we are</h2>
              <p>
                This website is operated by {business.legalName}, part of {business.parentOrganisation}, based at{' '}
                {business.streetAddress}, {business.addressLocality}, {business.addressRegion}, {business.postalCode}.
                For the purposes of UK data protection law, {business.legalName} is the data controller for personal
                information submitted through this website.
              </p>
              <p className="mt-3">
                Registered company name and number: <Placeholder>confirm registered legal entity and Companies House number</Placeholder>.
                Information Commissioner's Office (ICO) registration number: <Placeholder>confirm ICO registration number</Placeholder>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Information we collect</h2>
              <p>When you use the enquiry form on this website, we ask for:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your full name and email address (required, so we can respond)</li>
                <li>Your phone number (optional)</li>
                <li>Your relationship to the person who may need care</li>
                <li>The type of care enquiry you're making</li>
                <li>Any message or details you choose to share with us</li>
                <li>Whether you'd like to receive news and updates by email (optional, separate from the above)</li>
              </ul>
              <p className="mt-3">
                We do not use cookies or analytics tools to collect the content of enquiry forms — see our{' '}
                <Link to={ROUTES.cookiePolicy} className="text-sage-deep underline hover:text-gold-deep">
                  Cookie Policy
                </Link>{' '}
                for details of what analytics tools (if enabled) do collect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Why we collect it, and our legal basis</h2>
              <p>
                We use the information you submit to respond to your enquiry, discuss care options, and — only where
                you've explicitly requested this — to arrange a visit or provide further information. Our legal basis
                for processing this information is your consent, given when you tick the checkbox on the enquiry form,
                and our legitimate interest in responding to enquiries about our services.
              </p>
              <p className="mt-3">
                Where you have separately opted in to receive news and updates, we rely on your consent for that
                specific purpose, and you can withdraw it at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Sensitive (special category) information</h2>
              <p>
                Enquiries about care needs can sometimes include details about health, medical conditions, or care
                requirements for a prospective resident. Under UK GDPR, this counts as "special category data" and
                receives extra protection. We only process it with your explicit consent (given when you submit the
                form), we restrict access to staff who need it to respond to your enquiry, and we do not use it for
                any other purpose, including analytics or marketing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">How we respond</h2>
              <p>
                A member of our team will typically respond by phone or email using the contact details you provide,
                to discuss your enquiry, answer questions, or arrange a visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect the information you share with
                us against unauthorised access, loss, or misuse.{' '}
                <Placeholder>
                  confirm which form-processing/email service handles enquiry submissions server-side, and describe
                  its security measures here
                </Placeholder>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Retention</h2>
              <p>
                We keep enquiry information for as long as necessary to respond to you and, where an enquiry leads
                to admission, as part of the resident's records in line with our care records retention policy.{' '}
                <Placeholder>confirm exact retention periods for website enquiries that do not lead to admission</Placeholder>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Sharing your information</h2>
              <p>
                We do not sell your personal information. We only share it with staff who need it to respond to your
                enquiry, and with any third-party service we use to process form submissions or send email on our
                behalf.{' '}
                <Placeholder>name the specific form/email processor once one is configured (VITE_ENQUIRY_FORM_ENDPOINT)</Placeholder>. We
                may also share information where required by law or to protect vital interests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Your rights</h2>
              <p>Under UK data protection law, you have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Ask for a copy of the personal information we hold about you</li>
                <li>Ask us to correct inaccurate information</li>
                <li>Ask us to delete your information, in certain circumstances</li>
                <li>Ask us to restrict how we use your information</li>
                <li>Object to our use of your information</li>
                <li>Ask for your information to be provided in a portable format</li>
                <li>Withdraw consent at any time, where we rely on consent</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">How to complain</h2>
              <p>
                If you're unhappy with how we've handled your information, please contact us first so we can try to
                put things right. You also have the right to complain to the Information Commissioner's Office (ICO),
                the UK's independent regulator for data protection, at{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-sage-deep underline hover:text-gold-deep">
                  ico.org.uk
                </a>{' '}
                or on 0303 123 1113.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-sage-deep mb-3">Contact us</h2>
              <p>
                {business.legalName}
                <br />
                {business.streetAddress}, {business.addressLocality}, {business.addressRegion} {business.postalCode}
                <br />
                Telephone: <a href={business.telephoneHref} className="text-sage-deep underline hover:text-gold-deep">{business.telephone}</a>
                <br />
                Email: <a href={business.emailHref} className="text-sage-deep underline hover:text-gold-deep">{business.email}</a>
              </p>
              <p className="mt-3">
                Data Protection Officer / designated privacy contact: <Placeholder>confirm named contact, if one is appointed</Placeholder>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
