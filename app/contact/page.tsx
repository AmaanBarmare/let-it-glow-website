import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import Reveal from '@/components/reveal';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a free quote for holiday or year-round outdoor lighting at your home or business in Bergen County, NJ.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-hero-night pt-[120px] md:pt-[140px] pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-5">
            Free Quote
          </p>
          <h1 className="font-display font-black leading-[1.1] text-white text-[clamp(2.4rem,6vw,4.8rem)] mb-6">
            Let’s Make Your <span className="text-gold-light italic">Home Glow</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 leading-[1.8] max-w-[640px] mx-auto">
            Fill out the form and we’ll get back within one business day to set
            up a free walkthrough. Prefer to talk? Call or text us directly.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="bg-forest text-white rounded-2xl p-8 md:p-10 shadow-card">
                <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-4">
                  Direct Line
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-7 leading-tight">
                  Talk to a real person, today.
                </h2>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <Phone className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/55 mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                        className="text-lg font-display hover:text-gold-light transition"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/55 mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-base hover:text-gold-light transition break-all"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MapPin className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/55 mb-0.5">
                        Office
                      </p>
                      <p className="text-base leading-[1.5]">
                        {SITE.address.street}
                        <br />
                        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/55 mb-0.5">
                        Response Time
                      </p>
                      <p className="text-base leading-[1.5]">
                        Within one business day
                        <br />
                        72-hour service in season
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-7 md:p-8 shadow-card border-l-4 border-gold">
                <p className="font-display text-xl font-bold text-ink mb-2">
                  Booking out fast for next season
                </p>
                <p className="text-sm text-ink-light leading-relaxed">
                  Most prime weekends in November and December are booked by
                  mid-September. The earlier you reach out, the more flexibility
                  you have on install dates.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
