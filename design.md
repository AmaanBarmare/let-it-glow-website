# Let It Glow Holiday Lighting — Design System
**Direction B: Warm & Festive**
*New Milford, NJ · Bergen County · Version 1.0*

---

## 1. Brand Overview

### Brand Identity

| Attribute | Value |
|-----------|-------|
| **Company Name** | Let It Glow Holiday Lighting |
| **Tagline** | *"Make Your Home Glow This Season"* |
| **Location** | 260 Birchwood Rd, New Milford, NJ 07646 |
| **Service Area** | Bergen County, NJ & Surrounding |
| **Audience** | Residential homeowners + Commercial businesses |
| **Tone** | Warm, trustworthy, festive, family-friendly, professional |
| **Season** | Year-round (holiday flagship + off-season outdoor lighting) |

### Brand Personality

Let It Glow is the friendly neighborhood expert. Not corporate, not cold — it's the neighbor you trust to make your home look its absolute best for the holidays, and to take every bit of stress off your plate. The brand feels **joyful but polished**, **inviting but professional**, and **local but credibly skilled**.

Key brand values:
- **Effortless** — we handle everything so you don't have to
- **Trustworthy** — insured, trained, local
- **Festive** — the brand itself should feel like the season
- **Premium quality** — professional-grade, not DIY

---

## 2. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Forest Green** | `#1a4a2e` | 26, 74, 46 | Nav background, section backgrounds, dark panels |
| **Forest Green Light** | `#2d6b45` | 45, 107, 69 | Hover states, decorative borders, accents |
| **Christmas Red** | `#b01c2e` | 176, 28, 46 | Primary CTAs, card borders, badges, accents |
| **Christmas Red Dark** | `#8a1422` | 138, 20, 34 | Hover state for red buttons, deep red panels |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Cream** | `#fdf5e8` | 253, 245, 232 | Page background, light section backgrounds |
| **Warm Tan** | `#f0e0c0` | 240, 224, 192 | Process section background, alternating panels |
| **Gold** | `#d4a017` | 212, 160, 23 | Checkmarks, star ratings, decorative accents |
| **Gold Light** | `#f0c040` | 240, 192, 64 | Nav logo color, hero badge, highlighted text |
| **White** | `#ffffff` | 255, 255, 255 | Cards, pure backgrounds |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Text Dark** | `#3d2b1a` | Body text on light backgrounds |
| **Text Light** | `#7a6050` | Secondary text, captions, card descriptions |
| **Charcoal** | `#2a2a2a` | Footer background, high-contrast text |

### Color Roles

```
Background (light sections):  --cream:   #fdf5e8
Background (dark sections):   --forest:  #1a4a2e
Background (process section): --warm-tan: #f0e0c0
Primary CTA:                  --crimson: #b01c2e
Primary Nav:                  --forest:  #1a4a2e
Logo / Brand Accent:          --gold-light: #f0c040
Star ratings / Checkmarks:    --gold: #d4a017
Cards / White panels:         --white: #ffffff
```

### CSS Variables

```css
:root {
  --crimson:      #b01c2e;
  --crimson-dark: #8a1422;
  --forest:       #1a4a2e;
  --forest-light: #2d6b45;
  --cream:        #fdf5e8;
  --warm-tan:     #f0e0c0;
  --gold:         #d4a017;
  --gold-light:   #f0c040;
  --charcoal:     #2a2a2a;
  --text:         #3d2b1a;
  --text-light:   #7a6050;
  --snow:         #ffffff;
}
```

---

## 3. Typography

### Font Families

| Role | Font | Source | Weights Used |
|------|------|--------|-------------|
| **Display / Headings** | Playfair Display | Google Fonts | 400, 700, 900 (+ italic variants) |
| **Body / UI** | Lato | Google Fonts | 300, 400, 700 |

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Size | Weight | Letter Spacing | Notes |
|---------|------|------|--------|----------------|-------|
| Hero H1 | Playfair Display | `clamp(3.5rem, 7vw, 7rem)` | 900 | default | Line height 1.05 |
| Section H2 | Playfair Display | `clamp(2.2rem, 4vw, 3.5rem)` | 700 | default | Line height 1.2 |
| Card H3 | Playfair Display | `1.3rem` | 700 | default | — |
| Process Step Title | Playfair Display | `1.1rem` | 700 | default | — |
| Eyebrow / Kicker | Lato | `0.75rem` | 700 | `0.3em` | All-caps |
| Nav Links | Lato | `0.85rem` | 400 | `0.05em` | — |
| Body Text | Lato | `1rem` | 300 | default | Line height 1.8 |
| Card Body | Lato | `0.9rem` | 300 | default | Line height 1.8 |
| Testimonial Quote | Playfair Display | `1rem` | 400 italic | default | — |
| Author Credit | Lato | `0.78rem` | 700 | `0.12em` | All-caps, red color |
| Footer Copy | Lato | `0.75rem` | 300 | `0.05em` | — |

### Typography Rules

- **Eyebrow labels** always appear in all-caps with `0.3em` letter spacing, colored `--crimson`, positioned above H2s
- **Italic headings** are used for emphasis inside Playfair Display headings (e.g., *"Every Season"*, *"Hassle-Free"*)
- **Minimum body text** is always `0.85rem` — never smaller for readable content
- **Line height** for body paragraphs is always `1.7–1.9` for readability
- Never use Inter, Arial, Roboto, or system fonts as primary faces

---

## 4. Layout & Grid

### Page Container

```css
max-width: 1200px;
margin: 0 auto;
padding: 0 60px;
```

On mobile (`<768px`): padding reduces to `20px`.

### Section Spacing

| Section Type | Top Padding | Bottom Padding |
|-------------|-------------|----------------|
| Standard section | `120px` | `120px` |
| Hero | `80px` (top, below nav) | `60px` |
| CTA section | `120px` | `120px` |
| Footer | `60px` | `60px` |

### Grid Systems Used

**Two-column (Hero, Why section):**
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 100px; /* Why section */
/* or: flex with left/right blocks for Hero */
```

**Three-column (Services):**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 28px;
```

**Two-column (Testimonials):**
```css
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
```

**Four-column (Process steps):**
```css
display: flex;
gap: 0;
/* Each step: flex: 1 */
```

### Navigation Height

Fixed top nav: `72px` height. All hero/page sections must have `padding-top: 72px` or equivalent to account for nav overlap.

---

## 5. Component Library

### Navigation Bar

- **Background:** `--forest` (`#1a4a2e`)
- **Height:** `72px`
- **Shadow:** `0 2px 20px rgba(0,0,0,0.15)`
- **Logo:** Playfair Display, 1.5rem, 700 weight, `--gold-light` color, with `✨` icon prefix
- **Nav links:** Lato, 0.85rem, 400 weight, `rgba(255,255,255,0.85)` → hover `--gold-light`
- **CTA button:** Red pill button (see Button styles below)
- **Position:** `fixed`, `z-index: 100`

---

### Buttons

#### Primary — Red Pill
```css
background: var(--crimson);       /* #b01c2e */
color: white;
padding: 18px 40px;
border-radius: 50px;
font-weight: 700;
font-size: 0.9rem;
letter-spacing: 0.05em;
box-shadow: 0 8px 30px rgba(176, 28, 46, 0.4);
transition: all 0.3s;

/* Hover */
background: var(--crimson-dark);
transform: translateY(-3px);
box-shadow: 0 12px 40px rgba(176, 28, 46, 0.5);
```

#### Secondary — White Outline
```css
border: 2px solid rgba(255, 255, 255, 0.4);
color: white;
padding: 16px 36px;
border-radius: 50px;
font-weight: 400;
font-size: 0.9rem;
background: transparent;
transition: all 0.3s;

/* Hover */
border-color: var(--gold-light);
color: var(--gold-light);
```

#### Gold CTA (used in CTA section)
```css
background: var(--gold);          /* #d4a017 */
color: var(--charcoal);
padding: 20px 56px;
border-radius: 50px;
font-weight: 700;
font-size: 1rem;
letter-spacing: 0.05em;
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
transition: all 0.3s;

/* Hover */
background: var(--gold-light);
transform: translateY(-3px);
```

---

### Cards

#### Service Card
```css
background: white;
border-radius: 16px;
padding: 44px 36px;
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
border-top: 4px solid var(--crimson);
transition: all 0.3s;

/* Hover */
transform: translateY(-6px);
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
```

**Service Icon Box:**
```css
width: 60px;
height: 60px;
background: linear-gradient(135deg, var(--crimson), var(--crimson-dark));
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.6rem;
margin-bottom: 24px;
box-shadow: 0 8px 20px rgba(176, 28, 46, 0.25);
```

#### Testimonial Card
```css
background: white;
border-radius: 16px;
padding: 40px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
position: relative;

/* Decorative quote mark (::before) */
content: '"';
position: absolute;
top: 20px; right: 28px;
font-family: 'Playfair Display', serif;
font-size: 6rem;
color: rgba(176, 28, 46, 0.08);
line-height: 1;
font-weight: 900;

/* Hover */
transform: translateY(-4px);
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
```

#### Season Card (Why section)
```css
background: rgba(255, 255, 255, 0.07);
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: 16px;
padding: 28px 32px;
display: flex;
align-items: center;
gap: 24px;
transition: all 0.3s;

/* Hover */
background: rgba(255, 255, 255, 0.11);
border-color: rgba(212, 160, 23, 0.4);
```

#### Process Step Circle
```css
width: 100px;
height: 100px;
background: white;
border: 3px solid var(--crimson);
border-radius: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto 28px;
box-shadow: 0 8px 30px rgba(176, 28, 46, 0.15);
transition: all 0.3s;

/* Hover */
background: var(--crimson);
transform: scale(1.08);
/* Number color inverts to white on hover */
```

---

### Trust Bar

A full-width horizontal strip directly below the hero:

```css
background: var(--crimson);
padding: 24px 60px;
display: flex;
justify-content: center;
gap: 60px;
flex-wrap: wrap;
```

Trust item structure: emoji icon + all-caps white label. Each item represents a key credibility point (insured, lights included, 72h maintenance, local, residential & commercial).

---

### Section Decorators

**Stripe border (Why section top):**
```css
position: absolute;
top: 0; left: 0; right: 0;
height: 4px;
background: repeating-linear-gradient(
  90deg,
  var(--crimson) 0, var(--crimson) 20px,
  var(--gold) 20px, var(--gold) 40px,
  var(--forest-light) 40px, var(--forest-light) 60px
);
```

**Process section dashed connector line:**
```css
position: absolute;
top: 50px; /* vertically centers on step circles */
left: 10%; right: 10%;
height: 2px;
background: repeating-linear-gradient(
  90deg,
  var(--crimson) 0, var(--crimson) 12px,
  transparent 12px, transparent 20px
);
```

**CTA section snowflake decorators (::before and ::after):**
```css
content: '❄ ✦ ❄ ✦ ❄ ✦ ❄ ✦ ❄ ✦ ❄';
font-size: 1rem;
color: rgba(255, 255, 255, 0.2);
letter-spacing: 20px;
```

---

## 6. Page Structure & Sections

### Section Order

```
1.  Navigation (fixed)
2.  Hero
3.  Trust Bar
4.  Services
5.  Why Choose Us
6.  How It Works (Process)
7.  Testimonials
8.  CTA / Contact
9.  Footer
10. Footer Bottom Strip
```

---

### Hero Section

**Layout:** Two-column flex (`hero-left` + `hero-right`)
**Background:** `linear-gradient(160deg, var(--forest) 0%, #0e2e1c 60%, #1a1a2e 100%)`
**Min-height:** `100vh`

**Left column content:**
- Location badge (green-tinted pill with `🎄` icon and gold border)
- H1 headline: "Make Your / Home Glow / This Season" — third line in `--gold-light` italic
- Subtitle paragraph
- Two CTA buttons (red pill primary + white outline secondary)

**Right column content:**
- Custom house SVG illustration (see SVG Assets section)
- Floats with `animation: float 5s ease-in-out infinite` (translateY -16px loop)

**Hero badge:**
```css
display: inline-flex;
align-items: center;
gap: 8px;
background: rgba(212, 160, 23, 0.15);
border: 1px solid rgba(212, 160, 23, 0.4);
border-radius: 30px;
padding: 8px 18px;
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: var(--gold-light);
```

---

### Services Section

**Background:** `--cream` (`#fdf5e8`)
**Grid:** 3 columns × 2 rows = 6 cards

Services offered:
1. 🏠 Residential Holiday Lighting
2. 🏢 Commercial Lighting
3. 🌿 Year-Round Outdoor Lighting
4. 🔧 In-Season Maintenance
5. 📦 Takedown & Storage
6. 🎨 Custom Design

Each card has: gradient red icon box, Playfair Display title, Lato body.

---

### Why Choose Us Section

**Background:** `--forest` (`#1a4a2e`)
**Layout:** Two-column — checklist left, season cards right
**Top border:** 4px repeating stripe (red + gold + green)

**Checklist items (4):**
1. We Own the Lights — You Own the Peace of Mind
2. Trained, Insured Professionals
3. Custom-Fit Every Time
4. Year-Round, On-Call Support

Check icon styling:
```css
width: 32px;
height: 32px;
background: var(--gold);
border-radius: 50%;
color: var(--forest);
font-weight: 700;
```

**Season Cards (4):**
1. 🎄 Holiday Season
2. 🌸 Spring & Summer
3. 🍂 Fall Season
4. 🏢 Commercial Year-Round

---

### How It Works (Process) Section

**Background:** `--warm-tan` (`#f0e0c0`)
**Layout:** 4 equal flex columns with dashed red connector line

Steps:
1. 📞 Free Consultation
2. 📐 Custom Design
3. 🔌 Expert Installation
4. 😊 Enjoy All Season

Each step: numbered circle (white + red border) → title → description. Circle turns red on hover with number inverting to white.

---

### Testimonials Section

**Background:** `--cream`
**Grid:** 2 columns × 2 rows = 4 cards

Each card has: gold star row (★★★★★), oversized ghost quote mark (::before), italic Playfair quote, all-caps red author credit.

---

### CTA Section

**Background:** `linear-gradient(135deg, var(--crimson-dark), var(--crimson), #d63050)`
**Decorators:** Snowflake/star strings top and bottom (::before, ::after)

Content: Large Playfair Display headline + subtext + gold CTA button + 3-column info row (address, service area, availability).

---

### Footer

**Background:** `--charcoal` (`#2a2a2a`)
**Layout:** 3-column grid (2fr 1fr 1fr)

Columns:
1. Logo + tagline description
2. Services link list
3. Contact / address

**Footer bottom strip:** `#1a1a1a`, single line, copyright left + colored pill badge right.

---

## 7. Animations & Motion

### Snowflake Animation

Ambient falling snow rendered via JavaScript-injected DOM elements. 30 flakes, varied size, speed, and delay.

```css
@keyframes snowfall {
  0%   { transform: translateY(-20px) rotate(0deg);   opacity: 0.8; }
  100% { transform: translateY(100vh) rotate(360deg);  opacity: 0; }
}
```

Snowflakes: `❄`, `❅`, `❆`, `*` characters. Duration: 5–15s random. Fixed positioned, `z-index: 0`, `pointer-events: none`.

### Hero House Float

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-16px); }
}
animation: float 5s ease-in-out infinite;
```

### Scroll Reveal

All section content revealed on scroll via IntersectionObserver:

```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Threshold:** `0.1` — triggers when 10% of element is visible. Once triggered, observer disconnects (one-time reveal).

### Button Hover Transitions

All interactive elements use `transition: all 0.3s`. Service cards lift with `translateY(-6px)`. Testimonial cards lift with `translateY(-4px)`. Process circles scale to `1.08` on hover.

### Hero Entrance Animations

```css
@keyframes fadeIn   { from { opacity: 0; }                            to { opacity: 1; } }
@keyframes slideIn  { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
```

Applied to hero elements in sequence: badge → H1 → subtitle → buttons, with delays of `0s`, `0.2s`, `0.4s`, `0.6s`.

---

## 8. SVG Assets

### Hero House Illustration

A custom-drawn SVG house (`420×360` viewBox) rendered in the hero right column. Key elements:

| Element | Fill | Notes |
|---------|------|-------|
| House body | `#1a3a2a` | Dark green |
| Roof | `#8a1422` | Deep Christmas red |
| Chimney | `#6a0f1a` | With ellipse cap and smoke puffs |
| Door | `#0e2218` | Double-panel with gold doorknob |
| Windows | `#0e2218` | With warm amber inner glow |
| Roofline lights | Multicolor | 11 bulbs: gold, red, green (alternating) |
| Gutter lights | Multicolor | 13 small bulbs along roofline base |
| Wreath on door | `#2d6b45` stroke | Circle wreath with red berry |
| Snow on roof | `rgba(255,255,255,0.4)` | Path with `stroke-linecap: round` |
| Sky glow | `rgba(201,152,58,0.12)` | Ellipse under house |

Light bulb colors used: `#f0c040` (gold), `#ff4444` (red), `#44ff44` (green), `#44aaff` (blue).

---

## 9. Iconography

### Emoji Icon Usage

The design uses emoji as primary icons throughout — they are web-safe, visually festive, and require no external icon library.

| Context | Emoji | Usage |
|---------|-------|-------|
| Nav logo | ✨ | Sparkling stars prefix |
| Residential service | 🏠 | Service card |
| Commercial service | 🏢 | Service card |
| Year-round lighting | 🌿 | Service card |
| Maintenance | 🔧 | Service card |
| Takedown & Storage | 📦 | Service card |
| Custom Design | 🎨 | Service card |
| Holiday Season | 🎄 | Season card |
| Spring/Summer | 🌸 | Season card |
| Fall | 🍂 | Season card |
| Commercial year-round | 🏢 | Season card |
| Trust — Insured | 🏆 | Trust bar |
| Trust — Lights included | 📦 | Trust bar |
| Trust — Maintenance | ⚡ | Trust bar |
| Trust — Local | 📍 | Trust bar |
| Trust — Both types | 🏠 | Trust bar |
| Process step 1 | 📞 | Consultation |
| Process step 2 | 📐 | Design |
| Process step 3 | 🔌 | Installation |
| Process step 4 | 😊 | Enjoy |
| CTA address | 📍 | Contact detail |
| CTA online | 🌐 | Contact detail |
| CTA availability | 📅 | Contact detail |
| Footer logo | ✨ | Footer logo prefix |
| CTA button | 🎄 | CTA button emoji prefix |

### Star Ratings

Gold stars (`★★★★★`) using Unicode. Styled with `color: var(--gold)`, `font-size: 1rem`, `letter-spacing: 3px`.

---

## 10. Responsive Design Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| **Desktop** | `> 1024px` | Full 2-col/3-col grids, all animations |
| **Tablet** | `768px – 1024px` | Services → 2 columns; Why → stack; reduce paddings |
| **Mobile** | `< 768px` | All grids → 1 column; Hero → stack (illustration below text); Nav → hamburger; padding → 20px; font sizes reduce via `clamp()` |

### Mobile Priority Changes

- Hero: switch from flex row to flex column; illustration moves below text
- Navigation: collapse to hamburger menu or simplified sticky bar
- Services grid: `grid-template-columns: 1fr`
- Why section: `grid-template-columns: 1fr`
- Process steps: `flex-direction: column`; remove connector line
- Testimonials: `grid-template-columns: 1fr`
- Trust bar: `flex-direction: column`, `gap: 16px`
- Reduce all section padding to `60px 0`
- Container padding: `0 20px`

---

## 11. Page Sections — Copy Framework

### SEO & Page Title
```
Let It Glow Holiday Lighting | New Milford, NJ | Bergen County
```

### Meta Description (suggested)
```
Professional holiday lighting installation for homes and businesses in New Milford, NJ.
Let It Glow handles design, installation, in-season maintenance, takedown & storage.
Serving all of Bergen County. Free quotes available.
```

### Key Messaging Pillars

1. **Effortless** — "We do everything. You do nothing but enjoy."
2. **Professional** — "Custom-measured, professionally-installed, commercial-grade lights."
3. **Local** — "Right here in New Milford, serving your Bergen County neighbors."
4. **Year-Round** — "Not just December — outdoor and landscape lighting all year."
5. **Safe** — "No ladders, no slippery roofs, no liability — our insured crew handles it all."
6. **Full-Service** — "Design → Install → Maintain → Take Down → Store. All included."

### Section Headlines (Direction B Tone)

| Section | Headline | Subhead |
|---------|----------|---------|
| Hero | "Make Your Home Glow This Season" | Professional holiday lighting + year-round service... |
| Services | "Every Light, *Every Season*" | From holiday magic to year-round curb appeal... |
| Why Us | "You Deserve a *Hassle-Free* Holiday" | — (replaced by checklist) |
| Process | "As Easy as *1, 2, 3, 4*" | From your first call to lights-out after the season... |
| Testimonials | "Bergen County *Loves* the Glow" | — |
| CTA | "Let's Make Your *Home Shine*" | Serving New Milford, Teaneck, Hackensack, Paramus... |

---

## 12. Future Sections to Build

These sections are not yet implemented but should be added to the full site:

### Gallery / Portfolio
- Masonry or 3-column grid of before/after or completed installation photos
- Filter tabs: Residential · Commercial · Roofline · Landscape · Year-Round
- Lightbox modal on click
- Background: `--cream`

### Pricing / Packages
- 2–3 tiered package cards (e.g., Starter, Classic, Premium)
- Each card: price range or "starting from", list of included services, CTA
- Highlighted/featured card uses `--crimson` border and badge ("Most Popular")

### Contact Form
- Full-width section with form on left, contact details on right
- Fields: Name, Phone, Email, Address, Service Type (dropdown), Message
- CTA button: red pill "Request My Free Quote"
- Background: `--warm-tan`

### FAQ Section
- Accordion-style Q&A
- Questions like: "Do I need to buy my own lights?", "What happens if a bulb burns out?", "Do you serve commercial properties?", "When should I book?"
- Background: `--white`

### Service Area Map
- Embedded Google Map centered on New Milford, NJ
- Highlighted service radius: Bergen County + surrounding
- List of served towns below map

---

## 13. Third-Party Dependencies

| Dependency | Purpose | Source |
|------------|---------|--------|
| Google Fonts — Playfair Display | Display headings | fonts.googleapis.com |
| Google Fonts — Lato | Body / UI text | fonts.googleapis.com |
| Google Maps Embed | Service area map (future) | maps.google.com |
| — | No JavaScript frameworks | Vanilla JS only |
| — | No icon libraries | Emoji-based icons |
| — | No CSS frameworks | Custom CSS with variables |

---

## 14. Accessibility Notes

- All color text combinations must meet WCAG AA contrast ratio (4.5:1 for normal text)
- Red on white (`#b01c2e` on `#ffffff`): ratio ~5.9:1 ✓
- White on forest green (`#ffffff` on `#1a4a2e`): ratio ~9.2:1 ✓
- Gold on dark (`#d4a017` on `#2a2a2a`): ratio ~6.4:1 ✓
- All images must include descriptive `alt` attributes
- Snowflake container: `aria-hidden="true"`, `pointer-events: none`
- Buttons must have clear focus states (`:focus-visible` outlines)
- Semantic HTML: `<nav>`, `<section>`, `<h1>`→`<h3>` hierarchy preserved
- Form fields (future): all paired with `<label>` elements

---

*End of Design System Document — Let It Glow Holiday Lighting v1.0*
*Last updated: 2025 · Direction B: Warm & Festive*
