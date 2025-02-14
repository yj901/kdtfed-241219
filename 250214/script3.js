// 사용자에게 지름 & 높이의 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요
// 원기둥의 부피 구하는 공식 : 밑면적 x 높이
// 밑면적 = Math.PI * R * R
// Radius = 반지름

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록 생성자 함수를 활용해서 코드를 구현

const diameter = document.querySelector("#cyl-diameter");
const height = document.querySelector("#cyl-height");
const button = document.querySelector("input[type='button']");
// const radius = Number(diameter.value) / 2;
// const bottom = Math.PI * radius * radius;

// Number(diameter.value) 지름
// Number(height.value) 높이

class CalcCyl {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }

  calc() {
    const radius = this.diameter / 2;
    const bottom = Math.PI.toFixed(2) * radius * radius;

    const cylResult = bottom * this.height;
    return cylResult;
  }
}

button.addEventListener("click", () => {
  const cyl = new CalcCyl(Number(diameter.value), Number(height.value));

  const resultText = document.querySelector("#result");
  resultText.innerText = `원기둥의 부피는 ${cyl.calc()}입니다`;
});
