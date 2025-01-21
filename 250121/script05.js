// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br />");
//   }
//   document.write("<br/>");
// }

//for()
//forEach()

const marvels = ["ironman", "hulk", "captin", "stranger"];

// for (let i = 0; i < marvels.length; i++) {
//   console.log(marvels[i]);
// }

//콜백 함수 = call back 함수. 함수 안에 또 함수.

marvels.forEach(function (marvel, index, array) {
  console.log(marvel, index, array);
});
