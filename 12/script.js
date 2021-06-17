const API_KEY ="9817f495a8986e96a4a240c9f1f6c6b2"

$(function(){
  $("#btn"),on("click",function(){
    $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather?q=" + $("#cityname").val()+"&units=metric&appid=" + API_KEY,
      dataType:"jsonp",
    }).done(function(data){
      $("#place").text(data.name);
      $("#temp_max").text(data.main.temp_max);
      $("#temp_min").text(data.main.temp_min);
      $("#humidity").text(data.main.humidity);
      $("#speed").text(data.wind.speed);
      $("#weather").text(data.wearher[0].main);

      $("img").attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $("img").attr("alt",data.weather[0].main);

    }).fail(function(data){
      alert("通信に失敗しました")

    });

  });
});