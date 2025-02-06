// let numA: 100 = 100;
// let strA = "hello";
// let message: undefined = undefined;
// message = 1;
// numA = 200;
const numArr = [1, 2, 3];
const strArr = ["hello", "world"];
const boolArr01 = [true, false, true];
const boolArr02 = [true, false, true];
const multiArr = [1, "hello"];
const doubleArr = [[1, 2, 3], [4, 5], [6]];
const doubleArr2 = [[1, "2", 3], [4, 5], [6]];
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; //에러
let tup2 = [1, "hello", true];
// tup2 = [1, 2]; //에러
let tup3 = [1, 2];
tup3.push(1);
console.log(tup3);
export {};
