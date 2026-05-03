export const SITE = {
  name: 'Let It Glow Holiday Lighting',
  shortName: 'Let It Glow',
  positioning:
    'Holiday lighting is what we’re known for. Year-round outdoor lighting is why we never leave.',
  address: {
    street: '260 Birchwood Rd',
    city: 'New Milford',
    state: 'NJ',
    zip: '07646',
  },
  phone: '(201) 527-5215',
  email: 'info@letitglowholidaylighting.com',
  owner: 'Cory Mancini',
  social: {
    instagram: 'https://www.instagram.com/letitglowholidaylighting/',
    facebook: 'https://www.facebook.com/profile.php?id=61560141042599',
  },
  serviceArea:
    'New Milford, Teaneck, Hackensack, Paramus, Ridgewood, Englewood, Fort Lee, and all of Bergen County, NJ.',
} as const;

export type ServiceIconKey =
  | 'residential'
  | 'commercial'
  | 'year-round'
  | 'maintenance'
  | 'takedown'
  | 'design';

export type Service = {
  slug: string;
  iconKey: ServiceIconKey;
  category: 'Holiday' | 'Year-Round' | 'Service';
  title: string;
  short: string; // Used on home/services cards. Keep ~140-160 chars for equal-height cards.
  full: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'residential',
    iconKey: 'residential',
    category: 'Holiday',
    title: 'Residential Holiday Lighting',
    short:
      'Custom-fit roofline, gutter and landscape lighting that turns your home into the showstopper of the block. Pro-grade LEDs, hidden cords, no DIY.',
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
    iconKey: 'commercial',
    category: 'Holiday',
    title: 'Commercial Lighting',
    short:
      'Storefronts, dealerships, restaurants and offices designed to draw foot traffic. Includes COI, weekly drive-by checks, and on-call response in season.',
    full: 'We work directly with property managers, retail owners, dealerships, and HOAs to design installations that meet code, look intentional, and turn on every night without anyone on your team thinking about it. Includes scheduled checks throughout the season.',
    bullets: [
      'Storefronts, dealerships, restaurants, office parks, HOAs',
      'Certificate of Insurance provided on request',
      'Weekly drive-by checks during peak season',
      'Coordinated brand colors and corporate themes',
    ],
  },
  {
    slug: 'year-round',
    iconKey: 'year-round',
    category: 'Year-Round',
    title: 'Year-Round Outdoor Lighting',
    short:
      'Permanent landscape, architectural and uplighting that keeps your property glowing in spring, summer and fall — long after the holiday season ends.',
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
    iconKey: 'maintenance',
    category: 'Service',
    title: 'In-Season Maintenance',
    short:
      'Bulb out, clip loose, squirrel made a meal of a wire? You text — we’re back within 72 hours and fix it at no extra charge. No tickets, no upsells.',
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
    iconKey: 'takedown',
    category: 'Service',
    title: 'Takedown & Storage',
    short:
      'After the season we remove every clip, bulb and cord and pack it into labeled bins kept in our facility — so next year it’s the same set, fitted again.',
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
    iconKey: 'design',
    category: 'Service',
    title: 'Custom Design',
    short:
      'Free in-person consult and a hand-drawn lighting plan made for your specific home. Itemized quote in three business days — no upsells, no obligation.',
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
};

// NOTE: Placeholders. Replace `author` with real, permission-cleared customer names
// (or keep generic attributions). Quotes can stay if accurate to your brand voice.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Smooth, simple, quick — and the results were spectacular. The crew was polite, professional, and on time. Best-looking house on the block all season.',
    author: 'Bergen County Homeowner',
    location: 'New Milford, NJ',
  },
  {
    quote:
      'Four years running and they still impress us every time. Custom-measured, top-quality lighting, and they handle takedown and storage. Worth every penny.',
    author: 'New Milford Resident',
    location: '4-Year Customer',
  },
  {
    quote:
      'We use Let It Glow for both our business and our home. Clean install, never an issue, and any time something flickered they were back the next day.',
    author: 'Local Business Owner',
    location: 'Bergen County, NJ',
  },
  {
    quote:
      'No more wobbly ladders, no more storage in the attic. Just beautiful lights every year. Genuinely the easiest luxury we’ve added to the house.',
    author: 'Teaneck Homeowner',
    location: 'Teaneck, NJ',
  },
];

export type FaqItem = {
  q: string;
  a: string;
};

export const FAQS: FaqItem[] = [
  {
    q: 'Do you only do holiday lighting?',
    a: 'No — we install permanent landscape, architectural and uplighting year-round. Holiday is our flagship season because that’s when most homes go up, but we’re busy in spring, summer, and fall too.',
  },
  {
    q: 'Do I need to buy my own lights?',
    a: 'No. We supply commercial-grade C9 and mini-LED lights as part of our service. You don’t buy them, store them, or replace them — they’re ours, and we maintain them year over year.',
  },
  {
    q: 'When should I book?',
    a: 'For holiday installs, earlier is much better. Most prime weekends in November and December are taken by mid-September. Year-round landscape and architectural work can be scheduled any time.',
  },
  {
    q: 'What happens if a bulb burns out?',
    a: 'Text us. We respond within 72 hours during the season — usually faster — and replace it at no charge. Storm damage and wind issues are prioritized same-day or next-day.',
  },
  {
    q: 'Do you serve commercial properties?',
    a: 'Yes — restaurants, retail, dealerships, office parks, multi-family residential, and HOAs across Bergen County. We can provide a Certificate of Insurance and work with property managers on payment terms.',
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
    q: 'Do you handle takedown too?',
    a: 'Yes — included. We come back on a scheduled day after the holidays, remove everything, and store the lights under your name in our facility. Same set comes back next year.',
  },
];

export type ProcessStep = {
  num: string;
  iconKey: 'consult' | 'design' | 'install' | 'enjoy';
  title: string;
  desc: string;
};

export const PROCESS: ProcessStep[] = [
  {
    num: '01',
    iconKey: 'consult',
    title: 'Free Consultation',
    desc: 'Call, text, or fill out our form. We visit your property, walk the site with you, and listen to what you want.',
  },
  {
    num: '02',
    iconKey: 'design',
    title: 'Custom Design',
    desc: 'We measure precisely and draft a lighting plan with itemized pricing. No surprises, no upsells, no obligation.',
  },
  {
    num: '03',
    iconKey: 'install',
    title: 'Expert Installation',
    desc: 'Our insured crew handles everything safely and efficiently. Outlets and timers hidden, install always clean.',
  },
  {
    num: '04',
    iconKey: 'enjoy',
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
    title: 'We own the lights — you own the peace of mind',
    desc: 'No upfront investment, no storage headaches. We provide commercial-grade fixtures and store them between seasons.',
  },
  {
    title: 'Trained, insured, local crew',
    desc: 'Fully insured for liability and workers’ comp. Trained for safe install at height. Based in New Milford — your neighbors.',
  },
  {
    title: 'Custom-fit, never generic',
    desc: 'We measure to the inch. Lights are cut and clipped to your exact roofline, eaves and landscape — no draping or guesswork.',
  },
  {
    title: 'Year-round, on-call support',
    desc: 'Issues don’t take holidays, and neither do we. Reachable all year for repairs, additions, and questions.',
  },
];

export type StatItem = {
  value: string;
  label: string;
  detail?: string;
};

export const STATS: StatItem[] = [
  { value: '10+', label: 'Years of experience', detail: 'Lighting Bergen County' },
  { value: '72hr', label: 'In-season response', detail: 'Free for our installs' },
  { value: '$0', label: 'Surprise charges', detail: 'Itemized quotes only' },
];

export type FeaturedWork = {
  slug: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Year-Round';
  blurb: string;
  image: string;
  // Real client name if cleared for use, otherwise descriptor only.
  client?: string;
};

// TODO: Replace blurbs and confirm client names are cleared for marketing use.
export const FEATURED_WORK: FeaturedWork[] = [
  {
    slug: 'harley-davidson-showroom',
    title: 'Harley-Davidson Showroom',
    category: 'Commercial',
    client: 'Harley-Davidson Dealership · Bergen County',
    blurb:
      'Full exterior holiday installation for a flagship motorcycle dealership — designed to draw eyes from the highway and stay reliable through three months of New Jersey winter.',
    image: '/gallery5.jpg',
  },
  {
    slug: 'colonial-warm-white',
    title: 'Two-Story Colonial · Warm White',
    category: 'Residential',
    blurb:
      'Classic warm-white roofline, custom gutter run, and tree wraps. The owner has booked us five years running.',
    image: '/gallery2.jpg',
  },
  {
    slug: 'estate-multicolor',
    title: 'Bergen County Estate · Multicolor',
    category: 'Residential',
    blurb:
      'Full-property package with roofline, landscape uplighting, and architectural color wash on the columns.',
    image: '/gallery7.jpg',
  },
];

export type SeasonItem = {
  iconKey: 'holiday' | 'spring' | 'fall' | 'commercial';
  name: string;
  desc: string;
};

export const SEASONS: SeasonItem[] = [
  {
    iconKey: 'holiday',
    name: 'Holiday Season',
    desc: 'Christmas, Hanukkah and winter lighting — installed, maintained, and taken down.',
  },
  {
    iconKey: 'spring',
    name: 'Spring & Summer',
    desc: 'Landscape lighting, uplighting, and architectural accents for curb appeal year-round.',
  },
  {
    iconKey: 'fall',
    name: 'Fall Season',
    desc: 'Pre-season planning, design consults, and fall landscape lighting upgrades.',
  },
  {
    iconKey: 'commercial',
    name: 'Commercial Year-Round',
    desc: 'Permanent outdoor and architectural lighting for businesses across Bergen County.',
  },
];

export type TrustItem = {
  iconKey: 'shield' | 'package' | 'zap' | 'pin' | 'home';
  text: string;
};

export const TRUST_BAR: TrustItem[] = [
  { iconKey: 'shield', text: 'Fully Insured Team' },
  { iconKey: 'package', text: 'We Own the Lights' },
  { iconKey: 'zap', text: '72-Hour Maintenance' },
  { iconKey: 'pin', text: 'Local · New Milford, NJ' },
  { iconKey: 'home', text: 'Residential & Commercial' },
];

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
