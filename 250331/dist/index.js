"use strict";
// const arr = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
Object.defineProperty(exports, "__esModule", { value: true });
// const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };
// const arr = [1, 2, 3];
// const arrN = map(arr, (it) => it * 2);
// console.log(arrN);
const arr2 = [1, 2, 3];
//명령형 방식 => how (어떻게 하면 간단한 방식으로 출력하나)
arr2.forEach((it) => console.log(it));
//선언형 방식 => what (어떻게 하면 만들어지나 what 어떻게 작동되어야하는지)
const forEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
};
forEach(arr2, (item) => console.log(item));
