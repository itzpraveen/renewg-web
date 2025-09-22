const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const body = document.body;
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    body.classList.toggle('nav-open');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      body.classList.remove('nav-open');
    });
  });
}
