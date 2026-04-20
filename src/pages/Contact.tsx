import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1200);
  };

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cream font-medium mb-6">Get in Touch</h1>
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
            
            {formState === 'success' ? (
              <div className="bg-sage-pale border border-sage p-10 rounded-[2rem] text-center shadow-soft">
                <CheckCircle2 size={48} className="mx-auto text-sage-deep mb-6" />
                <h3 className="text-2xl font-serif text-sage-deep mb-4">Thank you for getting in touch.</h3>
                <p className="text-text-mid">A member of our team will respond within one working day.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-sage-deep font-bold hover:text-gold-deep transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-soft border border-sage-light/20 space-y-6">
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="name">Full Name *</label>
                  <input required id="name" type="text" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="email">Email Address *</label>
                  <input required id="email" type="email" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="rel">Your Relationship to the Resident</label>
                  <select id="rel" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors">
                    <option>Myself</option>
                    <option>Parent</option>
                    <option>Spouse / Partner</option>
                    <option>Sibling</option>
                    <option>Other Family Member</option>
                    <option>Professional Referral</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="type">Type of Care Enquiry</label>
                  <select id="type" className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors">
                    <option>Residential Care</option>
                    <option>Dementia Care</option>
                    <option>Respite Care</option>
                    <option>Funding Advice</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-text-dark mb-2" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-cream rounded-xl border border-sage-light/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-colors resize-none"></textarea>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <input required id="consent" type="checkbox" className="mt-1 w-4 h-4 text-sage rounded border-sage-light/50 focus:ring-sage" />
                  <label htmlFor="consent" className="text-sm text-text-mid leading-relaxed cursor-pointer select-none">
                    I consent to The Meadows Care Home contacting me regarding my enquiry.
                  </label>
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  className="w-full py-4 mt-4 bg-gold hover:bg-gold-deep disabled:bg-gold-soft text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(200,169,110,0.39)] hover:-translate-y-0.5"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </FadeIn>

          {/* Details Column */}
          <FadeIn className="lg:w-1/2 flex flex-col">
            <h2 className="text-3xl text-sage-deep mb-8 relative">Our Details</h2>
            
            <div className="space-y-4 mb-10 flex-1">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-sage-light/10 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage-deep shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-serif text-lg text-text-dark font-medium mb-1">The Meadows Care Home</p>
                  <p className="text-text-mid">88 Louth Road<br/>Scartho, Grimsby<br/>Lincolnshire</p>
                </div>
              </a>

              <a href="tel:01472823287" className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-sage-light/10 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage-deep shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <p className="font-serif text-lg text-text-dark font-medium group-hover:text-gold transition-colors">01472 823287</p>
              </a>

              <a href="mailto:jamie@shirecarehomes.com" className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-sage-light/10 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage-deep shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <p className="text-text-dark group-hover:text-gold transition-colors">jamie@shirecarehomes.com</p>
              </a>

              <div className="flex items-start gap-4 p-6 bg-blue-soft/30 rounded-2xl border border-blue-soft">
                <Clock size={20} className="text-blue-deep shrink-0 mt-1" />
                <p className="text-text-mid leading-relaxed text-sm">
                  Our team is available 24 hours a day, 7 days a week to assist residents and families.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 sm:h-80 w-full rounded-[2rem] overflow-hidden shadow-soft border border-sage-light/20 relative flex-shrink-0">
              <iframe 
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
          <FadeIn className="bg-white/60 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] shadow-mid border border-sage-light/20">
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

            <a 
              href="tel:01472823287"
              className="inline-block px-10 py-5 bg-gold hover:bg-gold-deep text-white font-bold text-lg md:text-xl rounded-full transition-all shadow-[0_8px_25px_rgba(200,169,110,0.35)] hover:shadow-[0_12px_35px_rgba(200,169,110,0.45)] transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Call to Book Your Visit — 01472 823287
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
