import { CONTACT_EMAIL, legalLinks } from '../lib/assets';
import { Logo } from './Icons';
import styles from './Footer.module.css';

const NAV = [
  { href: '#how', label: 'How it works' },
  { href: '#rewards', label: 'Rewards' },
  { href: '#app', label: 'The app' },
  { href: '#faq', label: 'FAQ' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand}>
            <Logo />
            <span>Claim<b>o</b></span>
          </a>
          <p className={styles.tagline}>Rewards made simple. Android launch coming soon.</p>
          <a className={styles.email} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>

        <nav className={styles.col} aria-label="Footer">
          <h4>Explore</h4>
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <nav className={styles.col} aria-label="Legal">
          <h4>Legal</h4>
          <a href={legalLinks.imprint}>Legal Notice</a>
          <a href={legalLinks.privacy}>Privacy Policy</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>Partner with us</a>
        </nav>
      </div>

      <div className={`shell ${styles.bottom}`}>
        <p>{new Date().getFullYear()} claimo.</p>
        <p>Made in Germany · Built for Android</p>
      </div>
    </footer>
  );
}
