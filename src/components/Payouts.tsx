import styles from './Payouts.module.css';

// Rendered as clean text wordmarks (not trademarked logo images) — matches the
// redemption options shown inside the app's "Rewards" screen.
const BRANDS = ['PayPal', 'Amazon', 'Visa', 'Google Play', 'Steam', 'Apple'];

export function Payouts() {
  return (
    <section className={styles.section} aria-label="Planned cash-out options">
      <div className="shell">
        <p className={styles.label}>Planned cash-out options</p>
        <div className={styles.track}>
          {/* Two identical rows so the marquee can loop seamlessly on mobile. */}
          <div className={styles.group}>
            {[0, 1].map((set) => (
              <ul key={set} className={styles.row} aria-hidden={set === 1}>
                {BRANDS.map((b) => (
                  <li key={b} className={styles.brand}>{b}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
