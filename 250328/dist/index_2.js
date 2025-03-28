"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = {};
person.name = "";
person.age = 20;
// type DogNew = {
//   name: string;
//   color: string;
//   breed: string;
// };
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
// let dogAI: DogNew = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// };
// let dogNew: Dog = dogAI;
let num1 = 10;
// num1 = 20; //에러
let num2 = 10;
num2 = "hello";
// let num3 = 10 as string;
//다중단언
let num3 = 10;
//const 단언
let num4 = 10;
let post = {
    title: "게시글1",
};
const len = post.author.length;
