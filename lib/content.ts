export const SITE = {
  name: 'Let It Glow Holiday Lighting',
  shortName: 'Let It Glow',
  tagline: 'Make Your Home Glow This Season',
  address: {
    street: '260 Birchwood Rd',
    city: 'New Milford',
    state: 'NJ',
    zip: '07646',
  },
  phone: '(201) 555-0199',
  email: 'info@letitglowholidaylighting.com',
  social: {
    instagram: 'https://www.instagram.com/letitglowholidaylighting/',
    facebook: 'https://www.facebook.com/profile.php?id=61560141042599',
  },
  serviceArea:
    'New Milford, Teaneck, Hackensack, Paramus, Ridgewood, Englewood, Fort Lee, and all of Bergen County, NJ.',
} as const;

export type Service = {
  slug: string;
  emoji: string;
  title: string;
  short: string;
  full: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'residential',
    emoji: '🏠',
    title: 'Residential Holiday Lighting',
    short:
      'Custom-fit roofline, gutter and landscape lighting that makes your home the showstopper of the block.',
    full: 'We measure your roofline to the inch, source professional-grade C9 and mini LED bulbs, and install everything to look custom — never draped or generic. Outlets, timers, and clips are all hidden cleanly. When the season ends we take it all down and store it for you.',
    bullets: [
      'C9, C7, mini-LED, and warm-white options',
      'Roofline, gutter, eave, tree wrap and landscape',
      'Lights, clips, timers and outlets all included',
      'Storage between seasons — we keep them, you don’t',
    ],
  },
  {
    slug: 'commercial',
    emoji: '🏢',
    title: 'Commercial Lighting',
    short:
      'Storefront, office, and large-property displays designed to draw foot traffic and stand out from the strip.',
    full: 'We work directly with property managers, retail owners, and HOAs to design installations that meet code, look intentional, and turn on every night without anyone on your team thinking about it. Includes scheduled checks throughout the season.',
    bullets: [
      'Storefronts, office parks, restaurants and HOAs',
      'COI (certificate of insurance) provided on request',
      'Weekly drive-by checks during peak season',
      'Coordinated brand colors and corporate themes',
    ],
  },
  {
    slug: 'year-round',
    emoji: '🌿',
    title: 'Year-Round Outdoor Lighting',
    short:
      'Permanent landscape, architectural and uplighting that keeps your property glowing in every season.',
    full: 'Holidays are a few weeks. Curb appeal is twelve months. We design and install permanent low-voltage and architectural systems that highlight your home’s best features after sunset, all year — and integrate cleanly with your seasonal display when December rolls around.',
    bullets: [
      'Path, garden, uplight and downlight systems',
      'Architectural facade and column wash lighting',
      'Permanent eave systems with app-based color control',
      'Smart timers and dusk-to-dawn automation',
    ],
  },
  {
    slug: 'maintenance',
    emoji: '🔧',
    title: 'In-Season Maintenance',
    short:
      'Bulb out, clip loose, squirrel made a meal of a wire? We’re back within 72 hours.',
    full: 'Every install we do is covered by free in-season maintenance. If anything goes wrong between Thanksgiving and New Year’s, we respond within 72 hours and fix it at no extra cost. No tickets, no upsells. You text, we show up.',
    bullets: [
      '72-hour response across the season',
      'No charge for bulbs, wires or clips we installed',
      'Direct text line to the install crew',
      'Storm and wind-damage priority service',
    ],
  },
  {
    slug: 'takedown',
    emoji: '📦',
    title: 'Takedown & Storage',
    short:
      'After the season we remove everything and label-store it under your name. You do nothing.',
    full: 'Most homeowners dread January more than they enjoy December. We come back on a scheduled day, remove every clip, every bulb, every cord, and pack it into labeled bins kept in our climate-controlled storage. Next year it comes back to your house ready to install.',
    bullets: [
      'Scheduled takedown after Three Kings’ Day',
      'Labeled storage bins kept by us, year-over-year',
      'No attic or garage clutter on your end',
      'Same lights re-deployed next year, fitted again',
    ],
  },
  {
    slug: 'design',
    emoji: '🎨',
    title: 'Custom Design',
    short:
      'A free in-person consult and a hand-drawn lighting plan made for your specific home.',
    full: 'Not sure what you want yet? We come to your property, walk the site with you, take measurements, and put together a lighting plan and quote — usually within three business days. Simple elegance, full winter wonderland, or something in between.',
    bullets: [
      'In-person walkthrough and measure',
      'Hand-drawn elevation with light placement',
      'Color, density and bulb-type options',
      'Itemized quote, no hidden fees',
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  years?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The process was smooth, simple, quick — and the results were spectacular. Our house was the brightest on the block all season. The crew was polite, professional, and on time.',
    author: 'The Petrillo Family',
    location: 'Bergen County, NJ',
  },
  {
    quote:
      'Four years running and they still impress us every time. Custom-measured, top-quality lighting, and they handle takedown and storage. Worth every penny.',
    author: 'Maria K.',
    location: 'New Milford, NJ',
    years: '4-Year Customer',
  },
  {
    quote:
      'We use Let It Glow for both our restaurant and our home. Couldn’t be happier. Clean install, never an issue, and any time something flickered they were back in 24 hours.',
    author: 'Anthony D.',
    location: 'Local Business Owner',
  },
  {
    quote:
      'No more wobbly ladders, no more storage in the attic, no more figuring out which strand died. Just beautiful lights every year. A genuinely hassle-free luxury.',
    author: 'The Coleman Family',
    location: 'Teaneck, NJ',
  },
];

export type FaqItem = {
  q: string;
  a: string;
};

export const FAQS: FaqItem[] = [
  {
    q: 'Do I need to buy my own lights?',
    a: 'No. We supply commercial-grade C9 and mini-LED lights as part of our service. You don’t buy them, store them, or replace them — they’re ours, and we maintain them year over year.',
  },
  {
    q: 'When should I book?',
    a: 'Earlier is better. Most of our prime weekends in November and December are taken by mid-September. We start booking the next season as soon as the current one ends.',
  },
  {
    q: 'What happens if a bulb burns out?',
    a: 'Text us. We respond within 72 hours during the season — usually faster — and replace it at no charge. Storm damage and wind issues are prioritized same-day or next-day.',
  },
  {
    q: 'Do you serve commercial properties?',
    a: 'Yes — restaurants, retail, office parks, multi-family residential and HOAs across Bergen County. We can provide a Certificate of Insurance and work with property managers on payment terms.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the size of your home, the look you want, and the lights you choose. A typical residential install in Bergen County starts around $1,200 for a clean roofline. We provide an itemized written quote after a free walkthrough.',
  },
  {
    q: 'Are you insured?',
    a: 'Fully insured — general liability and workers’ comp. We can email a current COI to your property manager or HOA on request.',
  },
  {
    q: 'What if I want to add or change something mid-season?',
    a: 'Call or text. Most additions can be done within a week. Changes are billed at our standard add-on rate and added to your existing install.',
  },
  {
    q: 'Do you handle the takedown too?',
    a: 'Yes — included. We come back on a scheduled day after the holidays, remove everything, and store the lights under your name in our facility. Same set comes back next year.',
  },
];

export type ProcessStep = {
  num: string;
  emoji: string;
  title: string;
  desc: string;
};

export const PROCESS: ProcessStep[] = [
  {
    num: '1',
    emoji: '📞',
    title: 'Free Consultation',
    desc: 'Call, text, or fill out our form. We visit your property, walk the site with you, and listen to what you want.',
  },
  {
    num: '2',
    emoji: '📐',
    title: 'Custom Design',
    desc: 'We take precise measurements and draft a lighting plan with itemized pricing. No surprises, no upsells.',
  },
  {
    num: '3',
    emoji: '🔌',
    title: 'Expert Installation',
    desc: 'Our insured crew handles everything safely and efficiently. Outlets and timers hidden, install clean.',
  },
  {
    num: '4',
    emoji: '😊',
    title: 'Enjoy All Season',
    desc: 'We maintain through the season, then take down and store. You do nothing but enjoy the glow.',
  },
];

export type WhyItem = {
  title: string;
  desc: string;
};

export const WHY_ITEMS: WhyItem[] = [
  {
    title: 'We Own the Lights — You Own the Peace of Mind',
    desc: 'No upfront investment in lights, no storage headaches. We provide commercial-grade fixtures and store them between seasons.',
  },
  {
    title: 'Trained, Insured, Local Crew',
    desc: 'Fully insured for liability and workers’ comp. Trained in safe install at height. Based in New Milford — your neighbors.',
  },
  {
    title: 'Custom-Fit, Never Generic',
    desc: 'We measure to the inch. Lights are cut and clipped to your exact roofline, eaves and landscape — no draping or guesswork.',
  },
  {
    title: 'Year-Round, On-Call Support',
    desc: 'Issues don’t take holidays. We’re reachable all season for repairs, additions, and questions. Direct line to the crew.',
  },
];

export type SeasonItem = {
  emoji: string;
  name: string;
  desc: string;
};

export const SEASONS: SeasonItem[] = [
  {
    emoji: '🎄',
    name: 'Holiday Season',
    desc: 'Christmas, Hanukkah and winter lighting — installed, maintained, and taken down by our crew.',
  },
  {
    emoji: '🌸',
    name: 'Spring & Summer',
    desc: 'Landscape lighting, uplighting and architectural accents for curb appeal year-round.',
  },
  {
    emoji: '🍂',
    name: 'Fall Season',
    desc: 'Pre-season planning, design consults, and fall landscape lighting upgrades.',
  },
  {
    emoji: '🏢',
    name: 'Commercial Year-Round',
    desc: 'Permanent outdoor and architectural lighting for businesses across Bergen County.',
  },
];

export const TRUST_BAR = [
  { icon: '🏆', text: 'Fully Insured Team' },
  { icon: '📦', text: 'We Own the Lights' },
  { icon: '⚡', text: '72-Hour Maintenance' },
  { icon: '📍', text: 'New Milford, NJ Local' },
  { icon: '🏠', text: 'Residential & Commercial' },
] as const;

export const GALLERY_IMAGES = [
  { src: '/gallery1.jpg', alt: 'Festive home with full roofline and landscape lighting' },
  { src: '/gallery2.jpg', alt: 'Warm-white classic Christmas roofline at dusk' },
  { src: '/gallery3.jpg', alt: 'Multicolor C9 install on a colonial home' },
  { src: '/gallery4.jpg', alt: 'Tree wrap and pathway lighting along front walk' },
  { src: '/gallery5.jpg', alt: 'Commercial storefront holiday display' },
  { src: '/gallery6.jpg', alt: 'Roofline and chimney lighting with snow' },
  { src: '/gallery7.jpg', alt: 'Bergen County estate with full holiday lighting package' },
  { src: '/gallery8.jpg', alt: 'Wreaths, garland and warm-white architectural accents' },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;
