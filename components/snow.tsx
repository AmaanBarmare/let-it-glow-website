'use client';

import { useEffect, useState } from 'react';

interface Flake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  glyph: string;
  opacity: number;
}

const GLYPHS = ['❄', '❅', '❆', '✻', '✦'];

export default function Snow() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduced) return;

    const arr: Flake[] = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 0.5 + Math.random() * 1.1,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 12,
      glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      opacity: 0.4 + Math.random() * 0.5,
    }));
    setFlakes(arr);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-[2]"
    >
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}rem`,
            opacity: f.opacity,
            animation: `snowfall ${f.duration}s linear ${f.delay}s infinite`,
          }}
        >
          {f.glyph}
        </span>
      ))}
    </div>
  );
}
