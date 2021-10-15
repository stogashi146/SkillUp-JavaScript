$(function(){
  $(".menu-trigger").on("click",function(event){
    // activeクラスを追加
    $(this).toggleClass("active");
    // 非表示であれば、フェードイン
    $("#sp-menu").fadeToggle();
    // event.preventDefault();
  });
});
