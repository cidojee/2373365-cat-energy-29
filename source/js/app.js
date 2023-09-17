let mainNavList = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.main-nav__toggle');

mainNavList.classList.remove('main-nav__list--nojs');
mainNavToggle.classList.remove('main-nav__toggle--nojs');

mainNavToggle.onclick = function() {
  mainNavList.classList.toggle('main-nav__list--open');
  mainNavToggle.classList.toggle('main-nav__toggle--open');
};
