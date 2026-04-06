import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  initialTop: number; // Initial vertical position in viewport percentage (0-100)
  animationDuration: number;
  size: number;
  opacity: number;
  drift: number; // Horizontal drift amount
}

const Snow = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate 80 snowflakes distributed across the entire viewport
    // Start them at positions from -100vh to 100vh so many are visible immediately
    const flakes: Snowflake[] = Array.from({ length: 80 }, (_, i) => {
      const initialTop = -100 + Math.random() * 200; // Random vertical start (-100vh to 100vh)
      return {
        id: i,
        left: Math.random() * 100, // Random horizontal position
        initialTop: initialTop,
        animationDuration: 3 + Math.random() * 8, // Random fall speed (3-11 seconds)
        size: 2 + Math.random() * 4, // Random size (2-6px)
        opacity: 0.3 + Math.random() * 0.7, // Random opacity (0.3-1.0)
        drift: -30 + Math.random() * 60, // Random horizontal drift (-30px to 30px)
      };
    });

    setSnowflakes(flakes);
  }, []);

  return (
    <>
      <style>
        {snowflakes.map(
          (flake) => {
            // All snowflakes fall exactly 200vh for seamless looping
            // When animation loops, it will jump back to initialTop, creating continuous effect
            const endPosition = flake.initialTop + 200;
            return `
          @keyframes fall-${flake.id} {
            0% {
              transform: translateY(${flake.initialTop}vh) translateX(0) rotate(0deg);
              opacity: ${flake.opacity};
            }
            100% {
              transform: translateY(${endPosition}vh) translateX(${flake.drift}px) rotate(360deg);
              opacity: ${flake.opacity};
            }
          }
        `;
          }
        ).join('')}
      </style>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-[25]"
        aria-hidden="true"
      >
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute top-0 rounded-full bg-white"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animation: `fall-${flake.id} ${flake.animationDuration}s linear infinite`,
              boxShadow: `0 0 ${flake.size * 2}px rgba(255, 255, 255, ${flake.opacity * 0.8})`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Snow;

