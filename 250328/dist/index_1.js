"use strict";
// let a: number | string;
Object.defineProperty(exports, "__esModule", { value: true });
// a = 1;
// a = "hello";
let arr = [1, "hello", true];
let intersection = {
    name: "",
    color: "",
    language: "", //하나라도 빠지면 교집합이 아니기 때문에 에러가 난다.
};
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
let union4 = {
    name: "",
};
union4 = union3; //됨. 슈퍼가 서브를 받을 수 있음. 업캐스팅
// union3 = union4; //에러. 서브가 슈퍼를 받을수없음. 다운캐스팅안됨
let variable;
