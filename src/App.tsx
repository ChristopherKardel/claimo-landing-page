import { useEffect, useRef, useState } from 'react';
import gem from '../assets/gem.svg';
import logo from '../assets/website-logo.png';
import { Gamepad, Gem as GemIcon, Gift, Bolt, Shield, Trophy, Eye } from './components/Icons';

const howIcons = [Gamepad, GemIcon, Gift];
const benefitIcons = [Gamepad, GemIcon, Bolt, Shield, Trophy, Eye];

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
      eyebrow: 'Rewards-App · In Entwicklung',
      line1: 'Spiele. Sammle Gems.',
      line2: 'Echte Belohnungen.',
      lead: 'Claimo verwandelt Spiele, Angebote und Umfragen in Gems — die du gegen PayPal-Geld, Gutscheine und mehr einlöst. Kostenlos, für Android.',
      storeSmall: 'Coming soon',
      store: 'Google Play',
      learn: "So funktioniert's",
      trust: ['Kostenlos', 'Kein Kauf nötig', 'Sichere Anmeldung'],
      cardRewardTitle: 'Belohnung erhalten',
      cardRewardSub: 'Tagesaufgabe fertig',
      cardBalanceTitle: '335 Gems',
      cardBalanceSub: 'Bereit zum Einlösen',
    },
    how: {
      eyebrow: "So funktioniert's",
      title: 'In drei Schritten zu echten Belohnungen',
      intro: 'Spielen, Gems sammeln, einlösen — so einfach verwandelst du Freizeit in echte Rewards.',
      steps: [
        {
          title: 'Spielen & Aufgaben erledigen',
          text: 'Entdecke neue Spiele, teste Apps, beantworte Umfragen und schließe einfache Angebote ab.',
          tag: 'Gems verdienen',
        },
        {
          title: 'Gems sammeln',
          text: 'Verdiene Gems für jede Aktivität und behalte deinen Fortschritt jederzeit im Blick.',
          tag: 'Fortschritt wächst',
        },
        {
          title: 'Belohnungen einlösen',
          text: 'Tausche deine Gems gegen PayPal-Geld, Gutscheine und weitere Belohnungen ein.',
          tag: 'Auszahlung',
        },
      ],
    },
    benefits: {
      label: 'Vorteile',
      title: 'Warum Claimo?',
      intro: 'Eine faire, moderne Rewards-App — gebaut für echten Mehrwert statt leerer Versprechen.',
      items: [
        { title: 'Modern & einfach', text: 'Klares, schnelles Design für Android — sofort verständlich, ohne Schnickschnack.' },
        { title: 'Faire Belohnungen', text: 'Transparente Gems für jede Aufgabe — keine versteckten Regeln, keine leeren Versprechen.' },
        { title: 'Schnelle Auszahlungen', text: 'Löse deine Gems zügig gegen PayPal-Geld und beliebte Gutscheine ein.' },
        { title: 'Sichere Anmeldung', text: 'Geschützter Login und sorgsamer Umgang mit deinen Daten.' },
        { title: 'Neue Spiele & Angebote', text: 'Ständig frische Games, Apps und Umfragen — dir geht der Nachschub nie aus.' },
        { title: 'Transparenter Fortschritt', text: 'Sieh jederzeit, welche Aufgaben offen sind und welche Belohnung näher rückt.' },
      ],
    },
    games: {
      title: 'Viele Spiele. Gute Aufgaben. Faire Gems.',
      text: 'Claimo bündelt eine große Auswahl an Spielen und Angeboten, damit du immer neue Aufgaben findest. Die Aufgaben sind klar verständlich und werden fair mit Gems belohnt.',
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
      eyebrow: 'Rewards app · In development',
      line1: 'Play. Collect Gems.',
      line2: 'Real rewards.',
      lead: 'Claimo turns the games, offers and surveys you enjoy into Gems — then lets you cash them out for PayPal money, gift cards and more. Free to use, built for Android.',
      storeSmall: 'Coming soon',
      store: 'Google Play',
      learn: 'See how it works',
      trust: ['Free for users', 'No purchase required', 'Secure sign-in'],
      cardRewardTitle: 'Reward earned',
      cardRewardSub: 'Daily task complete',
      cardBalanceTitle: '335 Gems',
      cardBalanceSub: 'Ready to redeem',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three steps to real rewards',
      intro: 'Play, collect Gems, redeem — that’s how you turn spare time into real rewards.',
      steps: [
        {
          title: 'Play & complete tasks',
          text: 'Discover new games, test apps, answer surveys and complete simple offers.',
          tag: 'Earn Gems',
        },
        {
          title: 'Collect Gems',
          text: 'Earn Gems for every activity and keep track of your progress at any time.',
          tag: 'Progress grows',
        },
        {
          title: 'Redeem rewards',
          text: 'Exchange your Gems for PayPal money, gift cards and more rewards.',
          tag: 'Payout',
        },
      ],
    },
    benefits: {
      label: 'Benefits',
      title: 'Why Claimo?',
      intro: 'A fair, modern rewards app — built for real value, not empty promises.',
      items: [
        { title: 'Modern & simple', text: 'Clean, fast design for Android — instantly clear, no clutter.' },
        { title: 'Fair rewards', text: 'Transparent Gems for every task — no hidden rules, no empty promises.' },
        { title: 'Fast payouts', text: 'Redeem your Gems quickly for PayPal money and popular gift cards.' },
        { title: 'Secure sign-in', text: 'Protected login and careful handling of your data.' },
        { title: 'New games & offers', text: 'Constantly fresh games, apps and surveys — you’ll never run out.' },
        { title: 'Transparent progress', text: 'See at any time which tasks are open and which reward is getting closer.' },
      ],
    },
    games: {
      title: 'Many games. Great tasks. Fair Gems.',
      text: 'Claimo brings together a large selection of games and offers so you can always find new tasks. Tasks are easy to understand and fairly rewarded with Gems.',
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

      <main className="hero">
        <div className="shell hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              {t.hero.eyebrow}
            </span>
            <h1>
              <span>{t.hero.line1}</span>
              <span className="hero__accent">{t.hero.line2}</span>
            </h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="hero__actions">
              <a className="hero__store" href="#install">
                <img src="/google-play.png" alt="" />
                <span className="hero__store-text">
                  <small>{t.hero.storeSmall}</small>
                  <strong>{t.hero.store}</strong>
                </span>
              </a>
              <a className="hero__learn" href="#how">
                {t.hero.learn}
              </a>
            </div>
            <ul className="hero__trust">
              {t.hero.trust.map((item) => (
                <li key={item}>
                  <span className="hero__trust-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <span className="hero__ring hero__ring--outer" />
            <span className="hero__ring hero__ring--inner" />
            <span className="hero__glow" />
            <img className="hero__phone" src="/screen1.png" alt="" />

            <div className="hero__float hero__float--reward">
              <span className="hero__float-badge">+120</span>
              <div>
                <strong>{t.hero.cardRewardTitle}</strong>
                <small>{t.hero.cardRewardSub}</small>
              </div>
            </div>

            <div className="hero__float hero__float--balance">
              <img src={gem} alt="" />
              <div>
                <strong>{t.hero.cardBalanceTitle}</strong>
                <small>{t.hero.cardBalanceSub}</small>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="learn-more" className="how-section shell" aria-labelledby="how">
        <div className="how-head">
          <span className="how-eyebrow">{t.how.eyebrow}</span>
          <h2 id="how">{t.how.title}</h2>
          <p className="how-intro">{t.how.intro}</p>
        </div>

        <ol className="how-steps">
          {t.how.steps.map((step, index) => {
            const Icon = howIcons[index];
            return (
              <li className="how-card" key={step.title}>
                <span className="how-card__num">{String(index + 1).padStart(2, '0')}</span>
                <span className="how-card__icon" aria-hidden="true"><Icon /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="how-card__tag"><GemIcon className="how-card__tag-gem" />{step.tag}</span>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="features" className="benefits-section" aria-labelledby="features-title">
        <div className="benefits-inner shell">
          <div className="benefits-head">
            <span className="benefits-eyebrow">{t.benefits.label}</span>
            <h2 id="features-title">{t.benefits.title}</h2>
            <p className="benefits-intro">{t.benefits.intro}</p>
          </div>
          <ul className="benefits-grid">
            {t.benefits.items.map((item, index) => {
              const Icon = benefitIcons[index];
              return (
                <li className="benefit-card" key={item.title}>
                  <span className="benefit-card__icon" aria-hidden="true"><Icon /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="games" className="games-section shell" aria-labelledby="games-title">
        <div className="games-mockup-card" aria-hidden="true">
          <img className="games-screenshot" src="/screen1.png" alt="" />
        </div>

        <div className="games-copy">
          <h2 id="games-title">{t.games.title}</h2>
          <p>{t.games.text}</p>

          <div className="games-points">
            {t.games.points.map((point) => (
              <article key={point.title}>
                <span>✓</span>
                <strong>{point.title}</strong>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rewards" className="rewards-section shell" aria-labelledby="rewards-title">
        <div className="rewards-copy">
          <span className="rewards-eyebrow">{t.rewards.eyebrow}</span>
          <h2 id="rewards-title">{t.rewards.title}</h2>
          <p>{t.rewards.text}</p>

          <div className="rewards-tags">
            {t.rewards.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className="giftcard-grid">
          {rewards.map((reward) => (
            <article className={`giftcard giftcard--${reward.brand}`} key={reward.name}>
              <span className="giftcard__logo"><img src={reward.logo} alt="" /></span>
              <div className="giftcard__foot">
                <span className="giftcard__meta">
                  <strong>{reward.name}</strong>
                  <small>{reward.sub[language]}</small>
                </span>
                <span className="giftcard__redeem"><img src={gem} alt="" />{t.rewards.redeem}</span>
              </div>
              <img className="giftcard__mark" src={reward.logo} alt="" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

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
