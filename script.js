const body = document.body;
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelectorAll('.nav a');
const year = document.querySelector('#year');
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.catalog-card');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const linkPage = link.getAttribute('href')?.split('#')[0];

  if (linkPage === currentPage && !link.getAttribute('href')?.includes('#')) {
    link.classList.add('active');
  }

  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

function setFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === filter);
  });

  catalogCards.forEach((card) => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !visible);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter || 'all'));
});

const hash = window.location.hash.replace('#', '');
if (['general', 'oncology', 'plastic'].includes(hash)) {
  setFilter(hash);
}
