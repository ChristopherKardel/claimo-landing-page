import { Fragment, useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';

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
      line1: 'Spiele kostenlose',
      line2: 'Spiele. Erledige',
      line3: 'Aufgaben.',
      earn: 'Verdiene',
      line4: 'Belohnungen.',
      copy1: 'Spiele kostenlos, sammle Punkte und löse sie gegen Geld,',
      copy2: 'Gutscheine und weitere Belohnungen ein.',
      store: 'Coming Soon on Google Play',
      learn: 'Learn More',
    },
    how: {
      title: 'Wie es funktioniert',
      steps: [
        {
          title: 'Spiele spielen & Aufgaben erledigen',
          text: 'Entdecke neue Spiele, teste Apps, beantworte Umfragen und schließe einfache Angebote ab.',
        },
        {
          title: 'Gems sammeln',
          text: 'Verdiene Gems für jede abgeschlossene Aktivität und behalte deinen Fortschritt jederzeit im Blick.',
        },
        {
          title: 'Belohnungen einlösen',
          text: 'Tausche deine gesammelten Gems gegen Geld, Gutscheine und weitere Belohnungen ein.',
        },
      ],
    },
    benefits: {
      label: 'Vorteile',
      title: 'Warum Claimo?',
      items: [
        'Moderne App',
        'Einfache Bedienung',
        'Faire Belohnungen',
        'Sichere Anmeldung',
        'Neue Spiele und Angebote',
        'Schnelle Auszahlungen',
        'Transparenter Fortschritt',
        'Regelmäßige Updates',
      ],
    },
    games: {
      title: 'Viele Spiele. Gute Aufgaben. Faire Gems.',
      text: 'Claimo wird eine große Auswahl an Spielen und Angeboten bündeln, damit du immer neue Aufgaben findest. Die Aufgaben sollen klar verständlich sein und fair mit Gems belohnt werden.',
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
      title: 'Deine Belohnungen warten auf dich',
      text: 'Wähle deine Lieblingsbelohnung und tausche deine verdienten Gems einfach ein.',
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
          a: 'Ja, Claimo ist kostenlos geplant. Es gibt keine garantierten Einnahmen und keine unrealistischen Versprechen.',
        },
        {
          q: 'Wie kann ich Belohnungen verdienen?',
          a: 'Du erledigst Aktivitäten wie Spiele testen, Angebote abschließen oder Umfragen beantworten und sammelst dafür Gems.',
        },
        {
          q: 'Welche Belohnungen sind geplant?',
          a: 'Geplant sind unter anderem PayPal, Amazon, Steam, Google Play, Nintendo eShop, PlayStation, Xbox und Apple Gift Cards.',
        },
        {
          q: 'Wann erscheint Claimo?',
          a: 'Claimo befindet sich aktuell in Entwicklung. Der Google-Play-Launch ist geplant, aber noch nicht veröffentlicht.',
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
      line1: 'Play Free',
      line2: 'Games. Complete',
      line3: 'Offers.',
      earn: 'Earn',
      line4: 'Real Rewards.',
      copy1: 'Play for free, collect points and redeem them for cash,',
      copy2: 'gift cards and more rewards.',
      store: 'Coming Soon on Google Play',
      learn: 'Learn More',
    },
    how: {
      title: 'How it works',
      steps: [
        {
          title: 'Play games & complete tasks',
          text: 'Discover new games, test apps, answer surveys and complete simple offers.',
        },
        {
          title: 'Collect Gems',
          text: 'Earn Gems for every completed activity and keep track of your progress at any time.',
        },
        {
          title: 'Redeem rewards',
          text: 'Exchange your collected Gems for cash, gift cards and more rewards.',
        },
      ],
    },
    benefits: {
      label: 'Benefits',
      title: 'Why Claimo?',
      items: [
        'Modern app',
        'Easy to use',
        'Fair rewards',
        'Secure sign-in',
        'New games and offers',
        'Fast payouts',
        'Transparent progress',
        'Regular updates',
      ],
    },
    games: {
      title: 'Many games. Great tasks. Fair Gems.',
      text: 'Claimo will bring together a large selection of games and offers so you can always find new tasks. Tasks should be easy to understand and fairly rewarded with Gems.',
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
      title: 'Your rewards are waiting',
      text: 'Choose your favorite reward and easily redeem your earned Gems.',
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
          a: 'Yes, Claimo is planned to be free. There are no guaranteed earnings and no unrealistic promises.',
        },
        {
          q: 'How can I earn rewards?',
          a: 'You complete activities such as testing games, finishing offers or answering surveys and collect Gems for them.',
        },
        {
          q: 'Which rewards are planned?',
          a: 'Planned rewards include PayPal, Amazon, Steam, Google Play, Nintendo eShop, PlayStation, Xbox and Apple Gift Cards.',
        },
        {
          q: 'When will Claimo launch?',
          a: 'Claimo is currently in development. A Google Play launch is planned, but it has not been released yet.',
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

const rewardLabels = ['PayPal', 'Amazon', 'Steam', 'Google Play', 'Nintendo eShop', 'PlayStation Store', 'Xbox Gift Card', 'Apple Gift Card'];
const rewardLogos = ['/paypal.png', '/amazon.png', '/steam_logo.png', '/google-play-logo.png', '/nintendo.png', '/playstation.png', '/xbox.png', '/apple.png'];
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
        <img src="/gems.png" alt="" />
        <img src="/gems.png" alt="" />
        <img src="/gems.png" alt="" />
        <img src="/gems.png" alt="" />
        <img src="/gems.png" alt="" />
        <img src="/gems.png" alt="" />
        <img src="/gems.png" alt="" />
        <img src="/gems.png" alt="" />
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
        <h1>
          <span>{t.hero.line1}</span>
          <span>{t.hero.line2}</span>
          <span className="hero__line-gap">
            {t.hero.line3 && <>{t.hero.line3} </>}<span className="hero__accent">{t.hero.earn}</span>
          </span>
          <span className="hero__accent">{t.hero.line4}</span>
        </h1>
        <p>
          <span>{t.hero.copy1}</span>
          <span>{t.hero.copy2}</span>
        </p>
        <div className="hero__actions">
          <span className="hero__playstore" aria-disabled="true">
            {t.hero.store}
            <img src="/google-play.png" alt="" />
          </span>
          <a className="hero__learn" href="#how">
            {t.hero.learn}
          </a>
        </div>
      </main>

      <section id="learn-more" className="how-section shell" aria-labelledby="how">
        <h2 id="how">{t.how.title}</h2>
        <div className="how-steps">
          {t.how.steps.map((step, index) => (
            <Fragment key={step.title}>
              <article className="how-card" key={step.title}>
                <span className="how-card__icon">
                  {index === 0 && <img src="/play-icon.png" alt="" />}
                  {index === 1 && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.5 3.5h11L22 9l-10 12L2 9l4.5-5.5Z" />
                      <path d="M2 9h20M8.5 9 12 21l3.5-12M8.5 9l3.5-5.5L15.5 9" />
                    </svg>
                  )}
                  {index === 2 && <img src="/shop-icon.png" alt="" />}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>

              {index < 2 && (
                <div className={`how-arrow-slot how-arrow-slot--${index === 0 ? 'one' : 'two'}`} aria-hidden="true">
                  <img src="/arrows.png" alt="" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <section id="features" className="benefits-section" aria-labelledby="features-title">
        <div className="benefits-tab">
          <div className="benefits-tab__header">
            <span>{t.benefits.label}</span>
            <h2 id="features-title">{t.benefits.title}</h2>
          </div>
          <ul className="benefits-list">
            {t.benefits.items.map((item) => <li key={item}>{item}</li>)}
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
          <h2 id="rewards-title">{t.rewards.title}</h2>
          <p>{t.rewards.text}</p>

          <div className="reward-cards">
            {rewardLabels.map((label, index) => (
              <article className="reward-card" key={label}>
                <span className="reward-card__logo"><img src={rewardLogos[index]} alt="" /></span>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="rewards-mockup-card" aria-hidden="true">
          <img className="rewards-screenshot" src="/screen2.png" alt="" />
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
