//함수  선언 & 호출

/*
//함수 선언식
function code() {
  console.log("오늘은 목요일");
}


//함수 선언식의 { } 중괄호는 실행식.

//호출
code();

*/

/*
const obj = {
  title: "자바스크립트",
  fnc: function () {
    console.log("스크립트 짱");
  },
};

//함수 안의 키의 값을 찾아올 때 온점표기법으로 찾아온다
obj.fnc();
//obj도 함수 fnc도 함수이나 fnc는 객체 안에 있는 특정 키 안에 할당된 함수이므로 메서드 라고 부른다. (메서드 = 방법(론))

*/

/*
function calcSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}`);
}

calcSum();
*/
/*

const num = parseInt(prompt("더하고 싶은 수를 입력"));

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum; // "반환" => return 문
}

console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}`);
*/

// 매개체. 매개변수

// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }

// sum(10, 20);

//기본매개변수
/*
function multiple(a, b = 0, c = 0) {
  return a + b + c;
}

console.log(multiple(2, 4, 8));
console.log(multiple(2, 4));
console.log(multiple(2));

*/

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var num = 5;

console.log(`1부터 ${num}까지 더한 결과값은 ${calcSum(num)}입니다`);

// Scope = 범위

//전역 스코프 사용사례 1
// var hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// greeting();

// 전역 스코프 사용사례 2

// var hi = "hello";

// function greeting() {
//   hi = "bye";
// }

// 전역스코프 사용사례3
// function greeting() {
//   hi = "hello";
// }

// greeting();
// console.log(hi);

//블록 스코프
/*
const factor = 5;

function calc() {
  return num * factor;
}

{
  const num = 10;
  let result = calc();
  console.log(`result : ${result}`);
}
*/
