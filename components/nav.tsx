'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/content';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-forest shadow-[0_2px_20px_rgba(0,0,0,0.18)]">
      <div className="max-w-[1240px] mx-auto h-[72px] px-5 md:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-gold-light font-display text-xl md:text-[1.5rem] font-bold hover:opacity-90 transition"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src="/let_it_glow_transparent.png"
            alt=""
            width={40}
            height={40}
            className="w-9 h-9 md:w-10 md:h-10 object-contain"
            priority
          />
          <span>{SITE.shortName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.filter((l) => l.href !== '/contact').map((l) => {
            const active =
              l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[0.85rem] tracking-wide transition-colors ${
                  active ? 'text-gold-light' : 'text-white/85 hover:text-gold-light'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-crimson hover:bg-crimson-dark text-white font-bold text-[0.85rem] tracking-wide px-6 py-2.5 rounded-full transition-all hover:shadow-red-glow"
          >
            <Sparkles className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
            Free Quote
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-forest transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <nav className="px-6 py-8 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((l) => {
            const active =
              l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-display text-2xl py-4 border-b border-white/10 ${
                  active ? 'text-gold-light' : 'text-white'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-8 bg-crimson hover:bg-crimson-dark text-white font-bold tracking-wide px-6 py-4 rounded-full text-center transition-all"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
