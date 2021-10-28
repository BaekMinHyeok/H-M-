
$(document).ready(function(){
    var $firstmenu = $('top-menu>menu>ul>li>a'),
        $header = $('top-bar');
     $firstmenu.mouseenter(function(){
        $header.stop().animate({height:'300px'},200);
     })
     .mouseleave(function(){
         $header.stop().animate({height:'50px'},200);
     })
     
     
 });

 $(document).ready(function(){
    $('.main-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: false,
    //   pauseOnHover: false,
    });
});