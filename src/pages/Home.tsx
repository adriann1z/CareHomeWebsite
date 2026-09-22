import { ArrowUpRight, BrainCircuit, CalendarDays, HeartHandshake, House, MapPin, ShieldCheck, UsersRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { TrackedButton } from '../components/tracking/TrackedButton';
import { ROUTES } from '../lib/routes';
import { Seo } from '../components/seo/Seo';

const trustPoints = [
  { icon: ShieldCheck, title: 'CQC Rated Good', detail: 'Quality you can trust' },
  { icon: UsersRound, title: '36 Residents Maximum', detail: 'A close-knit community' },
  { icon: HeartHandshake, title: '24/7 Qualified Care Staff', detail: 'Always here, always caring' },
  { icon: House, title: 'Person-Centred Care Plans', detail: 'Tailored to individual needs' },
  { icon: MapPin, title: 'Established Local Provider', detail: 'Proud to serve Grimsby' },
];

const careServices = [
  { icon: HeartHandshake, title: 'Residential Care', description: 'A safe, comfortable home with dignity, companionship and support every day.' },
  { icon: BrainCircuit, title: 'Dementia Care', description: 'Specialist, compassionate care in a nurturing and understanding environment.' },
  { icon: CalendarDays, title: 'Respite Care', description: 'Short-term care giving you peace of mind, with the same high standards.' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Seo
        title="The Meadows Care Home | Residential & Dementia Care in Scartho, Grimsby"
        description="A warm, CQC-rated care home in Scartho, Grimsby offering residential care, dementia care and respite care for up to 36 residents. Arrange a visit today."
        path={ROUTES.home}
      />

      <section className="relative isolate flex min-h-[610px] items-end overflow-hidden bg-sage-deep text-white sm:min-h-[660px] lg:min-h-[690px] lg:items-center">
        <img
          src={`${import.meta.env.BASE_URL}meadows-front-photo.png`}
          alt="The Meadows Care Home sign and building in Scartho, Grimsby"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[30%_center] lg:object-[center_58%]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,39,29,0.1)_0%,rgba(20,39,29,0.3)_42%,rgba(20,39,29,0.86)_100%)] lg:bg-[linear-gradient(90deg,rgba(20,39,29,0.08)_0%,rgba(20,39,29,0.16)_38%,rgba(20,39,29,0.72)_68%,rgba(20,39,29,0.82)_100%)]" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pb-16 sm:pt-36 lg:px-12 lg:py-36">
          <div className="ml-auto max-w-[640px]">
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase text-white sm:mb-7 sm:text-xs">
              <span className="rounded-full border border-white/40 bg-sage-deep/45 px-4 py-2">CQC Rated Good</span>
              <span className="tracking-[0.12em]">Scartho, Grimsby</span>
            </div>
            <h1 className="mb-4 max-w-[12ch] !text-white text-4xl font-semibold leading-[1.08] [text-shadow:0_2px_16px_rgba(0,0,0,0.28)] sm:mb-6 sm:text-5xl lg:text-6xl">
              The Meadows Care Home
            </h1>
            <p className="mb-4 text-sm font-bold uppercase text-gold-soft sm:mb-5 sm:text-base">
              Residential, Dementia and Respite Care
            </p>
            <p className="mb-6 max-w-[36rem] text-base leading-7 text-white/95 sm:mb-9 sm:text-lg sm:leading-8">
              A calm, family-oriented home where residents are supported with dignity, warmth and person-centred care in the heart of Grimsby.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <TrackedButton
                event="book_a_visit_clicked"
                eventParams={{ button_location: 'home_hero' }}
                onClick={() => navigate(ROUTES.contact)}
                className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-sage-deep shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-colors hover:bg-gold-soft sm:px-8 sm:py-4 sm:text-base"
              >
                Arrange a Visit
              </TrackedButton>
              <Link
                to={ROUTES.care}
                className="inline-flex items-center rounded-full border border-white/65 bg-sage-deep/25 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-sage-deep sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Our Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Why families trust The Meadows" className="bg-sage-deep text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-12 lg:py-7">
          {trustPoints.map(({ icon: Icon, title, detail }, index) => (
            <div
              key={title}
              className={`flex min-w-0 items-center gap-4 border-white/15 py-4 sm:px-5 lg:items-start lg:gap-3 lg:py-1 ${index > 0 ? 'border-t sm:border-t-0' : ''} ${index % 2 === 1 ? 'sm:border-l' : ''} ${index > 1 ? 'sm:border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''}`}
            >
              <Icon aria-hidden="true" size={25} strokeWidth={1.6} className="shrink-0 text-gold-soft" />
              <div className="min-w-0">
                <p className="text-sm font-bold leading-5">{title}</p>
                <p className="mt-1 text-xs leading-5 text-white/70">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-warm py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <p className="mb-4 text-xs font-bold uppercase text-gold-deep sm:text-sm">
              Compassionate Care for a Brighter Tomorrow
            </p>
            <h2 className="mb-5 text-3xl text-sage-deep sm:text-4xl lg:text-5xl">Our Care Services</h2>
            <p className="text-base leading-7 text-text-mid sm:text-lg sm:leading-8">
              We provide high-quality, person-centred care in a warm and welcoming environment, supporting each individual to live life to the full.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-5 md:grid-cols-3 lg:gap-7">
            {careServices.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title} className="h-full">
                <article className="group flex h-full flex-col rounded-lg border border-sage-light/25 bg-cream-warm p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sage-light/60 hover:shadow-mid sm:p-8">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-sage-light/35 bg-white text-sage-deep">
                    <Icon aria-hidden="true" size={27} strokeWidth={1.7} />
                  </div>
                  <h3 className="mb-4 text-2xl text-sage-deep">{title}</h3>
                  <p className="mb-8 flex-1 text-base leading-7 text-text-mid">{description}</p>
                  <Link
                    to={ROUTES.care}
                    aria-label={`Learn more about ${title.toLowerCase()}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage-light/40 bg-white text-sage-deep transition-colors group-hover:border-sage-deep group-hover:bg-sage-deep group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep"
                  >
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-14 border-t border-sage-light/30 pt-8 text-center font-serif text-xl text-sage-deep sm:text-2xl">
            A Family Feel, A Higher Standard
          </p>
        </div>
      </section>
    </div>
  );
}
