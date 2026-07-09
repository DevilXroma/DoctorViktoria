const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.main-nav a');
const year = document.querySelector('#year');
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');
const faqItems = document.querySelectorAll('.faq-item');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  const href = link.getAttribute('href') || '';
  const linkPath = href.split('#')[0];
  const hasHash = href.includes('#');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  if (!hasHash && linkPath === currentPath) {
    link.classList.add('active');
  }

  link.addEventListener('click', () => {
    body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

function applyServiceFilter(filter) {
  filterButtons.forEach((item) => {
    item.classList.toggle('active', item.dataset.filter === filter);
  });

  serviceCards.forEach((card) => {
    const shouldShow = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !shouldShow);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyServiceFilter(button.dataset.filter || 'all');
  });
});

const hashFilter = window.location.hash.replace('#', '');
if (['general', 'oncology', 'plastic'].includes(hashFilter)) {
  applyServiceFilter(hashFilter);
}

faqItems.forEach((item) => {
  const button = item.querySelector('button');

  button?.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});
