/* Claimo — "Die App" section: the step at reading height drives the phone.
   The phone shows a recreated app; its bottom-nav tab follows the step.
   No cookies, no storage, no third-party requests. Without JS every text is
   visible and the phone shows the first tab. */
(function () {
  var root = document.querySelector('[data-ap]');
  if (!root || !('IntersectionObserver' in window)) return;

  var section = root.closest('.ap');
  var phone = root.querySelector('.ap-phone');
  var steps = Array.prototype.slice.call(root.querySelectorAll('.ap-step'));
  var screens = Array.prototype.slice.call(root.querySelectorAll('.ap-screen'));
  var tabs = Array.prototype.slice.call(root.querySelectorAll('.ap-nav__item'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobile = window.matchMedia('(max-width: 980px)');
  var current = -1;

  function show(index) {
    if (index === current || index < 0) return;
    current = index;
    phone.style.setProperty('--i', index);
    steps.forEach(function (step, k) {
      step.classList.toggle('is-current', k === index);
      step.classList.toggle('is-done', k < index);
    });
    screens.forEach(function (screen, k) { screen.classList.toggle('is-active', k === index); });
    tabs.forEach(function (tab, k) { tab.classList.toggle('is-active', k === index); });
  }

  // Desktop reads at the middle of the screen; on mobile the phone covers the
  // upper part, so the reading line sits lower, below it.
  function readingLine() {
    return window.innerHeight * (mobile.matches ? 0.79 : 0.5);
  }

  // The step closest to the reading line wins — also after a jump (anchor,
  // reload mid-page), when no step happens to cross the line.
  var ticking = false;
  function update() {
    ticking = false;
    var line = readingLine();
    var best = 0;
    var bestDistance = Infinity;
    steps.forEach(function (step, k) {
      var rect = step.getBoundingClientRect();
      var distance = line < rect.top ? rect.top - line : line > rect.bottom ? line - rect.bottom : 0;
      if (distance < bestDistance) { bestDistance = distance; best = k; }
    });
    show(best);
  }
  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  // the payout bar fills once when the section first comes into view
  var seen = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    section.classList.add('is-seen');
    seen.disconnect();
  }, { threshold: 0.2 });
  seen.observe(section);

  // tapping a tab in the phone scrolls to its text
  tabs.forEach(function (tab, k) {
    tab.addEventListener('click', function () {
      var step = steps[k];
      var rect = step.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + rect.top + rect.height / 2 - readingLine(),
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
      });
    });
  });
})();
