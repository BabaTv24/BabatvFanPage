# BABATV24 Design Guidelines

## Design Approach
**Reference-Based**: Inspired by streaming platforms (Netflix, Twitch) with premium neon/cyberpunk aesthetic. Black-gold-neon theme with glassmorphism effects creating a "TV monitor" experience.

## Core Visual Identity

### Color Palette
- **Base**: Pure black (#000000) backgrounds
- **Neon Accents**: Rainbow gradient system
  - Primary Red: #ff0000
  - Orange: #ff7f00
  - Yellow: #ffff00
  - Green: #00ff00
  - Cyan: #00b7ff
  - Blue: #0040ff
  - Magenta: #ff00ff
  - Pink: #ff0090
- **Metallics**: Gold accents for premium elements
- **Glass**: Semi-transparent whites (rgba(255,255,255,0.1)) for glassmorphism

### Typography
- **Headers**: Arial Black or similar bold sans-serif, 120px for logo intro
- **Body**: Modern sans-serif (Inter, Outfit)
- **Hierarchy**: 
  - H1: 48-72px bold
  - H2: 36-48px bold
  - H3: 24-32px semi-bold
  - Body: 16-18px regular
  - CTA buttons: 18-20px bold

### Layout System
- **Spacing**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistency
- **Container**: max-w-7xl centered with px-4 md:px-8
- **Sections**: py-16 md:py-24 lg:py-32 vertical rhythm
- **Rounded corners**: rounded-2xl for glassmorphism cards, rounded-xl for buttons

## Component Library

### TV Monitor Component (Hero Section)
- 16:9 aspect ratio video container
- Thick border (8-12px) with neon glow effect using drop-shadow
- Glassmorphism frame: backdrop-blur-xl with semi-transparent border
- "LIVE" badge: pulsing red indicator (top-right overlay)
- Controls: Mute/fullscreen buttons with blurred backgrounds (backdrop-blur-md)

### Glassmorphism Cards
- Background: rgba(255,255,255,0.05) with backdrop-blur-lg
- Border: 1px solid rgba(255,255,255,0.1)
- Shadow: Multiple layers - soft glow + depth shadow
- Hover: Slight scale (1.02) with increased glow

### CTA Buttons
- **Primary Payment**: Large gradient button (gold to neon accent), backdrop-blur-md background
- **Size**: px-8 py-4 with text-lg
- **Effects**: Neon glow matching accent color, scale on hover
- **Secondary**: Outlined with neon border, transparent fill

### Scrolling Ad Ticker (Marquee)
- Height: 80-100px
- Smooth infinite scroll, no gaps
- Items: Logo + text in glassmorphism cards with spacing gap-6
- Speed: ~60s for full loop

### Animations
- **Logo Intro**: Sequential letter entrance with rotation, shake, and neon blink (provided code)
- **Section Reveals**: Fade-up on scroll (translate-y-8 opacity-0 to translate-y-0 opacity-100)
- **Counter**: Rolling digits animation for user count
- **Parallax**: Subtle background movement on hero section
- **Hover**: Smooth scale transforms (duration-300)

## Page Structure (7 Sections)

### Header
- Sticky top navigation: Logo left, CTA right
- Ad ticker immediately below (full-width marquee)
- Glassmorphism background when scrolled

### Section 1: Hero - TV Monitor
- Full viewport height (min-h-screen) with centered TV monitor
- Animated BABATV24 intro plays on load
- Neon glow emanating from monitor edges
- Overlay gradient: radial from center to edges

### Section 2: Device Grid
- 4-column grid (lg:) reducing to 2 (md:) and 1 (base)
- Icons: TV, smartphone, tablet, PC with neon accent colors
- Each card: Glassmorphism with icon, title, short USP text

### Section 3: Live Preview Player
- Centered 16:9 monitor frame with neon border
- 5-minute looping playlist (45s clips)
- Mute/fullscreen controls with blurred button backgrounds
- Pulsing "LIVE" badge overlay

### Section 4: TV Program Tabs
- Tab navigation: Polska | DE | Live Now
- Each program item: Time + title in glassmorphism rows
- "See More" links with neon underline hover
- 15-min cached data display

### Section 5: Payment CTA
- Large centered section with dramatic neon gradient background
- Oversized button: "Rezerwuj dostęp za jedyne 0,99 €"
- Trust indicators: 30-day guarantee, support included
- Payment method icons (Stripe, PayPal, Crypto) below

### Section 6: User Counter
- Rolling digit display (7 digits) with neon glow
- Text: "Dołączyło już: X użytkowników"
- Real-time updates with smooth number transitions

### Section 7: PRO Upsell
- 2-column split (image left, content right on desktop)
- Comparison table: Entry vs PRO features
- Gradient accent border on PRO column
- CTA: "Proszę o więcej informacji" button

### Section 8: Testimonials
- 3x3 grid on desktop, carousel on mobile
- Cards: Avatar (circular with neon ring), name, 5-star rating, quote
- Glassmorphism styling with auto-scroll animation

### Footer
- 3-column layout: Legal links | Social icons | Licenses
- Minimal glassmorphism, subtle neon accents on hover
- Social bar with neon icon outlines

## Images

### Hero Section
- **Monitor Background**: Abstract tech/streaming visualization (particles, waves) in dark tones
- **Device Icons**: Simple line-art style icons for TV/phone/tablet/PC
- **Testimonial Avatars**: 9 user photos (diverse, professional)
- **PRO Section**: High-quality streaming/content image showcasing variety

## Accessibility
- High contrast neon on black ensures WCAG AAA
- Focus states: Thick neon outline (4px) matching accent color
- Keyboard navigation fully supported
- VTT captions for video content

## Responsive Breakpoints
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Single column stacking below md, multi-column above
- Touch-friendly tap targets (min 44x44px)