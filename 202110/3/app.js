// 関数を出力する
// let alertString;
// alertString = addString("webcamp");
//
// alert(alertString);
//
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// 入力した文字列を出力する
// let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
// alert("あなたの選んだ手は" + user_hand + "です");

// じゃんけんの関数
let user_hand = prompt("じゃんけんの手をグーチョキパーから選んでください")
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt("じゃんけんの手をグーチョキパーから選んでください")
}

let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if(user_hand==null){
  alert("またチャレンジしてね");
}else{
  alert("あなたの選ん手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。結果は" + judge + "です");
}



function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ"
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

function winLose(user,js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }else if(user == null){
    winLoseStr = "またチャレンジしてね";
  }else{
    winLoseStr = "グーチョキパーのいずれかを入力してください。";
    return;
  }
  return winLoseStr;
}
