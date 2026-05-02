import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery-grid';
import CtaBanner from '@/components/cta-banner';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos of recent residential and commercial holiday lighting installations across Bergen County, NJ.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative bg-hero-night pt-[120px] md:pt-[140px] pb-20 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-gold-light mb-5">
            Recent Work
          </p>
          <h1 className="font-display font-black leading-[1.1] text-white text-[clamp(2.4rem,6vw,4.8rem)] mb-6">
            Real Homes. <span className="text-gold-light italic">Real Glow.</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 leading-[1.8] max-w-[680px] mx-auto">
            A small selection from the last few seasons in New Milford, Teaneck,
            Hackensack, Paramus and beyond. Click any photo to view full-size.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-10 bg-cream">
        <div className="max-w-[1240px] mx-auto">
          <GalleryGrid />

          <div className="mt-20 text-center bg-white rounded-2xl p-10 md:p-14 shadow-card max-w-[760px] mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Want your home in next year’s gallery?
            </h2>
            <p className="text-ink-light leading-relaxed mb-7 max-w-prose mx-auto">
              We book most of the season by mid-September. The earlier you start
              the conversation, the more flexibility you have on install dates
              and design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="red">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outline-dark">
                See Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
