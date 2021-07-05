// $(function(){
//   $(".box1").css({
//     "background-color":"#0000ff",
//     "height":"100px"
//   });
// });

// スライドダウン
// $(function(){
//   $(".box1").slideDown();
// });

// スライドアップ
// $(function(){
//   $(".box1").slideUp();
// });

// ボックスを表示
// $(function(){
//   $(".box1").show();
//   $(".box1").css({"background-color" : "#0000ff"});
// })
// ボックスを非表示
// $(function(){
//   $(".box1").hide();
// })

// 1.要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更してください。
//2. 1.の後、下から上へスライドされるようにしてください。
$(function(){
  $(".box1").slideDown(10000,function(){
    $(".box1").css({
      "background-color":"blue",
      "width":"200px",
      "height":"100px"});
  }).slideUp();
});

