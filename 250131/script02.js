/*const darkBtn = document.querySelector("#toggle-btn");
const btnTxt = document.querySelector("#toggle-btn > button");
const contents = document.querySelector("#contents");

// console.log(btnTxt);

darkBtn.addEventListener("click", () => {
  // console.log(contents);
  // contents.style.backgroundColor = #000;  (안됨)
  // contents.classList.add("dark");

  if (!contents.classList.contains("dark")) {
    contents.classList.add("dark");
    btnTxt.innerText = "라이트모드로 바꾸기";
  } else {
    contents.classList.remove("dark");
    btnTxt.innerText = "다크모드로 바꾸기";
  }
});
*/

// 아 나 좀 복잡하게 햇네;; 토글버튼 아이디는  css에서 포지션 위치 잡는거니깐 그 안의 실제 버튼 태그만 잡으면 되는데.... 그거 하나로 클릭 제어랑 글씨 바꾸는거 둘다 해도 됨. 오히려 이게 더 맞음. 아이디 이름보고 헷갈림...

//정답

// const bodyTag = document.querySelector("body");
// console.log(bodyTag);

// console.log(document.body);
//바디는 html 바로 직계자식임. 그래서 바로 document.body로 찾아도 됨. 굳이 변수 안해도 된다는 소리.

const toggleBtn = document.querySelector("button");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (!document.body.classList.contains("dark")) {
    toggleBtn.innerText = "다크모드로 바꾸기";
  } else {
    toggleBtn.innerText = "라이트모드로 바꾸기";
  }
});
