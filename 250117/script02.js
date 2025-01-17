//원시타입 숫자
let a = 10;
let b = a;

//참조타입 객체
let obj1 = {
  c: 10,
  d: "ddd",
};

let obj2 = obj1;

console.log(obj1, obj2);

b = 15;
obj2.c = 20;

console.log(a, b);

console.log(obj1, obj2);
//변수를 값을 담을수 있는 그릇이라고 설명하기엔 완전 맞지 않은 이유

//CS (컴퓨터 사이언스, 컴퓨터공학)

//전통적인 프로그래밍 언어 => 굳이 비효율적으로 낭비될수있는 메모리공간을 생성하지 않기 위해서 Java, C언어는 이터러블한 객체를 생성할 때,애초에 해당 객체에 얼만큼의 값을 넣을지를 그래서 정의하기 시작!

//JS > 배열 => 5개? 10개? 몇개 값을 넣을지 컴퓨터는 예측할수없음.
//1) 굉장히 타이트하게 기본값을 설정해놓고, 만약 그 타이트한 값을 초과해서 메모리를 사용하고자 할 때마다 값을 추가시켜주거나
/*const arr = [1, 2, 3];*/

//여기에 50개를 더 넣는데 2와 3 사이에 넣어야해서 3을 다시 인덱스값 다시 새겨야하고 그러는 과정에서 메모리가 많이 잡아먹음. 효율적이지 않음.

//2) 애초에 값을 굉장히 큰 범위로 만들어놓고, 개발자가 어떤 범위 혹은 용량의 값을 적용하더라도 문제가 없도록 하거나
//이거는 딱봐도 용량 비효율적

//이러한 문제 해결 > 함수

let user = {
  name: "David",
  gender: "male",
};

// let user02 = user;
// user02.name = "Jane";
// console.log(user);  > 원본값도 교체되는 문제 발생

function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}

const user2 = copyObject(user); //user = 매개변수, 인자값, 인수값(다같은말)
user2.name = "Jane";
console.log(user.name, user2.name);

// 이러한 복제 과정을.. 쉽게만들어주는 전개연산자 구문 등장
// Spread Operator = 전개연산자 구문

const fruits = ["apple", "banana", "cherry"];

/*
//얕은 복사
const favorit = fruits;
*/

//깊은복사.
const favorit = [...fruits];

favorit[1] = "grape";

console.log(fruits, favorit);
