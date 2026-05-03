import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  ShieldCheck,
  Phone as PhoneIcon,
  Ruler,
  Plug,
  Smile,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrustBar from '@/components/trust-bar';
import StatsStrip from '@/components/stats-strip';
import TwoPillar from '@/components/two-pillar';
import FeaturedWork from '@/components/featured-work';
import ServiceCard from '@/components/service-card';
import TestimonialCard from '@/components/testimonial-card';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import {
  SERVICES,
  TESTIMONIALS,
  PROCESS,
  WHY_ITEMS,
  SITE,
} from '@/lib/content';

const PROCESS_ICONS = {
  consult: PhoneIcon,
  design: Ruler,
  install: Plug,
  enjoy: Smile,
} as const;

export default function Home() {
  return (
    <>
      {/* HERO ─ photographic, editorial */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden text-white pt-[72px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery7.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/65 to-forest/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-transparent to-transparent" />
        </div>

        {/* Subtle gold edge line */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[72px] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />

        <div className="relative z-[3] w-full max-w-[1240px] mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-32 md:pt-40">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-px bg-gold-light/60" />
              <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-gold-light">
                {SITE.address.city}, {SITE.address.state} · Bergen County
              </p>
            </div>

            <h1 className="font-display font-black leading-[0.98] text-[clamp(2.8rem,7.4vw,6.6rem)] mb-7">
              Bergen County’s
              <br />
              brightest homes —
              <br />
              <em className="text-gold-light italic">every season.</em>
            </h1>

            <p className="text-[1.05rem] md:text-[1.15rem] text-white/85 leading-[1.75] max-w-[580px] mb-10">
              Professional holiday lighting installations, permanent year-round
              landscape and architectural systems, and full-service
              maintenance — designed and installed locally from New Milford.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="/contact" variant="red" size="lg">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/services" variant="outline-white" size="lg">
                Explore Services
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="text-gold flex"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>5.0 across customer reviews</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-white/20" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-light" />
                <span>Fully insured · Local crew</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <StatsStrip />
      <TwoPillar />

      {/* SERVICES ─ equal-height grid */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            eyebrow="Full-Service Lighting"
            title={
              <>
                Six services, <em>one team</em>, no surprises
              </>
            }
            sub="From flagship holiday installs to year-round landscape lighting and everything in between. Most customers go end-to-end so they don’t lift a finger."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <ServiceCard service={s} variant="short" />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-14">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-crimson font-bold text-[0.85rem] tracking-[0.14em] uppercase hover:gap-3 transition-all"
              >
                See full service detail
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturedWork />

      {/* PROCESS ─ horizontal timeline */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-warm-tan">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            title={
              <>
                Four steps, <em>start to finish</em>
              </>
            }
            sub="From your first call to lights-out after the season, we take care of every detail."
          />
          <div className="relative mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            <div
              className="hidden md:block absolute top-[58px] left-[12%] right-[12%] h-px bg-ink/15"
              aria-hidden="true"
            />
            {PROCESS.map((p, i) => {
              const Icon = PROCESS_ICONS[p.iconKey];
              return (
                <Reveal key={p.num} delay={i * 80}>
                  <div className="text-center px-3 group relative">
                    <div className="relative z-10 mx-auto w-[116px] h-[116px] mb-7 rounded-full bg-white border border-ink/10 flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(176,28,46,0.1)] transition-all duration-300 group-hover:border-crimson group-hover:-translate-y-1">
                      <span className="font-display text-[2rem] font-black text-crimson leading-none tabular-nums">
                        {p.num}
                      </span>
                      <Icon className="w-4 h-4 text-ink-light mt-1.5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-[1.2rem] font-bold text-ink mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[0.9rem] text-ink-light leading-[1.7] max-w-[240px] mx-auto">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ─ editorial split */}
      <section className="relative bg-forest text-white py-24 md:py-32 px-6 md:px-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-5">
              Why Choose Us
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-bold leading-[1.15] mb-10">
              The boring things, <em className="italic text-gold-light">done well.</em>
            </h2>
            <ul className="divide-y divide-white/10">
              {WHY_ITEMS.map((w, i) => (
                <Reveal key={w.title} delay={i * 60}>
                  <li className="flex gap-5 py-5">
                    <CheckCircle2 className="w-6 h-6 text-gold-light shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-[1.1rem] md:text-[1.15rem] font-bold leading-tight mb-1.5">
                        {w.title}
                      </p>
                      <p className="text-[0.92rem] text-white/65 leading-[1.7]">
                        {w.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Editorial photo + pull quote */}
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <Image
                src="/gallery6.jpg"
                alt="Detail of clean roofline lighting install"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <div className="text-gold-light text-3xl font-display leading-none mb-3" aria-hidden="true">
                  &ldquo;
                </div>
                <p className="font-display italic text-[1.15rem] md:text-[1.3rem] leading-[1.4] mb-5">
                  We measure to the inch, hide every cord, and come back when
                  something goes wrong. That’s the whole job.
                </p>
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-gold-light font-bold">
                  — Cory Mancini, Owner
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            eyebrow="What Customers Say"
            title={
              <>
                Bergen County <em>loves</em> the glow
              </>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-16 max-w-[1100px] mx-auto">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              <Reveal key={t.author} delay={i * 60}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
