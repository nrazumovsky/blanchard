const sliderSwiper = document.querySelector('.slider-swiper');
const gallerySwiper = document.querySelector('.gallery-swiper');
const eventsSwiper = document.querySelector('.events-swiper');
const projectsSwiper = document.querySelector('.projects-swiper');
const btns = document.querySelectorAll('.header__dropdown-btn');
const dropdowns = document.querySelectorAll('.header__dropdown-menu');
const activeClassdropdowns = 'dropdown__active';
const activeClassbtns = 'btn__active';
let center = [55.75846806898367, 37.60108849999989];

//header
const search = document.querySelector('.header__search');
const searchForm = document.querySelector('.header__form-mobile');
const searchClose = document.querySelector('.header__form-btn');

search.addEventListener('click', function () {
  searchForm.classList.toggle('header__form-mobile--active');
});

searchClose.addEventListener('click', function () {
  searchForm.classList.toggle('header__form-mobile--active');
});

//header-menu
const headerBurger = document.querySelector('.header__burger');
const headerMenuClose = document.querySelector('.header__menu-close');
const headerMenu = document.querySelector('.header__menu');
const headerLink = document.querySelectorAll('.header__menu-link');

headerBurger.addEventListener('click', function () {
  headerMenu.classList.add('header__menu--active');
  document.body.classList.add('no-scroll');
});

headerMenuClose.addEventListener('click', function () {
  headerMenu.classList.remove('header__menu--active');
  document.body.classList.remove('no-scroll');
});

headerLink.forEach(function (element) {
  element.addEventListener('click', function () {
    headerMenu.classList.remove('header__menu--active');
    document.body.classList.remove('no-scroll');
  });
});

// slider
let swiper = new Swiper(sliderSwiper, {
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

let swiperGallery = new Swiper(gallerySwiper, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      allowTouchMove: false,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      allowTouchMove: true,
    },
  },
  navigation: {
    nextEl: '.gallery-nav-next',
    prevEl: '.gallery-nav-prev',
  },
  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },
});

let swiperEvents = new Swiper(eventsSwiper, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      allowTouchMove: false,
    },
    875: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
      allowTouchMove: true,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      allowTouchMove: true,
    },
  },
  navigation: {
    nextEl: '.events-nav-next',
    prevEl: '.events-nav-prev',
  },
  pagination: {
    el: '.events-pagination',
    type: 'bullets',
    clickable: 'true',
  },
});

let swiperProjects = new Swiper(projectsSwiper, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      allowTouchMove: false,
    },
    875: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      allowTouchMove: true,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      allowTouchMove: true,
    },
  },
  navigation: {
    nextEl: '.projects-nav-next',
    prevEl: '.projects-nav-prev',
  },
});

// dropdown
document.querySelectorAll('.dropdown__simplebar').forEach((dropdown) => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 40,
  });
});

// dropdown-open
btns.forEach((item) => {
  item.addEventListener('click', function () {
    let DropThis = this.parentElement.querySelector('.header__dropdown-menu');
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach((el) => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

// dropdowm - close
const dropdownBtns = document.querySelectorAll('.dropdown__link');
dropdownBtns.forEach((item) => {
  item.addEventListener('click', function () {
    let DropThis = this.parentElement.querySelector('.dropdown');
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
  });
});

// gallery
const element = document.querySelector('.gallery__dropdown');
const choices = new Choices(element, {
  searchEnabled: false,
});

const gallerySlider = document.querySelectorAll('.swiper-slide');
const galleryModal = document.querySelectorAll('.gallery__modal');
const galleryCart = document.querySelectorAll('.gallery__modal-cart');
const galleryBtn = document.querySelectorAll('.gallery__modal-btn');

gallerySlider.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    galleryCart.forEach(function (element) {
      element.classList.remove('gallery__modal-cart--active');
    });
    galleryModal.forEach(function (element) {
      element.classList.add('gallery__modal--active');
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('gallery__modal-cart--active');
    document.body.classList.add('no-scroll');
  });
});

galleryBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    galleryCart.forEach(function (element) {
      element.classList.remove('gallery__modal-cart--active');
    });
    galleryModal.forEach(function (element) {
      element.classList.remove('gallery__modal--active');
    });
    document.body.classList.remove('no-scroll');
    document.querySelector(`[data-target="${path}"]`);
  });
});

// catalog
const catalogBtn = document.querySelectorAll('.catalog__btn');
const catalogDesc = document.querySelectorAll('.catalog__person-infoblock');

catalogBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    catalogBtn.forEach(function (btn) {
      btn.classList.remove('catalog__btn--active');
    });
    e.currentTarget.classList.add('catalog__btn--active');

    catalogDesc.forEach(function (element) {
      element.classList.remove('person-active');
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('person-active');
  });
});

// catalog-accordion
new Accordion('.js-accordion-container', {
  showMultiple: true,
});

// validate
document.addEventListener('DOMContentLoaded', function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask('+7 (999)-999-99-99');
  im.mask(selector);

  validation
    .addField('.name', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Длина должна быть не менее двух букв',
      },
    ])
    .addField('.tel', [
      {
        rule: 'function',
        validator: function () {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Вы не ввели телефон',
      },
    ]);
});

// map
function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 15,
  });

  let placemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: './img/icons/geotag.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-25, -40],
    }
  );

  map.geoObjects.add(placemark);
  map.behaviors.disable('scrollZoom');

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
}

ymaps.ready(init);

//tooltip

tippy('#tooltip__btn', {
  content: 'Пример современных тенденций — современная методология разработки',
  theme: 'purple',
});

tippy('#tooltip__btn-1', {
  content:
    'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'purple',
});

tippy('#tooltip__btn-2', {
  content: 'В стремлении повысить качество',
  theme: 'purple',
});
