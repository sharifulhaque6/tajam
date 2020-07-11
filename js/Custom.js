$(function(){
    //scrolling navbar add
 $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('navBg');
    }else{
        $('.navbar').removeClass('navBg');
    }
}); 
    
    
 //  slider 1
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
    dots:true,
    speed:1500,
  autoplaySpeed: 2500,
    
});
 //  slider 2
$('.full_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
   dots:true,
    speed:1500,
  autoplaySpeed: 2500,
});
    //Meet image slide
  $('.middlerow').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    }
  ]    
});
    
// wow js activation code
new WOW().init();      
    
 // venobox
$('.venobox').venobox();     
    
 //back to top button
    $('.back_top').click(function(){
        $('html,body').animate({scrollTop:0},1500);
    });
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling >300){
            $('.back_top').fadeIn();
        }else{
            $('.back_top').fadeOut();
        }
    });
    
    
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });  
    
  //preloader
    $(window).on('load', function(){
    $('.preloader').delay(500).fadeOut(500);
}); 
    
 //animation scroll js

var html_body = $('html, body');
$('.collapse a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 70
            }, 1500);
            return false;
        }
    }
});    
    
    
});