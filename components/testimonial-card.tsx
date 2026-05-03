import type { Testimonial } from '@/lib/content';

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
      <span
        aria-hidden="true"
        className="absolute top-3 right-7 font-display font-black text-[6rem] leading-none text-crimson/[0.08]"
      >
        &ldquo;
      </span>
      <div
        className="text-gold tracking-[3px] mb-4"
        aria-label="5 out of 5 stars"
      >
        ★★★★★
      </div>
      <blockquote className="font-display italic text-[1rem] md:text-[1.05rem] leading-[1.8] text-ink mb-6">
        {t.quote}
      </blockquote>
      <figcaption>
        <p className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-crimson">
          — {t.author}
        </p>
        <p className="text-[0.75rem] text-ink-light tracking-wide mt-1">
          {t.location}
        </p>
      </figcaption>
    </figure>
  );
}
