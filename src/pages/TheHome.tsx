import { useEffect } from 'react';
import {
  BedDouble,
  Armchair,
  UtensilsCrossed,
  TreeDeciduous,
  Paintbrush,
  BookOpen,
  Clock3,
  Coffee,
  SunMedium,
  CloudSun,
  UserRound,
  HeartHandshake,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { Seo } from '../components/seo/Seo';
import { ROUTES } from '../lib/routes';
import { trackEvent } from '../lib/analytics';

export default function TheHome() {
  useEffect(() => {
    trackEvent('room_information_viewed', { page_path: ROUTES.theHome });
  }, []);

  return (
    <div className="w-full">
      <Seo
        title="The Home & Facilities | The Meadows Care Home, Scartho"
        description="Take a look inside The Meadows: private single bedrooms, communal lounges, a dining room and accessible gardens at our Scartho, Grimsby care home."
        path={ROUTES.theHome}
      />
      {/* Hero Banner */}
      <section className="relative h-auto min-h-[340px] py-32 md:min-h-[420px] md:h-[42vh] lg:h-[50vh] flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-12">
          <FadeIn>
            <h1 className="page-hero-title text-4xl md:text-5xl lg:text-6xl font-medium mb-6">Our Home</h1>
            <p className="text-lg md:text-xl text-sage-pale max-w-2xl mx-auto">
              A warm, comfortable and beautifully maintained home in the heart of Scartho.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Welcome to The Meadows */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-[760px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-sage-deep mb-8 relative pb-6">
              Designed for Comfort, Built for Living
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold/50 rounded-full" />
            </h2>
            <p className="text-lg text-text-mid leading-relaxed mb-6">
              The physical environment of a care home fundamentally shapes the well-being of the people living inside it. We have curated a setting that removes the clinical edge often associated with care, replacing it with the textures, colours, and familiarity of a true home.
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
              Our design philosophy embraces natural light, secure accessibility, and inviting communal areas. Every corner is crafted to inspire a sense of belonging, encouraging our residents to treat the entire house as their own.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-sage-pale">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-sage-deep">Our Facilities</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BedDouble,
                title: "Single Bedrooms",
                desc: "Each resident has their own private single bedroom, many with en-suite facilities. Residents are encouraged to personalise their space with familiar belongings and furniture."
              },
              {
                icon: Armchair,
                title: "Communal Lounges",
                desc: "Comfortable, well-furnished lounges where residents can socialise, watch television, read, or simply relax in good company."
              },
              {
                icon: UtensilsCrossed,
                title: "Dining Room",
                desc: "A warm and welcoming dining space where residents enjoy freshly prepared, nutritious meals together — a highlight of each day."
              },
              {
                icon: TreeDeciduous,
                title: "Accessible Gardens",
                desc: "Beautiful, landscaped gardens that residents can access safely and independently. Outdoor seating, raised planters, and walking paths throughout."
              },
              {
                icon: Paintbrush,
                title: "Activities Room",
                desc: "A dedicated space for arts and crafts, games, gentle exercise, music sessions, and visiting entertainers."
              },
              {
                icon: BookOpen,
                title: "Quiet Spaces",
                desc: "Private areas for residents who prefer quieter moments, family visits, or personal reflection."
              }
            ].map((facility, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-sage-light/10 h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sage-pale text-sage-deep flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-white transition-colors">
                    <facility.icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-text-dark mb-4">{facility.title}</h3>
                  <p className="text-text-mid leading-relaxed">{facility.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* A Typical Day */}
      <section className="py-24 bg-cream-warm overflow-hidden" aria-labelledby="typical-day-heading">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="eyebrow text-gold-deep block mb-3">Life at The Meadows</span>
            <h2 id="typical-day-heading" className="text-3xl md:text-5xl text-sage-deep mb-6">
              A Typical Day at The Meadows
            </h2>
            <p className="text-xl md:text-2xl font-serif text-text-dark mb-5">
              At The Meadows, every day is centred around the individual.
            </p>
            <p className="text-lg text-text-mid leading-relaxed">
              We understand that everyone has their own preferences, routines and choices. Our approach to care is person-centred, meaning that each resident is supported to enjoy their day in a way that suits their individual needs, wishes and lifestyle.
            </p>
          </FadeIn>

          <FadeIn className="mb-10 md:mb-14">
            <div className="bg-white rounded-[2rem] shadow-soft border border-sage-light/15 p-6 sm:p-8 md:p-10">
              <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-start">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-soft text-sage-deep flex items-center justify-center mb-5">
                    <UtensilsCrossed size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-sage-deep mb-4">Our Daily Mealtimes</h3>
                  <p className="text-text-mid leading-relaxed mb-6">
                    While we have general mealtimes and planned activities throughout the day, these are always flexible to ensure residents have choice and control over their daily routines.
                  </p>
                  <div className="flex gap-3 rounded-2xl bg-sage-pale p-4 text-sage-deep">
                    <Coffee className="shrink-0 mt-0.5" size={21} aria-hidden="true" />
                    <p className="font-bold leading-relaxed">Snacks and refreshments are available 24 hours a day.</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-sage-light/25">
                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">The Meadows usual daily mealtimes</caption>
                    <thead>
                      <tr className="bg-sage-deep text-white">
                        <th scope="col" className="px-4 sm:px-6 py-4 text-sm uppercase tracking-wider font-bold">Time</th>
                        <th scope="col" className="px-4 sm:px-6 py-4 text-sm uppercase tracking-wider font-bold">Meal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sage-light/20">
                      {[
                        { time: '8:00am – 10:00am', meal: 'Breakfast' },
                        { time: 'Around 11:00am', meal: 'Morning coffee and snacks' },
                        { time: '12:00pm – 1:00pm', meal: 'Lunch – a freshly prepared hot meal' },
                        { time: 'Around 2:30pm', meal: 'Afternoon tea' },
                        { time: '4:00pm – 6:00pm', meal: 'Evening meal' },
                        { time: '7:00pm – 8:00pm', meal: 'Supper' },
                      ].map((item) => (
                        <tr key={item.time} className="odd:bg-white even:bg-sage-pale/45">
                          <th scope="row" className="px-4 sm:px-6 py-4 align-top text-sage-deep font-bold sm:whitespace-nowrap">
                            {item.time}
                          </th>
                          <td className="px-4 sm:px-6 py-4 text-text-mid leading-relaxed">{item.meal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-8 pt-7 border-t border-sage-light/20 text-text-mid leading-relaxed">
                These times are simply a guide to our usual daily routine. Residents are always welcome to enjoy their meals at different times if they prefer. We recognise that everyone has different appetites, preferences and routines, and we aim to accommodate these wherever possible.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="mb-10 md:mb-14">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-[2rem] bg-sage-pale border border-sage-light/15 p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white text-sage-deep flex items-center justify-center shadow-soft">
                    <Clock3 size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-sage-deep">Activities and Meaningful Engagement</h3>
                </div>
                <p className="text-text-mid leading-relaxed mb-6">
                  We offer a variety of activities throughout the day to promote wellbeing, enjoyment, social interaction and independence.
                </p>
                <p className="font-bold text-text-dark mb-4">Our usual group activity sessions take place around:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-sage-light/20">
                    <SunMedium className="text-gold-deep mb-3" size={25} aria-hidden="true" />
                    <p className="font-bold text-sage-deep">10:30am – 11:30am</p>
                    <p className="text-text-mid mt-1">Morning activities</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-sage-light/20">
                    <CloudSun className="text-gold-deep mb-3" size={25} aria-hidden="true" />
                    <p className="font-bold text-sage-deep">2:30pm – 3:30pm</p>
                    <p className="text-text-mid mt-1">Afternoon activities</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white border border-sage-light/15 p-6 sm:p-8 md:p-10 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-gold-soft text-sage-deep flex items-center justify-center mb-5">
                  <UserRound size={24} aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-3xl text-sage-deep mb-5">Personalised Time</h3>
                <p className="text-text-mid leading-relaxed mb-5">
                  Activities are planned around residents' individual interests, abilities and preferences, with everyone encouraged to participate in ways that are meaningful and enjoyable to them.
                </p>
                <p className="text-text-mid leading-relaxed">
                  <strong className="text-text-dark">One-to-one activities and individual support</strong> are generally provided outside of our planned group activity sessions. This allows residents to enjoy personalised time, whether that involves a favourite hobby, a conversation, a walk, or simply spending quality time with a member of our team.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-sage-deep px-6 py-10 sm:p-10 md:p-14 text-center shadow-mid">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold/10" aria-hidden="true" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-white/5" aria-hidden="true" />
              <div className="relative max-w-3xl mx-auto">
                <HeartHandshake className="mx-auto text-gold mb-5" size={38} aria-hidden="true" />
                <h3 className="text-3xl md:text-4xl text-white mb-6">Your Day, Your Choice</h3>
                <p className="text-lg text-sage-pale leading-relaxed mb-5">
                  At The Meadows, we believe that living in a care home should not mean giving up the routines, choices and independence that make each person unique.
                </p>
                <p className="text-lg text-sage-pale leading-relaxed mb-7">
                  Residents are supported to make their own decisions about when they get up, when they eat, how they spend their time and when they wish to rest.
                </p>
                <p className="text-xl md:text-2xl font-serif text-white mb-7">
                  Our daily routine provides structure, but it is always the individual who comes first.
                </p>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-soft">
                  The Meadows – Person-Centred Care, Every Day.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-sage-deep">Take a Look Around</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {[
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/garden.jpg`,
                alt: "The Meadows enclosed garden with lawn, seating and raised planting",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/lounge.jpg`,
                alt: "Bright communal lounge with residents and care staff",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/courtyard.jpg`,
                alt: "The Meadows enclosed courtyard garden and outdoor seating",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/table-setting-close-up.jpeg`,
                alt: "Close-up of a dining table set with white tableware, flowers and wine glasses",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/dining-table-window.jpeg`,
                alt: "Dining table set for four beside bright garden-facing windows",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/dining-room-wide.jpeg`,
                alt: "The Meadows dining room with several accessible tables laid for residents",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/lounge-seating.jpeg`,
                alt: "Comfortable lounge seating with armchairs, soft lighting and garden views",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/resident-bedroom.jpeg`,
                alt: "Bright resident bedroom with a single bed, armchair and personal furnishings",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/main-lounge.jpeg`,
                alt: "Spacious main lounge with comfortable armchairs and doors opening onto the garden",
              },
              {
                src: `${import.meta.env.BASE_URL}assets/gallery/connecting-lounges.jpeg`,
                alt: "Two connected lounge areas with comfortable seating and warm natural light",
              },
            ].map((image, i) => (
              <StaggerItem key={i} className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-soft relative group">
                <div className="absolute inset-0 bg-sage-deep/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img referrerPolicy="no-referrer" 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.03]" 
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
