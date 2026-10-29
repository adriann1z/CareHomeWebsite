import { FadeIn } from '../components/FadeIn';
import { TrackedLink } from '../components/tracking/TrackedLink';
import { ROUTES } from '../lib/routes';
import { business } from '../lib/siteConfig';
import { Seo } from '../components/seo/Seo';

export default function Care() {
  return (
    <div className="w-full">
      <Seo
        title="Our Care Services | Residential, Dementia & Respite Care in Grimsby"
        description="Residential care, dementia care and respite care in Grimsby, delivered with dignity and expertise at The Meadows in Scartho. Find the right care for your family."
        path={ROUTES.care}
      />
      {/* Hero Banner */}
      <section className="relative h-auto min-h-[340px] py-32 md:min-h-[420px] md:h-[42vh] lg:h-[50vh] flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-12">
          <FadeIn>
            <h1 className="page-hero-title text-4xl md:text-5xl lg:text-6xl font-medium mb-6">Our Care Services</h1>
            <p className="text-lg md:text-xl text-sage-pale max-w-2xl mx-auto">
              Expert, compassionate care tailored to every individual — delivered with dignity, patience, and genuine kindness.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Residential Care */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative">
          <FadeIn className="lg:w-1/2 space-y-6 relative z-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold-soft/40 font-serif text-xl font-semibold text-gold-deep">
              01
            </div>
            <p className="eyebrow text-gold-deep">Day-to-Day Living Support</p>
            <h2 className="text-3xl md:text-5xl text-sage-deep">Residential Care</h2>
            
            <p className="text-lg text-text-mid leading-relaxed">
              Residential care at The Meadows is deeply personal. We provide a supportive, welcoming environment where residents can enjoy their days safely, free from the burdens of household chores, cooking, and maintenance. 
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
              Daily life is structured entirely around individual preferences. Some residents enjoy a bustling social life interacting with others in the lounges, while others prefer quieter moments pursuing hobbies in their rooms. 
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
               Every resident has a bespoke care plan developed with them and their family. This guarantees that all emotional, physical, and medical needs are met with precision.
            </p>
            
            <ul className="space-y-3 pt-4 border-t border-sage-light/20">
              {[
                "Personalised care plans reviewed regularly",
                "Support with personal hygiene, dressing, and mobility",
                "Medication management by trained staff",
                "Nutritious, chef-prepared meals and snacks",
                "A rich programme of activities and social events",
                "Regular outings and community involvement",
                "GP, dental, and health professional visits arranged"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-text-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
          </FadeIn>

          <FadeIn className="lg:w-1/2 relative z-10 group">
            <div className="absolute inset-0 hidden sm:block border-2 border-sage-light/30 rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500" />
            <img referrerPolicy="no-referrer" 
              src="https://images.unsplash.com/photo-1774537969499-f6904c24cad2?auto=format&fit=crop&w=1200&q=82" 
              alt="Older woman being gently supported while walking outdoors" 
              className="relative rounded-[1.5rem] sm:rounded-[2rem] w-full object-cover aspect-square shadow-soft"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </section>

      {/* Dementia Care */}
      <section className="py-24 bg-sage-pale overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
          <FadeIn className="lg:w-1/2 group">
            <img referrerPolicy="no-referrer" 
              src="https://images.unsplash.com/photo-1756312177475-eb9a92b6dc4f?auto=format&fit=crop&w=1200&q=82" 
              alt="Older woman caring for a small plant in a calm garden setting" 
              className="rounded-[1.5rem] sm:rounded-[2rem] w-full object-cover aspect-[4/3] shadow-mid"
              loading="lazy"
            />
          </FadeIn>

          <FadeIn className="lg:w-1/2 space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold-soft/40 font-serif text-xl font-semibold text-gold-deep">
              02
            </div>
            <p className="eyebrow text-gold-deep">Specialist Understanding & Support</p>
            <h2 className="text-3xl md:text-5xl text-text-dark">Dementia Care</h2>
            
            <p className="text-lg text-text-mid leading-relaxed">
              Our dementia care approach is founded on profound patience, empathy, and specialised knowledge. We focus not on what is lost, but on what remains — creating moments of joy and connection every single day.
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
              We know how important routine and a familiar environment are. Our home layout is sensory-friendly and easy to navigate to reduce anxiety and confusion. 
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
              Building a strong relationship with family is crucial. We maintain open, frequent communication to ensure families feel thoroughly involved and updated about their loved one’s wellbeing.
            </p>
            
            <ul className="space-y-3 pt-4 border-t border-sage/20">
              {[
                "Specialist-trained dementia care staff",
                "Safe, structured and familiar daily routines",
                "Calm, sensory-friendly environments",
                "Activities designed for cognitive engagement",
                "Regular family communication and involvement",
                "Liaison with GP and memory specialists"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-deep shrink-0" />
                  <span className="text-text-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white/70 backdrop-blur-sm border-l-4 border-sage p-6 rounded-r-xl shadow-sm text-text-mid italic text-[1.05rem]">
              "We understand that dementia affects every person differently. Our care is always adapted to the individual."
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Respite Care */}
      <section className="py-24 bg-cream-warm overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <FadeIn className="lg:w-1/2 space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold-soft/40 font-serif text-xl font-semibold text-gold-deep">
              03
            </div>
            <p className="eyebrow text-gold-deep">Short-Term Stays, Full-Time Care</p>
            <h2 className="text-3xl md:text-5xl text-sage-deep">Respite Care</h2>
            
            <p className="text-lg text-text-mid leading-relaxed">
              Respite care offers temporary relief for family caregivers while ensuring their loved one receives professional support. Whether it's a planned break or an emergency need, we provide a warm welcome.
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
              For anyone joining us for a short stay, integration is key. Respite residents are immediately embraced into the community with an invitation to join all daily activities and meals. 
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
              A comprehensive handover process with existing carers guarantees a smooth transition. Our dedicated staff strive to make the stay feel like a holiday for the resident, leaving family members with complete peace of mind.
            </p>
            
            <ul className="space-y-3 pt-4 border-t border-sage-light/20">
              {[
                "Flexible short-term and emergency placements",
                "Full access to all home facilities and activities",
                "Seamless handover with families and existing carers",
                "Comprehensive assessment before admission",
                "Can lead to permanent placement if desired"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-text-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 bg-blue-soft/50 border-t border-blue-soft p-6 rounded-xl text-text-dark font-medium text-center">
              Whether planned or at short notice, we will always do our very best to accommodate your family's needs.
            </div>
          </FadeIn>

          <FadeIn className="lg:w-1/2">
            <div className="relative p-3 sm:p-4 md:p-6 bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-mid">
              <img referrerPolicy="no-referrer" 
                src="https://images.unsplash.com/photo-1773418346667-f4e087414ea6?auto=format&fit=crop&w=1200&q=82" 
                alt="Older person walking through a peaceful garden pathway" 
                className="rounded-2xl w-full object-cover aspect-[4/3] shadow-inner"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-sage-deep text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-2xl text-cream font-serif mb-10 leading-relaxed">
              Not sure which type of care is right for your loved one? Our friendly team is happy to talk things through — no obligation, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <span className="text-cream font-bold text-xl">{business.telephone}</span>
              <TrackedLink
                href={business.telephoneHref}
                event="phone_call_clicked"
                eventParams={{ button_location: 'care_cta_strip', link_type: 'tel' }}
                className="px-8 py-3 bg-gold hover:bg-gold-soft text-text-dark font-bold rounded-full transition-all shadow-[0_0_20px_rgba(200,169,110,0.2)] hover:shadow-lg transform hover:-translate-y-1"
              >
                Call Us Today
              </TrackedLink>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
