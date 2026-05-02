import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/content';

type Props = {
  service: Service;
  variant?: 'short' | 'detailed';
};

export default function ServiceCard({ service, variant = 'short' }: Props) {
  return (
    <article
      id={service.slug}
      className="group relative bg-white rounded-2xl p-9 md:p-10 shadow-card border-t-4 border-crimson transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover scroll-mt-28"
    >
      <div className="w-[60px] h-[60px] rounded-2xl bg-icon-red flex items-center justify-center text-2xl mb-6 shadow-[0_8px_20px_rgba(176,28,46,0.25)]">
        <span aria-hidden="true">{service.emoji}</span>
      </div>
      <h3 className="font-display text-[1.3rem] font-bold text-ink mb-3.5">
        {service.title}
      </h3>
      <p className="text-[0.92rem] text-ink-light leading-[1.8]">
        {variant === 'detailed' ? service.full : service.short}
      </p>

      {variant === 'detailed' && (
        <ul className="mt-5 space-y-2.5">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-[0.9rem] text-ink-light leading-[1.6]"
            >
              <span
                aria-hidden="true"
                className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-crimson shrink-0"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {variant === 'short' && (
        <Link
          href={`/services#${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-crimson font-bold text-[0.78rem] tracking-[0.12em] uppercase hover:gap-2.5 transition-all"
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </article>
  );
}
