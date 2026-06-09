import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const featureCards = [
  ['Play Games', 'Start partner games and complete eligible milestones.'],
  ['Complete Tasks', 'Finish offers, surveys or in-app tasks to receive Gems.'],
  ['Redeem Gems', 'Use collected Gems later for planned cash rewards and payouts.'],
];

const baseUrl = import.meta.env.BASE_URL;
const assetUrl = (path: string) => `${baseUrl}${path}`;

const screenshots = [
  { label: 'Games', src: assetUrl('screen1.png') },
  { label: 'Redeem', src: assetUrl('screen2.png') },
  { label: 'Profile', src: assetUrl('screen3.png') },
];

const faqs = [
  ['What is Claimo?', 'Claimo is a rewards app in development for games, offers, surveys and planned rewards.'],
  ['Is Claimo already available?', 'Not yet. The Android launch is planned on Google Play after testing and review.'],
  ['How can users earn rewards?', 'Users will complete eligible partner activities and collect Gems inside the app.'],
  ['Which platforms will be supported?', 'The first planned platform is Android.'],
  ['How can partners contact us?', 'Partners can contact Claimo Studio by email for offerwall and survey integrations.'],
];

function PhoneMockup({ label, src = assetUrl('screen1.png') }: { label?: string; src?: string }) {
  return (
    <div className="phone-frame">
      {label && <span>{label}</span>}
      <img src={src} alt={label ? `Claimo ${label}` : 'Claimo app screen'} />
    </div>
  );
}

function GemDecoration({ variant = 'filled', className = '' }: { variant?: 'filled' | 'outlined'; className?: string }) {
  const src = variant === 'outlined' ? assetUrl('gems-outlined.png') : assetUrl('gems.png');

  return <img className={`gem-decoration ${className}`} src={src} alt="" aria-hidden="true" />;
}

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home"><span>Claim</span>o</a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#rewards">Rewards</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-button" href="#contact">Download Soon</a>
      </nav>

      <section id="home" className="hero">
        <GemDecoration className="hero-gem hero-gem-one" />
        <GemDecoration className="hero-gem hero-gem-two" />
        <GemDecoration className="hero-gem hero-gem-three" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Rewards made simple</p>
            <h1>Start Earning <span>Cash</span></h1>
            <p className="hero-text">
              Play games, complete offers and surveys, earn Gems and redeem real rewards.
              Claimo is currently in development and planned for Android.
            </p>
            <div className="actions">
              <a className="button primary" href="#contact">Download Soon</a>
              <a className="button secondary" href="#features">Learn More</a>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section id="features" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Play. Earn. Redeem.</h2>
          <p>
            Complete games, offers or tasks, receive Gems for eligible activity and
            redeem those Gems later for cash rewards or other planned payouts.
          </p>
        </div>
        <div className="feature-grid">
          {featureCards.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="screenshots" className="section screenshots">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Screenshots</p>
            <h2>Appscreens</h2>
            <p>This is the current visual state of the Claimo app.</p>
          </div>
          <div className="screenshot-row">
            {screenshots.map((screenshot) => (
              <PhoneMockup key={screenshot.src} label={screenshot.label} src={screenshot.src} />
            ))}
          </div>
          <div className="screenshots-note">
            <strong>Prototype notice</strong>
            <p>
              The text inside the current app mockups is still in German and several areas
              use placeholders because Claimo is still a prototype.
            </p>
            <p>
              A Tasks screen is also planned, but it still needs the final offerwall
              integrations before it can be shown properly.
            </p>
          </div>
        </div>
      </section>

      <section id="rewards" className="section shell split">
        <div>
          <p className="eyebrow">Planned rewards</p>
          <h2>Turn Gems into rewards</h2>
          <p>
            Users collect Gems and can later redeem them for reward options. The boxes
            show the types of rewards Claimo is built to support.
          </p>
        </div>
        <div className="reward-list">
          <span>PayPal payouts <b>Cash</b></span>
          <span>Gift cards <b>Vouchers</b></span>
          <span>In-app rewards <b>Bonus</b></span>
        </div>
      </section>

      <section className="section shell split partner">
        <div>
          <p className="eyebrow">Partners</p>
          <h2>Built for trust from day one</h2>
          <p>
            Claimo is currently in development with secure authentication, backend reward
            tracking and an Android launch planned on Google Play.
          </p>
        </div>
        <div className="partner-box">
          <p>We are looking for offerwall, survey and publisher partners who want to support a professional rewards app.</p>
          <a className="button primary" href="mailto:contact@claimo-app.com">Contact Claimo</a>
        </div>
      </section>

      <section id="faq" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact shell">
        <h2>Interested in working with Claimo?</h2>
        <p>For offerwall providers, survey networks and publisher partners.</p>
        <a className="button primary" href="mailto:contact@claimo-app.com">contact@claimo-app.com</a>
      </section>

      <footer className="footer shell">
        <div>
          <b>Claimo</b>
          <span>Rewards made simple</span>
        </div>
        <div className="legal-links">
          <a href={`${baseUrl}impressum.html`}>Legal Notice</a>
          <a href={`${baseUrl}datenschutz.html`}>Privacy Policy</a>
        </div>
        <p>© 2026 Claimo Studio. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
