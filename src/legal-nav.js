/* ============================================================================
   Legal pages navbar behaviour — mirrors the landing .simple-nav.
   Static, dependency-free: frost-glass on scroll, mobile dropdown toggle and
   the sliding gradient indicator that tracks the active / hovered link.
   ========================================================================== */
const nav = document.querySelector('.legal-nav');

if (nav) {
  /* Frost glass once the page scrolls. */
  const onScroll = () => nav.classList.toggle('legal-nav--scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggle = nav.querySelector('.legal-nav__toggle');
  const links = nav.querySelector('.legal-nav__links');
  const anchors = links ? Array.from(links.querySelectorAll('a')) : [];
  const indicator = nav.querySelector('.legal-nav__indicator');
  const current = links ? links.querySelector('[aria-current="page"]') : null;

  /* Mobile dropdown. */
  const closeMenu = () => {
    links?.classList.remove('legal-nav__links--open');
    toggle?.classList.remove('legal-nav__toggle--open');
    toggle?.setAttribute('aria-expanded', 'false');
  };
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('legal-nav__links--open');
      toggle.classList.toggle('legal-nav__toggle--open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    anchors.forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && closeMenu());
  }

  /* Sliding indicator (desktop only). */
  const isMobile = () => window.matchMedia('(max-width: 980px)').matches;
  const place = (el) => {
    if (!indicator || !el || isMobile()) {
      if (indicator) indicator.style.opacity = '0';
      anchors.forEach((a) => a.classList.remove('legal-nav__link--on'));
      return;
    }
    indicator.style.opacity = '1';
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.transform = `translateX(${el.offsetLeft}px)`;
    anchors.forEach((a) => a.classList.toggle('legal-nav__link--on', a === el));
  };
  const reset = () => place(current);

  anchors.forEach((a) => a.addEventListener('mouseenter', () => place(a)));
  links?.addEventListener('mouseleave', reset);
  window.addEventListener('resize', reset);
  window.addEventListener('load', reset);
  requestAnimationFrame(reset);
}
