/* 함수선언식 */
/*
function sum(a, b) {
  return a + b;
}
sum(10, 20);
*/

/* 익명함수 표현식 */
/*
const num = function (a, b) {
  return a + b;
};
num(10, 20);
*/

/* 화살표 함수 표현식 */
/*
const num01 = (a, b) => {
  return a + b;
};
num01(10, 20);
*/

/* 선언 & 호출 x => 선언 즉시실행 함수식 */
/*
(function (a, b) {
  let result = a + b;
  console.log(`함수 실행결과값 : ${result}`);
})(10, 20);
*/

//화살표 함수 줄이기
/*
const hi = () => {
  return "안녕하세요";
};

// 위에가 밑에로 가능.
const hi = () => "안녕하세요";
*/

//call(*호출)의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수 (*콜백함수)

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("클릭");
//   return () => {
//     console.log("클릭2");
//     return () => {
//       console.log("클릭3");
//       return () => {
//         console.log("여기까지");
//       };
//     };
//   };
// });

/*
const showData = (name, age) => {
  alert(`안녕하세요 ${name}님. 나이가 ${age}살 이시군요.`);
};

const getData = (callback) => {
  const userName = prompt("이름을 입력하세요");
  const userAge = prompt("나이를 입력하세요");
  callback(userName, userAge);
};

getData(showData);
*/

/* 자바스크립트 언어 => 함수
자바스크립트 함수 => 1급 시민
1. 변수에 함수를 담을 수 있음 : 원래는 전통적으로 함수 선언식으로만 함수를 호출했었는데, 익명함수가 등장하면서 함수를 보다 편리하게 작성할 수 있게 됨.

2. 다른 함수의 매개변수로 등장할 수 있음 : 콜백함수라는 스타일 형식을 창조해낼 수 있게 됨.

3. 다름 함수의 반환값(*return)으로 함수가 등장할 수 있음

*/
