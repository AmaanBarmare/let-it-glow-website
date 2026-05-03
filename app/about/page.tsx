import type { Metadata } from 'next';
import Image from 'next/image';
import { Shield, MapPin, Users, Lightbulb } from 'lucide-react';
import CtaBanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Let It Glow Holiday Lighting is owner-operated by Cory Mancini, based in New Milford, NJ, and has served Bergen County and beyond for over a decade.',
};

const VALUES = [
  {
    icon: Shield,
    title: 'Fully Insured & Trained',
    desc: 'General liability and workers’ comp on every job. Our crew is trained for safe install at height. No shortcuts, no liability on your end.',
  },
  {
    icon: MapPin,
    title: 'Local to Bergen County',
    desc: 'We live in New Milford. Our customers are our neighbors. If something goes wrong on Christmas Eve, we’re ten minutes away.',
  },
  {
    icon: Users,
    title: 'Same Crew, Year After Year',
    desc: 'We keep the same install team across seasons. They know your house, your roofline, and what you liked last year.',
  },
  {
    icon: Lightbulb,
    title: 'Commercial-Grade, Always',
    desc: 'C9, C7, and mini-LED fixtures rated for outdoor seasons in the Northeast. No store-bought strings, no flimsy clips.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-hero-night pt-[120px] md:pt-[140px] pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-5">
            About Us
          </p>
          <h1 className="font-display font-black leading-[1.1] text-white text-[clamp(2.4rem,6vw,4.8rem)] mb-6">
            10+ years lighting up <br className="hidden md:inline" />
            <span className="text-gold-light italic">Bergen County.</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 leading-[1.8] max-w-[700px] mx-auto">
            Owner-operated by Cory Mancini, fully insured, and based in New
            Milford. We design, install, maintain and store outdoor lighting
            for homes and businesses across New Jersey, and we’ve been doing
            it for over a decade.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
          <Reveal>
            <div>
              <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-crimson mb-4">
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.2] font-bold text-ink mb-6">
                We started because we got tired of seeing
                <em className="text-crimson"> bad lighting jobs</em> in our own neighborhood.
              </h2>
              <div className="space-y-5 text-ink-light text-base md:text-[1.05rem] leading-[1.85]">
                <p>
                  Crooked strings of lights, mismatched colors, half-burnt bulbs
                  by mid-December. Homeowners spending hours on slippery roofs
                  with extension cords running everywhere. It didn’t need to be
                  that way.
                </p>
                <p>
                  Cory Mancini started Let It Glow Holiday Lighting right
                  here in New Milford with a simple promise: do it the way it
                  should be done. Measured, custom-fit, professionally
                  installed, maintained through the season, and taken down
                  without you lifting a finger.
                </p>
                <p>
                  Ten-plus years later, we run residential and commercial
                  installs across Bergen County and beyond, including a
                  recent flagship build for a Harley-Davidson dealership.
                  Same crew, same standard, every year.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="red">
                  Work With Us
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(26,74,46,0.25)]">
              <Image
                src="/letitglowholidaylighting.jpg"
                alt="Let It Glow Holiday Lighting team in front of a finished install"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-warm-tan">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            eyebrow="What We Stand For"
            title={
              <>
                Built on the <em>Boring Things</em> That Matter
              </>
            }
            sub="Insurance, training, the same crew every year. Not glamorous, but it's why our customers stay with us for years."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 60}>
                  <div className="bg-white rounded-2xl p-7 shadow-card h-full hover:-translate-y-1 hover:shadow-card-hover transition-all">
                    <div className="w-12 h-12 rounded-xl bg-icon-red flex items-center justify-center mb-5 shadow-[0_8px_20px_rgba(176,28,46,0.25)]">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink mb-2.5">
                      {v.title}
                    </h3>
                    <p className="text-[0.88rem] text-ink-light leading-[1.7]">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-24 md:py-28 px-6 md:px-10 bg-cream">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionHeading
            eyebrow="Service Area"
            title={
              <>
                Proud to Serve <em>Bergen County</em>
              </>
            }
            sub={SITE.serviceArea}
          />
          <Reveal>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {[
                'New Milford',
                'Teaneck',
                'Hackensack',
                'Paramus',
                'Ridgewood',
                'Englewood',
                'Fort Lee',
                'River Edge',
                'Bergenfield',
                'Tenafly',
                'Cresskill',
                'Closter',
                'Demarest',
                'Old Tappan',
              ].map((town) => (
                <span
                  key={town}
                  className="px-4 py-2 bg-white rounded-full text-sm text-ink border border-ink/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  {town}
                </span>
              ))}
              <span className="px-4 py-2 bg-crimson/5 border border-crimson/20 text-crimson text-sm rounded-full font-bold">
                + more · just ask
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
