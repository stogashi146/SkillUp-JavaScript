// var alertString;
// alertString = addString("WebCamp")

// alert(alertString);

// function addString(strA){
//   var addStr = "Hello"+strA;
//   return addStr;
// }

// var promptStr = prompt("何か好きな文字を入力してください")
// alert(promptStr);

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
var js_hand = getJshand();
var judge = winLose(user_hand,js_hand);
while(!(user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー" || user_hand==null)){
  alert("グーチョキパーいずれかを入力してください");
  var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

if(user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー"){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else if(user_hand==null){
  alert("またチャレンジしてね");
}




function getJshand(){
  var js_hand_num = Math.floor(Math.random()*3);

  if(js_hand_num==0){
    js_hand = "グー";
  }
  else if(js_hand_num == 1){
    js_hand = "チョキ";
  }
  else if(js_hand_num ==2){
    js_hand = "パー";
  }
  return js_hand;
}

// じゃんけんの手を比べる関数
function winLose(user,js){
  var winLoseStr;

  if(user == "グー"){
    if(js=="グー"){
      winLoseStr="あいこ";
    }else if (js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js=="パー"){
      winLoseStr="負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr="負け";
    }else if(js=="チョキ"){
      winLoseStr="あいこ";
    }else if(js == "パー"){
      winLoseStr="勝ち";
    }
  }else if(user == "パー"){
    if(js=="グー"){
      winLoseStr="勝ち";
    }else if(js=="チョキ"){
      winLoseStr="負け";
    }else if(js=="パー"){
      winLoseStr="あいこ";
    }
  }
  return winLoseStr;
}