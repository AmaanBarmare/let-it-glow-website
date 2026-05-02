import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#b01c2e',
          dark: '#8a1422',
        },
        forest: {
          DEFAULT: '#1a4a2e',
          light: '#2d6b45',
          deep: '#0e2e1c',
        },
        cream: '#fdf5e8',
        'warm-tan': '#f0e0c0',
        gold: {
          DEFAULT: '#d4a017',
          light: '#f0c040',
        },
        charcoal: '#2a2a2a',
        ink: '#3d2b1a',
        'ink-light': '#7a6050',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.12)',
        'red-glow': '0 8px 30px rgba(176,28,46,0.4)',
        'red-glow-hover': '0 12px 40px rgba(176,28,46,0.5)',
        'gold-glow': '0 8px 30px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'hero-night':
          'linear-gradient(160deg, #1a4a2e 0%, #0e2e1c 60%, #1a1a2e 100%)',
        'cta-warm':
          'linear-gradient(135deg, #8a1422 0%, #b01c2e 50%, #d63050 100%)',
        'icon-red': 'linear-gradient(135deg, #b01c2e, #8a1422)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-in': 'slideIn 0.8s ease forwards',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
