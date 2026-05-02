import Link from 'next/link';
import { Phone, MapPin, Calendar, Globe } from 'lucide-react';
import Reveal from './reveal';
import { SITE } from '@/lib/content';

export default function CtaBanner() {
  return (
    <section
      id="cta"
      className="relative cta-strip bg-cta-warm py-28 md:py-32 px-6 md:px-10 text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-[900px] mx-auto">
        <Reveal>
          <h2 className="section-title on-dark font-display font-black leading-[1.1] text-white text-[clamp(2.4rem,6vw,5rem)] mb-5">
            Let’s Make Your
            <br />
            <em>Home Shine</em>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[1.05rem] text-white/80 max-w-[560px] mx-auto leading-[1.7] mb-10">
            {SITE.serviceArea} Book your free consultation today and we’ll
            handle the rest of the season.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-charcoal font-bold tracking-wide px-12 py-5 rounded-full transition-all hover:-translate-y-1 shadow-gold-glow"
            >
              🎄 Get a Free Quote
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\D/g, '')}`}
              className="border-2 border-white/40 hover:border-gold-light hover:text-gold-light text-white px-10 py-[18px] rounded-full font-medium transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14 pt-12 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[800px] mx-auto">
            <div className="text-white">
              <MapPin
                className="w-6 h-6 mx-auto mb-2 text-gold-light"
                aria-hidden="true"
              />
              <p className="text-[0.85rem] leading-[1.5] text-white/85">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
            </div>
            <div className="text-white">
              <Globe
                className="w-6 h-6 mx-auto mb-2 text-gold-light"
                aria-hidden="true"
              />
              <p className="text-[0.85rem] leading-[1.5] text-white/85">
                Residential & Commercial
                <br />
                All of Bergen County
              </p>
            </div>
            <div className="text-white">
              <Calendar
                className="w-6 h-6 mx-auto mb-2 text-gold-light"
                aria-hidden="true"
              />
              <p className="text-[0.85rem] leading-[1.5] text-white/85">
                Year-Round Service
                <br />
                Holiday & Off-Season Lighting
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
