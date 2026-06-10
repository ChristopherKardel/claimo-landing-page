import type { ComponentType } from 'react';
import { Reveal } from './Reveal';
import { Bolt, Flame, Gamepad, type IconProps, Shield, Trophy, Wallet } from './Icons';
import styles from './Features.module.css';

type Feature = {
  Icon: ComponentType<IconProps>;
  title: string;
  text: string;
  accent: 'teal' | 'green' | 'blue' | 'gold';
};

const FEATURES: Feature[] = [
  {
    Icon: Gamepad,
    title: 'Earn while you play',
    text: 'Collect Gems for games, offers and surveys you actually enjoy — no boring busywork.',
    accent: 'teal',
  },
  {
    Icon: Wallet,
    title: 'Real cash payouts',
    text: 'Turn Gems into PayPal money and popular gift cards. Rewards you can genuinely use.',
    accent: 'green',
  },
  {
    Icon: Flame,
    title: 'Daily streaks & bonuses',
    text: 'Come back each day to grow your streak and unlock recurring bonus rewards.',
    accent: 'gold',
  },
  {
    Icon: Trophy,
    title: 'Level up your account',
    text: 'Earn XP, climb levels and progress toward better rewards the more you engage.',
    accent: 'blue',
  },
  {
    Icon: Bolt,
    title: 'Free & fair',
    text: 'No purchase, no subscription, no catch. Claimo is completely free for users.',
    accent: 'teal',
  },
  {
    Icon: Shield,
    title: 'Secure by design',
    text: 'Encrypted sign-in and a privacy-first setup keep your account and data protected.',
    accent: 'green',
  },
];

export function Features() {
  return (
    <section id="why" className="section">
      <div className="shell">
        <Reveal className="section-head">
          <p className="eyebrow">Why Claimo</p>
          <h2>Rewards that actually feel rewarding</h2>
          <p>
            Most reward apps are clunky and pay out in pennies. Claimo is built to be
            fast, fair and genuinely worth your time.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {FEATURES.map(({ Icon, title, text, accent }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 90} className={`card ${styles.card} ${styles[accent]}`}>
              <span className={styles.glow} aria-hidden="true" />
              <span className={styles.icon}><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
