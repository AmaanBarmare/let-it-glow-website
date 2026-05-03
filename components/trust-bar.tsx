import {
  ShieldCheck,
  Package,
  Zap,
  MapPin,
  Home,
  type LucideIcon,
} from 'lucide-react';
import { TRUST_BAR } from '@/lib/content';

const ICONS: Record<(typeof TRUST_BAR)[number]['iconKey'], LucideIcon> = {
  shield: ShieldCheck,
  package: Package,
  zap: Zap,
  pin: MapPin,
  home: Home,
};

export default function TrustBar() {
  return (
    <div className="relative z-[3] bg-crimson border-y border-crimson-dark/30">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
        {TRUST_BAR.map((item) => {
          const Icon = ICONS[item.iconKey];
          return (
            <div key={item.text} className="flex items-center gap-2.5 text-white">
              <Icon className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              <span className="text-[0.75rem] md:text-[0.8rem] font-bold tracking-[0.08em] uppercase">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
