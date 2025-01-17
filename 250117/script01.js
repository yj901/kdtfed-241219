const num = 7; //숫자
const str = "7"; //문자열
const bool01 = true; //논리형, true, false 두개로 존재.
const bool02 = false;

// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age); //string으로 나옴! 나이를 숫자로 입력해도 문자열로 인식함. 이런 경우가 있기 때문에 자료형을 잘 알고 분별해야 함.

console.log(typeof bool01);
console.log(typeof bool02);

//templete literal 문법
const userName = "현빈";
const movieTitle = "하얼빈";

/* const result = userName + "배우가 출연한 최근 영화는 " + movieTitle + "입니다."; */
const result = `${userName} 배우가 출연한 최근 영화는 ${movieTitle} 입니다.`;

console.log(result);

//undifined
let hobby;
console.log(hobby);

//null
let weekend = null;
console.log(weekend);

//symbol
const only01 = Symbol();
const only02 = Symbol();
console.log(only01 === only02);

let id = Symbol();

//객체?
const member365 = {
  name: "jack",
  [id]: "ezen",
};

console.log(member365);

//배열
/* let */ const arr = [1, 2, 3];
const strArr = ["park", "kim", "lee"];
const boolArr = [true, false];

console.log(arr);
console.log(`${arr[2]}은 arr배열의 ${arr.length}번째 값입니다`);
console.log(typeof arr);

//배열에 새로운 값을 넣을 수도 있음. 재할당
arr[3] = 7;
console.log(arr);
console.log(`${arr[3]}은 arr배열의 ${arr.length}번째 값입니다`);

//객체
const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};

//프로퍼티 속성으로 객체의 값 찾아오는 방법
console.log(frontendClass.tutor);
console.log(frontendClass["students"]);

//프로퍼티를 생산해서 새 값을 넣을수도 있음, 재할당
frontendClass.attitude = "the best";
console.log(frontendClass);

//function = 기능

//선언
function hello() {
  console.log("hello world");
}

//호출
console.log(typeof hello);
