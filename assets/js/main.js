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
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
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
  $("#price-range").slider({
    step: 10,
    range: true,
    min: 0,
    max: 7000,
    values: [150, 3000],

    slide: function (event, ui) { $(".priceRange").val(ui.values[0] + " - " + ui.values[1]); }
  });
  $(".priceRange").val($("#price-range").slider("values", 0) + " - " + $(".price-range").slider("values", 1));
  $(".FilterList li a").click(function () {
    $(this).parent().find(".filterContent").slideToggle();
    $(this).find('.fa-solid').toggleClass('fa-solid fa-chevron-up  fa-solid fa-chevron-down');
  });

  /*******************Close Cart Menu *************/
  /*****************Close Cart Item ***************/
  $(".closeCartItem").click(function () {
    $(this).closest("li").css("display", "none")
  })
  $(".closeCart").click(function () {
    $(".shopMenu").css("right", "-1000px");
    $(".overlayBody").css("display", "none");
    $(".shopMenu").css("display", "none");

  })
  $(".cartClick").click(function () {
    $(".shopMenu").css("right", "-100%");
    $(".overlayBody").css("display", "block");
    $(".shopMenu").css("display", "block");

  })
  $(".awsomeTeamCar").owlCarousel({
    nav: true,
    loop: false,
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
  $(".showHidePass").click(function () {
    var x = $(this).closest(".form-group").find(".form-control");
    if (x.attr("type") == "text") {
      x.attr("type", "password");
      $(this).closest(".form-group").find(".showPass").css("display", "block");
      $(this).closest(".form-group").find(".hidePass").css("display", "none");
    }
    else {
      x.attr("type", "text");
      $(this).closest(".form-group").find(".hidePass").css("display", "block");
      $(this).closest(".form-group").find(".showPass").css("display", "none");
    }
  });
  $(".backBtn").click(function () {
    $(".order-DetailsBox").css("display", "none");
    $(".orderHistory").css("display", "block");
  });
  $(".viewproductDetailsBtn").click(function () {
    $(this).closest(".orderHistory").css("display", "none");
    $(".order-DetailsBox").css("display", "block");
  })
  $('.accordion-panel').click(function () {
    $(this).find('.plusMinus i').toggleClass('fa-minus fa-plus');
    $(this).closest(".faqContent").addClass("active");
  });
  $('.faqHeader').click(function () {
    $(this).closest(".faqContent").find('.faqbody').slideToggle(400);
  });
  $(".faqHeader").on("click", "a", function (e) { e.preventDefault() });
  $(".close span").click(function(){
    $(".navbar-collapse").removeClass("show")
})
});

