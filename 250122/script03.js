// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// 10보다 큰 값만 찾아서 콘솔창에 출력해주세요
// 조건문 & 반복문 활용

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

numbers.forEach((num) => {
  if (num > 10) {
    console.log(num);
  }
});

// for (i = 0; i < numbers.length; i++) {
//   // console.log(numbers[i]);
//   if (numbers[i] > 10) {
//     console.log(numbers[i]);
//   }
// }
