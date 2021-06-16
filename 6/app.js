// マウスオーバ、アウトで色変更
// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").css({"background-color":"#0000ff"});
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").css({"background-color":"#ff0000"});
//   });
// });

// マウスオーバ、アウトでクラス変更
// $(function(){
//   $(".box1").mouseover(
//     function(){
//       $(".box1").addClass("box1-ext");
//     });
//   $(".box1").mouseout(
//     function(){
//       $(".box1").removeClass("box1-ext");
//     })
// })

// マウスクリックでクラス変更
$(function(){
  $(".box1").on("click",function(){
    $(".box1").addClass("box1-ext");
  });
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box1-ext");
  })
}
  )