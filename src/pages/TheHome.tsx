import { BedDouble, Armchair, UtensilsCrossed, TreeDeciduous, Paintbrush, BookOpen } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

export default function TheHome() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cream font-medium mb-6">Our Home</h1>
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

      {/* Life at The Meadows (Timeline) */}
      <section className="py-24 bg-cream-warm overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-sage-deep mb-6">A Typical Day at The Meadows</h2>
            <p className="text-lg font-medium text-text-dark bg-white/50 inline-block px-6 py-3 rounded-full border border-sage-light/20">
              Every day is flexible. We follow each resident's own preferences and natural rhythms.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="relative border-l-2 border-sage-light/60 ml-4 md:ml-1/2 md:-translate-x-1 py-4">
              {[
                { time: "Morning", title: "Morning Routine", desc: "A gentle wake-up with support as needed. Tea in bed, reading the paper, or an early walk in the garden." },
                { time: "9:00 AM", title: "Breakfast", desc: "A nutritious and hearty breakfast shared in the dining room or enjoyed privately in their room." },
                { time: "11:00 AM", title: "Activities", desc: "Engaging in mind-stimulating tasks, gentle movement classes, or local community visits." },
                { time: "1:00 PM", title: "Lunch", desc: "The main meal of the day, freshly prepared by our skilled kitchen team using seasonal ingredients." },
                { time: "3:00 PM", title: "Afternoon Leisure", desc: "Family visits, quiet reading, watching a film, or afternoon tea and cake." },
                { time: "6:00 PM", title: "Evening Meal", desc: "A lighter supper marking the transition to the evening, providing an opportunity for conversation." },
                { time: "Evening", title: "Wind Down", desc: "Relaxing in the lounges before being supported with evening routines whenever they prefer to retire." }
              ].map((step, i) => (
                <div key={i} className="mb-10 last:mb-0 relative pl-8 md:pl-0 w-full group">
                  <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-1 w-4 h-4 rounded-full bg-gold border-[3px] border-cream-warm group-hover:scale-125 transition-transform" />
                  
                  <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}>
                    <span className="text-sm font-bold tracking-widest uppercase text-sage-deep block mb-1">{step.time}</span>
                    <h3 className="text-xl font-serif text-text-dark mb-2">{step.title}</h3>
                    <p className="text-text-mid leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
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
              "https://picsum.photos/seed/room/800/800", // Bright interior
              "https://picsum.photos/seed/plants/800/800", // Garden
              "https://picsum.photos/seed/food/800/800", // Dining set
              "https://picsum.photos/seed/activity/800/800", // Activity / crafts
              "https://picsum.photos/seed/bedroom/800/800", // Bedroom
              "https://picsum.photos/seed/smiles/800/800"  // Caregiver
            ].map((src, i) => (
              <StaggerItem key={i} className={`rounded-[2rem] overflow-hidden shadow-soft relative group ${i === 1 || i === 4 ? 'lg:col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-sage-deep/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img referrerPolicy="no-referrer" 
                  src={src} 
                  alt={`The Meadows living space ${i+1}`}
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
