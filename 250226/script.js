const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});

const newNumbers = numbers.map((number, index, array) => number * 2 + index);
console.log(newNumbers);

//filter
//내가 원하는 조건에 부합하는 복수의 값을 찾아서 새로운 배열로 반환하고 싶을 때 사용
const scores = [70, 35, 64, 68, 45, 52];

const highscores = scores.filter((score) => score >= 85);
console.log(highscores);

// find
// 내가 찾고자 하는 값이 나타나는 순간 해당 메서드 함수는 종료! => 명확하게 찾고자 하는 값이 단일값인 경우!!
const names = ["kim", "park", "lee"];
const result = names.find((name) => name === "park");
console.log(result);

// filter vs find 차이점
//1 - filter는 반환값을 배열 형태의 자료구조로 가져오는 반면, find 의 경우 반환값을 문자열 로 반환
//2 - filter는 반환값이 존재하지 않는 경우에는 빈배열 []로 반환. find는 undefined로 반환
//3 - 1 filter는 복수의 값을 찾아와서 배열로 반환하는 목적을 갖고있음, 해당조건에 부합하는 값들을 모두 찾아옴.
//3 - 2 find는 명확하게 한 개의 단일값을 찾아오고자 하는 목적을 갖고 있음, 하나의 값을 찾는 순간 해당 함수의 명령 및 실행은 종료가 됨

//reduce()
//누산기 : 누적 계산기
const numbers01 = [1, 2, 3, 4, 5, 8];
const result01 = numbers01.reduce((total, current) => total, 10);
console.log(result01);
