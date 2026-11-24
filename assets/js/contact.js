/* Claimo — customer contact form (markup: tools/contact/build.mjs).
   Sends name, email and message to Web3Forms only when the visitor submits
   (website privacy policy, section 4). No cookies, no browser storage.
   Without JS the form posts to Web3Forms directly and the topic buttons stay hidden. */
(function () {
  var form = document.getElementById('contact-form');
  var done = document.getElementById('contact-done');
  if (!form || !done) return;

  var status = document.getElementById('contact-status');
  var submit = form.querySelector('[type="submit"]');
  var message = form.querySelector('[name="message"]');
  var topics = Array.prototype.slice.call(form.querySelectorAll('.topic'));
  var prefix = form.dataset.prefix + ': ';
  var submitLabel = submit.textContent;

  /* ---------- topics: pre-fill the message, never a separate form field ---------- */
  function bodyFor(btn) {
    return prefix + btn.dataset.topic + '\n' + btn.dataset.template;
  }
  function isUntouched(value) {
    return value.trim() === '' || topics.some(function (btn) { return value === bodyFor(btn); });
  }

  topics.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wasOn = btn.getAttribute('aria-pressed') === 'true';
      var value = message.value;
      topics.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });

      if (wasOn) {
        if (value === bodyFor(btn)) message.value = '';
        else if (value.indexOf(prefix + btn.dataset.topic + '\n') === 0) message.value = value.slice(value.indexOf('\n') + 1).replace(/^\n/, '');
      } else {
        btn.setAttribute('aria-pressed', 'true');
        if (isUntouched(value)) message.value = bodyFor(btn);
        else if (value.indexOf(prefix) === 0) message.value = prefix + btn.dataset.topic + value.slice(value.indexOf('\n'));
        else message.value = prefix + btn.dataset.topic + '\n\n' + value;
      }

      // cursor after the first empty template line ("Offer: |"), otherwise at the end
      message.focus();
      var first = /\n[^\n]*: $/m.exec(message.value);
      var pos = first ? first.index + first[0].length : message.value.length;
      message.setSelectionRange(pos, pos);
    });
  });

  /* ---------- submit ---------- */
  function setStatus(text) {
    status.textContent = text;
    status.classList.toggle('is-error', !!text);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    setStatus('');
    submit.disabled = true;
    submit.textContent = form.dataset.msgSending;

    fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then(function (response) { return response.json(); })
      .then(function (data) {
        if (!data || !data.success) throw new Error('not sent');
        done.querySelector('[data-email]').textContent = form.elements.email.value;
        form.reset();
        topics.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        form.hidden = true;
        done.hidden = false;
        done.focus();
      })
      .catch(function () {
        setStatus(form.dataset.msgError);
      })
      .finally(function () {
        submit.disabled = false;
        submit.textContent = submitLabel;
      });
  });

  done.querySelector('.contact-done__again').addEventListener('click', function () {
    done.hidden = true;
    form.hidden = false;
    form.elements.name.focus();
  });
})();
