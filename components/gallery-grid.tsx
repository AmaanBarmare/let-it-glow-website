'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/content';

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight')
        setActive((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
      if (e.key === 'ArrowLeft')
        setActive((i) =>
          i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
        );
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-forest/10 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            aria-label={`Open ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {img.alt}
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive(
                (active - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
              );
            }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % GALLERY_IMAGES.length);
            }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-[1200px] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[active].src}
              alt={GALLERY_IMAGES[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm px-4">
            {GALLERY_IMAGES[active].alt} · {active + 1} of {GALLERY_IMAGES.length}
          </p>
        </div>
      )}
    </>
  );
}
