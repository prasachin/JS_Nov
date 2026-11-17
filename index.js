// console.log("Javascript Module");
// var a = 10; // T1
// var b = 20; // T2

// function multiply(x, y) {
//   var res = x * y;
//   return res;
// }

// var result = multiply(a, b);

// console.log(result);
// console.log(a);
// console.log(b);

// var c = a;

// var a = 10;
// var b = 20;

// // console.log(a);
// // console.log(b);

// console.log(c);

// var c = a;

// let a = 10;
// const b = 20;

// console.log(a);
// console.log(b);

// console.log(c);

// console.log("end");

// const a = 10;
// console.log(a);
// a = 20;
// console.log(a);
// console.log(a);

// var a = 10 ;

// console.log(multiply());
// multiply()

// function multiply() {
//   console.log("I am multiply function!");
// }

// let a = 10 ;
// let b = a ;

// b = 20;

// console.log(a);
// console.log(b);
// console.log(typeof a);

// let a = { x: 10 };  // add_a: { x: 20 };
// let b = a; // b will also have address of a i.e add_a

// b.x = 20;

// console.log(a.x);
// console.log(b.x);
// s

// let a = [
//   1,
//   2,
//   3,
//   "sachin",
//   5,
//   function x() {
//     console.log("I am a func");
//   },
// ];
// let b = [1, 2, 3, 4, 5];

// let a = new Set();
// console.log(a.length);
// console.log(typeof a);
// console.log(Array.isArray(a));

// let a = [1, 2, 3, 4, 5];
// let b = new Array(5, 1);

// console.log(a.length);
// console.log(b.length);

// let a = [1, 2, 3, 4, 5];

// a.push(6);
// a.unshift(6);

// a.pop();
// a.shift();
// console.log(a);

// let a = [1, 2, 3, 4, 5];

// let b = a.splice(2, 2, 6, 7); // mutating

// let b = a.slice(1, 4); // non-mutating

// console.log(a);
// console.log(b);

// let a = [1, 2, 3, 4, 5, "Sachin"];

// for (let i = 0; i < a.length; i++) {
//   console.log("element at index " + i + ` is ${a[i]}`);
// }

// let i = 0;

// while (i < a.length) {
//   console.log("element at index " + i + ` is ${a[i]}`);
//   i++;
// }

// do {
//   console.log("element at index " + i + ` is ${a[i]}`);
//   i++;
// } while (i < a.length);

// let a = [1, 2, 3, 4, 5, 6];

// function callMe(value, i) {
//   //   console.log("element at index " + i + ` is ${value}`);
//   //   if (i === 0) {
//   //     return "I am at index 0";
//   //   }
//   //   return i*value;
//   return 1;
// }
// let a = [0, 2, 3, 4, 5, 6];
// function callMe1(prevValue, value, i) {
//   // console.log("element at index " + i + ` is ${value} with previous value ${prevValue}`);
//   //   if (i === 0) {
//   //     return "I am at index 0";
//   //   }
//   //   return i*value;
//   //   return 1;
//   let currSum = prevValue * value;
//   return currSum;
// }

// let resForEach = a.forEach(callMe);
// let resForMap = a.map(callMe);
// let resFilter = a.filter(callMe);
// let resReduce = a.reduce(callMe1);

// console.log(resForEach);
// console.log(resForMap);
// console.log(resFilter);
// console.log(resReduce);

// let str = "string";
// let str1 = 'string';
// let str2 = `string`;
// let str3 = new String("ajj");

// console.log(str);
// console.log(str3);

// let str = 'apple';
// // str[0] = 'A';
// // Apple
// str = str[0].toUpperCase() + str.slice(1);
// console.log(str);

// let str = "apple is a sweet fruit."
// let ans = "";
// for(let i =  0; i<str.length; i++){
//     let word = str[i];
//     let j = i+1;
//     while(str[j] !== ' ' && j < str.length){
//         word = word + str[j] ;
//         j++;
//     }
//     i = j;
//     // console.log(word) ;
//     word = word[0].toUpperCase() + word.slice(1);
//     // console.log(word);
//     ans += word;
//     ans += ' ';
// }
// console.log(ans);
// let str = "apple is a sweet fruit."
// let splited = str.split(' ');
// // console.log(splited);
// // let ans = "";
// for(let i =  0; i<splited.length; i++){
//     let word = splited[i];
//     word = word[0].toUpperCase() + word.slice(1);
//     splited[i] = word;
//     // ans += word;
//     // ans += ' ';
// }
// console.log(splited);
// console.log(ans);
// str = splited.join(' ');
// console.log(str);

// let str = "I am string";
// console.log(str.indexOf('str'));
// console.log(str.includes('str'));

// function Object(){
//     this.name = "Sachin",
//     this.age = 21;
// }

// // let obj = {};
// let obj = new Object();
// // console.log(typeof obj);
// console.log(obj);

// function Object(){
//     this.name = "Sachin",
//     this.age = 21;
// }

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let user1 = new User("sachin", 21);
// let user = new User("rohit", 45);
// user.password = '12345';

// console.log(user);
// console.log(user1);
// let obj1 = new Object();
// let obj2 = new Object();

// obj2.password = "12345";

// console.log(obj1);
// console.log(obj2);

// let obj = { name: "sachin", age: 21, password: "1234" };
// console.log(obj.age);
// console.log(obj['age']);
// obj.new = 'new';
// delete obj.password;
// obj.password = 'new password';
// console.log(obj);