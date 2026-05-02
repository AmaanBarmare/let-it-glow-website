import Reveal from './reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: 'center' | 'left';
  onDark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
  onDark = false,
}: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const eyebrowColor = onDark ? 'text-gold-light' : 'text-crimson';
  const titleColor = onDark ? 'text-white' : 'text-ink';
  const subColor = onDark ? 'text-white/70' : 'text-ink-light';

  return (
    <div className={`max-w-[640px] ${alignCls}`}>
      <Reveal>
        <p
          className={`text-[0.75rem] font-bold tracking-[0.3em] uppercase mb-4 ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`section-title ${onDark ? 'on-dark' : ''} font-display font-bold leading-[1.15] text-[clamp(2.2rem,4vw,3.5rem)] mb-5 ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={160}>
          <p className={`text-base md:text-lg leading-[1.7] ${subColor}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
