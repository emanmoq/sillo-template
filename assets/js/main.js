jQuery(function ($) {
    new WOW().init();
    
  $(".readOnlyRating").starRating({
    starSize: 10,
    activeColor: '#FFB503',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: '#CECECE',
    starShape: 'straight',
    strokeColor:'#FFD93F',
    strokeWidth:9,
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
});

