import type { ComponentType } from 'react';
import { Reveal } from './Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { BadgeCheck, Eye, type IconProps, Lock, Shield } from './Icons';
import styles from './Security.module.css';

const POINTS: Array<{ Icon: ComponentType<IconProps>; title: string; text: string }> = [
  {
    Icon: Lock,
    title: 'Encrypted sign-in',
    text: 'Accounts are protected with modern, encrypted authentication from day one.',
  },
  {
    Icon: Eye,
    title: 'Privacy-first',
    text: 'No ad trackers or non-essential cookies on this site. Fonts and images load locally.',
  },
  {
    Icon: BadgeCheck,
    title: 'No hidden costs',
    text: 'Claimo is free for users — no purchase, no subscription and no surprise fees.',
  },
  {
    Icon: Shield,
    title: 'GDPR compliant',
    text: 'Built and operated in Germany by Claimo Studio under EU data-protection rules.',
  },
];

const STATS: Array<{ value: number; suffix?: string; label: string }> = [
  { value: 100, suffix: '%', label: 'Free for users' },
  { value: 0, suffix: '€', label: 'To get started' },
  { value: 2026, label: 'Planned launch' },
];

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div className={styles.stat}>
      <span ref={ref} className={styles.statValue}>
        {count}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export function Security() {
  return (
    <section id="security" className={`section ${styles.section}`}>
      <div className={`shell ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Trust & security</p>
          <h2>Built to be safe, fair and transparent</h2>
          <p className={styles.lead}>
            Claimo is a real product from a registered German studio — not an anonymous
            cash-grab. Security and honesty are baked in from the start.
          </p>
          <div className={styles.stats}>
            {STATS.map((s) => <Stat key={s.label} {...s} />)}
          </div>
        </Reveal>

        <ul className={styles.points}>
          {POINTS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 90} className={`card ${styles.point}`}>
              <span className={styles.pointIcon}><Icon /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
