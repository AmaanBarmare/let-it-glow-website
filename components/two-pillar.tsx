import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Sun } from 'lucide-react';
import Reveal from './reveal';

export default function TwoPillar() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-14 md:mb-20">
          <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-crimson mb-4">
            Two Sides of the Business
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-bold text-ink leading-[1.15] mb-5">
            Holiday is what we’re known for.
            <br />
            <em className="text-forest italic">Year-round is why we never leave.</em>
          </h2>
          <p className="text-base md:text-lg text-ink-light leading-[1.8]">
            Most of our calendar fills up between October and January — but we
            install permanent landscape and architectural lighting in every
            other month, too. Same crew, same standards, the rest of the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Holiday */}
          <Reveal>
            <Link
              href="/services#residential"
              className="group relative block rounded-3xl overflow-hidden bg-forest aspect-[4/5] md:aspect-[5/6]"
            >
              <Image
                src="/gallery1.jpg"
                alt="Holiday roofline lighting on a Bergen County home"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crimson-dark/95 via-crimson/20 to-transparent" />
              <div className="absolute top-7 left-7 right-7 flex items-center gap-2 text-white">
                <Sparkles className="w-4 h-4 text-gold-light" />
                <span className="text-[0.7rem] tracking-[0.2em] uppercase font-bold text-gold-light">
                  Flagship Service
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
                <h3 className="font-display text-3xl md:text-[2.4rem] font-bold leading-[1.1] mb-3">
                  Holiday Lighting
                </h3>
                <p className="text-white/85 text-[0.95rem] md:text-base leading-[1.7] mb-5 max-w-[40ch]">
                  Roofline, gutters, tree wraps, full-property displays. We
                  design, install, maintain, and store everything.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold tracking-[0.14em] uppercase border-b border-white/40 pb-0.5 group-hover:border-gold-light group-hover:text-gold-light transition-colors">
                  See holiday services
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Year-round */}
          <Reveal delay={80}>
            <Link
              href="/services#year-round"
              className="group relative block rounded-3xl overflow-hidden bg-forest aspect-[4/5] md:aspect-[5/6]"
            >
              <Image
                src="/gallery8.jpg"
                alt="Year-round architectural and landscape lighting"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/30 to-transparent" />
              <div className="absolute top-7 left-7 right-7 flex items-center gap-2 text-white">
                <Sun className="w-4 h-4 text-gold-light" />
                <span className="text-[0.7rem] tracking-[0.2em] uppercase font-bold text-gold-light">
                  Twelve Months a Year
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
                <h3 className="font-display text-3xl md:text-[2.4rem] font-bold leading-[1.1] mb-3">
                  Year-Round Outdoor Lighting
                </h3>
                <p className="text-white/85 text-[0.95rem] md:text-base leading-[1.7] mb-5 max-w-[40ch]">
                  Permanent landscape, architectural and uplighting designed to
                  highlight your property after sunset — every season.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold tracking-[0.14em] uppercase border-b border-white/40 pb-0.5 group-hover:border-gold-light group-hover:text-gold-light transition-colors">
                  See year-round services
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
