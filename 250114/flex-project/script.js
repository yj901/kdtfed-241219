// 목표 : 사용자가 스크롤을 내렸을 때 header 배경컬러, banner height를 변경 > 가상 클래스 적용

// 1. 사용자가 지금 스크롤을 내렸다는걸 알려주기
//  > 스크롤은 브라우저가 가지고 있는 요소.

// 2. header는 html안에서 header라는 태그를 사용하고 있는 요소임을 알림

// 3. 사용자가 스크롤을 내렸으니 active라는 클래스를 header에게 적용시키기

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
    document.querySelector(".gototop").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
    document.querySelector(".gototop").classList.remove("active");
  }
});

// slick slider
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
    ],
  });
});

// js에게 이벤트 대상이 누구인지 알려주기
// 이벤트 대상이 되어지는 요소(*html에서 찾아온 태그 혹은 클래스 혹은 아이디선택자)에게 어떤 이벤트를 부여할 것인가 결정
// 이벤트 첫번째 적용할 때, 두번째 적용할 때 상이하게 작동하도록 제어

const trigger = document.querySelector(".trigger"); //전역변수

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".gnb").classList.toggle("active");
});

//전역변수는 가급적이면 최소화. 일단 실행시키든 말든 전역변수는 모두 다 읽고 시작해서 많으면 로딩시간이 길어짐. 지역변수는 함수가 실행되는 타이밍에 읽어짐.

/* menu */

const menus = document.querySelectorAll(".gnb a, .gototop");
menus.forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
