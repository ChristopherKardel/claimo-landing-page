export default function App() {
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

      <header className="simple-nav">
        <a className="simple-nav__brand" href="/">
          <span>Claim</span>
          <span className="simple-nav__brand-accent">o</span>
        </a>

        <nav className="simple-nav__links" aria-label="Main navigation">
          <a href="#features">Vorteile</a>
          <a href="#how">So funktioniert's</a>
          <a href="#faq">Häufig gestellte Fragen</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <a className="simple-nav__install" href="#install">
          Installieren
        </a>
      </header>

      <main className="hero">
        <h1>
          <span>Spiele kostenlose</span>
          <span>Spiele. Erledige</span>
          <span className="hero__line-gap">
            Aufgaben. <span className="hero__accent">Verdiene</span>
          </span>
          <span className="hero__accent">Belohnungen.</span>
        </h1>
        <p>
          <span>Spiele kostenlos, sammle Punkte und löse sie gegen Geld,</span>
          <span>Gutscheine und weitere Belohnungen ein.</span>
        </p>
        <div className="hero__actions">
          <a className="hero__playstore" href="#install">
            Coming Soon on Google Play
            <img src="/google-play.png" alt="" />
          </a>
          <a className="hero__learn" href="#learn-more">
            Learn More
          </a>
        </div>
      </main>

      <section id="learn-more" className="how-section shell" aria-labelledby="how-title">
        <h2 id="how-title">Wie es funktioniert</h2>
        <div className="how-steps">
          <article className="how-card">
            <span className="how-card__icon">
              <img src="/play-icon.png" alt="" />
            </span>
            <h3>Spiele spielen & Aufgaben erledigen</h3>
            <p>Entdecke neue Spiele, teste Apps, beantworte Umfragen und schließe einfache Angebote ab.</p>
          </article>

          <div className="how-arrow-slot how-arrow-slot--one" aria-hidden="true">
            <img src="/arrows.png" alt="" />
          </div>

          <article className="how-card">
            <span className="how-card__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 3.5h11L22 9l-10 12L2 9l4.5-5.5Z" />
                <path d="M2 9h20M8.5 9 12 21l3.5-12M8.5 9l3.5-5.5L15.5 9" />
              </svg>
            </span>
            <h3>Gems sammeln</h3>
            <p>Verdiene Gems für jede abgeschlossene Aktivität und behalte deinen Fortschritt jederzeit im Blick.</p>
          </article>

          <div className="how-arrow-slot how-arrow-slot--two" aria-hidden="true">
            <img src="/arrows.png" alt="" />
          </div>

          <article className="how-card">
            <span className="how-card__icon">
              <img src="/shop-icon.png" alt="" />
            </span>
            <h3>Belohnungen einlösen</h3>
            <p>Tausche deine gesammelten Gems gegen Geld, Gutscheine und weitere Belohnungen ein.</p>
          </article>
        </div>
      </section>

      <section id="rewards" className="rewards-section shell" aria-labelledby="rewards-title">
        <div className="rewards-copy">
          <h2 id="rewards-title">Deine Belohnungen warten auf dich</h2>
          <p>Wähle deine Lieblingsbelohnung und tausche deine verdienten Gems einfach ein.</p>

          <div className="reward-cards">
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/paypal.png" alt="" /></span>
              <span>PayPal</span>
            </article>
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/amazon.png" alt="" /></span>
              <span>Amazon</span>
            </article>
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/steam_logo.png" alt="" /></span>
              <span>Steam</span>
            </article>
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/google-play-logo.png" alt="" /></span>
              <span>Google Play</span>
            </article>
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/nintendo.png" alt="" /></span>
              <span>Nintendo eShop</span>
            </article>
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/playstation.png" alt="" /></span>
              <span>PlayStation Store</span>
            </article>
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/xbox.png" alt="" /></span>
              <span>Xbox Gift Card</span>
            </article>
            <article className="reward-card">
              <span className="reward-card__logo"><img src="/apple.png" alt="" /></span>
              <span>Apple Gift Card</span>
            </article>
          </div>
        </div>

        <div className="rewards-mockup-card" aria-hidden="true">
          <div className="rewards-phone">
            <div className="rewards-phone__speaker" />
            <div className="rewards-phone__screen">
              <span>Rewards</span>
              <strong>Coming Soon</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section shell" aria-labelledby="faq-title">
        <h2 id="faq-title">Häufig gestellte Fragen</h2>
        <div className="faq-items">
          <details className="faq-item">
            <summary>Was ist Claimo?</summary>
            <div className="faq-item__answer">
              <p>Claimo ist eine Rewards-App, mit der Nutzer durch Spiele, Angebote und Umfragen Gems sammeln können.</p>
            </div>
          </details>
          <details className="faq-item">
            <summary>Ist Claimo kostenlos?</summary>
            <div className="faq-item__answer">
              <p>Ja, Claimo ist kostenlos geplant. Es gibt keine garantierten Einnahmen und keine unrealistischen Versprechen.</p>
            </div>
          </details>
          <details className="faq-item">
            <summary>Wie kann ich Belohnungen verdienen?</summary>
            <div className="faq-item__answer">
              <p>Du erledigst Aktivitäten wie Spiele testen, Angebote abschließen oder Umfragen beantworten und sammelst dafür Gems.</p>
            </div>
          </details>
          <details className="faq-item">
            <summary>Welche Belohnungen sind geplant?</summary>
            <div className="faq-item__answer">
              <p>Geplant sind unter anderem PayPal, Amazon, Steam, Google Play, Nintendo eShop, PlayStation, Xbox und Apple Gift Cards.</p>
            </div>
          </details>
          <details className="faq-item">
            <summary>Wann erscheint Claimo?</summary>
            <div className="faq-item__answer">
              <p>Claimo befindet sich aktuell in Entwicklung. Der Google-Play-Launch ist geplant, aber noch nicht veröffentlicht.</p>
            </div>
          </details>
          <details className="faq-item">
            <summary>Wie können Partner Kontakt aufnehmen?</summary>
            <div className="faq-item__answer">
              <p>Partner können uns per E-Mail erreichen: <a href="mailto:contact@claimo-app.com">contact@claimo-app.com</a>.</p>
            </div>
          </details>
        </div>
      </section>

      <section id="contact" className="partner-cta shell" aria-labelledby="partner-title">
        <div>
          <h2 id="partner-title">Mit Claimo zusammenarbeiten</h2>
          <p>
            Claimo ist eine moderne Rewards-App, die sich aktuell in Entwicklung befindet.
            Wir bauen eine klare und nutzerfreundliche Plattform für Spiele, Angebote und
            Umfragen. Wir sind offen für die Zusammenarbeit mit Offerwall- und
            Survey-Partnern vor unserem offiziellen Google-Play-Launch.
          </p>
        </div>
        <a href="mailto:contact@claimo-app.com">Kontakt aufnehmen</a>
      </section>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <div className="site-footer__brand">
            <a className="simple-nav__brand" href="/">
              <span>Claim</span>
              <span className="simple-nav__brand-accent">o</span>
            </a>
            <p>Rewards made simple.</p>
          </div>
          <nav aria-label="Footer navigation">
            <strong>Entdecken</strong>
            <a href="#features">Features</a>
            <a href="#rewards">Rewards</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <nav aria-label="Legal navigation">
            <strong>Rechtlichen</strong>
            <a href="/datenschutz.html">Datenschutz</a>
            <a href="/impressum.html">Impressum</a>
          </nav>
          <div className="footer-actions">
            <span className="footer-actions__spacer" aria-hidden="true" />
            <div className="footer-actions__buttons">
              <a className="footer-playstore" href="#install">
                <img src="/google-play.png" alt="" />
                <span>
                  <small>Coming soon on</small>
                  Google Play
                </span>
              </a>
              <a className="simple-nav__install" href="#install">
                Installieren
              </a>
            </div>
          </div>
          <small className="site-footer__copyright">© 2026 Claimo Studio. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
