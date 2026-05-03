import Link from 'next/link';
import {
  ArrowUpRight,
  Home,
  Building2,
  Sun,
  Wrench,
  Package,
  PenTool,
  type LucideIcon,
} from 'lucide-react';
import type { Service, ServiceIconKey } from '@/lib/content';

const ICONS: Record<ServiceIconKey, LucideIcon> = {
  residential: Home,
  commercial: Building2,
  'year-round': Sun,
  maintenance: Wrench,
  takedown: Package,
  design: PenTool,
};

const CATEGORY_TONE: Record<Service['category'], string> = {
  Holiday: 'bg-crimson/10 text-crimson',
  'Year-Round': 'bg-forest/10 text-forest',
  Service: 'bg-gold/15 text-[#7a5a08]',
};

type Props = {
  service: Service;
  variant?: 'short' | 'detailed';
};

export default function ServiceCard({ service, variant = 'short' }: Props) {
  const Icon = ICONS[service.iconKey];

  return (
    <article
      id={service.slug}
      className="group relative h-full flex flex-col bg-white rounded-2xl p-7 md:p-9 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover scroll-mt-28 border border-ink/[0.06] overflow-hidden"
    >
      {/* Top accent stripe — subtle, not garish */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-crimson via-gold to-forest opacity-80"
      />

      {/* Icon + category row */}
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-ink/[0.04] flex items-center justify-center text-ink ring-1 ring-ink/5 transition-colors group-hover:bg-crimson group-hover:text-white group-hover:ring-crimson">
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <span
          className={`text-[0.65rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ${CATEGORY_TONE[service.category]}`}
        >
          {service.category}
        </span>
      </div>

      <h3 className="font-display text-[1.35rem] md:text-[1.4rem] font-bold text-ink leading-tight mb-3">
        {service.title}
      </h3>
      <p className="text-[0.92rem] text-ink-light leading-[1.75] flex-1">
        {variant === 'detailed' ? service.full : service.short}
      </p>

      {variant === 'detailed' && (
        <ul className="mt-5 space-y-2.5">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-[0.88rem] text-ink-light leading-[1.6]"
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
        <div className="mt-7 pt-5 border-t border-ink/[0.06] flex items-center justify-between">
          <Link
            href={`/services#${service.slug}`}
            className="inline-flex items-center gap-1.5 text-crimson font-bold text-[0.74rem] tracking-[0.14em] uppercase hover:gap-2.5 transition-all"
          >
            Learn more
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </article>
  );
}
