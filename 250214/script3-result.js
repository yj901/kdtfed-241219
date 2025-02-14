const button = document.querySelector("input[type='button']");
const result = document.querySelector("#result");

// function Cylinder(cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter;
//   this.height = cylinderHeight;
//   this.getVolume = function () {
//     const radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }
  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이값을 입력하세요";
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다`;
  }
});
