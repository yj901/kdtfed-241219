"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//자료형
const num1 = 123;
let num2 = 456;
num2 = 789;
// num2 = "123";
let num3 = 700;
//string
let str1 = "hello";
str1 = "world";
// str1 = 1;
let str2 = "jin"; //const처럼 jin이 아닌 다른걸 넣을 수 없음. 상수화.
// str2 = "zen"; (에러)
//리터럴 타입. 문자열로 타입을 지정한 것.
let bool = true;
bool = false;
let test1 = null;
test1 = null;
let test2 = undefined;
test2 = undefined;
//예외상황
let num4 = 7;
// num4 = null;
// num4 = undefined;
// let num5 = null;
let num10 = 10;
let test10;
//대수타입
// num10 = test10;
test10 = num10;
let numArr = [1, 2, 3];
// numArr = ["1", 2, 3];
let strArr = ["hello", "world"];
let boolArr = [true, false, true];
let bool1Arr = [true, false, true];
let mutiArr = [1, "hello"];
let doubleArr = [[1, 2, 3], [4, 5], [6]];
let tupl = [1, 2];
// tupl = [1, 2, 3];
// tupl = [1, "2"];
// tupl.push(1);
const users = [
    ["jin", 1],
    ["den", 2],
    ["mur", 3],
    ["d2", 4],
    // [5, "dv"],
];
// 객체타입
let user = {
    id: 1,
    name: "jin",
};
// user.id; //id에서 에러발생. 못찾아옴
let user1 = {
    id: 1,
    name: "jin",
};
// interface User {}; 태생적으로 객체라서, 중복이라도 에러는 발생하지 않음.
//애초에 객체형태를 띄고 있기 때문에 동일한 이름의 인터페이스 역시 사용가능
//하지만! 사용하지 않는 것을 추천.
let user2 = {
    id: 1,
    name: "sol",
};
let user3 = {
    id: 1,
    name: "brown",
};
let user4 = {
    id: 5,
};
// type Usernick = {}; 태생이 변수라서, 동일한 scope에서 중복되면 에러발생.
const test12 = () => {
};
let user5 = {
    id: 5,
    name: "통키",
    nickname: "피구왕",
    birth: "2002.02.02",
    bio: "내꿈은 피구왕",
    loaction: "서울시 서초구",
};
let countryCode = {
    Korea: "ko",
    UnitedState: "en",
    InitedKingdom: "uk",
};
// type countryCode = {
//   // Korea: string;
//   // UnitedState: string;
//   // InitedKingdom: string;
//   // Japan: string;
//   [key: string]: string;
// };
// let countryCode: countryCode = {
//   Korea: "ko",
//   UnitedState: "en",
//   InitedKingdom: "uk",
//   Japan: "jp",
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user9 = {
    name: "jin",
    Role: Role.ADMIN,
};
