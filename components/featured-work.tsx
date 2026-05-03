import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './reveal';
import SectionHeading from './section-heading';
import { FEATURED_WORK } from '@/lib/content';

export default function FeaturedWork() {
  const [hero, ...rest] = FEATURED_WORK;
  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Featured Work"
            align="left"
            title={
              <>
                Recent installs we’re <em>proud of</em>
              </>
            }
            sub="A small slice of homes and businesses we’ve lit up across Bergen County."
          />
          <Link
            href="/gallery"
            className="text-crimson font-bold text-[0.78rem] tracking-[0.14em] uppercase inline-flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0"
          >
            See full gallery
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 lg:gap-7">
          {/* Hero feature */}
          <Reveal>
            <article className="group relative rounded-3xl overflow-hidden h-full min-h-[420px] md:min-h-[560px] bg-forest">
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
                <span className="inline-block text-[0.65rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-gold text-charcoal mb-4">
                  Case Study · {hero.category}
                </span>
                <h3 className="font-display text-3xl md:text-[2.4rem] font-bold leading-[1.1] mb-3 max-w-[24ch]">
                  {hero.title}
                </h3>
                {hero.client && (
                  <p className="text-[0.78rem] tracking-[0.18em] uppercase text-gold-light/90 mb-3">
                    {hero.client}
                  </p>
                )}
                <p className="text-white/85 text-[0.95rem] md:text-base leading-[1.7] max-w-[60ch]">
                  {hero.blurb}
                </p>
              </div>
            </article>
          </Reveal>

          {/* Smaller features */}
          <div className="grid gap-5 lg:gap-7">
            {rest.map((item, i) => (
              <Reveal key={item.slug} delay={(i + 1) * 80}>
                <article className="group relative rounded-3xl overflow-hidden h-full min-h-[200px] md:min-h-[270px] bg-forest">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
                    <span className="inline-block text-[0.6rem] font-bold tracking-[0.18em] uppercase text-gold-light mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-[0.85rem] leading-[1.6] line-clamp-2">
                      {item.blurb}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
