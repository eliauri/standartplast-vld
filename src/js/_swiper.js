var swiper = new Swiper(".header-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // el: ".header-slider__pagination",
  },

  loop: true,

  autoplay: {
    delay: 6000,
  },
});

var bestseller = new Swiper(".bestseller__slider", {
  slidesPerView: 4,
  spaceBetween: 40,
  infinite: true,
  navigation: {
    nextEl: ".bestseller__button-next",
    prevEl: ".bestseller__button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});
var productPhoto = new Swiper(".product__photo", {
  pagination: {
    el: ".product__pagination",
    clickable: true,
  },
  effect: 'coverflow',
  autoHeight: true,
});



