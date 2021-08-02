/**
 * const,let等の変数宣言
 */
// var　val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数を再宣言
// var　val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数上書き";
// console.log(val2);

// // let再宣言不可能
// let val2 = "let変数再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数上書き
// val3 = "const上書き";

// const再宣言
// const val3 = "const再宣言";

// constで定義したオブジェクトはプロパティ変更可能
// const val4 = {
//   name:"rona",
//   age:26
// };
// val4.name ="ronarin";
// val4.address = "turumi";
// console.log(val4);

// constで定義した配列はプロパティ変更可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ロナ";
// const age = 26;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// const func1 =　function(str){
//   return str;
// }
// console.log(func1("func1です。"));

// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };
// console.log(func3(10,30));

/**
 * 分割代入
 */
// const myprofile = {
//   name:"ろな",
//   age:26,
// };
// const message1 = `私の名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
// console.log(message1);

// const {name,age} = myprofile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myprofile = ["ろな",26];
// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);
// const [name,age] = myprofile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
//  const arr1 = [1,2];
// //  console.log(arr1);
// //  console.log(...arr1);

//  const sumFunc = (num1,num2) => console.log(num1 + num2);
// //  sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

//配列のコピー
// const arr4 = [10,20];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// //配列の結合
// const arr5 = [...arr4,...arr6];
// console.log(arr5);

/**
 * map,filter
 */
// const nameArr1 = ["田中","山田","ろな"];
//map
// const nameArr2 = nameArr1.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr1.map((name,index) => console.log(`${index + 1}番目は、${name}です。`));

//filter
// const numArr = [1,2,3,4,5];
// const numArry2 = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(numArry2);

// const newNameArr = nameArr1.map((name) => {
//   if(name === "ろな"){
//     return name;
//   } else{
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const num = "1300";
// console.log(num.toLocaleString());
// const formatNum = typeof num === "number" ? num.toLocaleString() : "数値じゃない";
// console.log(formatNum);
