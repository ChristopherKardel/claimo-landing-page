import { assets } from '../lib/assets';
import styles from './Payouts.module.css';

type Brand = { label: string; logo: string };

const BRANDS: Brand[] = [
  { label: 'PayPal',      logo: assets.brands.paypal },
  { label: 'Amazon',      logo: assets.brands.amazon },
  { label: 'Google Play', logo: assets.brands.googlePlay },
  { label: 'Steam',       logo: assets.brands.steam },
];

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
                {BRANDS.map(({ label, logo }) => (
                  <li key={label} className={styles.brand}>
                    <img src={logo} alt="" className={styles.brandLogo} aria-hidden="true" />
                    {label}
                  </li>
                ))}
                <li className={styles.more}>+ more planned</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
