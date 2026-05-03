import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Sparkles, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import ServiceCard from '@/components/service-card';
import CtaBanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import TrustBar from '@/components/trust-bar';
import StatsStrip from '@/components/stats-strip';
import { SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Residential, commercial, and year-round lighting services in Bergen County, NJ — design, install, maintenance, takedown and storage.',
};

export default function ServicesPage() {
  const holiday = SERVICES.filter((s) => s.category === 'Holiday');
  const yearRound = SERVICES.filter((s) => s.category === 'Year-Round');
  const service = SERVICES.filter((s) => s.category === 'Service');

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden text-white pt-[72px]">
        <div className="absolute inset-0">
          <Image
            src="/gallery1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/70 to-forest/40" />
        </div>
        <div className="relative z-[3] w-full max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[820px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold-light/60" />
              <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-gold-light">
                Services
              </p>
            </div>
            <h1 className="font-display font-black leading-[0.98] text-[clamp(2.6rem,6.4vw,5.4rem)] mb-6">
              Six services. <em className="text-gold-light italic">One team.</em>
              <br />
              Zero hassle.
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-[1.8] max-w-[640px]">
              Pick what you need — most customers go end-to-end so they don’t
              lift a finger from October to January, and stay glowing the rest
              of the year too.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Holiday */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 text-crimson" />
            <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-crimson">
              Holiday — Flagship Service
            </p>
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-ink leading-[1.15] mb-4 max-w-[640px]">
            What we’re known for, <em className="text-crimson italic">done right.</em>
          </h2>
          <p className="text-ink-light text-[1.05rem] leading-[1.8] max-w-[640px] mb-14">
            Holiday installations are how most customers find us. We treat
            every roofline like a custom job — measured, fitted, and clean.
          </p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-7 items-stretch">
            {holiday.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard service={s} variant="detailed" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-warm-tan">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-4 h-4 text-forest" />
            <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-forest">
              Year-Round — The Other Nine Months
            </p>
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-ink leading-[1.15] mb-4 max-w-[640px]">
            Outdoor lighting that <em className="text-forest italic">never goes home.</em>
          </h2>
          <p className="text-ink-light text-[1.05rem] leading-[1.8] max-w-[640px] mb-14">
            Permanent landscape, architectural and uplighting that highlights
            your property after sunset — every season, not just December.
          </p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-7 items-stretch">
            {yearRound.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard service={s} variant="detailed" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Service add-ons */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-[#7a5a08] mb-4">
            Included With Every Install
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-ink leading-[1.15] mb-4 max-w-[640px]">
            One price. <em>Everything covered.</em>
          </h2>
          <p className="text-ink-light text-[1.05rem] leading-[1.8] max-w-[640px] mb-14">
            No à la carte add-ons, no surprise invoices in February. Every
            install includes the full service from start to finish.
          </p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {service.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard service={s} variant="detailed" />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 max-w-[820px] mx-auto text-center bg-white rounded-3xl p-10 md:p-14 shadow-card border-l-4 border-gold">
              <SectionHeading
                eyebrow="Bundle & Save"
                title={
                  <>
                    Most customers go <em>end-to-end</em>
                  </>
                }
                sub="Combine design, install, maintenance, takedown and storage into one annual package — one phone call, one invoice, the same crew every year. We’ll quote it free."
              />
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button href="/contact" variant="red">
                  Request a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/gallery" variant="outline-dark">
                  See Our Work
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
