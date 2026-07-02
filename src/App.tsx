import { useEffect, useRef, useState } from 'react';
import gem from '../assets/gem.svg';
import logo from '../assets/logo.png';
import playIcon from '../assets/play-icon.png';
import tasksIcon from '../assets/tasks-icon.png';
import shopIcon from '../assets/shop-icon.png';

const copy = {
  de: {
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    switchLanguage: 'Sprache auf Englisch wechseln',
    nav: {
      benefits: 'Vorteile',
      app: 'App-Einblick',
      how: 'So funktionierts',
      faq: 'Häufig gestellte Fragen',
      contact: 'Kontakt',
      install: 'Installieren',
    },
    hero: {
      line1: 'Spiele kostenlose Spiele.',
      line2: 'Erledige Aufgaben.',
      line3: 'Verdiene Belohnungen.',
      copy1: 'Spiele kostenlos, sammle Punkte und löse sie gegen Geld,',
      copy2: 'Gutscheine und weitere Belohnungen ein.',
      storeSmall: 'Bald verfügbar auf',
      store: 'Google Play',
      learn: 'So funktionierts',
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
      tags: ['Sofort einlösbar', 'Schnelle Auszahlung', 'PayPal & Gutscheine'],
    },
    app: {
      label: 'Screenshots',
      title: 'Ein Blick in die App',
      text: 'Sieh dir die ersten Screens der Claimo-App an: klare Navigation, schnelle Aufgabenübersicht und ein Rewards-Bereich, der sich direkt nach Fortschritt anfühlt.',
      galleryLabel: 'Screenshots und Mockups der Claimo App',
      alt1: 'Claimo App Startscreen',
      alt2: 'Claimo App Aufgabenübersicht',
      alt3: 'Claimo App Rewards Ansicht',
    },
    faq: {
      title: 'Häufig gestellte Fragen',
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
          a: 'Claimo ist kostenlos im Google Play Store verfügbar. Lade die App herunter und leg direkt los.',
        },
        {
          q: 'Wie können Partner Kontakt aufnehmen?',
          a: 'Partner können uns per E-Mail erreichen:',
        },
      ],
    },
    contact: {
      title: 'Mit Claimo zusammenarbeiten',
      text: 'Claimo ist eine moderne Rewards-App, die sich aktuell in Entwicklung befindet. Wir bauen eine klare und nutzerfreundliche Plattform für Spiele, Angebote und Umfragen. Wir sind offen für die Zusammenarbeit mit Offerwall- und Survey-Partnern vor unserem offiziellen Google-Play-Launch.',
      cta: 'Kontakt aufnehmen',
    },
    footer: {
      slogan: 'Rewards made simple.',
      discover: 'Entdecken',
      features: 'Features',
      rewards: 'Rewards',
      faq: 'FAQ',
      contact: 'Contact',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      imprint: 'Impressum',
      storeSmall: 'Coming soon on',
      install: 'Installieren',
      copyright: '© 2026 Claimo Studio. All rights reserved.',
    },
  },
  en: {
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    switchLanguage: 'Switch language to German',
    nav: {
      benefits: 'Benefits',
      app: 'App preview',
      how: 'How it works',
      faq: 'FAQ',
      contact: 'Contact',
      install: 'Install',
    },
    hero: {
      line1: 'Play free games.',
      line2: 'Complete offers.',
      line3: 'Earn real rewards.',
      copy1: 'Play for free, collect points and redeem them for cash,',
      copy2: 'gift cards and more rewards.',
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
      tags: ['Instantly redeemable', 'Fast payouts', 'PayPal & gift cards'],
    },
    app: {
      label: 'Screenshots',
      title: 'A look inside the app',
      text: 'Take a first look at Claimo: clear navigation, a quick task overview and a rewards area that makes progress feel immediate.',
      galleryLabel: 'Screenshots and mockups of the Claimo app',
      alt1: 'Claimo app home screen',
      alt2: 'Claimo app task overview',
      alt3: 'Claimo app rewards view',
    },
    faq: {
      title: 'Frequently asked questions',
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
          a: 'Claimo is free to download on the Google Play Store. Get the app and start right away.',
        },
        {
          q: 'How can partners get in touch?',
          a: 'Partners can reach us by email:',
        },
      ],
    },
    contact: {
      title: 'Partner with Claimo',
      text: 'Claimo is a modern rewards app currently in development. We are building a clear and user-friendly platform for games, offers and surveys. We are open to working with offerwall and survey partners before our official Google Play launch.',
      cta: 'Contact us',
    },
    footer: {
      slogan: 'Rewards made simple.',
      discover: 'Explore',
      features: 'Features',
      rewards: 'Rewards',
      faq: 'FAQ',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      imprint: 'Imprint',
      storeSmall: 'Coming soon on',
      install: 'Install',
      copyright: '© 2026 Claimo Studio. All rights reserved.',
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
const languages: Array<{ code: Language; label: string }> = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
];

const getLanguageFromPath = (): Language => {
  if (typeof window === 'undefined') return 'de';
  const firstPathPart = window.location.pathname.split('/').filter(Boolean)[0];
  return firstPathPart === 'en' ? 'en' : 'de';
};

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
  const loop = [...rewards, ...rewards];

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

      <div className="rewards2-carousel" aria-hidden="true">
        <div className="rewards2-row">{loop.map((b, i) => card(b, `r1-${i}`))}</div>
        <div className="rewards2-row rewards2-row--rev">{[...loop].reverse().map((b, i) => card(b, `r2-${i}`))}</div>
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

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(getLanguageFromPath);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [languageMenuSuppressed, setLanguageMenuSuppressed] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const t = copy[language];
  const closeMobileNav = () => setMobileNavOpen(false);
  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setLanguageMenuOpen(false);
    setLanguageMenuSuppressed(true);
    closeMobileNav();
    if (window.location.pathname !== `/${nextLanguage}`) {
      window.history.pushState(null, '', `/${nextLanguage}`);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const syncLanguageFromPath = () => setLanguage(getLanguageFromPath());
    window.addEventListener('popstate', syncLanguageFromPath);
    return () => window.removeEventListener('popstate', syncLanguageFromPath);
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

      <header className="simple-nav" ref={navRef}>
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
          <a href="#how" onClick={closeMobileNav}>{t.nav.how}</a>
          <a href="#features" onClick={closeMobileNav}>{t.nav.benefits}</a>
          <a href="#app-preview" onClick={closeMobileNav}>{t.nav.app}</a>
          <a href="#faq" onClick={closeMobileNav}>{t.nav.faq}</a>
          <a href="#contact" onClick={closeMobileNav}>{t.nav.contact}</a>
        </nav>

        <a className="simple-nav__install simple-nav__install--desktop" href="#install">
          {t.nav.install}
        </a>
        <div
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
              setLanguageMenuOpen((open) => !open);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12s1.1 6.6 3.3 9" />
            </svg>
            <span>{language.toUpperCase()}</span>
          </button>
          <div className="simple-nav__language-dropdown" role="menu">
            {languages.map((item) => (
              <button
                className={item.code === language ? 'simple-nav__language-option simple-nav__language-option--active' : 'simple-nav__language-option'}
                type="button"
                role="menuitem"
                key={item.code}
                onClick={() => selectLanguage(item.code)}
              >
                <span>{item.label}</span>
                <b>{item.code.toUpperCase()}</b>
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
                {t.hero.learn}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="hero__stats" aria-label={language === 'de' ? 'Claimo Vorteile' : 'Claimo benefits'}>
              <div><b>10+</b><small>{language === 'de' ? 'Einlösemöglichkeiten' : 'Redemption options'}</small></div>
              <div><b>3</b><small>{language === 'de' ? 'Wege zu Gems' : 'Ways to earn'}</small></div>
              <div><b>100%</b><small>{language === 'de' ? 'Kostenlos' : 'Free to use'}</small></div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />
            <figure className="hero__phone">
              <img src="/screen1.png" alt="" aria-hidden="true" />
            </figure>
            <a className="giftcard giftcard--paypal hero__reward-card hero__reward-card--paypal" href="#rewards">
              <span className="giftcard__logo"><img src="/paypal.png" alt="" aria-hidden="true" /></span>
              <span className="giftcard__foot">
                <span className="giftcard__meta">
                  <strong>PayPal</strong>
                  <small>Cash</small>
                </span>
              </span>
              <img className="giftcard__mark" src="/paypal.png" alt="" aria-hidden="true" />
            </a>
            <a className="giftcard giftcard--amazon hero__reward-card hero__reward-card--amazon" href="#rewards">
              <span className="giftcard__logo"><img src="/amazon.png" alt="" aria-hidden="true" /></span>
              <span className="giftcard__foot">
                <span className="giftcard__meta">
                  <strong>Amazon</strong>
                  <small>Gift Card</small>
                </span>
              </span>
              <img className="giftcard__mark" src="/amazon.png" alt="" aria-hidden="true" />
            </a>
            <div className="hero__gem-burst">
              <img src={gem} alt="" />
              <b>+750</b>
            </div>
          </div>
        </section>
      </main>

      <HowItWorks t={t} language={language} />

      <Benefits t={t} />

      <Games t={t} language={language} />
      </div>

      <Rewards t={t} language={language} />

      <section id="app-preview" className="app-look-section shell" aria-labelledby="app-look-title">
        <div className="app-look-copy">
          <span>{t.app.label}</span>
          <h2 id="app-look-title">{t.app.title}</h2>
          <p>{t.app.text}</p>
        </div>

        <div className="app-look-gallery" aria-label={t.app.galleryLabel}>
          <figure className="app-look-phone app-look-phone--main">
            <img src="/screen1.png" alt={t.app.alt1} />
          </figure>
          <figure className="app-look-phone app-look-phone--screen app-look-phone--one">
            <img src="/screen2.png" alt={t.app.alt2} />
          </figure>
          <figure className="app-look-phone app-look-phone--screen app-look-phone--two">
            <img src="/screen3.png" alt={t.app.alt3} />
          </figure>
        </div>
      </section>

      <section id="faq" className="faq-section shell" aria-labelledby="faq-title">
        <h2 id="faq-title">{t.faq.title}</h2>
        <div className="faq-items">
          {t.faq.items.map((item, index) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <div className="faq-item__answer">
                <p>
                  {item.a}
                  {index === t.faq.items.length - 1 && <> <a href="mailto:contact@claimo-app.com">contact@claimo-app.com</a>.</>}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="partner-cta shell" aria-labelledby="partner-title">
        <div>
          <h2 id="partner-title">{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>
        <a href="mailto:contact@claimo-app.com">{t.contact.cta}</a>
      </section>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <div className="site-footer__brand">
            <a className="simple-nav__brand" href="/">
              <img className="simple-nav__logo" src={logo} alt="Claimo" />
            </a>
            <p>{t.footer.slogan}</p>
            <a className="site-footer__email" href="mailto:contact@claimo-app.com">
              contact@claimo-app.com
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <strong>{t.footer.discover}</strong>
            <a href="#features">{t.footer.features}</a>
            <a href="#rewards">{t.footer.rewards}</a>
            <a href="#faq">{t.footer.faq}</a>
            <a href="#contact">{t.footer.contact}</a>
          </nav>
          <nav aria-label="Legal navigation">
            <strong>{t.footer.legal}</strong>
            <a href="/datenschutz.html">{t.footer.privacy}</a>
            <a href="/impressum.html">{t.footer.imprint}</a>
          </nav>
          <div className="footer-actions">
            <span className="footer-actions__spacer" aria-hidden="true" />
            <div className="footer-actions__buttons">
              <a className="footer-playstore" href="#install">
                <img src="/google-play.png" alt="" />
                <span>
                  <small>{t.footer.storeSmall}</small>
                  Google Play
                </span>
              </a>
              <a className="simple-nav__install" href="#install">
                {t.footer.install}
              </a>
            </div>
          </div>
          <small className="site-footer__copyright">{t.footer.copyright}</small>
        </div>
      </footer>
    </>
  );
}
