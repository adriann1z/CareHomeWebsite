import { ChevronDown, Star, Heart, BrainCircuit, Calendar, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { useState } from 'react';

export default function Home({ setPage }: { setPage: (page: string) => void }) {
  const [heroError, setHeroError] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img referrerPolicy="no-referrer" 
            src={heroError ? "https://picsum.photos/seed/garden/2560/1440" : "/hero-image.jpg"} 
            alt="The Meadows Care Home exterior" 
            className="object-cover w-full h-full"
            loading="eager"
            onError={() => setHeroError(true)}
            />
          <div className="absolute inset-0 bg-[rgba(20,40,25,0.62)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-[80px] pb-[15vh] flex justify-end">
          <div className="max-w-3xl text-right">
            <StaggerContainer>
              <StaggerItem>
                <div className="flex justify-end mb-6">
                  <p className="uppercase text-white bg-sage rounded-full px-5 py-2 [text-shadow:0_1px_4px_rgba(0,0,0,0.2)] tracking-[0.14em] font-bold text-sm md:text-base shadow-lg">
                    CQC RATED GOOD
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="!text-[#ffffff] font-[600] mb-8 leading-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] text-[clamp(48px,6vw,72px)]">
                  Compassionate Care in the Heart of Grimsby
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="text-[#f0ede8] mb-12 ml-auto max-w-2xl [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] text-[19px] leading-[1.7]">
                  A warm, welcoming care home offering residential, dementia, and respite care — where every resident is treated with dignity, respect, and genuine kindness.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-4">
                  <button 
                    onClick={() => setPage('contact')}
                    className="w-full sm:w-auto px-[2.5rem] py-[1rem] bg-[#c8a96e] text-[#2c2b29] font-[700] text-[17px] rounded-[50px] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#a8884e] hover:-translate-y-[2px]"
                  >
                    Arrange a Visit
                  </button>
                  <button 
                    onClick={() => setPage('care')}
                    className="w-full sm:w-auto px-[2.5rem] py-[1rem] bg-transparent border-[2px] border-[#ffffff] text-[#ffffff] font-[700] text-[17px] rounded-[50px] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#ffffff] hover:text-[#2c2b29] hover:-translate-y-[2px]"
                  >
                    Learn About Our Care
                  </button>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-white/70">
          <ChevronDown size={32} />
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
                  <button 
                    onClick={() => setPage('care')}
                    className="text-sage-deep font-bold tracking-wide hover:text-gold-deep flex items-center transition-colors mt-auto"
                  >
                    Find Out More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </button>
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
            <button 
              onClick={() => setPage('home-life')}
              className="inline-flex items-center gap-2 bg-text-dark hover:bg-sage-deep text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg"
            >
              Discover The Home →
            </button>
          </FadeIn>
          
          <FadeIn className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-sage-light/20 rounded-[2rem] transform translate-x-4 translate-y-4" />
            <img referrerPolicy="no-referrer" 
              src="https://picsum.photos/seed/elderly/1200/900" 
              alt="Elderly care" 
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
              <a href="tel:01472823287" className="text-3xl font-serif font-bold hover:text-gold-soft transition-colors">01472 823287</a>
              <span className="hidden md:block w-px h-8 bg-sage-light/40" />
              <a href="mailto:jamie@shirecarehomes.com" className="text-lg hover:text-gold-soft transition-colors">jamie@shirecarehomes.com</a>
            </div>
            <button 
              onClick={() => setPage('contact')}
              className="px-8 py-4 bg-gold hover:bg-gold-deep text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(200,169,110,0.4)] hover:-translate-y-1"
            >
              Arrange a Visit
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
