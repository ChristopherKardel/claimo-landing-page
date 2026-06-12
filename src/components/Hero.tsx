import { assets } from '../lib/assets';
import { ArrowRight } from './Icons';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      {/* Ambient background */}
      <div className={styles.bg} aria-hidden="true">
        <span className={`${styles.orb} ${styles.orb1}`} />
        <span className={`${styles.orb} ${styles.orb2}`} />
        <span className={styles.grid} />
      </div>

      {/* Floating gem decorations */}
      <div className={styles.gems} aria-hidden="true">
        <img src={assets.gem} className={`${styles.gem} ${styles.gemA}`} alt="" />
        <img src={assets.gemOutlined} className={`${styles.gem} ${styles.gemB}`} alt="" />
      </div>

      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Rewards app · In active development</p>
          <h1>
            Turn spare time<br />
            into <span className="gradient-text">real rewards.</span>
          </h1>
          <p className={styles.lead}>
            Claimo turns the games, offers and surveys you already enjoy into Gems —
            then lets you cash them out for PayPal money, gift cards and more.
            Free to use, built for Android.
          </p>

          <div className={styles.actions}>
            <a href="#cta" className="btn btn-primary btn-lg">
              Get early access <ArrowRight />
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">See how it works</a>
          </div>

          <div className={styles.meta}>
            <a href="#cta" className={styles.store}>
              <img src={assets.brands.googlePlay} alt="Google Play" className={styles.storeImg} width={28} height={28} />
              <span className={styles.storeText}>
                <small>Coming soon to</small>
                <strong>Google Play</strong>
              </span>
            </a>
            <ul className={styles.trust}>
              <li><span className={styles.dot} /> Free for users</li>
              <li><span className={styles.dot} /> No purchase required</li>
              <li><span className={styles.dot} /> Secure sign-in</li>
            </ul>
          </div>
        </div>

        <div className={styles.visual}>
          <span className={`${styles.ring} ${styles.ringOuter}`} aria-hidden="true" />
          <span className={`${styles.ring} ${styles.ringInner}`} aria-hidden="true" />
          <span className={styles.phoneGlow} aria-hidden="true" />

          <img
            className={styles.phone}
            src={assets.screens.games}
            width={300}
            fetchPriority="high"
            alt="The Claimo app showing games you can play to earn Gems"
          />

          {/* Live UI accent cards */}
          <div className={`${styles.float} ${styles.floatReward}`} aria-hidden="true">
            <span className={styles.floatBadge}>+120</span>
            <div>
              <strong>Reward earned</strong>
              <small>Daily task complete</small>
            </div>
          </div>

          <div className={`${styles.float} ${styles.floatBalance}`} aria-hidden="true">
            <img src={assets.gem} alt="" width={22} height={20} />
            <div>
              <strong>335 Gems</strong>
              <small>Ready to redeem</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
