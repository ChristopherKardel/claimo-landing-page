import { Reveal } from './Reveal';
import { assets } from '../lib/assets';
import { Gem, Gift, Wallet } from './Icons';
import styles from './Rewards.module.css';

const REWARD_TYPES = [
  { Icon: Wallet, label: 'PayPal cash', desc: 'Withdraw real money straight to your account', tag: 'Cash', accent: 'green' },
  { Icon: Gift, label: 'Gift cards', desc: 'Amazon, Google Play, Steam and more', tag: 'Vouchers', accent: 'gold' },
  { Icon: Gem, label: 'In-app perks', desc: 'Bonus Gems, streak boosts and multipliers', tag: 'Bonus', accent: 'teal' },
] as const;

export function Rewards() {
  return (
    <section id="rewards" className="section">
      <div className={`shell ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Gems & rewards</p>
          <h2>Turn Gems into <span className="gradient-text">real money</span></h2>
          <p className={styles.lead}>
            Gems are Claimo's in-app currency. Earn them through everything you do in
            the app, watch your balance grow, then redeem them for the reward that
            suits you best.
          </p>

          <ul className={styles.list}>
            {REWARD_TYPES.map(({ Icon, label, desc, tag, accent }) => (
              <li key={label} className={`${styles.item} ${styles[accent]}`}>
                <span className={styles.itemIcon}><Icon /></span>
                <span className={styles.itemBody}>
                  <strong>{label}</strong>
                  <small>{desc}</small>
                </span>
                <span className={styles.tag}>{tag}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className={styles.visual}>
          <span className={styles.visualGlow} aria-hidden="true" />
          <img
            className={styles.phone}
            src={assets.screens.rewards}
            width={300}
            loading="lazy"
            alt="The Claimo rewards screen showing PayPal and gift card redemptions"
          />
          <div className={styles.convert} aria-hidden="true">
            <span className={styles.convertGem}><Gem /></span>
            <span className={styles.convertText}>
              <strong>5,000 Gems</strong>
              <small>≈ 5 € PayPal</small>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
