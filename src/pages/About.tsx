import { ShieldCheck, Heart, Users, Home } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cream font-medium mb-6">About The Meadows</h1>
            <p className="text-lg md:text-xl text-sage-pale max-w-2xl mx-auto">
              A trusted care home in the heart of Scartho, dedicated to delivering person-centred care with warmth and respect.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <FadeIn className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-sage-pale rounded-[2rem] transform -translate-x-4 -translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500" />
            <img referrerPolicy="no-referrer" 
              src="https://picsum.photos/seed/exterior/1200/900" 
              alt="The Meadows exterior garden" 
              className="relative rounded-[2rem] shadow-mid w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl text-sage-deep">Who We Are</h2>
            <p className="text-text-mid leading-relaxed text-lg">
              Located at 88 Louth Road in the peaceful area of Scartho, Grimsby, The Meadows is a welcoming residential home designed to provide comfort, security, and companionship for up to 36 residents. Our home is thoughtfully structured to feel like a true extension of family life.
            </p>
            <p className="text-text-mid leading-relaxed text-lg">
              Our deeply held care ethos centres on the autonomy and dignity of our residents. We do not believe in a one-size-fits-all approach to care. Instead, we take the time to learn the life stories, preferences, and routines of each individual who lives with us. 
            </p>
            <p className="text-text-mid leading-relaxed text-lg">
              We are an established local care provider with an experienced care team drawn from our local community. For us, caring is more than a profession—it is a commitment to ensuring that the later years of our residents are filled with joy, respect, and meaningful days.
            </p>
            <div className="pt-4 flex items-center gap-4 text-sage-deep font-bold font-serif text-xl border-t border-sage-light/20">
              <Home className="text-gold" />
              <span>A Maximum capacity of 36 residents</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-sage-pale text-center">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-5xl text-sage-deep">The Values That Guide Everything We Do</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Respect",
                icon: "R",
                desc: "We treat every resident as a unique individual deserving of dignity and courtesy. Care decisions are always made with the resident's voice at the centre. Everyone at The Meadows is valued, heard, and respected."
              },
              {
                title: "Compassion",
                icon: "C",
                desc: "Genuine kindness is at the heart of everything we do. Our team goes beyond tasks and procedures to offer real human warmth and emotional support. We care deeply — not just professionally, but personally."
              },
              {
                title: "Independence",
                icon: "I",
                desc: "We actively support residents to maintain control over their own lives and choices. From daily routines to personal preferences, we encourage independence at every stage. Autonomy and self-expression are always celebrated."
              },
              {
                title: "Community",
                icon: "C",
                desc: "The Meadows is more than a care home — it is a thriving community. Residents form meaningful friendships, enjoy shared activities, and remain connected to the wider Grimsby community. Nobody should ever feel alone here."
              }
            ].map((value, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-2xl p-10 text-left shadow-soft hover:shadow-mid transition-all duration-300 transform hover:-translate-y-1 h-full border border-sage-light/10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-sage-light/20 flex items-center justify-center text-3xl font-serif text-sage-deep">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-sage-deep">{value.title}</h3>
                  </div>
                  <p className="text-text-mid leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-soft/30 text-gold-deep mb-8 relative">
              <Users size={32} />
              <div className="absolute inset-0 rounded-full border border-gold-deep/20 scale-125 animate-ping opacity-20" />
            </div>
            <h2 className="text-3xl md:text-5xl text-sage-deep mb-8">Our Dedicated Team</h2>
            <div className="space-y-6 text-left p-10 bg-white rounded-[2rem] shadow-soft border border-sage-light/10">
              <p className="text-lg text-text-mid leading-relaxed">
                The heart of The Meadows lies in our people. We carefully select our staff not just for their qualifications and experience, but for their genuine passion, empathy, and dedication to elderly care. They treat residents with the same thoughtfulness and affection they would show their own family.
              </p>
              <p className="text-lg text-text-mid leading-relaxed">
                We place a high value on ongoing professional development, ensuring our team is equipped with the latest practices in dementia and residential care. This commitment to continuous learning — alongside the strong, family-like bond shared among our staff — translates directly into a happier, safer, and more vibrant home for our residents.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Regulation & Quality */}
      <section className="py-20 bg-blue-soft text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <ShieldCheck size={48} className="mx-auto text-blue-deep mb-6" />
            <h2 className="text-xl md:text-2xl text-text-dark font-serif mb-6">Regulation & Quality Assurance</h2>
            <p className="text-text-mid mb-8">
              We are proudly registered with and regularly inspected by the Care Quality Commission (CQC), the independent regulator of health and social care in England. Our commitment to high standards provides families with absolute peace of mind.
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm text-sage-deep font-bold border border-sage-light/20">
              <span className="w-3 h-3 rounded-full bg-sage-deep animate-pulse" />
              CQC Rated: Good
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
