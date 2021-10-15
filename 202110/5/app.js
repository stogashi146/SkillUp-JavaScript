// マウスオーバで色変更
// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").addClass("box1-ext")
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").removeClass("box1-ext")
//   })
// })

// マウスクリック
$(function(){
  $(".box1").on("click",function(){
    $(".box1").addClass("box1-ext");
  });
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box1-ext");
  });
});
