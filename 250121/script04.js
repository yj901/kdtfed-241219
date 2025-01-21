// const students = ["park", "kim", "lee"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// for (초기값; 조건식; 증감문) {
//   반복문실행;
// }

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}

const reds = document.querySelectorAll(".red");
console.log(reds);
reds.forEach((red) => {
  red.style.color = "red";
});

const greens = document.querySelectorAll(".green");
console.log(greens);
greens.forEach((green) => {
  green.style.color = "green";
});

const aquas = document.querySelectorAll(".aqua");
console.log(aquas);
aquas.forEach((aqua) => {
  aqua.style.color = "aqua";
});
