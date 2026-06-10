// Centralised asset paths. Vite injects BASE_URL so the same code works on
// the local dev server ("/") and on the GitHub Pages sub-path.
const base = import.meta.env.BASE_URL;

export const assetUrl = (path: string) => `${base}${path.replace(/^\//, '')}`;

export const assets = {
  gem: assetUrl('gems.png'),
  gemOutlined: assetUrl('gems-outlined.png'),
  screens: {
    games: assetUrl('screen1.png'),
    rewards: assetUrl('screen2.png'),
    profile: assetUrl('screen3.png'),
  },
} as const;

// Plain links to the statically-served legal pages (built as separate inputs).
export const legalLinks = {
  imprint: assetUrl('impressum.html'),
  privacy: assetUrl('datenschutz.html'),
} as const;

export const CONTACT_EMAIL = 'contact@claimo-app.com';
