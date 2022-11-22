$(document).ready(function () {
  new WOW().init();

  $(".readOnlyRating").starRating({
    rtl:true,
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
    rtl:true,
    nav: true,
    loop: true,

    margin: 30,
    navText: ['<i class="fa fa-arrow-right"></i>', '<i class="fa fa-arrow-left"></i>'],
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
  $(".FilterRating").starRating({
    starSize: 20,
    activeColor: '#FF8A00',
    hoverColor: '#FFD93F',
    ratedColor: '#FF8A00',
    emptyColor: '#CCCCCC',
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
    rtl:true,

    margin: 20,
    navText: ['<i class="fa fa-arrow-right"></i>', '<i class="fa fa-arrow-left"></i>'],
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
    rtl:true,
    nav: false,
    loop: true,

    margin: 20,
    navText: ['<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    }
  });


  /*******************Close Cart Menu *************/
  /*****************Close Cart Item ***************/
  $(".closeCartItem").click(function () {
    $(this).closest("li").css("display", "none")
  })
  $(".closeCart").click(function () {

    $(".shopMenu").css("left", "-1000px");
    $(".overlayBody").css("display", "none");
    $(".shopMenu").css("display", "none");



  })

  $(".cartClick").click(function () {
    if ($(window).width() > 810 && $(window).width() < 1200) {
      $(".shopMenu").css("left", "-41%");
    }

    else if ($(window).width() > 1200) {
      $(".shopMenu").css("left", "-100%");
    }
    else {
      $(".shopMenu").css("left", "-3%");
    }

    $(".overlayBody").css("display", "block");
    $(".shopMenu").css("display", "block");

  })
  $(".awsomeTeamCar").owlCarousel({
    nav: true,
    loop: false,
    margin: 30,
    navText: ['<i class="fa fa-arrow-right"></i>', '<i class="fa fa-arrow-left"></i>'],
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


});

