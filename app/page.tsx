import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HouseIllustration from '@/components/house-illustration';
import TrustBar from '@/components/trust-bar';
import SectionHeading from '@/components/section-heading';
import ServiceCard from '@/components/service-card';
import TestimonialCard from '@/components/testimonial-card';
import CtaBanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import {
  SERVICES,
  TESTIMONIALS,
  PROCESS,
  WHY_ITEMS,
  SEASONS,
  SITE,
} from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-night pt-[112px] md:pt-[120px] pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center min-h-[calc(100vh-180px)]">
          <div className="relative z-[3]">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-2 text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.1em] uppercase text-gold-light mb-7 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" /> {SITE.address.city}, {SITE.address.state} · Bergen County
            </div>
            <h1 className="font-display font-black leading-[1.05] text-white text-[clamp(2.8rem,7vw,6.4rem)] mb-6">
              Make Your
              <br />
              <span className="block text-gold-light italic">Home Glow</span>
              This Season
            </h1>
            <p className="text-base md:text-lg text-white/75 leading-[1.8] max-w-[520px] mb-10">
              Professional holiday lighting — and year-round outdoor lighting —
              for homes and businesses across Bergen County. We design, install,
              maintain, take down and store everything. You just enjoy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="red" size="md">
                🎁 Get a Free Quote
              </Button>
              <Button href="/services" variant="outline-white" size="md">
                See Our Services
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gold">★★★★★</span>
                <span>5.0 across reviews</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-white/15" />
              <span className="hidden sm:inline">Insured · Local · Booking now</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-float">
            <HouseIllustration />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES PREVIEW */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            eyebrow="What We Offer"
            title={
              <>
                Every Light, <em>Every Season</em>
              </>
            }
            sub="From holiday magic to year-round curb appeal — we handle everything so you don’t have to."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-16">
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <ServiceCard service={s} variant="short" />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-14">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-crimson font-bold text-[0.85rem] tracking-[0.12em] uppercase hover:gap-3 transition-all"
              >
                See full service detail <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative bg-forest py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 why-stripe" aria-hidden="true" />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              align="left"
              onDark
              title={
                <>
                  You Deserve a <em>Hassle-Free</em> Holiday
                </>
              }
            />
            <ul className="mt-10 divide-y divide-white/10">
              {WHY_ITEMS.map((w, i) => (
                <Reveal key={w.title} delay={i * 60}>
                  <li className="flex gap-5 py-5">
                    <div className="w-9 h-9 rounded-full bg-gold text-forest font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="font-display text-[1.05rem] md:text-[1.1rem] font-bold text-white mb-1.5">
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
          <div className="flex flex-col gap-5">
            {SEASONS.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="bg-white/[0.07] border border-white/[0.12] rounded-2xl p-6 md:p-7 flex items-center gap-6 transition-all hover:bg-white/[0.11] hover:border-gold/40">
                  <span aria-hidden="true" className="text-4xl md:text-[2.5rem]">
                    {s.emoji}
                  </span>
                  <div>
                    <p className="font-display text-[1.1rem] font-bold text-white mb-1">
                      {s.name}
                    </p>
                    <p className="text-[0.85rem] text-white/55 leading-[1.6]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-warm-tan">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            title={
              <>
                As Easy as <em>1, 2, 3, 4</em>
              </>
            }
            sub="From your first call to lights-out after the season, we take care of everything."
          />
          <div className="relative mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
            <div
              className="hidden md:block absolute top-[50px] left-[12%] right-[12%] h-0.5 process-line"
              aria-hidden="true"
            />
            {PROCESS.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div className="text-center px-4 group">
                  <div className="relative z-10 mx-auto w-[100px] h-[100px] bg-white border-[3px] border-crimson rounded-full flex flex-col items-center justify-center mb-7 shadow-[0_8px_30px_rgba(176,28,46,0.15)] transition-all duration-300 group-hover:bg-crimson group-hover:scale-[1.08]">
                    <span className="font-display text-2xl font-black text-crimson group-hover:text-white transition-colors leading-none">
                      {p.num}
                    </span>
                    <span aria-hidden="true" className="text-base mt-0.5">
                      {p.emoji}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.1rem] md:text-[1.2rem] font-bold text-ink mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[0.88rem] text-ink-light leading-[1.7] max-w-[240px] mx-auto">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            eyebrow="Happy Customers"
            title={
              <>
                Bergen County <em>Loves</em> the Glow
              </>
            }
          />
          <div className="grid sm:grid-cols-2 gap-6 mt-16">
            {TESTIMONIALS.map((t, i) => (
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
