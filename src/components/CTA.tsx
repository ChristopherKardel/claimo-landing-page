import { Reveal } from './Reveal';
import { assets, CONTACT_EMAIL } from '../lib/assets';
import { Android, ArrowRight } from './Icons';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section id="cta" className="section">
      <div className="shell">
        <Reveal>
          <div className={styles.card}>
            <span className={styles.glow} aria-hidden="true" />
            <img src={assets.gem} className={styles.gem} alt="" aria-hidden="true" />

            <p className="eyebrow">Get early access</p>
            <h2>Be first to start<br />earning with Claimo</h2>
            <p className={styles.lead}>
              Claimo launches on Android soon. Reach out to get notified at launch — or to
              explore offerwall, survey and publisher partnerships with Claimo Studio.
            </p>

            <div className={styles.actions}>
              <a className="btn btn-primary btn-lg" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL} <ArrowRight />
              </a>
            </div>

            <p className={styles.note}>
              <Android /> Coming soon to Google Play · No spam, just a launch heads-up
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
