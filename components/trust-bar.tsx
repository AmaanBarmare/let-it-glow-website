import { TRUST_BAR } from '@/lib/content';

export default function TrustBar() {
  return (
    <div className="relative z-[3] bg-crimson">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {TRUST_BAR.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-3 text-white"
          >
            <span
              aria-hidden="true"
              className="text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
            >
              {item.icon}
            </span>
            <span className="text-[0.78rem] md:text-[0.85rem] font-bold tracking-[0.05em] uppercase">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
