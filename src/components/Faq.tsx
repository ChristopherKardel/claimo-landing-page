import { useId, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { Chevron } from './Icons';
import styles from './Faq.module.css';

const FAQS = [
  {
    q: 'What is Claimo?',
    a: 'Claimo is a rewards app in development for games, offers and surveys. You earn Gems for the activities you complete and redeem them for real-world rewards like PayPal cash or gift cards.',
  },
  {
    q: 'Is Claimo available yet?',
    a: 'Not yet — the Android launch is planned on Google Play after final testing and review. Get early access below to be notified the moment it goes live.',
  },
  {
    q: 'How do I earn rewards?',
    a: 'You complete eligible partner activities inside the app — games, offers and surveys — and collect Gems, which you can later redeem for the reward of your choice.',
  },
  {
    q: 'Is Claimo really free?',
    a: 'Yes. Claimo is completely free for users. There is no purchase, no subscription and no hidden fee required to earn or redeem rewards.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Android is the first planned platform. Additional platforms will be considered once the initial launch is live and stable.',
  },
  {
    q: 'How is my data handled?',
    a: 'This site uses no analytics or advertising trackers and loads fonts and images locally. Claimo Studio is based in Germany and operates under EU (GDPR) data-protection rules.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const id = useId();

  return (
    <div className={`${styles.item}${open ? ` ${styles.itemOpen}` : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{q}</span>
        <Chevron className={styles.chevron} />
      </button>
      <div
        id={id}
        className={styles.body}
        style={{ maxHeight: open ? `${bodyRef.current?.scrollHeight ?? 360}px` : '0px' }}
        role="region"
      >
        <div ref={bodyRef} className={styles.answer}>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="shell">
        <Reveal className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Questions, answered</h2>
          <p>Everything you might want to know before Claimo launches.</p>
        </Reveal>

        <div className={styles.list}>
          {FAQS.map(({ q, a }, i) => (
            <Reveal key={q} delay={(i % 3) * 60}>
              <FaqItem q={q} a={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
