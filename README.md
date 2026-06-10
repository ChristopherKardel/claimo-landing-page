# Claimo Landing Page

Marketing site for **Claimo**, a rewards app in development where users earn Gems
for games, offers and surveys and redeem them for PayPal cash, gift cards and more.

Built with **React 19 + Vite 7 + TypeScript**. Dark, premium UI with neon teal/green
accents matching the Claimo app, scroll-reveal animations and a fully responsive layout.

## Development

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build     # type-checks, then bundles to dist/
npm run preview   # serves the production build locally
```

Deployed to GitHub Pages via `.github/workflows/deploy.yml` (sets `GITHUB_PAGES=true`
so Vite uses the `/claimo-landing-page/` base path).

## Project structure

```
index.html              Landing page entry
impressum.html          Legal notice (separate Vite input)
datenschutz.html        Privacy policy (separate Vite input)
public/                 Static assets (screenshots, gems, favicon)
src/
  main.tsx              App bootstrap
  App.tsx               Page composition
  index.css             Design tokens, reset, utilities, keyframes, legal-page styles
  lib/assets.ts         Asset paths + base-URL helper
  hooks/                useInView (scroll reveal), useCountUp (stat counters)
  components/           One file per section, each with a co-located *.module.css
```

Styling uses CSS variables (design tokens in `index.css`) plus CSS Modules per
component, so global theme and per-section styles stay cleanly separated.
