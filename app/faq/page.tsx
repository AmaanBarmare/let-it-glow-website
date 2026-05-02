import type { Metadata } from 'next';
import FaqAccordion from '@/components/faq-accordion';
import CtaBanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { FAQS, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to the most common questions about our holiday and outdoor lighting service in Bergen County, NJ.',
};

export default function FaqPage() {
  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative bg-hero-night pt-[120px] md:pt-[140px] pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-5">
            FAQ
          </p>
          <h1 className="font-display font-black leading-[1.1] text-white text-[clamp(2.4rem,6vw,4.8rem)] mb-6">
            Questions, <span className="text-gold-light italic">Answered</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 leading-[1.8] max-w-[640px] mx-auto">
            The things we get asked the most. Don’t see yours below? Call or
            text — we’re happy to walk through it.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-10 bg-cream">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <FaqAccordion items={FAQS} />
          </Reveal>

          <Reveal>
            <div className="mt-16 text-center bg-white rounded-2xl p-10 md:p-14 shadow-card border-l-4 border-crimson">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
                Still have a question?
              </h2>
              <p className="text-ink-light leading-relaxed mb-7 max-w-prose mx-auto">
                We answer phones and emails year-round, not just in season. Reach out and we’ll get back same-day.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="red">
                  Send Us a Message
                </Button>
                <Button href={`tel:${SITE.phone.replace(/\D/g, '')}`} variant="outline-dark">
                  📞 {SITE.phone}
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
