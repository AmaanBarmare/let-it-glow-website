export default function HouseIllustration() {
  return (
    <svg
      width="420"
      height="360"
      viewBox="0 0 420 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Festive house with holiday lights"
      className="w-full max-w-[480px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="windowGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#f0c040" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f0c040" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky glow */}
      <ellipse cx="210" cy="340" rx="200" ry="60" fill="rgba(201,152,58,0.12)" />
      {/* Ground snow */}
      <ellipse cx="210" cy="332" rx="190" ry="28" fill="rgba(255,255,255,0.1)" />

      {/* House body */}
      <rect
        x="80"
        y="170"
        width="260"
        height="160"
        rx="4"
        fill="#1a3a2a"
        stroke="#2d5c3a"
        strokeWidth="2"
      />
      {/* Roof */}
      <polygon
        points="50,170 210,50 370,170"
        fill="#8a1422"
        stroke="#b01c2e"
        strokeWidth="2"
      />
      {/* Chimney */}
      <rect
        x="280"
        y="60"
        width="36"
        height="80"
        rx="2"
        fill="#6a0f1a"
        stroke="#8a1422"
        strokeWidth="1.5"
      />
      <ellipse cx="298" cy="60" rx="18" ry="6" fill="#4a0a10" />
      <circle cx="298" cy="44" r="8" fill="rgba(255,255,255,0.1)" />
      <circle cx="304" cy="30" r="10" fill="rgba(255,255,255,0.07)" />
      <circle cx="296" cy="18" r="12" fill="rgba(255,255,255,0.05)" />

      {/* Door */}
      <rect
        x="172"
        y="235"
        width="56"
        height="95"
        rx="4"
        fill="#0e2218"
        stroke="#1a4a2e"
        strokeWidth="1.5"
      />
      <rect x="182" y="245" width="15" height="40" rx="2" fill="#0a1810" />
      <rect x="203" y="245" width="15" height="40" rx="2" fill="#0a1810" />
      <circle cx="195" cy="286" r="3" fill="#d4a017" />

      {/* Windows */}
      <g>
        <rect x="96" y="195" width="54" height="44" rx="3" fill="#0e2218" stroke="#1a4a2e" strokeWidth="1.5" />
        <rect x="96" y="195" width="54" height="44" rx="3" fill="url(#windowGlow)" />
        <rect x="270" y="195" width="54" height="44" rx="3" fill="#0e2218" stroke="#1a4a2e" strokeWidth="1.5" />
        <rect x="270" y="195" width="54" height="44" rx="3" fill="url(#windowGlow)" />
      </g>

      {/* Roofline lights */}
      {[
        { cx: 50, cy: 170, fill: '#f0c040' },
        { cx: 82, cy: 146, fill: '#ff4444' },
        { cx: 114, cy: 122, fill: '#f0c040' },
        { cx: 146, cy: 98, fill: '#44ff44' },
        { cx: 178, cy: 74, fill: '#ff4444' },
        { cx: 210, cy: 50, fill: '#f0c040' },
        { cx: 242, cy: 74, fill: '#44aaff' },
        { cx: 274, cy: 98, fill: '#ff4444' },
        { cx: 306, cy: 122, fill: '#f0c040' },
        { cx: 338, cy: 146, fill: '#44ff44' },
        { cx: 370, cy: 170, fill: '#ff4444' },
      ].map((b, i) => (
        <circle
          key={i}
          cx={b.cx}
          cy={b.cy}
          r="5"
          fill={b.fill}
          filter="url(#glow)"
        />
      ))}

      {/* Gutter lights */}
      {Array.from({ length: 13 }).map((_, i) => {
        const colors = ['#ff4444', '#f0c040', '#44ff44', '#44aaff'];
        return (
          <circle
            key={`g-${i}`}
            cx={82 + i * 22}
            cy="172"
            r="3.5"
            fill={colors[i % colors.length]}
          />
        );
      })}

      {/* Wreath on door */}
      <circle cx="200" cy="260" r="14" fill="none" stroke="#2d6b45" strokeWidth="5" />
      <circle cx="200" cy="248" r="4" fill="#b01c2e" />

      {/* Snow on roof */}
      <path
        d="M50,170 Q130,155 210,152 Q290,155 370,170"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
