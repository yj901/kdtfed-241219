//세개의 막대 길이 변수 필요
//막대길이가 서로 다른지 체크 필요 - 같으면 다르게 입력하세요 알림창
//if 조건문 으로 삼각형 가능 판단 필요

const form = document.querySelector("form");
const sides = document.querySelectorAll("input[type='text']");
// const side1 = document.querySelector("#side1");
// const side2 = document.querySelector("#side2");
// const side3 = document.querySelector("#side3");
// const sides = [side1, side2, side3];

// const submitBtn = document.querySelector("input[type='submit']");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let sidesArr = [];
  sides.forEach((side, index) => {
    let sideNum = Number(side.value);
    sidesArr.push(sideNum);
  });
  console.log(sidesArr);
  //여기까지 하면 이제 각 변의 수 배열까진 획득

  if (sidesArr[0] + sidesArr[1] > sidesArr[2]) {
  }

  //0+1 0+2 1+2 세개의 합이 나머지 한개보다 더 길어야한다는거
});
