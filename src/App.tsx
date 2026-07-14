import { useEffect, useLayoutEffect, useRef, useState, type ReactElement } from 'react';
import gem from '../assets/gem.svg';
import logo from '../assets/logo.png';
import playIcon from '../assets/play-icon.png';
import tasksIcon from '../assets/tasks-icon.png';
import shopIcon from '../assets/shop-icon.png';

const copy = {
  de: {
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    switchLanguage: 'Sprache wählen',
    nav: {
      benefits: 'Vorteile',
      app: 'App-Einblick',
      how: 'So funktionierts',
      faq: 'Häufig gestellte Fragen',
      contact: 'Kontakt',
      install: 'Installieren',
    },
    hero: {
      line1: 'Kostenlos spielen.',
      line2: 'Aufgaben abschließen.',
      line3: 'Echte Belohnungen verdienen.',
      copy1: 'Sammle Punkte beim Spielen und bei Aufgaben – ',
      copy2: 'und löse sie gegen PayPal-Cash, Gutscheine und weitere Belohnungen ein.',
      storeSmall: 'Demnächst bei',
      store: 'Google Play',
      learn: 'So funktioniert’s',
    },
    how: {
      eyebrow: 'Dein Weg zu Rewards',
      titleLead: 'Von der Aufgabe bis zur',
      titleHighlight: 'Auszahlung',
      balanceLabel: 'Dein Gem-Konto',
      balanceSubPre: '5.000 Gems ≈',
      balanceSubEuro: '5 €',
      balanceSubPost: 'zur Auszahlung',
      collected: 'Kontostand',
      paidOut: 'ausgezahlt',
      redeemed: '✓ eingelöst',
      steps: [
        { title: 'Spiele spielen & Aufgaben erledigen', text: 'Für jede erledigte Aufgabe wandern Gems auf dein Konto.' },
        { title: 'Gems sammeln', text: 'Dein Guthaben wächst mit jeder Aktivität – jederzeit im Blick.' },
        { title: 'Belohnungen einlösen', text: 'Gems in echtes Geld, PayPal & Gift Cards verwandeln.' },
      ],
      tasks: [
        { label: 'Neues Spiel installieren', gain: 1000 },
        { label: 'Umfrage beantworten', gain: 750 },
        { label: 'Angebot abschließen', gain: 750 },
      ],
    },
    benefits: {
      label: 'Vorteile',
      title: 'Warum Claimo?',
      lead: 'Eine moderne Rewards-App, die sich fair, schnell und aufgeräumt anfühlt.',
      feature: {
        eyebrow: 'Highlight',
        title: 'Gems werden zu Geld',
        text: 'Sammle Gems und lös sie als echtes Geld, PayPal & Gift Cards ein.',
        amount: '5.000',
        amountSub: '= 5 €',
      },
      items: [
        { title: 'Moderne App', text: 'Schnell, klar, aufgeräumt.' },
        { title: 'Einfache Bedienung', text: 'In Sekunden startklar.' },
        { title: 'Faire Belohnungen', text: 'Transparent vergütet.' },
        { title: 'Sichere Anmeldung', text: 'Login mit Google, sicher.' },
        { title: 'Neue Spiele & Angebote', text: 'Ständig frischer Nachschub.' },
        { title: 'Schnelle Auszahlungen', text: 'Gems zügig in Cash.' },
        { title: 'Transparenter Fortschritt', text: 'Immer im Blick.' },
        { title: 'Regelmäßige Updates', text: 'Wird laufend besser.' },
      ],
    },
    games: {
      eyebrow: 'Spiele & Aufgaben',
      titleParts: ['Viele Spiele.', 'Gute Aufgaben.', 'Faire Gems.'],
      text: 'Claimo bündelt eine große Auswahl an Spielen und Angeboten, damit du immer neue Aufgaben findest. Die Aufgaben sind klar verständlich und werden fair mit Gems belohnt.',
      feedLabel: 'Gerade erledigt',
      feedNote: 'Beispielhafte Darstellung – keine Live-Aktivität.',
      feed: [
        { title: 'Spiel installiert', sub: 'Puzzle Quest', gain: 1000, color: 'violet' },
        { title: 'Umfrage beantwortet', sub: '2 Minuten', gain: 750, color: 'blue' },
        { title: 'Angebot abgeschlossen', sub: 'Trial gestartet', gain: 750, color: 'orange' },
        { title: 'Level 10 erreicht', sub: 'Coin Rush', gain: 500, color: 'green' },
        { title: 'Video angesehen', sub: '30 Sek.', gain: 120, color: 'teal' },
        { title: 'Daily Bonus', sub: 'Streak ×3', gain: 300, color: 'pink' },
      ],
      points: [
        {
          title: 'Große Spieleauswahl',
          text: 'Entdecke regelmäßig neue Games, App-Angebote und Aufgaben an einem Ort.',
        },
        {
          title: 'Gut bezahlte Aufgaben',
          text: 'Sammle Gems für Aktivitäten, die transparent beschrieben und fair vergütet sind.',
        },
        {
          title: 'Einfacher Fortschritt',
          text: 'Behalte im Blick, welche Aufgaben offen sind und welche Belohnungen näher rücken.',
        },
      ],
    },
    rewards: {
      eyebrow: 'Belohnungen',
      title: 'Deine Belohnungen warten auf dich',
      text: 'Wähle deine Lieblingsmarke und tausche deine verdienten Gems gegen echte Gift Cards und Guthaben ein.',
      redeem: 'einlösen',
      tags: ['Niedrige Auszahlungsgrenze', 'Schnelle Auszahlung', 'Cash und Gutscheine'],
    },
    app: {
      label: 'Screenshots',
      title: 'Ein Blick in die App',
      text: 'Sieh dir die ersten Screens der Claimo-App an: klare Navigation, schnelle Aufgabenübersicht und ein Rewards-Bereich, der sich direkt nach Fortschritt anfühlt.',
      galleryLabel: 'Screenshots und Mockups der Claimo App',
      alt1: 'Claimo App Startscreen',
      alt2: 'Claimo App Aufgabenübersicht',
      alt3: 'Claimo App Rewards Ansicht',
      tabs: ['Spielen', 'Shoppen', 'Profil'],
      captions: [
        'Spiele, Angebote und Aufgaben, die Gems bringen.',
        'Gems gegen Cash und Gutscheine einlösen.',
        'Level, XP und deine Reward-Streak im Blick.',
      ],
      chips: [
        { kind: 'gem', label: 'Daily Task', sub: 'Spielzeit', val: '+120' },
        { kind: 'paypal', label: 'PayPal', sub: 'ab 5.000', val: '5 €' },
        { kind: 'amazon', label: 'Amazon', sub: 'Gutschein', val: '5 €' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Häufig gestellte Fragen',
      lead: 'Kurz und ehrlich beantwortet. Findest du deine Frage nicht, sind wir nur eine Mail entfernt.',
      contactTitle: 'Noch Fragen offen?',
      contactText: 'Schreib uns – wir melden uns schnell zurück.',
      contactCta: 'Kontakt aufnehmen',
      items: [
        {
          q: 'Was ist Claimo?',
          a: 'Claimo ist eine Rewards-App, mit der Nutzer durch Spiele, Angebote und Umfragen Gems sammeln können.',
        },
        {
          q: 'Ist Claimo kostenlos?',
          a: 'Ja, Claimo ist kostenlos. Es gibt keine garantierten Einnahmen und keine unrealistischen Versprechen.',
        },
        {
          q: 'Wie kann ich Belohnungen verdienen?',
          a: 'Du erledigst Aktivitäten wie Spiele testen, Angebote abschließen oder Umfragen beantworten und sammelst dafür Gems.',
        },
        {
          q: 'Welche Belohnungen gibt es?',
          a: 'Verfügbar sind unter anderem PayPal, Amazon, Steam, Google Play, Nintendo eShop, PlayStation, Xbox und Apple Gift Cards.',
        },
        {
          q: 'Wo bekomme ich Claimo?',
          a: 'Claimo ist aktuell noch in Entwicklung und noch nicht im Google Play Store verfügbar. Wir bereiten den Launch vor.',
        },
        {
          q: 'Wie können Partner Kontakt aufnehmen?',
          a: 'Partner können uns per E-Mail erreichen:',
        },
      ],
    },
    contact: {
      eyebrow: 'Partnerschaft',
      title: 'Mit Claimo zusammenarbeiten',
      text: 'Claimo ist eine moderne Rewards-App, die sich aktuell in Entwicklung befindet. Wir bauen eine klare und nutzerfreundliche Plattform für Spiele, Angebote und Umfragen. Wir sind offen für die Zusammenarbeit mit Offerwall- und Survey-Partnern vor unserem offiziellen Google-Play-Launch.',
      highlights: [
        { title: 'Pre-Launch-Zugang', text: 'Werde Partner noch vor dem offiziellen Google-Play-Launch.' },
        { title: 'Offerwall & Surveys', text: 'Wir integrieren Offerwall- und Survey-Partner sauber in die App.' },
        { title: 'Faire, klare UX', text: 'Eine aufgeräumte Plattform, die Nutzer transparent vergütet.' },
      ],
      cardTitle: 'Sag Hallo',
      cta: 'Kontakt aufnehmen',
    },
    footer: {
      blurb: 'Rewards made simple. Spiele, sammle Gems und lös sie gegen echtes Geld & Gutscheine ein.',
      discover: 'Entdecken',
      features: 'Features',
      rewards: 'Rewards',
      faq: 'FAQ',
      how: 'So funktionierts',
      getApp: 'Hol dir Claimo',
      storeSmall: 'Bald verfügbar auf',
      install: 'Installieren',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt',
      copyright: '2026 claimo.',
      trademark:
        'Alle genannten Marken, Logos und Produktnamen (z. B. PayPal, Amazon, Steam, Google Play, Nintendo eShop, PlayStation, Xbox, Apple) sind Eigentum ihrer jeweiligen Inhaber. Ihre Darstellung dient nur der Veranschaulichung möglicher Belohnungen und bedeutet keine Partnerschaft mit oder Empfehlung durch die genannten Unternehmen.',
    },
  },
  en: {
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    switchLanguage: 'Choose language',
    nav: {
      benefits: 'Benefits',
      app: 'App preview',
      how: 'How it works',
      faq: 'FAQ',
      contact: 'Contact',
      install: 'Install',
    },
    hero: {
      line1: 'Play for free.',
      line2: 'Complete offers.',
      line3: 'Earn real rewards.',
      copy1: 'Collect points by playing games and completing offers — ',
      copy2: 'then redeem them for PayPal cash, gift cards and more.',
      storeSmall: 'Coming soon on',
      store: 'Google Play',
      learn: 'See how it works',
    },
    how: {
      eyebrow: 'Your path to rewards',
      titleLead: 'From task to',
      titleHighlight: 'payout',
      balanceLabel: 'Your Gem balance',
      balanceSubPre: '5,000 Gems ≈',
      balanceSubEuro: '€5',
      balanceSubPost: 'ready to redeem',
      collected: 'Balance',
      paidOut: 'paid out',
      redeemed: '✓ redeemed',
      steps: [
        { title: 'Play games & complete tasks', text: 'Every completed task drops Gems straight into your balance.' },
        { title: 'Collect Gems', text: 'Your balance grows with every activity — always in view.' },
        { title: 'Redeem rewards', text: 'Turn Gems into real cash, PayPal & gift cards.' },
      ],
      tasks: [
        { label: 'Install a new game', gain: 1000 },
        { label: 'Answer a survey', gain: 750 },
        { label: 'Complete an offer', gain: 750 },
      ],
    },
    benefits: {
      label: 'Benefits',
      title: 'Why Claimo?',
      lead: 'A modern rewards app that feels fair, fast and clutter-free.',
      feature: {
        eyebrow: 'Highlight',
        title: 'Turn Gems into cash',
        text: 'Collect Gems and redeem them for real cash, PayPal & gift cards.',
        amount: '5,000',
        amountSub: '= €5',
      },
      items: [
        { title: 'Modern app', text: 'Fast, clear, clutter-free.' },
        { title: 'Easy to use', text: 'Ready in seconds.' },
        { title: 'Fair rewards', text: 'Transparently paid out.' },
        { title: 'Secure sign-in', text: 'Sign in with Google, safely.' },
        { title: 'New games & offers', text: 'Fresh picks all the time.' },
        { title: 'Fast payouts', text: 'Gems to cash, quickly.' },
        { title: 'Transparent progress', text: 'Always in view.' },
        { title: 'Regular updates', text: 'Keeps getting better.' },
      ],
    },
    games: {
      eyebrow: 'Games & tasks',
      titleParts: ['Many games.', 'Great tasks.', 'Fair Gems.'],
      text: 'Claimo brings together a large selection of games and offers so you can always find new tasks. Tasks are easy to understand and fairly rewarded with Gems.',
      feedLabel: 'Just completed',
      feedNote: 'Illustrative example – not live activity.',
      feed: [
        { title: 'Game installed', sub: 'Puzzle Quest', gain: 1000, color: 'violet' },
        { title: 'Survey answered', sub: '2 minutes', gain: 750, color: 'blue' },
        { title: 'Offer completed', sub: 'Trial started', gain: 750, color: 'orange' },
        { title: 'Reached level 10', sub: 'Coin Rush', gain: 500, color: 'green' },
        { title: 'Watched a video', sub: '30 sec', gain: 120, color: 'teal' },
        { title: 'Daily bonus', sub: 'Streak ×3', gain: 300, color: 'pink' },
      ],
      points: [
        {
          title: 'Large game selection',
          text: 'Regularly discover new games, app offers and tasks in one place.',
        },
        {
          title: 'Well-paid tasks',
          text: 'Collect Gems for activities that are clearly described and fairly rewarded.',
        },
        {
          title: 'Simple progress',
          text: 'Keep track of open tasks and see which rewards are getting closer.',
        },
      ],
    },
    rewards: {
      eyebrow: 'Rewards',
      title: 'Your rewards are waiting',
      text: 'Choose your favorite brand and exchange your earned Gems for real gift cards and store credit.',
      redeem: 'redeem',
      tags: ['Low payout threshold', 'Fast payouts', 'Cash & gift cards'],
    },
    app: {
      label: 'Screenshots',
      title: 'A look inside the app',
      text: 'Take a first look at Claimo: clear navigation, a quick task overview and a rewards area that makes progress feel immediate.',
      galleryLabel: 'Screenshots and mockups of the Claimo app',
      alt1: 'Claimo app home screen',
      alt2: 'Claimo app task overview',
      alt3: 'Claimo app rewards view',
      tabs: ['Play', 'Redeem', 'Profile'],
      captions: [
        'Games, offers and tasks that earn Gems.',
        'Turn Gems into cash and gift cards.',
        'Track levels, XP and your reward streak.',
      ],
      chips: [
        { kind: 'gem', label: 'Daily task', sub: 'Play time', val: '+120' },
        { kind: 'paypal', label: 'PayPal', sub: 'from 5,000', val: '€5' },
        { kind: 'amazon', label: 'Amazon', sub: 'Gift card', val: '€5' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      lead: 'Answered honestly and to the point. Can’t find your question? We’re just an email away.',
      contactTitle: 'Still have questions?',
      contactText: 'Drop us a line — we’ll get back to you quickly.',
      contactCta: 'Get in touch',
      items: [
        {
          q: 'What is Claimo?',
          a: 'Claimo is a rewards app where users can collect Gems by playing games, completing offers and answering surveys.',
        },
        {
          q: 'Is Claimo free?',
          a: 'Yes, Claimo is free. There are no guaranteed earnings and no unrealistic promises.',
        },
        {
          q: 'How can I earn rewards?',
          a: 'You complete activities such as testing games, finishing offers or answering surveys and collect Gems for them.',
        },
        {
          q: 'Which rewards are available?',
          a: 'Available rewards include PayPal, Amazon, Steam, Google Play, Nintendo eShop, PlayStation, Xbox and Apple Gift Cards.',
        },
        {
          q: 'Where do I get Claimo?',
          a: 'Claimo is currently still in development and not yet available on the Google Play Store. We are preparing the launch.',
        },
        {
          q: 'How can partners get in touch?',
          a: 'Partners can reach us by email:',
        },
      ],
    },
    contact: {
      eyebrow: 'Partnership',
      title: 'Partner with Claimo',
      text: 'Claimo is a modern rewards app currently in development. We are building a clear and user-friendly platform for games, offers and surveys. We are open to working with offerwall and survey partners before our official Google Play launch.',
      highlights: [
        { title: 'Pre-launch access', text: 'Become a partner before the official Google Play launch.' },
        { title: 'Offerwall & surveys', text: 'We integrate offerwall and survey partners cleanly into the app.' },
        { title: 'Fair, clean UX', text: 'A tidy platform that rewards users transparently.' },
      ],
      cardTitle: 'Say hello',
      cta: 'Contact us',
    },
    footer: {
      blurb: 'Rewards made simple. Play, collect Gems and redeem them for real cash & gift cards.',
      discover: 'Explore',
      features: 'Features',
      rewards: 'Rewards',
      faq: 'FAQ',
      how: 'How it works',
      getApp: 'Get Claimo',
      storeSmall: 'Coming soon on',
      install: 'Install',
      imprint: 'Legal notice',
      privacy: 'Privacy',
      terms: 'Terms of Use',
      contact: 'Contact',
      copyright: '2026 claimo.',
      trademark:
        'All trademarks, logos and product names mentioned (e.g. PayPal, Amazon, Steam, Google Play, Nintendo eShop, PlayStation, Xbox, Apple) are the property of their respective owners. Their display is for illustration of possible rewards only and implies no partnership with or endorsement by these companies.',
    },
  },
} as const;

type Language = keyof typeof copy;
type Translation = (typeof copy)[Language];

const rewards: Array<{ name: string; logo: string; brand: string; sub: Record<Language, string> }> = [
  { name: 'PayPal', logo: '/paypal.png', brand: 'paypal', sub: { de: 'Echtes Geld', en: 'Real cash' } },
  { name: 'Amazon', logo: '/amazon.png', brand: 'amazon', sub: { de: 'Gift Card', en: 'Gift card' } },
  { name: 'Steam', logo: '/steam_logo.png', brand: 'steam', sub: { de: 'Guthaben', en: 'Wallet' } },
  { name: 'Google Play', logo: '/google-play-logo.png', brand: 'gplay', sub: { de: 'Guthaben', en: 'Credit' } },
  { name: 'Nintendo eShop', logo: '/nintendo.png', brand: 'nintendo', sub: { de: 'Gift Card', en: 'Gift card' } },
  { name: 'PlayStation', logo: '/playstation.png', brand: 'playstation', sub: { de: 'Store-Guthaben', en: 'Store credit' } },
  { name: 'Xbox', logo: '/xbox.png', brand: 'xbox', sub: { de: 'Gift Card', en: 'Gift card' } },
  { name: 'Apple', logo: '/apple.png', brand: 'apple', sub: { de: 'Gift Card', en: 'Gift card' } },
];
// UI-auswählbare Sprachen. Nur `de` und `en` sind wirklich übersetzt; jede andere
// Option zeigt englischen Inhalt (via `content`), bis sie übersetzt wird.
type UiLang = 'de' | 'en' | 'fr' | 'es' | 'it' | 'pt' | 'nl' | 'pl';

const languages: Array<{ code: UiLang; label: string; content: Language; translated: boolean }> = [
  { code: 'de', label: 'Deutsch', content: 'de', translated: true },
  { code: 'en', label: 'English', content: 'en', translated: true },
  { code: 'fr', label: 'Français', content: 'en', translated: false },
  { code: 'es', label: 'Español', content: 'en', translated: false },
  { code: 'it', label: 'Italiano', content: 'en', translated: false },
  { code: 'pt', label: 'Português', content: 'en', translated: false },
  { code: 'nl', label: 'Nederlands', content: 'en', translated: false },
  { code: 'pl', label: 'Polski', content: 'en', translated: false },
];

const uiLangCodes = languages.map((l) => l.code);
const isUiLang = (value: string | null | undefined): value is UiLang =>
  !!value && (uiLangCodes as string[]).includes(value);
const contentFor = (code: UiLang): Language => languages.find((l) => l.code === code)?.content ?? 'en';

// Erkennungsreihenfolge: gespeicherte Wahl → Sprache in URL → Browser-Sprache → English.
// Vollständig synchron (keine IP-Abfrage, keine externe Anfrage) — DSGVO-freundlich, kein Flackern.
const detectUiLang = (): UiLang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem('claimo-lang');
  if (isUiLang(stored)) return stored;
  const seg = window.location.pathname.split('/').filter(Boolean)[0];
  if (isUiLang(seg)) return seg;
  const preferred = window.navigator.languages ?? [window.navigator.language];
  for (const entry of preferred) {
    const primary = entry?.toLowerCase().split('-')[0];
    if (isUiLang(primary)) return primary;
  }
  return 'en';
};

const uiLangFromPath = (): UiLang | null => {
  if (typeof window === 'undefined') return null;
  const seg = window.location.pathname.split('/').filter(Boolean)[0];
  return isUiLang(seg) ? seg : null;
};

// Inline-SVG-Flaggen — Flag-Emojis werden auf Windows nicht gerendert, also zeichnen wir sie.
const flagPaths: Record<UiLang, ReactElement> = {
  de: <><rect width="20" height="14" fill="#000" /><rect y="4.667" width="20" height="4.667" fill="#DD0000" /><rect y="9.333" width="20" height="4.667" fill="#FFCE00" /></>,
  en: <><rect width="20" height="14" fill="#012169" /><path d="M0 0 20 14M20 0 0 14" stroke="#fff" strokeWidth="2.8" /><path d="M0 0 20 14M20 0 0 14" stroke="#C8102E" strokeWidth="1.1" /><path d="M10 0V14M0 7H20" stroke="#fff" strokeWidth="4" /><path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.1" /></>,
  fr: <><rect width="20" height="14" fill="#fff" /><rect width="6.667" height="14" fill="#0055A4" /><rect x="13.333" width="6.667" height="14" fill="#EF4135" /></>,
  es: <><rect width="20" height="14" fill="#AA151B" /><rect y="3.5" width="20" height="7" fill="#F1BF00" /></>,
  it: <><rect width="20" height="14" fill="#fff" /><rect width="6.667" height="14" fill="#009246" /><rect x="13.333" width="6.667" height="14" fill="#CE2B37" /></>,
  pt: <><rect width="20" height="14" fill="#DA291C" /><rect width="8" height="14" fill="#046A38" /><circle cx="8" cy="7" r="2.3" fill="#FFE900" stroke="#8f6b00" strokeWidth="0.5" /></>,
  nl: <><rect width="20" height="14" fill="#fff" /><rect width="20" height="4.667" fill="#AE1C28" /><rect y="9.333" width="20" height="4.667" fill="#21468B" /></>,
  pl: <><rect width="20" height="14" fill="#fff" /><rect y="7" width="20" height="7" fill="#DC143C" /></>,
};

function Flag({ code }: { code: UiLang }) {
  return (
    <span className="lang-flag" aria-hidden="true">
      <svg viewBox="0 0 20 14">{flagPaths[code]}</svg>
    </span>
  );
}

// Task icons reuse the app's own asset glyphs (game · survey · offer),
// tinted to the brand teal via a CSS mask.
const taskIconSrc = [playIcon, tasksIcon, shopIcon];

// Line icons for the benefit cards (index 2 renders the gem asset instead).
const benefitIcons = [
  'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2',
  'M5 12l4 4L19 6',
  '',
  'M12 3l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V7z',
  'M4 6h16M4 12h16M4 18h10',
  'M12 4v16M6 12l6-6 6 6',
  'M4 17l5-5 4 4 7-9',
  'M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4',
];

function HowItWorks({ t, language }: { t: Translation; language: Language }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const numberLocale = language === 'de' ? 'de-DE' : 'en-US';
  const fmtNum = (n: number) => n.toLocaleString(numberLocale);
  const euroInit = language === 'de' ? '0 €' : '€0';

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const locale = language === 'de' ? 'de-DE' : 'en-US';
    const fmt = (n: number) => Math.round(n).toLocaleString(locale);
    const euroStr = (n: number) => (language === 'de' ? `${fmt(n)} €` : `€${fmt(n)}`);
    const q = <T extends Element>(sel: string) => root.querySelector(sel) as T | null;
    const qa = <T extends Element>(sel: string) => Array.from(root.querySelectorAll(sel)) as T[];

    const MAX_GEMS = 5000;
    const balEl = q<HTMLSpanElement>('.how2-balance-num span');
    const numRow = q<HTMLElement>('.how2-balance-num');
    const balanceCard = q<HTMLElement>('.how2-balance');
    const fxLayer = q<HTMLElement>('.how2-fx');
    const meterFill = q<HTMLElement>('.how2-meter-fill');
    const track = q<HTMLElement>('.how2-track');
    const fill = q<HTMLElement>('.how2-fill');
    const comet = q<HTMLElement>('.how2-comet');
    const rows = qa<HTMLElement>('.how2-row');

    const timeouts: number[] = [];
    const observers: IntersectionObserver[] = [];
    let scrollRAF = 0;
    let ticking = false;

    // meter takes a 0..1 fraction
    const setMeter = (f: number) => {
      if (meterFill) meterFill.style.transform = `scaleX(${Math.max(0, Math.min(1, f))})`;
    };

    // reset state (handles a re-run after a language switch)
    qa<HTMLElement>('.how2-row, .how2-head, .how2-balance').forEach((el) => el.classList.remove('is-in'));
    qa<HTMLElement>('.how2-task').forEach((el) => el.classList.remove('is-done'));
    qa<HTMLElement>('[data-count]').forEach((el) => {
      delete el.dataset.done;
      el.textContent = el.dataset.kind === 'euro' ? euroStr(0) : '0';
    });
    if (balEl) balEl.textContent = '0';
    setMeter(0);
    if (fill && !reduce) fill.style.transform = 'scaleY(0)';

    // count-up for the per-row amounts (fires once when a row reveals)
    function animateCount(el: HTMLElement) {
      const target = parseFloat(el.dataset.count || '0');
      const format = el.dataset.kind === 'euro' ? euroStr : fmt;
      if (reduce) {
        el.textContent = format(target);
        return;
      }
      const start = performance.now();
      const dur = 1300;
      const frame = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = format(target * e);
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }

    // step 1: tick the task checkmarks off one-by-one — purely visual.
    // The gem balance itself is driven only by scroll position (see below),
    // so it can never race these animations or flicker.
    function runTasks(row: HTMLElement) {
      Array.from(row.querySelectorAll<HTMLElement>('.how2-task')).forEach((task, i) => {
        timeouts.push(window.setTimeout(() => task.classList.add('is-done'), reduce ? 0 : 450 + i * 760));
      });
    }

    // ── premium-combo flourish, fired once when scroll crosses a milestone ──
    const spawn = (cls: string, html?: string) => {
      const el = document.createElement('span');
      el.className = cls;
      if (html) el.innerHTML = html;
      fxLayer?.appendChild(el);
      return el;
    };
    const gemHtml = `<img src="${gem}" alt="" />`;

    function flyGem(fromX: number, fromY: number, toX: number, toY: number) {
      const g = spawn('how2-fly', gemHtml);
      g.style.left = `${fromX - 13}px`;
      g.style.top = `${fromY - 13}px`;
      g.style.transition = 'transform 0.6s cubic-bezier(.5,-0.2,.3,1), opacity 0.6s';
      requestAnimationFrame(() => {
        g.style.transform = `translate(${toX - fromX}px, ${toY - fromY}px) scale(0.5) rotate(160deg)`;
        g.style.opacity = '0.15';
      });
      timeouts.push(window.setTimeout(() => g.remove(), 660));
    }
    function ringAt(x: number, y: number) {
      const r = spawn('how2-ring');
      r.style.left = `${x}px`;
      r.style.top = `${y}px`;
      r.style.width = '54px';
      r.style.height = '54px';
      timeouts.push(window.setTimeout(() => r.remove(), 720));
    }
    function plusAt(x: number, y: number, text: string) {
      const p = spawn('how2-plus');
      p.textContent = text;
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      timeouts.push(window.setTimeout(() => p.remove(), 1120));
    }
    function sparkAt(x: number, y: number) {
      for (let i = 0; i < 6; i++) {
        const s = spawn('how2-spark', gemHtml);
        s.style.left = `${x - 6}px`;
        s.style.top = `${y - 6}px`;
        const ang = (Math.PI * 2 * i) / 6 + Math.random() * 0.6;
        const dist = 34 + Math.random() * 26;
        s.style.transition = 'transform 0.55s cubic-bezier(.16,.8,.3,1), opacity 0.55s';
        requestAnimationFrame(() => {
          s.style.transform = `translate(${Math.cos(ang) * dist}px, ${Math.sin(ang) * dist}px) scale(0.4)`;
          s.style.opacity = '0';
        });
        timeouts.push(window.setTimeout(() => s.remove(), 580));
      }
    }
    function fireCombo(gain: number) {
      if (reduce || !balanceCard || !numRow || !fxLayer) return;
      const cr = balanceCard.getBoundingClientRect();
      const nr = numRow.getBoundingClientRect();
      const nx = nr.left - cr.left + nr.width / 2;
      const ny = nr.top - cr.top + nr.height / 2;
      // a gem flies in from the card's right edge (the "task" side) into the balance
      flyGem(cr.width - 8, ny + 26, nx, ny);
      timeouts.push(
        window.setTimeout(() => {
          ringAt(nx, ny);
          sparkAt(nx, ny);
          plusAt(nx, ny - 8, `+${fmt(gain)}`);
          numRow.classList.add('is-hit');
          timeouts.push(window.setTimeout(() => numRow.classList.remove('is-hit'), 520));
        }, 560),
      );
    }

    const revealOnce = (el: Element | null, threshold: number, onShow?: () => void) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries, obs) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            el.classList.add('is-in');
            onShow?.();
            obs.disconnect();
          }),
        { threshold },
      );
      io.observe(el);
      observers.push(io);
    };

    revealOnce(q('.how2-head'), 0.4);
    revealOnce(q('.how2-balance'), 0.3);
    rows.forEach((row) => {
      const io = new IntersectionObserver(
        (entries, obs) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            row.classList.add('is-in');
            row.querySelectorAll<HTMLElement>('[data-count]').forEach((c) => {
              if (!c.dataset.done) {
                c.dataset.done = '1';
                animateCount(c);
              }
            });
            if (row.dataset.step === '1') runTasks(row);
            obs.unobserve(row);
          }),
        { threshold: 0.45 },
      );
      io.observe(row);
      observers.push(io);
    });

    // scroll-linked spine fill + comet head (pinned dot-1 → dot-3)
    function positionTrack() {
      if (!track || !rows.length) return;
      const first = rows[0];
      const last = rows[rows.length - 1];
      const top = first.offsetTop + first.offsetHeight / 2;
      const bottom = last.offsetTop + last.offsetHeight / 2;
      track.style.top = `${top}px`;
      track.style.bottom = 'auto';
      track.style.height = `${bottom - top}px`;
    }
    // The gem balance climbs in deterministic *surges*: scroll position maps
    // through fixed stops — hold flat, then a quick eased jump at each task /
    // step milestone. Being a pure function of scroll it never flickers, and
    // scrolling back up rewinds it exactly.
    // How far the gem balance is stretched across scroll — higher = slower,
    // less sensitive counting (the spine/comet stay 1:1 with scroll).
    const FILL_SPREAD = 1.6;
    const balanceStops: Array<[number, number]> = [
      [0.0, 0],
      [0.06, 0],
      [0.16, 1000],
      [0.27, 1000],
      [0.36, 1750],
      [0.47, 1750],
      [0.56, 2500],
      [0.67, 2500],
      [0.8, 5000],
      [1.0, 5000],
    ];
    const gemsForProgress = (p: number) => {
      const last = balanceStops[balanceStops.length - 1];
      if (p <= balanceStops[0][0]) return balanceStops[0][1];
      if (p >= last[0]) return last[1];
      for (let i = 0; i < balanceStops.length - 1; i++) {
        const [a0, v0] = balanceStops[i];
        const [a1, v1] = balanceStops[i + 1];
        if (p >= a0 && p <= a1) {
          if (v0 === v1) return v0;
          const e = 1 - Math.pow(1 - (p - a0) / (a1 - a0), 3);
          return v0 + (v1 - v0) * e;
        }
      }
      return last[1];
    };

    // Milestones fire the combo flourish once, when scroll crosses the point a
    // surge completes. A hysteresis band re-arms them (so a wiggle at the edge
    // can't spam), and priming on the first frame avoids a burst on load.
    const milestones = [
      { at: 0.16, gain: 1000 },
      { at: 0.36, gain: 750 },
      { at: 0.56, gain: 750 },
      { at: 0.8, gain: 2500 },
    ];
    const fired = milestones.map(() => false);
    let primed = false;

    // Spine fill + comet follow raw scroll (smooth path); balance/meter use the
    // surge curve above. Both are pure functions of scroll → nothing flickers.
    function updateProgress() {
      ticking = false;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const anchor = window.innerHeight * 0.82;
      // path (spine + comet) tracks raw scroll so the comet still threads the dots
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      // the gem balance fills over a longer scroll distance → less sensitive
      const fillProgress = Math.min(1, Math.max(0, (anchor - rect.top) / (rect.height * FILL_SPREAD)));
      const gems = gemsForProgress(fillProgress);
      if (balEl) balEl.textContent = fmt(gems);
      setMeter(gems / MAX_GEMS);
      if (fill) fill.style.transform = `scaleY(${progress})`;
      if (comet) {
        comet.style.top = `${progress * 100}%`;
        comet.style.opacity = progress > 0.01 && progress < 0.99 ? '1' : '0';
      }
      if (!primed) {
        milestones.forEach((m, i) => {
          fired[i] = fillProgress >= m.at;
        });
        primed = true;
      } else {
        milestones.forEach((m, i) => {
          if (!fired[i] && fillProgress >= m.at) {
            fired[i] = true;
            fireCombo(m.gain);
          } else if (fired[i] && fillProgress < m.at - 0.03) {
            fired[i] = false;
          }
        });
      }
    }
    const onScroll = () => {
      if (!ticking) {
        scrollRAF = requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
    const onResize = () => {
      positionTrack();
      if (!reduce) updateProgress();
    };

    positionTrack();
    window.addEventListener('resize', onResize);
    if (!reduce) {
      window.addEventListener('scroll', onScroll, { passive: true });
      updateProgress();
    } else {
      // reduced motion: show the completed, filled end state
      if (balEl) balEl.textContent = fmt(MAX_GEMS);
      setMeter(1);
      if (fill) fill.style.transform = 'scaleY(1)';
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      timeouts.forEach((id) => clearTimeout(id));
      cancelAnimationFrame(scrollRAF);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [language, t]);

  return (
    <section id="learn-more" className="how2" aria-labelledby="how" ref={rootRef}>
      <div className="how2-gemfield" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <img className="g" src={gem} alt="" key={i} />
        ))}
      </div>

      <div className="shell">
        <div className="how2-head">
          <span className="how2-eyebrow">{t.how.eyebrow}</span>
          <h2 id="how">
            {t.how.titleLead} <span className="shine">{t.how.titleHighlight}</span>
          </h2>
        </div>

        <div className="how2-grid">
          <aside className="how2-balance">
            <span className="how2-balance-label">{t.how.balanceLabel}</span>
            <div className="how2-balance-num">
              <img className="gem" src={gem} alt="" />
              <span>0</span>
            </div>
            <div className="how2-meter"><div className="how2-meter-fill" /></div>
            <p className="how2-balance-sub">
              {t.how.balanceSubPre} <b>{t.how.balanceSubEuro}</b> {t.how.balanceSubPost}
            </p>
            <div className="how2-fx" aria-hidden="true" />
          </aside>

          <div className="how2-tl">
            <div className="how2-track" aria-hidden="true">
              <div className="how2-fill" />
              <div className="how2-comet"><img className="gem" src={gem} alt="" /></div>
            </div>

            <article className="how2-row how2-row--tasks" data-step="1">
              <div className="how2-dot">1</div>
              <div className="how2-body">
                <h3>{t.how.steps[0].title}</h3>
                <p>{t.how.steps[0].text}</p>
                <div className="how2-tasklist">
                  {t.how.tasks.map((task, i) => (
                    <div className="how2-task" data-gain={task.gain} key={task.label}>
                      <span className="how2-check">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l5 5L20 6" /></svg>
                      </span>
                      <span
                        className="how2-task-icon"
                        style={{ WebkitMaskImage: `url(${taskIconSrc[i]})`, maskImage: `url(${taskIconSrc[i]})` }}
                      />
                      <span className="how2-task-label">{task.label}</span>
                      <span className="how2-task-gain"><img className="gem" src={gem} alt="" />+{fmtNum(task.gain)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="how2-row" data-step="2">
              <div className="how2-dot">2</div>
              <div className="how2-body">
                <h3>{t.how.steps[1].title}</h3>
                <p>{t.how.steps[1].text}</p>
              </div>
              <div className="how2-amt">
                <b><img className="gem" src={gem} alt="" /><span data-count="5000" data-kind="gems">0</span></b>
                <small>{t.how.collected}</small>
              </div>
            </article>

            <article className="how2-row" data-step="3">
              <div className="how2-dot">3</div>
              <div className="how2-body">
                <h3>{t.how.steps[2].title}</h3>
                <p>{t.how.steps[2].text}</p>
              </div>
              <div className="how2-amt how2-amt--gold">
                <b><span data-count="5" data-kind="euro">{euroInit}</span></b>
                <small>{t.how.paidOut}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rewards({ t, language }: { t: Translation; language: Language }) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            obs.disconnect();
          }
        }),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const r = t.rewards;
  const deckBrands = [rewards[1], rewards[4], rewards[0], rewards[5], rewards[3]];

  const card = (reward: (typeof rewards)[number], key: string) => (
    <article className={`giftcard giftcard--${reward.brand}`} key={key}>
      <span className="giftcard__logo"><img src={reward.logo} alt="" /></span>
      <div className="giftcard__foot">
        <span className="giftcard__meta">
          <strong>{reward.name}</strong>
          <small>{reward.sub[language]}</small>
        </span>
        <span className="giftcard__redeem"><img src={gem} alt="" />{r.redeem}</span>
      </div>
      <img className="giftcard__mark" src={reward.logo} alt="" aria-hidden="true" />
    </article>
  );

  return (
    <section id="rewards" className="rewards2" aria-labelledby="rewards-title" ref={ref}>
      <div className="shell rewards2-top">
        <div className="rewards2-copy">
          <span className="rewards2-eyebrow rv">{r.eyebrow}</span>
          <h2 id="rewards-title" className="rv" style={{ transitionDelay: '70ms' }}>{r.title}</h2>
          <p className="rv" style={{ transitionDelay: '140ms' }}>{r.text}</p>
          <div className="rewards2-tags rv" style={{ transitionDelay: '200ms' }}>
            {r.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <ul className="sr-only">
            {rewards.map((b) => <li key={b.name}>{b.name} – {b.sub[language]}</li>)}
          </ul>
        </div>

        <div className="rewards2-deck rv" style={{ transitionDelay: '120ms' }} aria-hidden="true">
          {deckBrands.map((b, i) => card(b, `deck-${i}`))}
        </div>
      </div>
    </section>
  );
}

function Benefits({ t }: { t: Translation }) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            obs.disconnect();
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const b = t.benefits;
  return (
    <section id="features" className="benefits2" aria-labelledby="features-title" ref={ref}>
      <div className="shell">
        <div className="benefits2-head">
          <span className="benefits2-eyebrow rv">{b.label}</span>
          <h2 id="features-title" className="rv" style={{ transitionDelay: '70ms' }}>
            {b.title}
          </h2>
          <p className="benefits2-lead rv" style={{ transitionDelay: '140ms' }}>
            {b.lead}
          </p>
        </div>

        <div className="benefits2-bento">
          <article className="benefits2-feat rv" style={{ transitionDelay: '120ms' }}>
            <span className="benefits2-feat__eyebrow">{b.feature.eyebrow}</span>
            <h3>{b.feature.title}</h3>
            <p>{b.feature.text}</p>
            <div className="benefits2-feat__amount">
              <img className="gem" src={gem} alt="" />
              {b.feature.amount}
              <small>{b.feature.amountSub}</small>
            </div>
            <div className="benefits2-feat__meter"><i /></div>
          </article>

          {b.items.map((item, i) => (
            <article className="benefits2-card rv" style={{ transitionDelay: `${180 + i * 60}ms` }} key={item.title}>
              <span className="benefits2-card__ic">
                {i === 2 ? (
                  <img className="gem" src={gem} alt="" />
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={benefitIcons[i]} /></svg>
                )}
              </span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const gameFloatTiles: Array<{ pos: string; color: string; gain?: number }> = [
  { pos: 'a', color: 'violet', gain: 250 },
  { pos: 'b', color: 'orange' },
  { pos: 'c', color: 'blue', gain: 500 },
  { pos: 'd', color: 'pink' },
  { pos: 'e', color: 'green', gain: 750 },
  { pos: 'f', color: 'teal' },
];

function Games({ t, language }: { t: Translation; language: Language }) {
  const ref = useRef<HTMLElement | null>(null);
  const fmt = (n: number) => n.toLocaleString(language === 'de' ? 'de-DE' : 'en-US');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            obs.disconnect();
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const g = t.games;
  const feedLoop = [...g.feed, ...g.feed];

  return (
    <section id="games" className="games2" aria-labelledby="games-title" ref={ref}>
      <div className="shell">
        <div className="games2-head">
          <span className="games2-eyebrow rv">{g.eyebrow}</span>
          <h2 id="games-title" className="games2-title rv" style={{ transitionDelay: '70ms' }}>
            <span className="c1">{g.titleParts[0]}</span> <span className="c2">{g.titleParts[1]}</span>{' '}
            <span className="c3">{g.titleParts[2]}</span>
          </h2>
          <p className="games2-lead rv" style={{ transitionDelay: '140ms' }}>{g.text}</p>
        </div>

        <div className="games2-grid">
          <div className="games2-visual rv" style={{ transitionDelay: '120ms' }}>
            <span className="games2-glow" aria-hidden="true" />
            <figure className="games2-phone">
              <img src="/screen1.png" alt="" />
            </figure>
            {gameFloatTiles.map((tile) => (
              <div className={`games2-float games2-float--${tile.pos}`} key={tile.pos} aria-hidden="true">
                <span className={`games2-tile tile-${tile.color}`} />
                {tile.gain != null && (
                  <span className="games2-badge">
                    <img className="gem" src={gem} alt="" />+{tile.gain}
                  </span>
                )}
              </div>
            ))}
          </div>

          <aside className="games2-side">
            <div className="games2-feed rv" style={{ transitionDelay: '160ms' }}>
              <div className="games2-feed__label"><span className="games2-feed__dot" />{g.feedLabel}</div>
              <p className="games2-feed__note">{g.feedNote}</p>
              <div className="games2-feed__mask">
                <div className="games2-feed__list">
                  {feedLoop.map((f, i) => (
                    <div className="games2-frow" key={i}>
                      <span className={`games2-frow__ic tile-${f.color}`} aria-hidden="true" />
                      <div className="games2-frow__body">
                        <h4>{f.title}</h4>
                        <small>{f.sub}</small>
                      </div>
                      <span className="games2-frow__earn">
                        <img className="gem" src={gem} alt="" />+{fmt(f.gain)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="games2-points">
              {g.points.map((point, i) => (
                <div className="games2-pt rv" style={{ transitionDelay: `${220 + i * 70}ms` }} key={point.title}>
                  <span className="games2-pt__chk">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l4 4L19 6" /></svg>
                  </span>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// Screenshots — an interactive 3D coverflow. The centre phone rotates through
// Play · Redeem · Profile (auto-advancing, pausing on hover/focus), flanked by
// two floating reward cards. A glint sweeps the centre phone each time it
// settles, and a teal glow bleeds up into the rewards section above for a
// seamless transition.
function AppShowcase({ t }: { t: Translation }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const a = t.app;
  const screens = ['/screen1.png', '/screen2.png', '/screen3.png'];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            obs.disconnect();
          }
        }),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // auto-advance the centre screen; re-armed on each change so a manual pick
  // still gets a full dwell before the rotation resumes.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % screens.length), 3800);
    return () => window.clearInterval(id);
  }, [paused, active, screens.length]);

  const slotClass = (i: number) =>
    i === active ? 'app2-phone is-center' : i === (active + 1) % 3 ? 'app2-phone is-right' : 'app2-phone is-left';

  return (
    <section id="app-preview" className="app2" aria-labelledby="app2-title" ref={rootRef}>
      <span className="app2-glow" aria-hidden="true" />
      <div className="shell">
        <div className="app2-head">
          <span className="app2-eyebrow rv">{a.label}</span>
          <h2 id="app2-title" className="rv" style={{ transitionDelay: '70ms' }}>{a.title}</h2>
          <p className="rv" style={{ transitionDelay: '140ms' }}>{a.text}</p>
        </div>

        <div
          className="app2-stage rv"
          style={{ transitionDelay: '120ms' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <span className="app2-stagegrid" aria-hidden="true" />

          <div className="app2-deck">
            {screens.map((src, i) => (
              <div className={slotClass(i)} key={src} aria-hidden="true" onClick={() => setActive(i)}>
                <span className="app2-phone__scr"><img src={src} alt="" /></span>
              </div>
            ))}

            <div className="app2-orbit" aria-hidden="true">
              {a.chips.map((c, i) => (
                <span className={`app2-chip app2-chip--${i + 1} app2-chip--${c.kind}`} key={c.label}>
                  <span className="app2-chip__ic">
                    <img src={c.kind === 'gem' ? gem : `/${c.kind}.png`} alt="" />
                  </span>
                  <span className="app2-chip__meta">
                    <strong>{c.label}</strong>
                    <small>{c.sub}</small>
                  </span>
                  <span className="app2-chip__val">
                    {c.kind === 'gem' && <img src={gem} alt="" />}
                    {c.val}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="app2-controls">
            <div className="app2-tabs" role="tablist" aria-label={a.galleryLabel}>
              {a.tabs.map((label, i) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`app2-tab${i === active ? ' is-on' : ''}`}
                  key={label}
                  onClick={() => setActive(i)}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="app2-cap" key={active}>{a.captions[active]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ — a two-column layout: a sticky intro column with a contact card beside a
// premium single-open accordion (numbered gems, chevron toggle, smooth
// grid-rows expand). Only one question is open at a time.
function FaqSection({ t }: { t: Translation }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            obs.disconnect();
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const f = t.faq;
  const lastIndex = f.items.length - 1;

  return (
    <section id="faq" className="faq2" aria-labelledby="faq-title" ref={rootRef}>
      <div className="shell faq2-grid">
        <aside className="faq2-aside">
          <span className="faq2-eyebrow rv"><img className="gem" src={gem} alt="" />{f.eyebrow}</span>
          <h2 id="faq-title" className="rv" style={{ transitionDelay: '70ms' }}>{f.title}</h2>
          <p className="faq2-lead rv" style={{ transitionDelay: '130ms' }}>{f.lead}</p>
          <div className="faq2-contact rv" style={{ transitionDelay: '190ms' }}>
            <b><span className="faq2-contact__ic"><img className="gem" src={gem} alt="" /></span>{f.contactTitle}</b>
            <p>{f.contactText}</p>
            <a className="faq2-contact__btn" href="mailto:contact@claimo-app.com">
              {f.contactCta}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </aside>

        <div className="faq2-list">
          {f.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div className={`faq2-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <button
                  type="button"
                  id={`faq-q-${index}`}
                  className="faq2-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${index}`}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="faq2-ix">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq2-qt">{item.q}</span>
                  <span className="faq2-tog" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                  </span>
                </button>
                <div className="faq2-ans" id={`faq-a-${index}`} role="region" aria-labelledby={`faq-q-${index}`}>
                  <div className="faq2-ans__in">
                    <p>
                      {item.a}
                      {index === lastIndex && <> <a href="mailto:contact@claimo-app.com">contact@claimo-app.com</a>.</>}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Icons for the partner highlights (clock · layers · shield-check).
const partnerHiIcons = [
  <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></>,
  <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 12l9 5 9-5M3 17l9 5 9-5" /></>,
  <><path d="M12 3l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V7z" /><path d="M9 12l2 2 4-4" /></>,
];

// Partner CTA — a framed panel with a slowly rotating teal glow border: on the
// left the pitch plus three highlights, on the right a compact contact card.
function PartnerSection({ t }: { t: Translation }) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            obs.disconnect();
          }
        }),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const c = t.contact;

  return (
    <section id="contact" className="partner2" aria-labelledby="partner-title" ref={rootRef}>
      <div className="shell">
        <div className="partner2-panel rv">
          <div className="partner2-inner">
            <div className="partner2-grid">
              <div className="partner2-copy">
                <span className="partner2-eyebrow"><img className="gem" src={gem} alt="" />{c.eyebrow}</span>
                <h2 id="partner-title">{c.title}</h2>
                <p>{c.text}</p>
                <ul className="partner2-hi">
                  {c.highlights.map((h, i) => (
                    <li key={h.title}>
                      <span className="partner2-hi__ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">{partnerHiIcons[i]}</svg>
                      </span>
                      <div>
                        <b>{h.title}</b>
                        <small>{h.text}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="partner2-card">
                <span className="partner2-card__ic"><img className="gem" src={gem} alt="" /></span>
                <b>{c.cardTitle}</b>
                <a className="partner2-card__mail" href="mailto:contact@claimo-app.com">contact@claimo-app.com</a>
                <a className="partner2-card__btn" href="mailto:contact@claimo-app.com">
                  {c.cta}
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [uiLang, setUiLang] = useState<UiLang>(detectUiLang);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [languageMenuSuppressed, setLanguageMenuSuppressed] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const contentLocale: Language = contentFor(uiLang);
  const t = copy[contentLocale];
  const navLinks = [
    { href: '#how', label: t.nav.how },
    { href: '#features', label: t.nav.benefits },
    { href: '#app-preview', label: t.nav.app },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];
  const indicatedIndex = hoverIndex !== null ? hoverIndex : activeIndex;
  const closeMobileNav = () => setMobileNavOpen(false);
  const selectLanguage = (nextLang: UiLang) => {
    setUiLang(nextLang);
    window.localStorage.setItem('claimo-lang', nextLang);
    setLanguageMenuOpen(false);
    setLanguageMenuSuppressed(true);
    closeMobileNav();
    // URL zeigt immer auf eine echte Seite (/de oder /en) — kein 404 bei Fallback-Sprachen.
    const nextPath = `/${contentFor(nextLang)}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
  };

  useEffect(() => {
    document.documentElement.lang = uiLang;
  }, [uiLang]);

  useEffect(() => {
    const syncFromPath = () => {
      const fromPath = uiLangFromPath();
      if (fromPath) setUiLang(fromPath);
    };
    window.addEventListener('popstate', syncFromPath);
    return () => window.removeEventListener('popstate', syncFromPath);
  }, []);

  useEffect(() => {
    if (!mobileNavOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        closeMobileNav();
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [mobileNavOpen]);

  // Sprachmenü schließt sich beim Klick/Tap außerhalb (zuverlässig auch auf Touch,
  // wo mouseLeave nicht feuert) — ein Klick auf den Button selbst schließt es NICHT.
  useEffect(() => {
    if (!languageMenuOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
        setLanguageMenuSuppressed(false);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [languageMenuOpen]);

  // Frost-Zustand + aktiver Abschnitt (Scroll-Spy) für die klebende Navbar.
  useEffect(() => {
    const sectionIds = ['how', 'features', 'app-preview', 'faq', 'contact'];
    let frame = 0;
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const line = (navRef.current?.offsetHeight ?? 90) + 24;
      let current = -1;
      for (let i = 0; i < sectionIds.length; i += 1) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= line) current = i;
      }
      setActiveIndex(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Gleitenden Indikator unter den aktiven/gehoverten Link schieben.
  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    const target = indicatedIndex >= 0 ? linkRefs.current[indicatedIndex] : null;
    if (!target) {
      indicator.style.opacity = '0';
      return;
    }
    indicator.style.opacity = '1';
    indicator.style.width = `${target.offsetWidth}px`;
    indicator.style.transform = `translateX(${target.offsetLeft}px)`;
  }, [indicatedIndex, contentLocale]);

  useEffect(() => {
    const reposition = () => {
      const indicator = indicatorRef.current;
      const target = indicatedIndex >= 0 ? linkRefs.current[indicatedIndex] : null;
      if (!indicator || !target) return;
      indicator.style.width = `${target.offsetWidth}px`;
      indicator.style.transform = `translateX(${target.offsetLeft}px)`;
    };
    window.addEventListener('resize', reposition);
    return () => window.removeEventListener('resize', reposition);
  }, [indicatedIndex]);

  return (
    <>
      <div className="falling-gems" aria-hidden="true">
        <img src={gem} alt="" />
        <img src={gem} alt="" />
        <img src={gem} alt="" />
        <img src={gem} alt="" />
        <img src={gem} alt="" />
        <img src={gem} alt="" />
        <img src={gem} alt="" />
        <img src={gem} alt="" />
      </div>

      <header className={`simple-nav${scrolled ? ' simple-nav--scrolled' : ''}`} ref={navRef}>
        <a className="simple-nav__brand" href="/">
          <img className="simple-nav__logo" src={logo} alt="Claimo" />
        </a>

        <button
          className={`simple-nav__toggle${mobileNavOpen ? ' simple-nav__toggle--open' : ''}`}
          type="button"
          aria-label={mobileNavOpen ? t.menuClose : t.menuOpen}
          aria-expanded={mobileNavOpen}
          aria-controls="main-navigation"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`simple-nav__links${mobileNavOpen ? ' simple-nav__links--open' : ''}`}
          aria-label="Main navigation"
        >
          <span className="simple-nav__indicator" ref={indicatorRef} aria-hidden="true" />
          {navLinks.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              className={index === indicatedIndex ? 'simple-nav__link--on' : undefined}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={closeMobileNav}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="simple-nav__install simple-nav__install--desktop" href="#install">
          {t.nav.install}
        </a>
        <div
          ref={languageMenuRef}
          className={`simple-nav__language-menu${languageMenuOpen ? ' simple-nav__language-menu--open' : ''}`}
          onMouseEnter={() => {
            if (!languageMenuSuppressed) setLanguageMenuOpen(true);
          }}
          onMouseLeave={() => {
            setLanguageMenuOpen(false);
            setLanguageMenuSuppressed(false);
          }}
          onFocus={() => {
            if (!languageMenuSuppressed) setLanguageMenuOpen(true);
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setLanguageMenuOpen(false);
              setLanguageMenuSuppressed(false);
            }
          }}
        >
          <button
            className="simple-nav__language"
            type="button"
            aria-label={t.switchLanguage}
            aria-haspopup="true"
            aria-expanded={languageMenuOpen}
            onClick={() => {
              setLanguageMenuSuppressed(false);
              setLanguageMenuOpen(true);
            }}
          >
            <Flag code={uiLang} />
            <span>{uiLang.toUpperCase()}</span>
            <svg className="simple-nav__language-caret" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="simple-nav__language-dropdown" role="menu">
            {languages.map((item) => (
              <button
                className={item.code === uiLang ? 'simple-nav__language-option simple-nav__language-option--active' : 'simple-nav__language-option'}
                type="button"
                role="menuitem"
                key={item.code}
                onClick={() => selectLanguage(item.code)}
              >
                <Flag code={item.code} />
                <span className="simple-nav__language-name">{item.label}</span>
                {item.translated
                  ? <b>{item.code.toUpperCase()}</b>
                  : <span className="simple-nav__language-soon">{contentLocale === 'de' ? 'bald' : 'soon'}</span>}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="flow">
      <div className="flow-glow" aria-hidden="true">
        <span className="fg fg-a" />
        <span className="fg fg-b" />
        <span className="fg fg-c" />
        <span className="fg fg-d" />
        <span className="fg fg-e" />
        <span className="fg fg-f" />
      </div>

      <main className="hero">
        <section className="hero__shell" aria-label="Claimo Rewards">
          <div className="hero__copy">
            <h1>
              <span>{t.hero.line1}</span>
              <span>{t.hero.line2}</span>
              <span className="hero__accent">{t.hero.line3}</span>
            </h1>
            <p>
              <span>{t.hero.copy1}</span>
              <span>{t.hero.copy2}</span>
            </p>
            <div className="hero__actions">
              <span className="hero__store" role="img" aria-label={`${t.hero.storeSmall} ${t.hero.store}`}>
                <img src="/google-play.png" alt="" aria-hidden="true" />
                <span className="hero__store-text">
                  <small>{t.hero.storeSmall}</small>
                  <strong>{t.hero.store}</strong>
                </span>
              </span>
              <a className="hero__learn" href="#how">
                <span className="hero__learn-label">{t.hero.learn}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="hero__stats" aria-label={contentLocale === 'de' ? 'Claimo Vorteile' : 'Claimo benefits'}>
              <div><b>EU</b><small>{contentLocale === 'de' ? 'Datenschutz' : 'Data protection'}</small></div>
              <div><b>{contentLocale === 'de' ? 'ab 5 €' : 'from €5'}</b><small>{contentLocale === 'de' ? 'Auszahlung' : 'Payout'}</small></div>
              <div><b>Cash</b><small>{contentLocale === 'de' ? '& Gutscheine' : '& gift cards'}</small></div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />
            <figure className="hero__phone">
              <img src="/screen1.png" alt="" aria-hidden="true" />
            </figure>
            <div className="hero__float hero__float--paypal">
              <a className="giftcard giftcard--paypal hero__reward-card hero__reward-card--paypal" href="#rewards">
                <span className="giftcard__logo"><img src="/paypal.png" alt="" aria-hidden="true" /></span>
                <span className="giftcard__foot">
                  <span className="giftcard__meta">
                    <strong>PayPal</strong>
                  </span>
                </span>
                <img className="giftcard__mark" src="/paypal.png" alt="" aria-hidden="true" />
              </a>
            </div>
            <div className="hero__float hero__float--amazon">
              <a className="giftcard giftcard--amazon hero__reward-card hero__reward-card--amazon" href="#rewards">
                <span className="giftcard__logo"><img src="/amazon.png" alt="" aria-hidden="true" /></span>
                <span className="giftcard__foot">
                  <span className="giftcard__meta">
                    <strong>Amazon</strong>
                  </span>
                </span>
                <img className="giftcard__mark" src="/amazon.png" alt="" aria-hidden="true" />
              </a>
            </div>
            <div className="hero__gem-burst">
              <img src={gem} alt="" />
              <b>+750</b>
            </div>
          </div>
        </section>
      </main>

      <HowItWorks t={t} language={contentLocale} />

      <Benefits t={t} />

      <Games t={t} language={contentLocale} />
      </div>

      <Rewards t={t} language={contentLocale} />

      <AppShowcase t={t} />

      <FaqSection t={t} />

      <PartnerSection t={t} />

      <footer className="site-footer">
        <span className="site-footer__glow" aria-hidden="true" />
        <div className="shell">
          <div className="site-footer__main">
            <div className="site-footer__brand">
              <a className="simple-nav__brand" href="/">
                <img className="simple-nav__logo" src={logo} alt="Claimo" />
              </a>
              <p>{t.footer.blurb}</p>
              <a className="site-footer__email" href="mailto:contact@claimo-app.com">
                contact@claimo-app.com
              </a>
            </div>

            <nav className="site-footer__col" aria-label="Footer navigation">
              <strong>{t.footer.discover}</strong>
              <a href="#features">{t.footer.features}</a>
              <a href="#rewards">{t.footer.rewards}</a>
              <a href="#faq">{t.footer.faq}</a>
              <a href="#how">{t.footer.how}</a>
            </nav>

            <div className="site-footer__col site-footer__get">
              <strong>{t.footer.getApp}</strong>
              <a className="footer-store" href="#install">
                <img src="/google-play.png" alt="" />
                <span>
                  <small>{t.footer.storeSmall}</small>
                  <b>Google Play</b>
                </span>
              </a>
            </div>
          </div>

          <div className="site-footer__bar">
            <small className="site-footer__copyright">{t.footer.copyright}</small>
            <nav className="site-footer__legal" aria-label="Legal navigation">
              <a href="/impressum.html">{t.footer.imprint}</a>
              <a href="/datenschutz.html">{t.footer.privacy}</a>
              <a href="/nutzungsbedingungen.html">{t.footer.terms}</a>
              <a href="mailto:contact@claimo-app.com">{t.footer.contact}</a>
            </nav>
          </div>

          <p className="site-footer__trademark">{t.footer.trademark}</p>
        </div>
      </footer>
    </>
  );
}
