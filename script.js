$(document).ready(function () {
  $('.property-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 }
    }
  });
});

// ===============================================

$(document).ready(function () {
  $('.featured-slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 4500,
    smartSpeed: 800
  });
});