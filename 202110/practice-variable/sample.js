// 再宣言
//varによる再宣言　成功
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

//letによる再宣言　エラー
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// constの再宣言　エラー
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// 再代入
// var nickname1 = "taro"
// console.log(nickname1)
// nickname1 =  "jiro"
// console.log(nickname1)
//
// let nickname1 = "taro"
// console.log(nickname1)
// nickname1 = "jiro"
// console.log(nickname1)
//
// const nickname1 = "taro"
// console.log(nickname1)
// nickname1 = "jiro"
// console.log(nickname1)

// グローバルスコープの確認
// var str = "webcamp"
// function foo(){
//   console.log(str)
//   var y = "hello"
// }
//
// foo()
// console.log(y)

// letのスコープ
// function foo(){
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }
// foo()

// for(let i=0;i<10;i++){
//   console.log(i)
// }
// console.log(i)

// 巻き上げ
var str = "webcamp"

function foo(){
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
