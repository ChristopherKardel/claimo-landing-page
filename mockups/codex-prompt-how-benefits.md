# Codex task — Redesign the "How it works" and "Why Claimo?" sections

## Context
This is the **Claimo landing page** (Vite + React 19 + TypeScript). It is a single-page app rendered
entirely from **`src/App.tsx`**, with all styling in the global stylesheet **`src/index.css`**
(CSS-module files under `src/components/*` exist but are **not used** by `App.tsx` — ignore them, except
for the icon set noted below).

The page is bilingual (German `de` / English `en`). All copy lives in the `copy` object at the top of
`src/App.tsx` (`copy.de` / `copy.en`), and `App.tsx` reads it through `const t = copy[language]`.
**Both language objects must always have the exact same shape** (the object is `as const` and the
component switches between them), so every field you add/change must be added to **both** `de` and `en`.

A visual reference for the desired result exists at
**`mockups/how-benefits-vorher-nachher.html`** (open it in a browser). The "Nachher/After" blocks are the
target. Match that look using the real class names below.

There is a ready-made, consistent inline-SVG icon set in **`src/components/Icons.tsx`**
(exports `Gamepad`, `Gem`, `Gift`, `Bolt`, `Shield`, `Trophy`, `Eye`, `Lock`, `Wallet`, `Flame`,
`BadgeCheck`, `Android`, `ArrowRight`, …). Each icon accepts `{ className?: string }` and renders a
24×24 stroked `currentColor` SVG. **Reuse these icons** instead of the current PNGs / one-off inline SVG.

## Goal
Replace the two flat, generic sections with polished, on-brand versions:

1. **"How it works"** → a **numbered 3-step rail**: a head (eyebrow + title + intro), three step cards
   connected by a horizontal gradient line, each card with a gradient number badge (01/02/03), a
   consistent line icon, title, description, and a small teal "outcome" tag. **Remove the `arrows.png`
   decorations and all the `:has()` arrow-wiggle rules.**
2. **"Why Claimo?"** → a **benefit card grid**: a centered head (eyebrow + title + intro) and a 3-column
   grid of 6 cards, each with an icon, a title, and one supporting sentence. **Replace the flat 8-item
   checklist** (`benefits-list`).

## Hard constraints — do not break
- Keep section anchors/ids intact (they are navigation targets):
  - How section element keeps `id="learn-more"`, and the heading keeps `id="how"` (nav link `#how`
    and the hero "Learn more" button point to it).
  - Benefits section element keeps `id="features"` and heading keeps `id="features-title"`
    (nav link `#features` and footer link `#features`).
- Keep the `shell` width utility usage so content stays aligned with the rest of the page.
- Keep the full-width dark band background on the benefits section (`background: #1C203F`).
- Keep accessibility: decorative icons get `aria-hidden`; headings keep their ids.
- Both `de` and `en` copy must be updated and kept structurally identical.
- After the change, `npx tsc --noEmit` and `npm run build` must pass.

---

## 1) Data / copy changes in `src/App.tsx`

### 1a. Icons import + parallel icon arrays
At the top of `App.tsx`, import the icons and define two icon arrays parallel to the localized text
(icons stay out of the localized `copy` object; they are mapped by index, like the existing `rewards`
array pattern):

```tsx
import { Gamepad, Gem as GemIcon, Gift, Bolt, Shield, Trophy, Eye } from './components/Icons';

const howIcons = [Gamepad, GemIcon, Gift];
const benefitIcons = [Gamepad, GemIcon, Bolt, Shield, Trophy, Eye];
```
(`Gem` is imported as `GemIcon` to avoid colliding with the existing `gem` SVG asset import.)

### 1b. `copy.de.how` and `copy.en.how`
Replace the existing `how` objects with this shape (add `eyebrow`, `intro`, and a `tag` per step):

**de:**
```ts
how: {
  eyebrow: "So funktioniert's",
  title: 'In drei Schritten zu echten Belohnungen',
  intro: 'Spielen, Gems sammeln, einlösen — so einfach verwandelst du Freizeit in echte Rewards.',
  steps: [
    {
      title: 'Spielen & Aufgaben erledigen',
      text: 'Entdecke neue Spiele, teste Apps, beantworte Umfragen und schließe einfache Angebote ab.',
      tag: 'Gems verdienen',
    },
    {
      title: 'Gems sammeln',
      text: 'Verdiene Gems für jede Aktivität und behalte deinen Fortschritt jederzeit im Blick.',
      tag: 'Fortschritt wächst',
    },
    {
      title: 'Belohnungen einlösen',
      text: 'Tausche deine Gems gegen PayPal-Geld, Gutscheine und weitere Belohnungen ein.',
      tag: 'Auszahlung',
    },
  ],
},
```

**en:**
```ts
how: {
  eyebrow: 'How it works',
  title: 'Three steps to real rewards',
  intro: 'Play, collect Gems, redeem — that’s how you turn spare time into real rewards.',
  steps: [
    {
      title: 'Play & complete tasks',
      text: 'Discover new games, test apps, answer surveys and complete simple offers.',
      tag: 'Earn Gems',
    },
    {
      title: 'Collect Gems',
      text: 'Earn Gems for every activity and keep track of your progress at any time.',
      tag: 'Progress grows',
    },
    {
      title: 'Redeem rewards',
      text: 'Exchange your Gems for PayPal money, gift cards and more rewards.',
      tag: 'Payout',
    },
  ],
},
```

### 1c. `copy.de.benefits` and `copy.en.benefits`
Replace the `items: string[]` with `items: { title, text }[]` (6 items) and add an `intro`:

**de:**
```ts
benefits: {
  label: 'Vorteile',
  title: 'Warum Claimo?',
  intro: 'Eine faire, moderne Rewards-App — gebaut für echten Mehrwert statt leerer Versprechen.',
  items: [
    { title: 'Modern & einfach',          text: 'Klares, schnelles Design für Android — sofort verständlich, ohne Schnickschnack.' },
    { title: 'Faire Belohnungen',         text: 'Transparente Gems für jede Aufgabe — keine versteckten Regeln, keine leeren Versprechen.' },
    { title: 'Schnelle Auszahlungen',     text: 'Löse deine Gems zügig gegen PayPal-Geld und beliebte Gutscheine ein.' },
    { title: 'Sichere Anmeldung',         text: 'Geschützter Login und sorgsamer Umgang mit deinen Daten.' },
    { title: 'Neue Spiele & Angebote',    text: 'Ständig frische Games, Apps und Umfragen — dir geht der Nachschub nie aus.' },
    { title: 'Transparenter Fortschritt', text: 'Sieh jederzeit, welche Aufgaben offen sind und welche Belohnung näher rückt.' },
  ],
},
```

**en:**
```ts
benefits: {
  label: 'Benefits',
  title: 'Why Claimo?',
  intro: 'A fair, modern rewards app — built for real value, not empty promises.',
  items: [
    { title: 'Modern & simple',     text: 'Clean, fast design for Android — instantly clear, no clutter.' },
    { title: 'Fair rewards',        text: 'Transparent Gems for every task — no hidden rules, no empty promises.' },
    { title: 'Fast payouts',        text: 'Redeem your Gems quickly for PayPal money and popular gift cards.' },
    { title: 'Secure sign-in',      text: 'Protected login and careful handling of your data.' },
    { title: 'New games & offers',  text: 'Constantly fresh games, apps and surveys — you’ll never run out.' },
    { title: 'Transparent progress',text: 'See at any time which tasks are open and which reward is getting closer.' },
  ],
},
```

---

## 2) Markup changes in `src/App.tsx`

### 2a. "How it works" section
Replace the current `<section id="learn-more" className="how-section shell">…</section>` with:

```tsx
<section id="learn-more" className="how-section shell" aria-labelledby="how">
  <div className="how-head">
    <span className="how-eyebrow">{t.how.eyebrow}</span>
    <h2 id="how">{t.how.title}</h2>
    <p className="how-intro">{t.how.intro}</p>
  </div>

  <ol className="how-steps">
    {t.how.steps.map((step, index) => {
      const Icon = howIcons[index];
      return (
        <li className="how-card" key={step.title}>
          <span className="how-card__num">{String(index + 1).padStart(2, '0')}</span>
          <span className="how-card__icon"><Icon /></span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          <span className="how-card__tag"><GemIcon className="how-card__tag-gem" />{step.tag}</span>
        </li>
      );
    })}
  </ol>
</section>
```
Remove the `Fragment` wrapper and the `.how-arrow-slot` markup (the `arrows.png` images). If `Fragment`
is no longer used anywhere else, remove it from the React import.

### 2b. "Why Claimo?" section
Replace the current `<section id="features" className="benefits-section">…</section>` with:

```tsx
<section id="features" className="benefits-section" aria-labelledby="features-title">
  <div className="benefits-inner shell">
    <div className="benefits-head">
      <span className="benefits-eyebrow">{t.benefits.label}</span>
      <h2 id="features-title">{t.benefits.title}</h2>
      <p className="benefits-intro">{t.benefits.intro}</p>
    </div>
    <ul className="benefits-grid">
      {t.benefits.items.map((item, index) => {
        const Icon = benefitIcons[index];
        return (
          <li className="benefit-card" key={item.title}>
            <span className="benefit-card__icon"><Icon /></span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  </div>
</section>
```

---

## 3) CSS changes in `src/index.css`

Use the brand tokens already defined in `:root` (`--teal #00F3A2`, green `#62e573`, panel `#1C203F`,
borders, etc.). The reduced-motion media query and `.shell` utility already exist — don't duplicate them.

### 3a. Remove
- The old rules: `.how-arrow-slot`, `.how-arrow-slot img`, `.how-arrow-slot--one`, `.how-arrow-slot--two`,
  and the four `.how-steps:has(.how-card:nth-of-type(n):hover) .how-arrow-slot--…` rules.
- The old `.benefits-tab`, `.benefits-tab__header span`, `.benefits-tab__header h2`,
  `.benefits-list`, `.benefits-list li`, `.benefits-list li::before` rules.
- In the responsive blocks, the now-dead references: `.benefits-tab` (in the `@media (max-width: 980px)`
  and `@media (max-width: 640px)` blocks), `.benefits-tab__header h2`, `.benefits-list`, and
  `.how-arrow-slot` (in `@media (max-width: 980px)`). Replace with the new equivalents below where needed.

### 3b. "How it works" — new styles
Keep `.how-section` and its `::before` band background and `id="how"` heading. Add/replace:

```css
.how-head { max-width: 760px; margin: 0 auto 48px; text-align: center; }
.how-eyebrow {
  display: inline-flex; margin-bottom: 12px;
  color: #00F3A2; font-family: 'Raleway', var(--font);
  font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
}
.how-head h2 { color: #fff; font-size: 3rem; line-height: 1.08; letter-spacing: 0; }   /* keep close to current */
.how-intro { margin-top: 14px; color: rgba(255,255,255,0.78); font-family: 'Raleway', var(--font); font-size: 1.05rem; line-height: 1.6; }

.how-steps {
  position: relative; list-style: none; padding: 0; margin: 0;
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;
}
/* connecting gradient line behind the number badges */
.how-steps::before {
  content: ''; position: absolute; z-index: 0; top: 54px; left: 14%; right: 14%; height: 2px;
  background: linear-gradient(90deg, #00F3A2, #62e573); opacity: 0.35;
}

.how-card {
  position: relative; z-index: 1;
  padding: 30px 24px 26px;
  border: 1px solid rgba(255,255,255,0.08); border-radius: 22px;
  background: linear-gradient(180deg, #1d2142, #171b35);
  box-shadow: 0 18px 42px rgba(0,0,0,0.18);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.how-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0,243,162,0.35);
  box-shadow: 0 26px 56px -22px rgba(0,243,162,0.35);
}
.how-card__num {
  display: grid; place-items: center; width: 46px; height: 46px; margin-bottom: 20px;
  border-radius: 14px; background: linear-gradient(100deg, #00F3A2, #62e573);
  color: #04110d; font-family: var(--font); font-weight: 700; font-size: 1.1rem;
  box-shadow: 0 10px 24px -8px rgba(0,235,196,0.6);
}
.how-card__icon {
  display: grid; place-items: center; width: 50px; height: 50px; margin-bottom: 16px;
  border-radius: 14px; color: #00F3A2;
  background: rgba(0,243,162,0.10); border: 1px solid rgba(0,243,162,0.22);
}
.how-card__icon svg { width: 26px; height: 26px; }
.how-card h3 { margin-bottom: 10px; color: #fff; font-size: 1.16rem; font-weight: 700; line-height: 1.25; }
.how-card p { color: rgba(255,255,255,0.78); font-family: 'Raleway', var(--font); font-size: 0.9rem; line-height: 1.6; }
.how-card__tag {
  display: inline-flex; align-items: center; gap: 7px; margin-top: 16px;
  padding: 5px 11px; border-radius: 999px;
  background: rgba(0,243,162,0.08); border: 1px solid rgba(0,243,162,0.2);
  color: #00F3A2; font-family: 'Raleway', var(--font); font-size: 0.74rem; font-weight: 700;
}
.how-card__tag-gem { width: 14px; height: 14px; }
```

### 3c. "Why Claimo?" — new styles
Keep `.benefits-section` as the full-width `#1C203F` band. Replace its inner layout:

```css
.benefits-inner { margin-inline: auto; padding: 56px 0 60px; }   /* .shell already sets width */
.benefits-head { max-width: 720px; margin: 0 auto 36px; text-align: center; }
.benefits-eyebrow {
  display: inline-flex; margin-bottom: 12px;
  color: #00F3A2; font-family: 'Raleway', var(--font);
  font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
}
.benefits-head h2 { color: #fff; font-size: 2.4rem; line-height: 1.08; letter-spacing: 0; }
.benefits-intro { margin-top: 14px; color: rgba(255,255,255,0.78); font-family: 'Raleway', var(--font); font-size: 1.05rem; line-height: 1.6; }

.benefits-grid {
  list-style: none; padding: 0; margin: 0;
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px;
}
.benefit-card {
  padding: 24px 22px; border-radius: 18px;
  background: rgba(255,255,255,0.045); border: 1px solid rgba(255,255,255,0.09);
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}
.benefit-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0,243,162,0.3);
  background: rgba(0,243,162,0.05);
}
.benefit-card__icon {
  display: grid; place-items: center; width: 48px; height: 48px; margin-bottom: 16px;
  border-radius: 13px; color: #00F3A2;
  background: rgba(0,243,162,0.10); border: 1px solid rgba(0,243,162,0.22);
}
.benefit-card__icon svg { width: 25px; height: 25px; }
.benefit-card h3 { margin-bottom: 8px; color: #fff; font-size: 1.05rem; font-weight: 700; }
.benefit-card p { color: rgba(255,255,255,0.82); font-family: 'Raleway', var(--font); font-size: 0.88rem; line-height: 1.55; }
```

### 3d. Responsive
Add to the existing breakpoints (or create matching ones):

```css
@media (max-width: 820px) {
  .how-steps { grid-template-columns: 1fr; }
  .how-steps::before { display: none; }
  .benefits-grid { grid-template-columns: 1fr; }
}
@media (max-width: 980px) {
  .benefits-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }  /* 2-up on tablets */
}
@media (max-width: 640px) {
  .how-head h2 { font-size: 2.15rem; }
  .benefits-head h2 { font-size: 2rem; }
}
```
(If the existing `@media (max-width: 980px)` block already turns `.how-steps` to 1 column or references
the removed classes, reconcile so the final behaviour is: 3 cols on desktop, 2 cols benefits on tablet,
1 col both below ~820px, and no leftover references to deleted classes.)

---

## 4) Cleanup & verification
- Remove now-unused imports/assets references: the `arrows.png` usage is gone; `play-icon.png` and
  `shop-icon.png` are no longer referenced by the How section (leave the files in `/public`, just stop
  referencing them). Remove the `Fragment` import if unused.
- Run `npx tsc --noEmit` — must pass (watch for the `benefits.items` shape change touching both languages).
- Run `npm run build` — must pass.
- Manually check: language toggle (DE/EN) still swaps all new strings; nav links `#how` and `#features`
  still scroll to the right sections; layout looks like `mockups/how-benefits-vorher-nachher.html` at
  desktop, tablet (~900px) and mobile (~390px) widths.

## Out of scope
Do **not** touch the hero, rewards/giftcards, app-preview, FAQ, footer, or the language/nav logic
beyond what's required above.
