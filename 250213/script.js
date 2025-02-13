// Class => new
//원의 넓이 : π * r제곱
// 여기서 말하는 r = 래디우스, 반지릅

// 원의 둘레 : 2πr

const radius = prompt("반지름의 크기는?");

const area = (r) => {
  return Math.PI * r * r; //원의 넓이 공식
};

const circum = (r) => {
  return 2 * Math.PI * r; //원의 둘레 공식
};

const result = document.querySelector("#result");

result.innerText = `반지름 : ${radius},
원의 넓이 : ${area(radius).toFixed(3)},
원의 둘레 : ${circum(radius).toFixed(3)}`;

console.log(area(radius).toFixed(3));
console.log(circum(radius).toFixed(3));
