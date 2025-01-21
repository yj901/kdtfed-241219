//사용자에게 12달 중 좋아하는 월의 정보를 입력받으세요 ex 1 > 1월
//사용자가 입력한값이 12~2월이면 스키의 계절, 겨울을 좋아하시네요
// 3~5 : 책 읽기 좋은 봄을 좋아하시네요
// 6~8 : 여행가기 좋은 여름을 좋아하시네요
// 9~11 : 선선한 날씨인 가을을 좋아하시네요

// if조건문을 활용해서 위 코드 출력

/*
let month = prompt("12달 중 좋아하는 월의 수를 입력해주세요");

if (month !== "" && month !== null) {
  if (parseInt(month) >= 3 && parseInt(month) < 6) {
    console.log("책 읽기 좋은 봄을 좋아하시네요");
  } else if (parseInt(month) >= 6 && parseInt(month) < 9) {
    console.log("여행가기 좋은 여름을 좋아하시네요");
  } else if (parseInt(month) >= 9 && parseInt(month) < 12) {
    console.log("선선한 날씨인 가을을 좋아하시네요");
  } else if (parseInt(month) >= 1 && parseInt(month) < 3) {
    console.log("스키의 계절, 겨울을 좋아하시네요");
  } else if (parseInt(month) === 12) {
    console.log("스키의 계절, 겨울을 좋아하시네요");
  } else {
    console.log("12개월 안의 달이 아니에요");
  }
} else {
  console.log("다시 입력");
}
*/

//정답
//정수로 바꿔주는거 한번에 하는 거 까먹고 그냥 일일히 파스인트 넣어버렸구나

let favoriteMonth = prompt("좋아하는 월을 입력하세요");

if (favoriteMonth !== "" || favoriteMonth !== null) {
  favoriteMonth = parseInt(favoriteMonth);
  if (3 <= favoriteMonth && favoriteMonth <= 5) {
    alert("책 읽기 좋은 봄을 좋아하시네요");
  } else if (6 <= favoriteMonth && favoriteMonth <= 8) {
    alert("여행가기 좋은 여름을 좋아하시네요");
  } else if (9 <= favoriteMonth && favoriteMonth <= 11) {
    alert("선선한 날씨인 가을을 좋아하시네요");
  } else if (isNaN(favoriteMonth) || favoriteMonth === 0) {
    alert("정상적인 월을 입력하세요");
  } else {
    1;
    alert("스키의 계절, 겨울을 좋아하시네요");
  }

  window.location.reload();
}
