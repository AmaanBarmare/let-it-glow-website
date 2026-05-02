import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import ServiceCard from '@/components/service-card';
import CtaBanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import TrustBar from '@/components/trust-bar';
import { SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Residential, commercial, and year-round lighting services in Bergen County, NJ — design, install, maintenance, takedown and storage.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-hero-night pt-[120px] md:pt-[140px] pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-5">
            Services
          </p>
          <h1 className="font-display font-black leading-[1.1] text-white text-[clamp(2.4rem,6vw,4.8rem)] mb-6">
            Everything It Takes to <span className="text-gold-light italic">Light Up Your Home</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 leading-[1.8] max-w-[680px] mx-auto">
            Six services, one team, zero hassle. Pick what you need — most
            customers go end-to-end so they don’t lift a finger from October to
            January.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
          {SERVICES.map((s) => (
            <Reveal key={s.slug}>
              <ServiceCard service={s} variant="detailed" />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="max-w-[820px] mx-auto mt-24 text-center bg-white rounded-2xl p-10 md:p-14 shadow-card border-l-4 border-gold">
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
              </Button>
              <Button href="/gallery" variant="outline-dark">
                See Our Work
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
