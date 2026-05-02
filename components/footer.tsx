import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/let_it_glow_transparent.png"
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="font-display text-xl font-bold text-gold-light">
              {SITE.shortName}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/55 max-w-sm">
            Professional holiday and outdoor lighting for homes and businesses
            across Bergen County, New Jersey. Insured, local, and proud to make
            your home the brightest on the block.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:scale-105 transition"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Facebook"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-105 transition"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/55 mb-4">
            Sitemap
          </p>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-gold-light transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/55 mb-4">
            Services
          </p>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/55 mb-4">
            Contact
          </p>
          <address className="not-italic space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-gold-light shrink-0" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-light shrink-0" />
              <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="hover:text-gold-light transition-colors">
                {SITE.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold-light shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-light transition-colors break-all">
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="bg-[#1a1a1a] py-5 px-6 text-center text-xs text-white/35 tracking-wide">
        © {new Date().getFullYear()} {SITE.name} · {SITE.address.city}, {SITE.address.state} · All Rights Reserved
      </div>
    </footer>
  );
}
