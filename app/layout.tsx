import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Snow from '@/components/snow';
import { SITE } from '@/lib/content';

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | New Milford, NJ | Bergen County`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Professional holiday lighting installation for homes and businesses in New Milford, NJ. We design, install, maintain, take down and store your lights. Serving all of Bergen County. Free quotes.',
  metadataBase: new URL('https://letitglowholidaylighting.com'),
  openGraph: {
    title: `${SITE.name} | New Milford, NJ`,
    description:
      'Professional holiday lighting + year-round outdoor lighting for homes and businesses across Bergen County, NJ.',
    type: 'website',
    locale: 'en_US',
    images: ['/letitglowholidaylighting.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/let_it_glow_transparent.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans bg-cream text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Snow />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
