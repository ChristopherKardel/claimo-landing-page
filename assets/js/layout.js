/* Claimo — navigation and scroll reveal for every page (taken over from the new design).
   No cookies, no browser storage, no third-party requests.
   Without JS the bar is solid and the links stay reachable on desktop. */

/* ---------- navigation: background on scroll + mobile menu ---------- */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = nav.querySelector('.nav__toggle');
  var panel = document.getElementById('nav-panel');
  if (!toggle || !panel) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? toggle.dataset.labelClose : toggle.dataset.labelOpen);
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
    // the links sit before the toggle in the DOM, so move keyboard focus into the menu
    if (open) panel.querySelector('a').focus();
  });

  panel.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('click', function (event) {
    if (nav.classList.contains('is-open') && !nav.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 981px)').addEventListener('change', function (event) {
    if (event.matches) setOpen(false);
  });
})();

/* ---------- scroll reveal (closing block) ---------- */
(function () {
  var items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  items.forEach(function (el) { observer.observe(el); });
})();
