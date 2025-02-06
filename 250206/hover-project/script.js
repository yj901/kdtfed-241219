// const lis = document.querySelectorAll("li");
// const photo = document.querySelector(".photo");

// // photo.style.background;

// console.log(photo);

// lis.forEach((li, index) => {
//   li.addEventListener("mouseenter", function () {
//     const photoURL = "";
//     switch (index) {
//       case 0:
//         photoURL = "01";
//         break;
//       case 1:
//         photoURL = "02";
//         break;
//       case 2:
//         photoURL = "03";
//         break;
//       case 3:
//         photoURL = "04";
//         break;
//     }
//   });
// });

//정답
//html li에 data- 를 사용해서 <li data-image="./img/portrait-01.jpg"> 이렇게
//그 속성값을 가져와서 바꾸는 방법...!!!

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem) => {
  liItem.addEventListener("mouseenter", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });
  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
