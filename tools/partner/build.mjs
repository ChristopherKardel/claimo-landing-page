// Builds the partner section of the site (design and base texts from the new site,
// "claimo-landing-page ALT VERSION": tools/lib/pages/partner.mjs and home.mjs
// partnerTeaser(), i18n partner / home.partner).
//
//   node tools/partner/build.mjs
//
// ENABLED below switches the whole section on or off:
//   on  - creates partner.html, de/partner.html, en/partner.html from the contact
//         page skeleton if missing and fills <!-- PARTNER:START/END --> plus title/description
//       - fills <!-- PARTNER-TEASER:START/END --> in the three index.html
//       - adds "For partners" to the navbar and the footer ("Explore") of every page
//       - adds the three pages to sitemap.xml
//   off - deletes the three partner pages (the Pages workflow publishes every *.html,
//         so an unlinked page would still be public), empties the teaser, removes the
//         links and sitemap entries.
// Afterwards it runs tools/contact/build.mjs, which shows the "Business enquiry?"
// link only while partner.html exists. Styles, scripts and images stay in place.
//
// Texts: tools/partner/texts.json (DE/EN). Every claim was checked against the app
// code (Rewards-App) and the app terms 2.7 — change claims only after checking them
// there. No user, retention or revenue figures before launch, no partner logos.
// Contact is mailto only (no form → no change to the website privacy policy).
// Styles: assets/css/partner.css (page), assets/css/partner-teaser.css (home).
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Partner section switched off for now (Timothy, 25.11.2026). Set to true to publish it again.
const ENABLED = false;

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const TEXTS = JSON.parse(readFileSync(join(ROOT, 'tools/partner/texts.json'), 'utf8'));
const PAGES = [
  { file: 'partner.html', lang: 'en', pre: '' },
  { file: 'de/partner.html', lang: 'de', pre: '../' },
  { file: 'en/partner.html', lang: 'en', pre: '../' },
];
const HOMES = [
  { file: 'index.html', lang: 'en' },
  { file: 'de/index.html', lang: 'de' },
  { file: 'en/index.html', lang: 'en' },
];
const MAIL = 'contact@claimo-app.com';

// Highlight regions in percent of the capture (1344 × 2992), from ALT tools/lib/pages/shared.mjs.
const OFFER_MARKS = [
  { x: 1.4, y: 9.6, w: 97.2, h: 34.2 },  // artwork + title
  { x: 1.4, y: 44.5, w: 97.2, h: 3.6 },  // category, deadline, rating
  { x: 1.4, y: 48.9, w: 97.2, h: 40 },   // goals
  { x: 2.2, y: 90.7, w: 95.6, h: 6.6 },  // start button
];
const FLOW_STATES = ['is-reached', 'is-reached', 'is-reached', 'is-next', 'is-payout'];

const svg = (d, w = '1.8') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  arrowRight: svg('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
  arrowDown: svg('<path d="M12 5v14"/><path d="m5 12 7 7 7-7"/>'),
  check: svg('<path d="M20 6 9 17l-5-5"/>', '2.4'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/>'),
  // audiences: networks, studios, rewards, press
  layers: svg('<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>'),
  gamepad: svg('<rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M7.5 10.5v4M5.5 12.5h4"/><path d="M15.5 12h.01M18 14h.01"/>', '1.9'),
  gift: svg('<rect x="3.5" y="9" width="17" height="11.5" rx="1.5"/><path d="M2.5 9h19v-3h-19z"/><path d="M12 6v14.5"/><path d="M12 6c-1.5-3-5-3.2-5-1s3 1 5 1zm0 0c1.5-3 5-3.2 5-1s-3 1-5 1z"/>'),
  press: svg('<path d="M4 5.5h12.5v13a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z"/><path d="M16.5 9.5h3v9a2 2 0 0 1-2 2"/><path d="M7.5 9h5.5M7.5 12.5h5.5M7.5 16h3.5"/>'),
};
const AUDIENCE_ICONS = [I.layers, I.gamepad, I.gift, I.press];

const esc = (s) => String(s).replace(/&(?!shy;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const mailto = (subject) => `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`;
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&shy;/g, '');

function shot(pre, lang, name, alt) {
  const src = (w) => `${pre}assets/img/screens/${name}-${lang}-${w}.webp`;
  return `<img src="${src(540)}" srcset="${src(540)} 540w, ${src(1080)} 1080w" sizes="(max-width: 640px) 78vw, 360px" width="1344" height="2992" alt="${esc(alt)}" loading="lazy" decoding="async">`;
}

/* ------------------------------------------------------------------ partner page */
function page(lang, pre) {
  const p = TEXTS[lang];
  const pins = OFFER_MARKS.map((m, i) =>
    `<span class="mark mark--pin" data-mark="${i}" style="--x:${m.x}%;--y:${m.y}%;--w:${m.w}%;--h:${m.h}%"><b>${i + 1}</b></span>`).join('');

  const audiences = p.audiences.items.map(([title, text, subject, anchor], i) => `<li class="aud">
              <span class="aud__icon">${AUDIENCE_ICONS[i]}</span>
              <h3 class="aud__title">${title}</h3>
              <p class="aud__text">${text}</p>
              <p class="aud__actions">
                <a class="aud__mail" href="${mailto(subject)}">${p.audiences.mail} ${I.arrowRight}</a>
                <a class="aud__more" href="#${anchor}">${p.audiences.details} ${I.arrowDown}</a>
              </p>
            </li>`).join('\n            ');

  return `<!-- PARTNER:START -->
  <!-- ====================== PARTNER (generated by tools/partner/build.mjs) ====================== -->
  <main id="main" class="partner">

    <!-- hero -->
    <section class="phero">
      <div class="pt-container">
        <p class="eyebrow" data-reveal>${p.hero.eyebrow}</p>
        <h1 class="phero__title" data-reveal style="--d:60ms">${p.hero.heading}</h1>
        <div class="phero__row">
          <p class="phero__lead" data-reveal style="--d:120ms">${p.hero.lead}</p>
          <div class="phero__cta" data-reveal style="--d:180ms">
            <a class="btn btn--primary" href="${mailto(p.hero.subject)}">${p.hero.cta} ${I.arrowRight}</a>
            <a class="text-link" href="mailto:${MAIL}">${MAIL}</a>
            <p class="phero__note">${p.hero.note}</p>
          </div>
        </div>
        <dl class="keyfacts" data-reveal style="--d:240ms">
          ${p.hero.keyfacts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n          ')}
        </dl>
        <p class="pstatus">${p.hero.status}</p>
      </div>
    </section>

    <!-- audiences -->
    <section class="psection auds" aria-labelledby="auds-title">
      <div class="pt-container">
        <div class="psection__head" data-reveal>
          <p class="eyebrow">${p.audiences.eyebrow}</p>
          <h2 class="psection__title" id="auds-title">${p.audiences.title}</h2>
        </div>
        <ul class="auds__list" data-reveal style="--d:80ms">
            ${audiences}
        </ul>
      </div>
    </section>

    <!-- presentation -->
    <section class="psection show" id="darstellung" aria-labelledby="show-title">
      <div class="pt-container show__inner">
        <figure class="show__visual" data-reveal>
          <div class="phone phone--show"><div class="phone__screen">${shot(pre, lang, 'offer', p.show.alt)}${pins}</div></div>
          <figcaption class="footnote">${p.screenNote}</figcaption>
        </figure>
        <div class="show__copy" data-reveal style="--d:80ms">
          <p class="eyebrow">${p.show.eyebrow}</p>
          <h2 class="psection__title" id="show-title">${p.show.title}</h2>
          <p class="psection__lead">${p.show.lead}</p>
          <ol class="marks" data-marks>
            ${p.show.marks.map(([title, text], i) => `<li data-mark="${i}"><span class="marks__num" aria-hidden="true">${i + 1}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join('\n            ')}
          </ol>
        </div>
      </div>
    </section>

    <!-- processing -->
    <section class="psection pflow" id="abwicklung" aria-labelledby="flow-title">
      <div class="pt-container">
        <div class="psection__head" data-reveal>
          <p class="eyebrow">${p.flow.eyebrow}</p>
          <h2 class="psection__title" id="flow-title">${p.flow.title}</h2>
          <p class="psection__lead">${p.flow.lead}</p>
        </div>
        <ol class="pflow__list" data-reveal>
          ${p.flow.steps.map(([title, text], i) => `<li class="pflow__step ${FLOW_STATES[i]}">
            <span class="track__dot" aria-hidden="true"></span>
            <span class="pflow__num">0${i + 1}</span>
            <h3 class="pflow__title">${title}</h3>
            <p class="pflow__text">${text}</p>
          </li>`).join('\n          ')}
        </ol>
        <p class="fineprint">${p.flow.note}</p>
      </div>
    </section>

    <!-- quality + return -->
    <section class="psection duo">
      <div class="pt-container duo__inner">
        <div class="duo__col" data-reveal>
          <h2 class="duo__title">${p.quality.title}</h2>
          <ul class="checklist">
            ${p.quality.items.map((x) => `<li>${I.check}<span>${x}</span></li>`).join('\n            ')}
          </ul>
          <p class="fineprint">${p.quality.note}</p>
        </div>
        <div class="duo__col" data-reveal style="--d:80ms">
          <h2 class="duo__title">${p.return.title}</h2>
          <dl class="pairs">
            ${p.return.items.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n            ')}
          </dl>
          <p class="fineprint">${p.return.note}</p>
        </div>
      </div>
    </section>

    <!-- reward partners -->
    <section class="psection prewards" id="praemien" aria-labelledby="rewards-title">
      <div class="pt-container prewards__inner">
        <div class="prewards__head" data-reveal>
          <p class="eyebrow">${p.rewards.eyebrow}</p>
          <h2 class="psection__title" id="rewards-title">${p.rewards.title}</h2>
          <p class="psection__lead">${p.rewards.lead}</p>
          <a class="btn btn--ghost prewards__cta" href="${mailto(p.audiences.items[2][2])}">${p.audiences.mail} ${I.arrowRight}</a>
        </div>
        <div data-reveal style="--d:80ms">
          <ol class="prewards__list">
            ${p.rewards.items.map(([k, v], i) => `<li><span class="prewards__num">0${i + 1}</span><h3>${k}</h3><p>${v}</p></li>`).join('\n            ')}
          </ol>
          <p class="fineprint">${p.rewards.note}</p>
        </div>
      </div>
    </section>

    <!-- fact sheet -->
    <section class="psection sheet" aria-labelledby="sheet-title">
      <div class="pt-container sheet__inner">
        <div class="sheet__head" data-reveal>
          <p class="eyebrow">${p.sheet.eyebrow}</p>
          <h2 class="psection__title" id="sheet-title">${p.sheet.title}</h2>
        </div>
        <div data-reveal style="--d:80ms">
          <dl class="spec">
            ${p.sheet.rows.map(([k, v]) => `<div class="spec__row"><dt>${k}</dt><dd>${v}</dd></div>`).join('\n            ')}
          </dl>
          <p class="fineprint">${p.sheet.note}</p>
        </div>
      </div>
    </section>

    <!-- press -->
    <section class="ppress" id="presse" aria-labelledby="press-title">
      <div class="pt-container">
        <div class="ppress__box" data-reveal>
          <span class="ppress__icon">${I.press}</span>
          <div class="ppress__copy">
            <h2 class="ppress__title" id="press-title">${p.press.title}</h2>
            <p class="ppress__text">${p.press.text}</p>
          </div>
          <a class="btn btn--ghost" href="${mailto(p.press.subject)}">${p.press.cta} ${I.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- closing (light-beam block from layout.css, as on the home page) -->
    <section class="container closing">
      <div class="cta" data-reveal>
        <img class="cta__mark" src="${pre}assets/img/claimo-icon.png" alt="" width="256" height="256" loading="lazy">
        <h2 class="cta__title">${p.closing.title}</h2>
        <p class="cta__text">${p.closing.text}</p>
        <div class="cta__actions">
          <a class="btn btn--primary" href="${mailto(p.hero.subject)}">${p.hero.cta} ${I.arrowRight}</a>
          <a class="btn btn--ghost" href="mailto:${MAIL}">${I.mail} ${MAIL}</a>
        </div>
      </div>
    </section>

  </main>
  <!-- PARTNER:END -->`;
}

/* ------------------------------------------------------------------ home teaser */
function teaser(lang) {
  const t = TEXTS[lang].teaser;
  return `<!-- PARTNER-TEASER:START -->
    <!-- ====================== PARTNER TEASER (generated by tools/partner/build.mjs) ====================== -->
    <section class="pteaser" id="partner" aria-labelledby="pteaser-title">
      <div class="pteaser__container pteaser__inner">
        <div data-reveal>
          <p class="pteaser__eyebrow">${t.eyebrow}</p>
          <h2 class="pteaser__title" id="pteaser-title">${t.title}</h2>
          <p class="pteaser__lead">${t.lead}</p>
          <div class="pteaser__actions">
            <a class="btn btn--primary" href="partner.html">${t.cta} ${I.arrowRight}</a>
            <a class="pteaser__mail" href="mailto:${MAIL}">${MAIL}</a>
          </div>
        </div>
        <ol class="pteaser__points" data-reveal style="--d:80ms">
          ${t.points.map(([title, text], i) => `<li><span class="pteaser__num">0${i + 1}</span><h3>${title}</h3><p>${text}</p></li>`).join('\n          ')}
        </ol>
      </div>
    </section>
    <!-- PARTNER-TEASER:END -->`;
}

/* ------------------------------------------------------------------ write */
function replaceBetween(html, file, start, end, content) {
  const s = html.indexOf(start);
  const e = html.indexOf(end);
  if (s === -1 || e === -1 || e < s) throw new Error(`${file}: markers ${start} … ${end} not found`);
  return html.slice(0, s) + content + html.slice(e + end.length);
}

let changed = 0;
function write(file, next, html) {
  if (next !== html) { writeFileSync(join(ROOT, file), next); changed++; }
  if (next !== html) console.log(`${file}: updated`);
}
const read = (file) => readFileSync(join(ROOT, file), 'utf8');
const allPages = () => [
  ...readdirSync(ROOT).filter((f) => f.endsWith('.html')),
  ...['de', 'en'].flatMap((d) => readdirSync(join(ROOT, d)).filter((f) => f.endsWith('.html')).map((f) => `${d}/${f}`)),
];

// navbar + footer link — a line of its own after the FAQ link, in every page
const NAV_LINK = /\n[ \t]*<li><a class="nav__link" href="[^"]*partner\.html"[^>]*>[^<]*<\/a><\/li>/;
const FOOTER_LINK = /\n[ \t]*<li><a href="[^"]*partner\.html"[^>]*>[^<]*<\/a><\/li>/;
function setLinks(file, on) {
  const html = read(file);
  let next = html.replace(NAV_LINK, '').replace(FOOTER_LINK, '');
  if (on) {
    const label = TEXTS[file.startsWith('de/') ? 'de' : 'en'].nav;
    const self = /(^|\/)partner\.html$/.test(file) ? ' aria-current="page"' : '';
    const to = (href) => href.replace(/(index\.html)?#faq$/, 'partner.html');
    const nav = /(<li><a class="nav__link" href="([^"]*#faq)">FAQ<\/a><\/li>)/;
    const foot = /(\n([ \t]*)<li><a href="([^"]*#faq)">FAQ<\/a><\/li>)/;
    if (!nav.test(next) || !foot.test(next)) throw new Error(`${file}: FAQ link in navbar/footer not found`);
    next = next
      .replace(nav, (m, li, href) => `${li}\n          <li><a class="nav__link" href="${to(href)}"${self}>${label}</a></li>`)
      .replace(foot, (m, li, ind, href) => `${li}\n${ind}<li><a href="${to(href)}"${self}>${label}</a></li>`);
  }
  write(file, next, html);
}

// a new partner page starts as a copy of the contact page of the same language
function createPage(file) {
  const contact = file.replace('partner.html', 'kontakt.html');
  let h = read(contact);
  const must = (re, rep) => { if (!re.test(h)) throw new Error(`${contact}: ${re}`); h = h.replace(re, rep); };
  must(/<!-- CONTACT:START -->[\s\S]*<!-- CONTACT:END -->/, '<!-- PARTNER:START -->\n  <!-- PARTNER:END -->');
  must(/assets\/css\/contact\.css/, 'assets/css/partner.css');
  must(/assets\/js\/contact\.js/, 'assets/js/partner.js');
  h = h.replace(/(<a class="lang__opt" href="[^"]*)kontakt\.html"/g, '$1partner.html"');
  h = h.replace(/<li><a href="kontakt\.html" aria-current="page">/, '<li><a href="kontakt.html">');
  writeFileSync(join(ROOT, file), h);
  console.log(`${file}: created`);
  changed++;
}

const SITEMAP_ENTRY = (p) => `  <url>\r\n    <loc>https://claimo-app.com/${p}</loc>\r\n    <lastmod>2026-11-24</lastmod>\r\n    <changefreq>monthly</changefreq>\r\n    <priority>0.8000</priority>\r\n  </url>\r\n`;
function setSitemap(on) {
  const html = read('sitemap.xml');
  let next = html.replace(/[ \t]*<url>\s*<loc>https:\/\/claimo-app\.com\/(?:de\/|en\/)?partner\.html<\/loc>[\s\S]*?<\/url>\r?\n/g, '');
  if (on) next = next.replace('</urlset>', PAGES.map((p) => SITEMAP_ENTRY(p.file)).join('') + '</urlset>');
  write('sitemap.xml', next, html);
}

if (ENABLED) {
  for (const { file } of PAGES) if (!existsSync(join(ROOT, file))) createPage(file);
  for (const { file, lang, pre } of PAGES) {
    const html = read(file);
    const p = TEXTS[lang];
    const next = replaceBetween(html, file, '<!-- PARTNER:START -->', '<!-- PARTNER:END -->', page(lang, pre))
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(p.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(strip(p.description))}">`);
    write(file, next, html);
  }
} else {
  for (const { file } of PAGES) {
    if (existsSync(join(ROOT, file))) { rmSync(join(ROOT, file)); console.log(`${file}: deleted`); changed++; }
  }
}
for (const { file, lang } of HOMES) {
  const html = read(file);
  const content = ENABLED ? teaser(lang) : '<!-- PARTNER-TEASER:START -->\n    <!-- PARTNER-TEASER:END -->';
  write(file, replaceBetween(html, file, '<!-- PARTNER-TEASER:START -->', '<!-- PARTNER-TEASER:END -->', content), html);
}
for (const file of allPages()) setLinks(file, ENABLED);
setSitemap(ENABLED);
console.log(`partner section ${ENABLED ? 'ON' : 'OFF'} — ${changed} file(s) written`);

// the contact page links to partner.html only while it exists
execFileSync(process.execPath, [join(ROOT, 'tools/contact/build.mjs')], { stdio: 'inherit' });
