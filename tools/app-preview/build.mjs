// Builds the "Die App" section of the home page: short texts on the left, a sticky
// phone on the right that shows a recreated Claimo app (Rewards-App) and switches
// its bottom-nav tab while you scroll.
//
//   node tools/app-preview/build.mjs
//
// Writes the markup between <!-- APP-PREVIEW:START --> and <!-- APP-PREVIEW:END -->
// in index.html, de/index.html and en/index.html. Texts: tools/app-preview/texts.json.
// Styles: assets/css/app-preview.css, behaviour: assets/js/app-preview.js.
// Look and sizes follow Rewards-App/src/screens/dashboard (styles.ts, GamesTab,
// TasksTab, ShopTab, ProfileTab) and src/components/FeaturedGameCard.tsx.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const TEXTS = JSON.parse(readFileSync(join(ROOT, 'tools/app-preview/texts.json'), 'utf8'));
const PAGES = [
  { file: 'index.html', lang: 'en', a: '' },
  { file: 'de/index.html', lang: 'de', a: '../' },
  { file: 'en/index.html', lang: 'en', a: '../' },
];
const START = '<!-- APP-PREVIEW:START -->';
const END = '<!-- APP-PREVIEW:END -->';

// Sample data (cents). Same numbers as the published app screenshots.
const DATA = {
  balance: 1642,
  goal: 2000,
  streak: 4,
  level: 4,
  xp: [120, 200],
  games: [
    { key: 'rok', title: 'Rise of Kingdoms: Lost Crusade', rating: 4.3, reward: 35593, left: 28947, goals: 12 },
    { key: 'mu', title: 'MU: Dark Epoch', rating: 3.8, reward: 11464, left: 9812, goals: 8 },
  ],
  apps: [
    { key: 'rok', title: 'Rise of Kingdoms', reward: 244 },
    { key: 'mu', title: 'MU: Dark Epoch', reward: 104 },
    { key: 'rok', title: 'Rise of Kingdoms', reward: 348 },
  ],
  surveys: [
    { reward: 125, minutes: 3 },
    { reward: 85, minutes: 5 },
    { reward: 210, minutes: 12 },
  ],
  // No partner logos: Claimo has no permission yet to use the logos of PayPal or of
  // gift-card brands, so the shop shows neutral placeholders by kind of reward (same
  // as the rewards section, tools/rewards/build.mjs). Kind → app shop item:
  // cash = PayPal, prepaid = Visa, console = PlayStation / Nintendo,
  // appstore = Google Play, shopping = Amazon, streaming = Netflix.
  vouchers: [
    { key: 'cash', group: 'money', from: 2000 },
    { key: 'prepaid', group: 'money', from: 2000 },
    { key: 'console', group: 'games', from: 2000 },
    { key: 'appstore', group: 'games', from: 2500 },
    { key: 'shopping', group: 'shopping', from: 2000 },
    { key: 'streaming', group: 'leisure', from: 2000 },
  ],
};

// Line icons (24 × 24, stroke) for the placeholder cards.
const VOUCHER_ICONS = {
  cash: '<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>',
  prepaid: '<rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/><path d="M2.5 10h19"/><path d="M6 14.5h4"/>',
  console: '<path d="M6 11h4M8 9v4"/><path d="M15 12h.01M18 10h.01"/><path d="M17.3 5H6.7a4 4 0 0 0-4 3.6L2 15a3 3 0 0 0 5.4 2l1-1.3a2 2 0 0 1 1.6-.7h4a2 2 0 0 1 1.6.7l1 1.3A3 3 0 0 0 22 15l-.7-6.4A4 4 0 0 0 17.3 5z"/>',
  appstore: '<rect x="3" y="3" width="18" height="18" rx="4.5"/><path d="m10 8.5 5 3.5-5 3.5z"/>',
  shopping: '<path d="M5.5 7.5h13l-1 12.5h-11z"/><path d="M9 7.5V7a3 3 0 0 1 6 0v.5"/>',
  streaming: '<rect x="2.5" y="4.5" width="19" height="13" rx="2.5"/><path d="M8 21h8"/><path d="m10.5 8.5 4 2.5-4 2.5z"/>',
};

const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);

function build(lang, a) {
  const T = TEXTS[lang];
  const t = T.app;
  const money = (cents, opts = {}) => new Intl.NumberFormat(T.locale, {
    style: 'currency', currency: T.currency, currencyDisplay: 'narrowSymbol', ...opts,
  }).format(cents / 100);
  const whole = (cents) => money(cents, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const number = (cents) => new Intl.NumberFormat(T.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
  const decimal1 = (v) => new Intl.NumberFormat(T.locale, { minimumFractionDigits: 1 }).format(v);
  const symbol = money(0).replace(/[\d.,\s ]/g, '');
  // the app colours the currency symbol green inside amounts
  const greenSymbol = (s) => s.replace(symbol, `<span class="ap-cur">${symbol}</span>`);
  // no loading="lazy": hidden tabs would only fetch their images when they appear
  const img = (file, cls, w, h, alt = '') => `<img class="${cls}" src="${a}assets/img/app/${file}" alt="${alt}" width="${w}" height="${h}" decoding="async">`;
  const icon = (name) => `<i class="ap-ic ap-ic--${name}"></i>`;
  const pct = Math.round((DATA.balance / DATA.goal) * 1000) / 10;

  const button = (label, cls = '') => `<span class="ap-btn${cls ? ` ${cls}` : ''}"><span class="ap-btn__face">${label}</span></span>`;

  const hud = `
            <div class="ap-hud">
              <div class="ap-status"><span>9:41</span><span class="ap-status__icons"><svg viewBox="0 0 18 14" aria-hidden="true"><path d="M9 13.5 0 3.2C2.5 1.2 5.6 0 9 0s6.5 1.2 9 3.2z" fill="currentColor"/></svg><svg viewBox="0 0 9 16" aria-hidden="true"><rect x="0" y="1.5" width="9" height="14.5" rx="1.6" fill="currentColor"/><rect x="2.5" y="0" width="4" height="2.5" rx=".8" fill="currentColor"/></svg></span></div>
              <div class="ap-hud__row">
                <span class="ap-avatar">A</span>
                <span class="ap-lvl"><span class="ap-lvl__text">LVL ${DATA.level}</span><span class="ap-lvl__track"><span style="width:${Math.round((DATA.xp[0] / DATA.xp[1]) * 100)}%"></span></span></span>
                <span class="ap-res">
                  <span class="ap-pill ap-pill--streak"><b>${DATA.streak}</b>${icon('fire')}</span>
                  <span class="ap-pill ap-pill--cash"><b><span class="ap-cur">${symbol}</span>&nbsp;${number(DATA.balance)}</b></span>
                </span>
                <span class="ap-bell">${icon('bell')}<span class="ap-bell__badge">1</span></span>
              </div>
            </div>`;

  const games = `
            <div class="ap-screen ap-screen--games is-active" data-screen="games">
              <div class="ap-payout">
                <p class="ap-payout__title">${t.nextPayout}</p>
                <div class="ap-payout__track">
                  <span class="ap-payout__goal">${money(DATA.goal)}</span>
                  <span class="ap-payout__fill" style="--p:${pct}%"><span class="ap-payout__amount">${money(DATA.balance)}</span></span>
                </div>
              </div>
              ${DATA.games.map((g) => `<div class="ap-game">
                <div class="ap-game__banner">
                  ${img(`${g.key}-banner.webp`, 'ap-game__art', 720, 405)}
                  <span class="ap-game__icon">${img(`${g.key}-icon.webp`, '', 124, 124)}</span>
                </div>
                <div class="ap-game__body">
                  <div class="ap-game__row">
                    <p class="ap-game__title">${g.title}</p>
                    <span class="ap-meta">${img('gplay.png', 'ap-meta__store', 32, 32)}<span class="ap-meta__div"></span><b>${decimal1(g.rating)}</b>${img('star.png', 'ap-meta__star', 32, 32)}</span>
                  </div>
                  ${button(`${img('btn-play.png', 'ap-btn__play', 23, 25)}${fill(t.playAndEarn, { amount: money(g.reward) })}`, 'ap-btn--start')}
                </div>
              </div>`).join('\n              ')}
            </div>`;

  const cont = `
            <div class="ap-screen ap-screen--continue" data-screen="continue">
              <div class="ap-sechead"><p class="ap-h">${t.gamesSection}</p><span class="ap-count">${DATA.games.length}</span></div>
              ${DATA.games.map((g) => `<div class="ap-cont">
                <span class="ap-cont__icon">${img(`${g.key}-icon.webp`, '', 124, 124)}</span>
                <div class="ap-cont__body">
                  <div>
                    <p class="ap-cont__title">${g.title}</p>
                    <p class="ap-cont__left">${greenSymbol(fill(t.left, { amount: money(g.left) }))}</p>
                  </div>
                  ${button(t.continuePlaying, 'ap-btn--cont')}
                </div>
              </div>`).join('\n              ')}
            </div>`;

  const tasks = `
            <div class="ap-screen ap-screen--tasks" data-screen="tasks">
              <p class="ap-h">${t.apps}</p>
              <div class="ap-rail">
                ${DATA.apps.map((p) => `<div class="ap-app-card">
                  <span class="ap-app-card__art">${img(`${p.key}-icon.webp`, '', 124, 124)}</span>
                  <div class="ap-app-card__body">
                    <p class="ap-app-card__title">${p.title}</p>
                    <p class="ap-app-card__reward">${fill(t.earn, { amount: money(p.reward) })}</p>
                    ${button(t.open, 'ap-btn--task')}
                  </div>
                </div>`).join('\n                ')}
              </div>
              <p class="ap-h">${t.surveys}</p>
              ${DATA.surveys.map((s) => `<div class="ap-survey">
                <div><p class="ap-survey__reward">${greenSymbol(money(s.reward))}</p><p class="ap-survey__meta">${fill(t.approx, { minutes: s.minutes })}</p></div>
                ${button(t.start, 'ap-btn--survey')}
              </div>`).join('\n              ')}
            </div>`;

  const shop = `
            <div class="ap-screen ap-screen--shop" data-screen="shop">
              <div class="ap-shophead">
                <div><p class="ap-shophead__title">${t.shopTitle}</p><p class="ap-shophead__hint">${fill(t.shopHint, { amount: money(DATA.goal - DATA.balance) })}</p></div>
                ${icon('info')}
              </div>
              <div class="ap-chips">${t.groups.map((g, i) => `<span class="ap-chip${i === 0 ? ' is-active' : ''}">${g}</span>`).join('')}</div>
              <div class="ap-vouchers">
                ${DATA.vouchers.map((v) => `<div class="ap-voucher">
                  <span class="ap-voucher__card ap-voucher__card--${v.group}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${VOUCHER_ICONS[v.key]}</svg></span>
                  <p class="ap-voucher__name">${t.vouchers[v.key]}</p>
                  <p class="ap-voucher__from">${fill(t.from, { amount: whole(v.from) })}</p>
                </div>`).join('\n                ')}
              </div>
            </div>`;

  const profile = `
            <div class="ap-screen ap-screen--profile" data-screen="profile">
              <div class="ap-ident">
                <span class="ap-ident__avatar">A<span class="ap-ident__edit">${icon('pen')}</span></span>
                <div class="ap-ident__copy">
                  <p class="ap-ident__name">${t.profileName} ${icon('pen')}</p>
                  <p class="ap-ident__mail">${t.profileEmail}</p>
                  <span class="ap-ident__track"><span style="width:${Math.round((DATA.xp[0] / DATA.xp[1]) * 100)}%"></span></span>
                  <p class="ap-ident__xp"><span>${DATA.xp[0]} / ${DATA.xp[1]} XP</span><b>${t.level} ${DATA.level}</b></p>
                </div>
              </div>
              ${t.menuGroups.map((g) => `<div class="ap-group">
                <p class="ap-group__label">${g.label}</p>
                <div class="ap-group__card">${g.items.map(([key, label]) => `<div class="ap-row"><span>${label}</span>${icon(`m-${key}`)}${icon('arrow')}</div>`).join('')}</div>
              </div>`).join('\n              ')}
            </div>`;

  const tabs = ['games', 'continue', 'tasks', 'shop', 'profile'];
  const nav = `
            <div class="ap-nav">
              <span class="ap-nav__glow"></span>
              ${tabs.map((k, i) => `<span class="ap-nav__item${i === 0 ? ' is-active' : ''}" data-go="${i}">${icon(`nav-${k}`)}<span>${t.nav[k]}</span></span>`).join('\n              ')}
              <span class="ap-nav__home"></span>
            </div>`;

  const steps = T.steps.map((s, i) => `<li class="ap-step${i === 0 ? ' is-current' : ''}"${s.tab === 'games' ? ' id="spielen"' : ''} data-step="${i}">
          <span class="ap-step__dot" aria-hidden="true"></span>
          <span class="ap-step__num" aria-hidden="true">0${i + 1}</span>
          <h3 class="ap-step__title">${s.title}</h3>
          <p class="ap-step__text">${s.text}</p>${s.hint ? `
          <p class="ap-step__hint">${s.hint}</p>` : ''}
        </li>`).join('\n        ');

  return `${START}
    <!-- ====================== APP PREVIEW (generated by tools/app-preview/build.mjs) ====================== -->
    <section class="ap" id="wie-es-funktioniert" aria-labelledby="ap-title">
      <div class="ap__container">
        <h2 class="ap__title" id="ap-title">${T.section.title}</h2>
        <div class="ap__grid" data-ap>
          <div class="ap__stage" aria-hidden="true">
            <div class="ap-device">
              <div class="ap-phone">
                <div class="ap-phone__screen">${hud}
                  <div class="ap-screens">${games}${cont}${tasks}${shop}${profile}
                  </div>${nav}
                </div>
              </div>
            </div>
          </div>
          <ol class="ap__steps">
        ${steps}
          </ol>
        </div>
        <p class="ap__note">${T.section.note}</p>
      </div>
    </section>
    ${END}`;
}

let changed = 0;
for (const p of PAGES) {
  const path = join(ROOT, p.file);
  const html = readFileSync(path, 'utf8');
  const s = html.indexOf(START);
  const e = html.indexOf(END);
  if (s === -1 || e === -1 || e < s) throw new Error(`${p.file}: markers ${START} … ${END} not found`);
  const next = html.slice(0, s) + build(p.lang, p.a) + html.slice(e + END.length);
  if (next !== html) { writeFileSync(path, next); changed++; }
  console.log(`${p.file}: ${next === html ? 'unchanged' : 'updated'}`);
}
console.log(`${changed} file(s) written`);
