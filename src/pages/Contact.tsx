import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { TrackedLink } from '../components/tracking/TrackedLink';
import { Seo } from '../components/seo/Seo';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import { business, ENQUIRY_FORM_ENDPOINT, googleMapsDirectionsUrl } from '../lib/siteConfig';
import { trackEvent } from '../lib/analytics';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const RELATIONSHIP_OPTIONS = [
  'Myself',
  'Parent',
  'Spouse / Partner',
  'Sibling',
  'Other Family Member',
  'Professional Referral',
  'Other',
];

const ENQUIRY_TYPE_OPTIONS = ['Residential Care', 'Dementia Care', 'Respite Care', 'Funding Advice', 'General Enquiry'];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState('');
  const hasStartedRef = useRef(false);
  const renderedAtRef = useRef(Date.now());

  const handleFormInteraction = () => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent('enquiry_started', { page_path: ROUTES.contact });
    }
  };

  const validate = (formData: FormData): Record<string, string> => {
    const nextErrors: Record<string, string> = {};
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const consent = formData.get('consent');

    if (!name) nextErrors.name = 'Please enter your full name.';
    if (!email) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!consent) nextErrors.consent = 'We need your permission to respond to this enquiry.';

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: a hidden field real visitors never fill in. Silently drop bot submissions.
    if (String(formData.get('company') || '').length > 0) {
      setStatus('success');
      return;
    }

    // Time-trap: genuine visitors take more than a couple of seconds to fill this in.
    if (Date.now() - renderedAtRef.current < 2000) {
      setStatus('success');
      return;
    }

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setErrorMessage('');

    if (!ENQUIRY_FORM_ENDPOINT) {
      // No backend configured yet — hand off to the visitor's email client rather
      // than falsely claiming the message was delivered. See docs/analytics-setup.md.
      const subject = encodeURIComponent(`Care enquiry from ${formData.get('name')}`);
      const body = encodeURIComponent(
        `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone') || '—'}\nRelationship: ${formData.get('rel')}\nEnquiry type: ${formData.get('type')}\n\nMessage:\n${formData.get('message') || '—'}`,
      );
      window.location.href = `${business.emailHref}?subject=${subject}&body=${body}`;
      setStatus('success');
      return;
    }

    try {
      const response = await fetch(ENQUIRY_FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error(`Form endpoint responded with ${response.status}`);

      setStatus('success');
      trackEvent('enquiry_submitted', { page_path: ROUTES.contact });
    } catch (error) {
      setStatus('error');
      setErrorMessage("We couldn't send your message. Please try again, or call us directly.");
    }
  };

  return (
    <div className="w-full">
      <Seo
        title="Contact Us | Arrange a Visit to The Meadows, Scartho"
        description="Get in touch with The Meadows care home in Scartho, Grimsby. Call, email or send an enquiry to arrange a personal visit — no obligation."
        path={ROUTES.contact}
      />
      {/* Hero Banner */}
      <section className="relative h-auto min-h-[340px] py-32 md:min-h-[420px] md:h-[42vh] lg:h-[50vh] flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-12">
          <FadeIn>
            <h1 className="page-hero-title text-4xl md:text-5xl lg:text-6xl font-medium mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-sage-pale max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question, want to arrange a visit, or just need some advice — please don't hesitate to call or message us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

          {/* Form Column */}
          <FadeIn className="lg:w-1/2">
            <h2 className="text-3xl text-sage-deep mb-8">Send Us a Message</h2>

            {status === 'success' ? (
              <div className="bg-sage-pale border border-sage p-6 sm:p-10 rounded-[2rem] text-center shadow-soft" role="status">
                <CheckCircle2 size={48} className="mx-auto text-sage-deep mb-6" />
                <h3 className="text-2xl font-serif text-sage-deep mb-4">
                  {ENQUIRY_FORM_ENDPOINT ? 'Thank you for getting in touch.' : 'Almost done!'}
                </h3>
                <p className="text-text-mid">
                  {ENQUIRY_FORM_ENDPOINT
                    ? 'A member of our team will respond within one working day.'
                    : "We've opened your email app with your message ready — please press send to complete your enquiry. If nothing opened, please email us directly."}
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    hasStartedRef.current = false;
                    renderedAtRef.current = Date.now();
                  }}
                  className="mt-8 text-sage-deep font-bold hover:text-gold-deep transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} onFocus={handleFormInteraction} noValidate className="bg-white p-5 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-soft border border-sage-light/20 space-y-6">
                {/* Honeypot field — hidden from sighted and screen-reader users, bots tend to fill every field. */}
                <div aria-hidden="true" className="absolute w-px h-px overflow-hidden opacity-0 -z-10" style={{ left: '-9999px' }}>
                  <label htmlFor="company">Leave this field blank</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="name">Full Name *</label>
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors"
                  />
                  {errors.name && <p id="name-error" className="mt-2 text-sm text-red-700">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="email">Email Address *</label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors"
                  />
                  {errors.email && <p id="email-error" className="mt-2 text-sm text-red-700">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="rel">Your Relationship to the Resident</label>
                  <select id="rel" name="rel" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors">
                    {RELATIONSHIP_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="type">Type of Care Enquiry</label>
                  <select id="type" name="type" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors">
                    {ENQUIRY_TYPE_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input
                    required
                    id="consent"
                    name="consent"
                    type="checkbox"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="mt-1 w-4 h-4 text-sage rounded border-sage-light/50 focus:ring-sage"
                  />
                  <label htmlFor="consent" className="text-sm text-text-mid leading-relaxed cursor-pointer select-none">
                    I consent to The Meadows Care Home contacting me regarding my enquiry. *
                  </label>
                </div>
                {errors.consent && <p id="consent-error" className="text-sm text-red-700 -mt-4">{errors.consent}</p>}

                <div className="flex items-start gap-3">
                  <input
                    id="marketingConsent"
                    name="marketingConsent"
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-sage rounded border-sage-light/50 focus:ring-sage"
                  />
                  <label htmlFor="marketingConsent" className="text-sm text-text-mid leading-relaxed cursor-pointer select-none">
                    I'd also like to receive occasional news and updates from The Meadows by email (optional).
                  </label>
                </div>

                <p className="text-xs text-text-light leading-relaxed">
                  We'll only use your details to respond to your enquiry, in line with our{' '}
                  <Link to={ROUTES.privacyPolicy} className="underline hover:text-sage-deep">Privacy Policy</Link>.
                </p>

                {status === 'error' && (
                  <div role="alert" className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  disabled={status === 'submitting'}
                  className="w-full py-4 mt-4 bg-gold hover:bg-gold-deep disabled:bg-gold-soft text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(200,169,110,0.39)] hover:-translate-y-0.5"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </FadeIn>

          {/* Details Column */}
          <FadeIn className="lg:w-1/2 flex flex-col">
            <h2 className="text-3xl text-sage-deep mb-8 relative">Our Details</h2>

            <div className="space-y-4 mb-10 flex-1">
              <TrackedLink
                href={googleMapsDirectionsUrl}
                event="directions_clicked"
                eventParams={{ button_location: 'contact_details' }}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-sage-light/10 hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage-deep shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-serif text-lg text-text-dark font-medium mb-1">{business.legalName}</p>
                  <p className="text-text-mid">{business.streetAddress}<br/>{business.addressLocality}<br/>{business.addressRegion}</p>
                </div>
              </TrackedLink>

              <TrackedLink
                href={business.telephoneHref}
                event="phone_call_clicked"
                eventParams={{ button_location: 'contact_details', link_type: 'tel' }}
                className="flex items-center gap-4 p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-sage-light/10 hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage-deep shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <p className="font-serif text-lg text-text-dark font-medium group-hover:text-gold transition-colors">{business.telephone}</p>
              </TrackedLink>

              <TrackedLink
                href={business.emailHref}
                event="email_clicked"
                eventParams={{ button_location: 'contact_details', link_type: 'mailto' }}
                className="flex items-center gap-4 p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-sage-light/10 hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage-deep shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <p className="text-text-dark group-hover:text-gold transition-colors">{business.email}</p>
              </TrackedLink>

              <div className="flex items-start gap-4 p-5 sm:p-6 bg-blue-soft/30 rounded-2xl border border-blue-soft">
                <Clock size={20} className="text-blue-deep shrink-0 mt-1" />
                <p className="text-text-mid leading-relaxed text-sm">
                  {business.contactHoursNote}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 sm:h-80 w-full rounded-[2rem] overflow-hidden shadow-soft border border-sage-light/20 relative flex-shrink-0">
              <iframe
                title={`Map showing the location of ${business.legalName}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.493922650036!2d-0.091724!3d53.5312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487cdfc6bb2db4e7%3A0xc54de69d7b977bc1!2s88%20Louth%20Rd%2C%20Scartho%2C%20Grimsby%20DN33%202HY!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 brightness-[1.02] contrast-[0.98] grayscale-[0.2]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Arrange a Visit Section */}
      <section className="py-24 bg-sage-pale">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn className="bg-white/60 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-mid border border-sage-light/20">
            <h2 className="text-3xl md:text-5xl text-sage-deep mb-8">Arrange a Personal Visit</h2>
            <p className="text-lg text-text-mid leading-relaxed mb-10 max-w-2xl mx-auto">
              We warmly welcome families and prospective residents to come and see The Meadows for themselves. Seeing is believing — and we are confident you will feel the warmth and quality of our home the moment you walk through the door.
            </p>

            <StaggerContainer className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                "No obligation",
                "Flexible appointment times",
                "Meet the team",
                "See all facilities",
                "Ask all your questions"
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-sage-light/30 shadow-sm text-sm font-medium text-text-dark">
                    <CheckCircle2 size={16} className="text-sage" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <TrackedLink
              href={business.telephoneHref}
              event="phone_call_clicked"
              eventParams={{ button_location: 'contact_visit_cta', link_type: 'tel' }}
              className="inline-block px-10 py-5 bg-gold hover:bg-gold-deep text-white font-bold text-lg md:text-xl rounded-full transition-all shadow-[0_8px_25px_rgba(200,169,110,0.35)] hover:shadow-[0_12px_35px_rgba(200,169,110,0.45)] transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Call to Book Your Visit — {business.telephone}
            </TrackedLink>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
