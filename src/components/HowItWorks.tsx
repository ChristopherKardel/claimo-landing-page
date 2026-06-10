import type { ComponentType } from 'react';
import { Reveal } from './Reveal';
import { Gamepad, Gem, type IconProps, Wallet } from './Icons';
import styles from './HowItWorks.module.css';

const STEPS: Array<{ Icon: ComponentType<IconProps>; title: string; text: string }> = [
  {
    Icon: Gamepad,
    title: 'Play & complete',
    text: 'Open the app and complete partner games, offers and surveys at your own pace.',
  },
  {
    Icon: Gem,
    title: 'Collect Gems',
    text: 'Every eligible activity earns Gems — the in-app currency you build up over time.',
  },
  {
    Icon: Wallet,
    title: 'Redeem rewards',
    text: 'Exchange your Gems for PayPal payouts, gift cards and more planned reward options.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Three steps to your first reward</h2>
          <p>No hidden requirements and no complicated setup — just earn and cash out.</p>
        </Reveal>

        <ol className={styles.grid}>
          <span className={styles.line} aria-hidden="true" />
          {STEPS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 130} className={`card ${styles.step}`}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.icon}><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
