
$(window).load(function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});
});

$(document).ready(function(){ 

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("html").niceScroll({
    cursorcolor:"#f74d65",
    scrollspeed :"100",
    cursorborder:"1px solid #f74d65",
    horizrailenabled: "false",
    cursorborderradius: "0px"
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{items:1},
      600:{items:2},
      1000:{items:3}
    }
  });

  new WOW().init();

});
