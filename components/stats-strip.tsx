import { STATS } from '@/lib/content';
import Reveal from './reveal';

export default function StatsStrip() {
  return (
    <section
      aria-label="By the numbers"
      className="relative bg-forest text-white overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-14 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-12">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div className="text-center md:text-left">
              <div className="font-display font-black text-gold-light leading-[1] text-[clamp(2.6rem,5vw,4rem)] mb-2 tabular-nums">
                {s.value}
              </div>
              <p className="text-[0.95rem] font-bold text-white leading-tight mb-1">
                {s.label}
              </p>
              {s.detail && (
                <p className="text-[0.78rem] text-white/55 tracking-wide">
                  {s.detail}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
