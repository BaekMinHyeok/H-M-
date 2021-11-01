

 $(document).ready(function(){
    $('.main-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
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


    // 카테고리 박스01

    $('.category-box .woman').mouseover(function(){
      $('.category-box .img-box').css({
        "background-image":"url(../H&M/img/section2/Kategorie.jpeg)",
        "transition":"0.5s",
        "background-repeat":"no-repeat",
        "background-size":"cover",
        "background-position":"center",
        "position":"relative",
        "width: 100%":"height: 100%",
      });

    });
    $('.category-box .woman').mouseout(function(){
      $('.category-box .img-box').css({
        "background-image":"url(../H&M/img/section2/h&m-main.jpg)",
        "background-repeat":"no-repeat",
        "background-size":"cover",
        "background-position":"center",
        "position":"relative",
        "width: 100%":"height: 100%",


      });

    });

    // 카테고리박스02
    
    $('.category-box .man').mouseover(function(){
      $('.category-box .img-box').css({
        "background-image":"url(../H&M/img/section2/man1.jpg)",
        "transition":"0.5s",
        "background-repeat":"no-repeat",
        "background-size":"cover",
        "background-position":"center",
        "position":"relative",
        "width: 100%":"height: 100%",
      });

    });
    $('.category-box .man').mouseout(function(){
      $('.category-box .img-box').css({
        "background-image":"url(../H&M/img/section2/h&m-main.jpg)",
        "background-repeat":"no-repeat",
        "background-size":"cover",
        "background-position":"center",
        "position":"relative",
        "width: 100%":"height: 100%",


      });


    });

// 카테고리박스03
$('.category-box .kids').mouseover(function(){
  $('.category-box .img-box').css({
    "background-image":"url(../H&M/img/section2/kid.jpeg)",
    "transition":"0.5s",
    "background-repeat":"no-repeat",
    "background-size":"cover",
    "background-position":"center",
    "position":"relative",
    "width: 100%":"height: 100%",
  });

});
$('.category-box .kids').mouseout(function(){
  $('.category-box .img-box').css({
    "background-image":"url(../H&M/img/section2/h&m-main.jpg)",
    "background-repeat":"no-repeat",
    "background-size":"cover",
    "background-position":"center",
    "position":"relative",
    "width: 100%":"height: 100%",


  });


});
      
      // 카테고리박스04
      $('.category-box .home').mouseover(function(){
        $('.category-box .img-box').css({
          "background-image":"url(../H&M/img/section2/h&m-home.jpg)",
          "transition":"0.5s",
          "background-repeat":"no-repeat",
          "background-size":"cover",
          "background-position":"center",
          "position":"relative",
          "width: 100%":"height: 100%",
        });
      
      });
      $('.category-box .home').mouseout(function(){
        $('.category-box .img-box').css({
          "background-image":"url(../H&M/img/section2/h&m-main.jpg)",
          "background-repeat":"no-repeat",
          "background-size":"cover",
          "background-position":"center",
          "position":"relative",
          "width: 100%":"height: 100%",
      
      
        });
      
      
      });
      // 카테고리박스05
    
      // MAGAZINE 슬라이더
      
      $('.magazine-slider .slider-box').slick({
        autoplay: false,
        slidesToShow: 1,   
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: true,
        prevArrow: $(".btn-wrap1 .prev"),
        nextArrow: $(".btn-wrap1 .next"),
      });


});


