import { Star, Heart, BrainCircuit, Calendar, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { TrackedLink } from '../components/tracking/TrackedLink';
import { TrackedButton } from '../components/tracking/TrackedButton';
import { ROUTES } from '../lib/routes';
import { business } from '../lib/siteConfig';
import { Seo } from '../components/seo/Seo';
import { useState } from 'react';

export default function Home() {
  const [heroError, setHeroError] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Seo
        title="The Meadows Care Home | Residential & Dementia Care in Scartho, Grimsby"
        description="A warm, CQC-rated care home in Scartho, Grimsby offering residential care, dementia care and respite care for up to 36 residents. Arrange a visit today."
        path={ROUTES.home}
      />
      {/* Hero Section */}
      <section className="relative flex min-h-[690px] h-auto items-center overflow-hidden md:h-[92vh] md:min-h-[720px]">
        <div className="absolute inset-0 w-full h-full">
          <img referrerPolicy="no-referrer" 
            src={heroError ? "https://www.nelincs.gov.uk/assets/uploads/2024/01/Weelsby-woods-area-page-scaled.jpg" : "/hero-image.jpg"} 
            alt="Green open space at Weelsby Woods in Grimsby" 
            className="object-cover object-center w-full h-full"
            loading="eager"
            onError={() => setHeroError(true)}
            />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,45,31,0.86)_0%,rgba(23,45,31,0.76)_52%,rgba(23,45,31,0.68)_100%)] md:bg-[linear-gradient(90deg,rgba(23,45,31,0.88)_0%,rgba(23,45,31,0.72)_42%,rgba(23,45,31,0.42)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-sage-deep/45 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-32 pb-14 sm:px-6 sm:pt-36 md:px-6 md:pt-28 md:pb-16 lg:px-12">
          <div className="max-w-3xl text-left">
            <StaggerContainer>
              <StaggerItem>
                <div className="mb-7 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-sage-light/35 bg-sage px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_22px_rgba(0,0,0,0.18)]">
                    CQC Rated Good
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-white/78">
                    Scartho, Grimsby
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="!text-white mb-7 max-w-4xl text-4xl font-semibold leading-[1.06] [text-shadow:0_3px_18px_rgba(0,0,0,0.42)] sm:text-5xl md:text-6xl lg:text-7xl">
                  The Meadows Care Home
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mb-5 max-w-xl text-sm font-bold uppercase tracking-[0.08em] text-gold-soft sm:text-base sm:tracking-[0.14em]">
                  Residential, dementia and respite care
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="mb-9 max-w-2xl text-base leading-7 text-white/88 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] sm:text-lg sm:leading-8 md:text-xl">
                  A calm, family-oriented home where residents are supported with dignity, warmth and person-centred care in the heart of Grimsby.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="hidden">
                  A warm, welcoming care home offering residential, dementia, and respite care — where every resident is treated with dignity, respect, and genuine kindness.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <TrackedButton
                    event="book_a_visit_clicked"
                    eventParams={{ button_location: 'home_hero' }}
                    onClick={() => navigate(ROUTES.contact)}
                    className="w-full rounded-full bg-gold px-8 py-4 text-center text-base font-bold text-text-dark shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-0.5 hover:bg-gold-soft sm:w-auto"
                  >
                    Arrange a Visit
                  </TrackedButton>
                  <Link
                    to={ROUTES.care}
                    className="w-full rounded-full border border-white/55 bg-white/8 px-8 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-text-dark sm:w-auto"
                  >
                    Explore Our Care
                  </Link>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 border-t border-white/20 pt-5 text-white/86 sm:mt-12 sm:grid-cols-3 sm:gap-4 sm:pt-6">
                  <div>
                    <p className="font-serif text-2xl text-gold-soft">36</p>
                    <p className="text-sm font-bold uppercase tracking-[0.08em]">Residents maximum</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-gold-soft">24/7</p>
                    <p className="text-sm font-bold uppercase tracking-[0.08em]">Qualified care staff</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-gold-soft">Local</p>
                    <p className="text-sm font-bold uppercase tracking-[0.08em]">Established provider</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-cream border-b border-sage-light/20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-6 overflow-x-auto hide-scrollbar">
          <ul className="flex items-center justify-between min-w-max md:min-w-0 gap-8 md:gap-4 text-sm font-medium text-text-mid">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sage-light" /> CQC Rated Good</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sage-light" /> 36 Residents Maximum</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sage-light" /> 24/7 Qualified Care Staff</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sage-light" /> Person-Centred Care Plans</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sage-light" /> Established Local Care Provider</li>
          </ul>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-sage-deep mb-4">Our Care Services</h2>
            <p className="eyebrow text-gold-deep">What We Offer</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Residential Care",
                desc: "Supporting daily living in a safe, comfortable, and homely environment with 24-hour qualified staff.",
              },
              {
                icon: BrainCircuit,
                title: "Dementia Care",
                desc: "Specialist, compassionate dementia support with structured routines and a calm, understanding approach.",
              },
              {
                icon: Calendar,
                title: "Respite Care",
                desc: "Flexible short-term stays providing expert care for your loved one and essential breathing space for family carers.",
              }
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border-t-4 border-sage-light rounded-2xl p-8 shadow-soft hover:shadow-mid transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col group">
                  <div className="w-14 h-14 rounded-full bg-sage-pale flex items-center justify-center text-sage-deep mb-6 group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl mb-4 text-text-dark">{service.title}</h3>
                  <p className="text-text-mid mb-8 flex-1">{service.desc}</p>
                  <Link
                    to={ROUTES.care}
                    className="text-sage-deep font-bold tracking-wide hover:text-gold-deep flex items-center transition-colors mt-auto"
                  >
                    Find Out More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-24 bg-sage-pale">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-sage-deep mb-4">Why Families Choose Us</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "CQC Rated Good by independent inspectors",
              "Highly trained, experienced, and compassionate staff",
              "Beautiful accessible gardens and outdoor spaces",
              "Tailored care plans reviewed regularly with families",
              "Enriching daily activities, outings, and social events",
              "Open, honest communication with families at all times"
            ].map((text, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/60 hover:bg-white rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 shadow-[0_4px_20px_rgba(122,158,126,0.05)] hover:shadow-[0_8px_30px_rgba(122,158,126,0.12)] hover:-translate-y-1 border border-sage-light/20">
                  <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-sage flex items-center justify-center text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-text-dark font-medium leading-relaxed">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Home Introduction */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <FadeIn className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl text-sage-deep leading-tight">A Place to Call Home</h2>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sage-light/20 text-sage-deep rounded-full text-sm font-bold tracking-wide border border-sage-light/30">
              ✓ CQC Rated: Good
            </div>
            <p className="text-lg text-text-mid">
              We understand that moving into a care home is a significant transition. That’s why we have designed The Meadows to feel like a true community home right in the heart of Scartho, Grimsby. 
            </p>
            <p className="text-lg text-text-mid mb-8">
              With a capacity for just 36 residents, we maintain a close-knit, homely atmosphere. From our beautiful, accessible gardens to our comfortable lounges, every space is designed for comfort. Above all, our ethos is simple: every resident is a unique individual, and we treat them with the respect and warmth they deserve.
            </p>
            <Link
              to={ROUTES.theHome}
              className="inline-flex items-center gap-2 bg-text-dark hover:bg-sage-deep text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg"
            >
              Discover The Home →
            </Link>
          </FadeIn>
          
          <FadeIn className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-sage-light/20 rounded-[2rem] transform translate-x-4 translate-y-4" />
            <img referrerPolicy="no-referrer" 
              src="https://images.unsplash.com/photo-1756312177475-eb9a92b6dc4f?auto=format&fit=crop&w=1200&q=82" 
              alt="Older woman tending a small plant in a bright garden setting" 
              className="relative rounded-[2rem] shadow-xl w-full object-cover aspect-[4/3] transform transition-transform hover:scale-[1.02] duration-700"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream-warm">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-sage-deep">What Families Say</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The staff at The Meadows treated Mum like she was one of their own family. From the moment we arrived for our first visit, we knew it was the right place. We have total peace of mind.",
                author: "Sarah T. — Daughter of Resident"
              },
              {
                text: "Dad has flourished since moving in. He's more social, happier, and the team always keep us updated. The garden is his favourite spot — he's out there every morning.",
                author: "James R. — Son of Resident"
              },
              {
                text: "When we needed emergency respite care, The Meadows stepped in without hesitation. The care was exceptional and the staff were so kind and patient with Mum.",
                author: "Carol M. — Family Carer"
              }
            ].map((testimonial, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-soft relative h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 border border-sage-pale">
                  <span className="text-6xl text-sage-light/30 absolute top-4 left-6 font-serif leading-none">"</span>
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={18} className="fill-gold text-gold" />)}
                  </div>
                  <p className="text-text-mid italic mb-8 relative z-10 flex-1">{testimonial.text}</p>
                  <p className="text-sm font-bold text-text-dark tracking-wide uppercase">{testimonial.author}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-20 bg-sage text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-white mb-6">Ready to Find Out More?</h2>
            <p className="text-lg text-sage-pale mb-10 max-w-2xl mx-auto">
              We'd love to show you around. Call us today or send a message and we'll get back to you promptly.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
              <TrackedLink
                href={business.telephoneHref}
                event="phone_call_clicked"
                eventParams={{ button_location: 'home_contact_strip', link_type: 'tel' }}
                className="text-3xl font-serif font-bold hover:text-gold-soft transition-colors"
              >
                {business.telephone}
              </TrackedLink>
              <span className="hidden md:block w-px h-8 bg-sage-light/40" />
              <TrackedLink
                href={business.emailHref}
                event="email_clicked"
                eventParams={{ button_location: 'home_contact_strip', link_type: 'mailto' }}
                className="text-lg hover:text-gold-soft transition-colors"
              >
                {business.email}
              </TrackedLink>
            </div>
            <TrackedButton
              event="book_a_visit_clicked"
              eventParams={{ button_location: 'home_contact_strip' }}
              onClick={() => navigate(ROUTES.contact)}
              className="px-8 py-4 bg-gold hover:bg-gold-deep text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(200,169,110,0.4)] hover:-translate-y-1"
            >
              Arrange a Visit
            </TrackedButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
