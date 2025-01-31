// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#profile"));
// console.log(document.querySelector(".imgSrc"));
// console.log(document.querySelectorAll(".user"));

// console.log(document.getElementById("profile"));
// console.log(document.getElementsByClassName("imgSrc"));
// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelector("#desc").textContent);

const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc > p")[0];
const pfImg = document.querySelector("#profile > img");

// title.onclick = () => {
//   title.innerText = "나의 프로필";
// };

title.addEventListener("click", () => {
  title.innerText = "나의 프로필";
  title.style.backgroundColor = "#000";
  title.style.color = "#fff";
});

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  pfImg.src = "https://thumb.mt.co.kr/06/2022/04/2022041909230962447_1.jpg";
  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
  // userName.classList.add("active");
});

// console.log(document.querySelectorAll("#desc p")[0].classList);

// console.log(userName.classList.contains("active"));
