# Khalid Wani — Personal Brand Website

A modern, luxury personal branding website for Khalid Wani built with **React + Vite + Tailwind CSS**.

## Stack

- **React 18** — component-based UI
- **Vite 5** — fast dev server & build tool
- **Tailwind CSS 3** — utility-first styling
- **Custom CSS** — animations, cursor, marquee, reveals

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section with image collage
│   ├── CTA.jsx            # Call-to-action banner
│   ├── Cursor.jsx         # Custom animated cursor
│   ├── FallbackImage.jsx  # Smart image with fallback chain
│   ├── Footer.jsx         # Site footer
│   ├── Hero.jsx           # Full-screen hero with portrait
│   ├── Marquee.jsx        # Infinite scrolling text strip
│   ├── Metrics.jsx        # Animated metric bars
│   ├── Navbar.jsx         # Sticky navigation
│   ├── Portrait.jsx       # Portrait + purpose section
│   ├── QuoteBreak.jsx     # Full-bleed photo with quote
│   ├── SectionLabel.jsx   # Reusable gold section label
│   ├── Services.jsx       # 6-card services grid
│   ├── Stats.jsx          # Animated stat counters
│   ├── Talks.jsx          # TEDx / keynote video cards
│   └── Testimonials.jsx   # Client testimonials grid
├── data/
│   └── content.js         # All text, links, images in one file
├── hooks/
│   ├── useCursor.js       # Cursor animation logic
│   └── useScrollReveal.js # Intersection Observer reveals
├── App.jsx
├── index.css              # Global styles + animations
└── main.jsx
```

## Customization

All content lives in `src/data/content.js` — edit stats, services, testimonials,
image URLs, and links from one place without touching components.

## Image Notes

Images are sourced directly from `khalidwani.com/wp-content/uploads/`.
`FallbackImage` tries each URL in order and falls back to an SVG silhouette
placeholder if all sources fail (e.g. if the site's CORS policy changes).
