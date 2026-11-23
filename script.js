// FAQ accordion + mobile nav + mailto contact form
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (i) { i.classList.remove('open'); i.querySelector('.faq-q').setAttribute('aria-expanded', 'false'); });
      if (!open) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
  });
  var t = document.querySelector('.menu-toggle');
  if (t) t.addEventListener('click', function () { document.querySelector('nav.main').classList.toggle('open'); });
  var form = document.getElementById('quote-form');
  // Google Ads click-to-call conversion, copied from the original site.
  // Fires on any tel: link click, then lets the call go through (2s fallback
  // so a slow tag never blocks the call).
  document.addEventListener('click', function (event) {
    var phoneLink = event.target.closest && event.target.closest('a[href^="tel:"]');
    if (!phoneLink || typeof window.gtag !== 'function') return;
    event.preventDefault();
    var continued = false;
    function continueCall() {
      if (continued) return;
      continued = true;
      window.location.href = phoneLink.href;
    }
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18310969734/zNpXCMewgOkcEIbzrJtE',
      'event_callback': continueCall,
      'event_timeout': 2000
    });
    window.setTimeout(continueCall, 2000);
  });
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var subject = 'Free Quote Request - ' + v('first-name') + ' ' + v('last-name');
    var body = 'First Name: ' + v('first-name') + '\nLast Name: ' + v('last-name') +
      '\nEmail Address: ' + v('email') + '\nPhone Number: ' + v('phone') +
      '\nProject Type: ' + v('project-type') + '\n\nMessage:\n' + v('message');
    window.location.href = 'mailto:contact@stillwatersprayfoam.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
});
