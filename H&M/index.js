// $(document).ready(function(){
// var $firstmenu = $('top-menu>menu >ul>li'),
//     $header=$('top-bar');
//     $firstmenu.mouseenter(function(){
//      $header.stop().animate({height:'450px'},200);
//     })
//     .mouseleave(function(){
//         $header.stop().animate({height:'120px'},200);
//     })
// });

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