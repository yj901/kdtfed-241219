//배열을 생성하는 방법
const season = [];
season[0] = "spring";
season[1] = "summer";

// console.log(season);

// 방법2
const pets = ["dog", "cat", "mouse"];

// 방법3
const fruits = new Array("사과", "복숭아", "포도");

// 배열의 아이템에 접근 후 값 변경!
pets[1] = "hamster";

// for문
const colors = ["red", "green", "blue", "white", "black"];

for (let i = 0; i <= colors.length - 1; i++) {
  // console.log(colors[i]);
}

//  forEach
// 콜백함수 내 인자값이 1~3개까지 입력 가능!
// 1개일때 : 개별 아이템
// 2개일때 : 개별 아이템, 개별아이템의 인덱스
// 3개일때 : 개별 아이템, 개별아이템의 인덱스, 배열 그자체

// const animals = ["lion", "bear", "bird"];

// animals.forEach((animal, index, array) => {
//   // console.log(`[${array}] [${index}] : ${animal}`);
// });

const vagetable = ["양상추", "토마토", "피클"];
const meat = ["불고기"];

const meatBurger = [...vagetable, ...meat, "빵"];

// const meatBurger = vagetable.concat(meat, "빵");
// console.log(meatBurger);

//reverse()
//현재의 배열 내 아이템 순서를 역순으로 배치하고자 할 때 사용할 수 있는 메서드 함수

const numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse());

//sort()
//배열 안에 있는 아이템들의 값을 정렬하고자 할 때 사용할 수 있는 메서드 함수
//기본적으로 작은 값부터 큰 값으로 정렬하는 `오름차순`의 형태를 띄고 있다.
// a-z 1-9

const week = ["sun", "mon", "tue"];
// console.log(week.sort());

const values = [5, 20, 3, 11, 4, 15];
// console.log(
//   values.sort((a, b) => {
//     // if (a > b) return 1;
//     // if (a < b) return -1;
//     // if (a === 0) return 0;
//     return b - a;
//   })
// );

//pop() , push()
/*
const animals = ["lion", "bear", "bird"];
console.log(animals);

animals.pop();
console.log(animals);

animals.push("tiger");
console.log(animals);

//shift(), unshift()
animals.shift();
console.log(animals);

animals.unshift("dog");
console.log(animals);
*/

//splice()
const subjects = ["html", "css", "js", "ts", "react"];

console.log(subjects.splice(2));

const test = subjects.splice(2, 2);

console.log(test);
console.log(subjects);
