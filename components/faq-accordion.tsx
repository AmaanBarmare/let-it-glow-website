'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FaqItem } from '@/lib/content';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 bg-white rounded-2xl shadow-card overflow-hidden">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 p-6 md:p-8 text-left transition hover:bg-cream/40"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <h3 className="font-display text-lg md:text-[1.2rem] font-bold text-ink leading-snug">
                {item.q}
              </h3>
              <span
                className={`shrink-0 mt-1 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isOpen
                    ? 'bg-crimson text-white'
                    : 'bg-cream text-crimson'
                }`}
                aria-hidden="true"
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
            >
              <p className="px-6 md:px-8 pb-7 -mt-1 text-[0.95rem] text-ink-light leading-[1.8] max-w-[60ch]">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
