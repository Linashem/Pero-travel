const swiper = new Swiper('.page__baner-slider', {
  slidesPerView: 1.4,
  spaceBetween: 20,
  breakpoints: {

    768: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },


  }
});



const swiperPopExcursion = new Swiper('.pop-excursion__slider', {
  slidesPerView: 1.4,
  spaceBetween: 20,
  navigation: {
    prevEl: '.pop-excursion__slider-arrow-prev',
    nextEl: '.pop-excursion__slider-arrow-next',
  },
  pagination: {
    el: '.pop-excursion__pager',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {

    768: {
      slidesPerView: 2.25,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3.38,
      spaceBetween: 20,
    },}
});



const swiperReviews = new Swiper('.reviews__slider', {
  slidesPerView: 1.8,
  spaceBetween: 20,
  navigation: {
    prevEl: '.reviews__slider-arrow-prev',
    nextEl: '.reviews__slider-arrow-next',
  },
  pagination: {
    el: '.reviews__pager',
    type: 'bullets',
    clickable: true,
  },
});

const swiperDesc = new Swiper('.desc-route__slider', {
  slidesPerView: 1.6,
  spaceBetween: 20,

});
