import { useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { assets } from '../lib/assets';
import styles from './Showcase.module.css';

const SCREENS = [
  { label: 'Play', caption: 'Browse games, offers and daily tasks that earn Gems.', src: assets.screens.games },
  { label: 'Redeem', caption: 'Cash out Gems for PayPal money and gift cards.', src: assets.screens.rewards },
  { label: 'Profile', caption: 'Track levels, XP and your daily reward streak.', src: assets.screens.profile },
];

const ROTATE_MS = 4000;

export function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance the gallery unless the user is hovering / focused on it.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % SCREENS.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="app" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal className="section-head">
          <p className="eyebrow">The app</p>
          <h2>See Claimo in action</h2>
          <p>An early look at the Claimo app as it takes shape ahead of the Android launch.</p>
        </Reveal>

        <Reveal>
          <div
            className={styles.stage}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <span className={styles.stageGlow} aria-hidden="true" />

            <div className={styles.frames}>
              {SCREENS.map((s, i) => (
                <img
                  key={s.label}
                  className={`${styles.frame}${i === active ? ` ${styles.frameActive}` : ''}`}
                  src={s.src}
                  width={300}
                  loading="lazy"
                  alt={`Claimo ${s.label} screen — ${s.caption}`}
                  aria-hidden={i !== active}
                />
              ))}
            </div>

            <div className={styles.controls}>
              <div className={styles.tabs} role="tablist" aria-label="App screens">
                {SCREENS.map((s, i) => (
                  <button
                    key={s.label}
                    role="tab"
                    aria-selected={i === active}
                    className={`${styles.tab}${i === active ? ` ${styles.tabActive}` : ''}`}
                    onClick={() => setActive(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className={styles.caption} key={active}>{SCREENS[active].caption}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className={styles.notice}>
            <span className={styles.noticeBadge}>Prototype notice</span>
            <p>
              The app is still in development — some screens are in German, use placeholder
              content, and a dedicated Tasks area will arrive once offerwall integrations are finalised.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
