// 목표 : 사용자가 스크롤을 내렸을 때 header 배경컬러, banner height를 변경 > 가상 클래스 적용

// 1. 사용자가 지금 스크롤을 내렸다는걸 알려주기
//  > 스크롤은 브라우저가 가지고 있는 요소.

// 2. header는 html안에서 header라는 태그를 사용하고 있는 요소임을 알림

// 3. 사용자가 스크롤을 내렸으니 active라는 클래스를 header에게 적용시키기

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});
