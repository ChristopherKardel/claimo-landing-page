/* Claimo — partner page (markup: tools/partner/build.mjs). Taken over from the
   new design (ALT VERSION assets/js/site.js): hovering an item of the list
   highlights its box on the real app screen. No cookies, no storage, no requests. */
(function () {
  var list = document.querySelector('[data-marks]');
  var section = list ? list.closest('.show') : null;
  if (!list || !section) return;
  var pins = section.querySelectorAll('.mark--pin');

  function focusMark(index) {
    section.classList.toggle('is-focus', index !== null);
    pins.forEach(function (pin) { pin.classList.toggle('is-hot', pin.dataset.mark === index); });
    list.querySelectorAll('li').forEach(function (li) { li.classList.toggle('is-hot', li.dataset.mark === index); });
  }

  list.querySelectorAll('li').forEach(function (li) {
    li.addEventListener('mouseenter', function () { focusMark(li.dataset.mark); });
    li.addEventListener('mouseleave', function () { focusMark(null); });
  });
})();
