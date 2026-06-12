// Centralised asset paths. Vite injects BASE_URL so the same code works on
// the local dev server ("/") and on the GitHub Pages sub-path.
const base = import.meta.env.BASE_URL;

export const assetUrl = (path: string) => `${base}${path.replace(/^\//, '')}`;

// Brand logos — imported so Vite hashes and bundles them correctly.
import paypalImg from '../../assets/Paypal.png';
import amazonImg from '../../assets/amazon.png';
import googlePlayImg from '../../assets/google-play.png';
import steamImg from '../../assets/steam_logo.png';
import playIconImg from '../../assets/play-icon.png';
import shopIconImg from '../../assets/shop-icon.png';
import tasksIconImg from '../../assets/tasks-icon.png';

export const assets = {
  gem: assetUrl('gems.png'),
  gemOutlined: assetUrl('gems-outlined.png'),
  screens: {
    games: assetUrl('screen1.png'),
    rewards: assetUrl('screen2.png'),
    profile: assetUrl('screen3.png'),
  },
  brands: {
    paypal: paypalImg,
    amazon: amazonImg,
    googlePlay: googlePlayImg,
    steam: steamImg,
  },
  appIcons: {
    play: playIconImg,
    shop: shopIconImg,
    tasks: tasksIconImg,
  },
} as const;

// Plain links to the statically-served legal pages (built as separate inputs).
export const legalLinks = {
  imprint: assetUrl('impressum.html'),
  privacy: assetUrl('datenschutz.html'),
} as const;

export const CONTACT_EMAIL = 'contact@claimo-app.com';
