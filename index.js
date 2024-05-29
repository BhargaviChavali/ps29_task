const prompt = require("prompt-sync")();

// 1 : input: ["Helloworld", "google", "Catch", "Mouse", "bsnl"]
// output:
// Hollowerld
// geoglo
// Catch
// Meuso
// blns

let arr = prompt("Enter strings : ").split(" ");
// console.log(arr);
let vowels = "aeiouAEIOU";
let ind = 0;
let vstr = [];
let res = "";
let c = 0;
for (let str of arr) {
  res = "";
  vstr = [];
  ind = 0;
  c = 0;
  for (i of str) {
    if (vowels.includes(i)) {
      vstr.push(i);
      c++;
    }
  }
  vstr = vstr.reverse().join("");
  if (c != 0) {
    for (i in str) {
      if (vowels.includes(str[i])) {
        res = res + vstr[ind];
        ind++;
      } else {
        res = res + str[i];
      }
    }
  } else {
    res = str.split("").sort().join("");
  }
  console.log(res);
}


// 2 : Input : Enter no of rows: 4
//output:
// 2
// 3 11
// 5 13 19
// 7 17 23 29

// Code :
let rows = +prompt("Enter number of rows : ");
let arr1 = [];
let length = (rows * (rows + 1)) / 2;
let num = 2;
let primecount = 0;

while (primecount < length) {
  let c = 0;
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      c++;
      break;
    }
  }
  if (c == 0) {
    primecount++;
    arr1.push(num);
  }
  num++;
}
// console.log(arr1);

for (i = 0; i < rows; i++) {
  let s = "";
  let ele = i;
  let k = rows - 1;
  for (j = 0; j <= i; j++) {
    s = s + arr1[ele] + " ";
    ele = ele + k;
    k--;
  }
  console.log(s);
}


// 3 : Input : 5
// output:
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

// Code :

let rows1 = +prompt("Enter number of rows : ");
let str = "";
for (i = 1; i <= rows1; i++) {
  str = "";
  for (j = 1; j <= i; j++) {
    if (j % 2 != 0) str = str + 1 + " ";
    else str = str + 0 + " ";
  }
  console.log(str);
}


// 4 : Input : happy
// output :
// h a p p y
// a p p y
// p p y
// p y
// y

// Code :

let str1 = prompt("Enter a string : ");
let s = "";
for (i = 0; i < str1.length; i++) {
  let s = "";
  for (j = i; j < str1.length; j++) {
    s = s + str1[j] + " ";
  }
  console.log(s);
}

