const body = document.body;
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelectorAll('.nav a');
const yearNode = document.querySelector('#year');
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.catalog-card');
const langButtons = document.querySelectorAll('[data-lang]');

const commonTranslations = {
  ru: {
    'brand.role': 'хирург',
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.about': 'О враче',
    'nav.book': 'Запись',
    'common.book': 'Записаться',
    'common.viewServices': 'Смотреть услуги',
    'contact.call': 'Позвонить',
    'filter.all': 'Все',
    'filter.general': 'Общая',
    'filter.oncology': 'Онко',
    'filter.plastic': 'Пластика',
    'footer.top': 'Наверх ↑'
  },
  en: {
    'brand.role': 'surgeon',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.book': 'Book',
    'common.book': 'Book a visit',
    'common.viewServices': 'View services',
    'contact.call': 'Call',
    'filter.all': 'All',
    'filter.general': 'General',
    'filter.oncology': 'Onco',
    'filter.plastic': 'Plastic',
    'footer.top': 'Back to top ↑'
  },
  hy: {
    'brand.role': 'վիրաբույժ',
    'nav.home': 'Գլխավոր',
    'nav.services': 'Ծառայություններ',
    'nav.about': 'Բժշկի մասին',
    'nav.book': 'Գրանցում',
    'common.book': 'Գրանցվել',
    'common.viewServices': 'Դիտել ծառայությունները',
    'contact.call': 'Զանգել',
    'filter.all': 'Բոլորը',
    'filter.general': 'Ընդհանուր',
    'filter.oncology': 'Օնկո',
    'filter.plastic': 'Պլաստիկ',
    'footer.top': 'Վերև ↑'
  }
};

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

function applyLanguage(lang) {
  const dictionary = commonTranslations[lang] || commonTranslations.ru;
  document.documentElement.lang = lang;
  localStorage.setItem('siteLanguage', lang);

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const text = dictionary[node.dataset.i18n];
    if (text) node.textContent = text;
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
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

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang || 'ru'));
});

const hash = window.location.hash.replace('#', '');
if (['general', 'oncology', 'plastic'].includes(hash)) {
  setFilter(hash);
}

applyLanguage(localStorage.getItem('siteLanguage') || 'ru');
