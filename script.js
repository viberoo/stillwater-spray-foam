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
