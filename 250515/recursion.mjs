// const myFunction = (number) => {
//   console.log(number);
//   myFunction(number + 1);
// };

// myFunction(1);

// const factorial = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// };

// console.log(factorial(5));

//반복문 VS 재귀
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// const myFunction = (number) => {
//   if (number > 10) return;
//   console.log(number);

//   myFunction(number + 1);
// };

// myFunction(1);

//배열 => 1~5 숫자
//배열 내 숫자를 모두 더하는 함수 연산식을 구현!
const arr = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  return arr[arr.length - 1] + sumArray();
};

console.log(sumArray(arr));
