// свайпер
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// табы
document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs__btn').forEach(function(btn) {
      btn.classList.remove('tabs__btn--active')});

    e.currentTarget.classList.add('tabs__btn--active');

    document.querySelectorAll('.tabs__item').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tabs__item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');});
});


// аккордеон
$(".accordion").accordion({heightStyle:"content"}).next().slideToggle(2000);



// бургер
let burger = document.querySelector (".header__burger");
// let menu = document.querySelector (".btn__item");

const bbtn = document.querySelector('#bbtn');
// const bnav = document.querySelector('#bnav');

bbtn.addEventListener('click', function(e) {
  // bnav.classList.toggle('header__burger_nav--active');
  burger.classList.toggle ("header__burger--active");
})


// поиск
const sbtn = document.querySelector('#sbtn');
const search = document.querySelector('#search');
const close = document.querySelector('#close');
const area = document.querySelector('#area');
const fbtn = document.querySelector('#fbtn');

sbtn.addEventListener('click', function(e) {
  search.classList.add('header__search--active');
  area.classList.add('header__search_area--active');
  close.classList.add('header__search_close--active');
  sbtn.classList.add('header__search_btn--active');
  fbtn.classList.add('form_btn--active')
})

close.addEventListener('click', function(e) {
  search.classList.remove('header__search--active');
  area.classList.remove('header__search_area--active');
  close.classList.remove('header__search_close--active');
  sbtn.classList.remove('header__search_btn--active');
  fbtn.classList.remove('form_btn--active')
})
