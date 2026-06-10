import { useEffect, useState } from 'react';
import { Logo } from './Icons';
import styles from './Nav.module.css';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#rewards', label: 'Rewards' },
  { href: '#app', label: 'The app' },
  { href: '#faq', label: 'FAQ' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.wrap}${scrolled ? ` ${styles.scrolled}` : ''}`}>
      <nav className={`shell ${styles.nav}`} aria-label="Primary">
        <a href="#top" className={styles.brand} onClick={close}>
          <Logo className={styles.brandIcon} />
          <span>Claim<b>o</b></span>
        </a>

        <div className={`${styles.links}${open ? ` ${styles.open}` : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className={`btn btn-primary ${styles.mobileCta}`} onClick={close}>
            Get early access
          </a>
        </div>

        <div className={styles.right}>
          <a href="#cta" className={`btn btn-primary ${styles.cta}`}>
            Get early access
          </a>
          <button
            className={`${styles.burger}${open ? ` ${styles.burgerOpen}` : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {open && <button className={styles.scrim} aria-label="Close menu" onClick={close} />}
    </header>
  );
}
