"use strict";
// //타입변수가 2개 필요한 경우?
Object.defineProperty(exports, "__esModule", { value: true });
const swap = (a, b) => {
    return [b, a];
};
// const [a, b] = swap("1", 2);
// console.log(a, b);
// const returnFirstValue = <T>(data: T[]) => {
//   return data[0];
// };
// let num = returnFirstValue([0, 1, 2]);
// let str = returnFirstValue([1, "hello", "world"]);  // string | number
// const returnFirstValue = <T>(data: [T, ...unknown[]]) => {
//   return data[0];
// };
// let str = returnFirstValue([1, "hello", "world"]);  // number
const getLength = (data) => {
    return data.length;
};
getLength("hello");
getLength([1, 2, 3]);
getLength({ length: 1 });
// getLength(null); //불가. 형제, 슈퍼서브x
// getLength(undefined); //불가. 상대적 서브타입.
