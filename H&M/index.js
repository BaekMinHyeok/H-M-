
// $(document).ready(function(){
//     var $firstmenu = $('top-menu>menu>ul>li>a'),
//         $header = $('top-bar');
//      $firstmenu.mouseenter(function(){
//         $header.stop().animate({height:'550px'},200);
//      })
//      .mouseleave(function(){
//          $header.stop().animate({height:'50px'},200);
//      })
     
     
//  });



 $(document).ready(function(){
    $('.main-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: false,
      slidesToShow: 1,   
      slidesToScroll: 1,
      fade: true,
      pauseOnHover: true,
      prevArrow: $(".btn-wrap .prev"),
      nextArrow: $(".btn-wrap .next"),
      customPaging: function (slick, index) {
        return '<div class="page-btn"></div>'
      }
    });

    $('.category-box .woman').mouseover(function(){
      $('.category-box .img-box').css('background-image','url(../H&M/img/section2/Kategorie.jpeg)') .css('transition','0.5s') ;
    });
    $('.category-box .woman').mouseout(function(){
      $('.category-box .img-box').css('background-image','url(https://hmgroup.com/wp-content/uploads/2021/02/HM-REMAKE-FINAL_5813-scaled.jpg)') .css('transition','all 0.5s');
    });




    


});


