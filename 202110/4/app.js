// $(function(){
//   $(".box1").slideUp({
//     "background-color":"#0000FF",
//     "height":"100px"
//   });
// });

// 表示
// $(function(){
//   $(".box1").show();
//   $(".box1").css({"background-color":"#0000FF"});
// });

// 非表示
// $(function(){
//   $(".box1").hide();
// });

// 確認問題
$(function(){
  $(".box1").slideDown(function(){
    $(".box1").css({
      "width":"200px",
      "height":"100px",
      "background-color":"#0000FF"
    }).slideUp();
  });
});
