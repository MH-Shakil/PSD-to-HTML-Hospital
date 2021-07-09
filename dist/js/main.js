"use strict";
AOS.init();
/* -------------------------------------------------------------------
        Header Scroll Class js
     ------------------------------------------------------------------ */
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $("#header").addClass("header-scrolled");
    // $("#header").removeClass("header-top");
    $(".header-top").hide();
  } else {
    $("#header").removeClass("header-scrolled");
    // $("#header").addClass("header-top");
    $(".header-top").show();
  }
});

// Banner Carousel
$(".banner-carousel").owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  dots: false,
  nav: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  navText: [
    "<i class='fal fa-arrow-left banner-icon'></i>",
    "<i class='fal fa-arrow-right banner-icon'></i>",
  ],
  //   autoplay: true,
  //   autoPlaySpeed: 2500,
  //   autoplayTimeout: 2500,
  //   stagePadding: 0,
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

// Testimonial Carousel

$(".testimonial-carousel").owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  dots: false,
  nav: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  //   autoplay: true,
  //   autoPlaySpeed: 2500,
  //   autoplayTimeout: 2500,
  //   stagePadding: 0,
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
