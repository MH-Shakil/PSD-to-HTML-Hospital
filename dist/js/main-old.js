"use strict";

/* -------------------------------------------------------------------
        Header Scroll Class js
     ------------------------------------------------------------------ */
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#header").addClass("header-scrolled");
  } else {
    $("#header").removeClass("header-scrolled");
  }
});

$("#banner").owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  dots: false,
  nav: false,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  autoplay: true,
  autoPlaySpeed: 2500,
  autoplayTimeout: 2500,
  stagePadding: 0,
  // responsive: {
  //     0: {
  //         items: 1
  //     },
  //     600: {
  //         items: 2
  //     },
  //     600: {
  //         items: 2
  //     }
  // }
});
