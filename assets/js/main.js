$(document).ready(function () {
  new WOW().init();

  $(".readOnlyRating").starRating({
    starSize: 10,
    activeColor: '#FFB503',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: '#CECECE',
    starShape: 'straight',
    strokeColor: '#FFD93F',
    strokeWidth: 9,
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".ratingFeed").starRating({
    starSize: 14,
    activeColor: '#FFB503',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: '#CECECE',
    starShape: 'straight',
    strokeColor: '#FFD93F',
    strokeWidth: 9,
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".testmonialCar").owlCarousel({
    nav: true,
    loop: true,

    margin: 30,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });
  $(".clientRating").starRating({
    starSize: 15,
    activeColor: '#FFB503',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: '#CECECE',
    starShape: 'straight',
    strokeColor: '#FFD93F',
    strokeWidth: 9,
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".OurPartnersCar").owlCarousel({
    nav: false,
    loop: true,

    margin: 20,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 3,
        nav: false
      },
      700: {
        items: 4,
      },
      1000: {
        items: 6,
      }
    }
  });
  $(".FollowCar").owlCarousel({
    nav: false,
    loop: true,

    margin: 20,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    }
  });
});

