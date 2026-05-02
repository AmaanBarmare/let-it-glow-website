import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'red' | 'gold' | 'outline-white' | 'outline-dark';
type Size = 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  red: 'bg-crimson hover:bg-crimson-dark text-white shadow-red-glow hover:shadow-red-glow-hover',
  gold: 'bg-gold hover:bg-gold-light text-charcoal shadow-gold-glow',
  'outline-white':
    'border-2 border-white/40 hover:border-gold-light hover:text-gold-light text-white',
  'outline-dark':
    'border-2 border-ink/30 hover:border-crimson hover:text-crimson text-ink',
};

const SIZES: Record<Size, string> = {
  md: 'px-9 py-4 text-[0.85rem]',
  lg: 'px-12 py-5 text-[0.95rem]',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type LinkProps = BaseProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    'href' | 'className' | 'children'
  >;

type ButtonProps = BaseProps &
  Omit<ComponentProps<'button'>, 'className' | 'children'> & {
    href?: undefined;
  };

export function Button(props: LinkProps | ButtonProps) {
  const {
    variant = 'red',
    size = 'md',
    children,
    className = '',
    ...rest
  } = props as BaseProps & Record<string, unknown>;
  const cls = `inline-flex items-center justify-center gap-2 font-bold tracking-[0.05em] rounded-full transition-all duration-300 hover:-translate-y-0.5 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  if ('href' in props && typeof props.href === 'string') {
    return (
      <Link href={props.href} className={cls} {...(rest as object)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentProps<'button'>)}>
      {children}
    </button>
  );
}
