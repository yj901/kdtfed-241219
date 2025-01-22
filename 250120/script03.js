// 사용자에게 교통비, 식비, 음료비 이상 3개의 값을 전달받아서 3개의 총합이 적정지출비용을 초과한 경우, "00원 초과, 지출을 줄여주세요!", 만약 적정지출비용을 초과하지 않은 경우, "00원 유지, 축하드립니다!" 메세지가 콘솔창에 출력되도록 하기

//적정지출비용은 10000원

/*
let traffic = prompt("교통비는?");
let food = prompt("식비는?");
let drink = prompt("음료비는?");
let result, add;

//parseInt 이걸로 정수로 바꾼 다음에 그걸 더하고 그 더한 값을 만원이랑 비교해서

add = parseInt(traffic) + parseInt(food) + parseInt(drink);

result = add < 10000;

result = result
  ? `${add}원 유지, 축하드립니다!`
  : `${add}원 초과, 지출을 줄여주세요!`;

console.log(result);
*/

//답 나오긴 했네.. 늦게풀엇지만.. (새로고침 안해서 안보였던거였음)

//답..!

let traffic, food, drink;

traffic = parseInt(prompt("교통비는?"));
food = parseInt(prompt("식비는?"));
drink = parseInt(prompt("음료비는?"));

let total = traffic + food + drink;
let result = total < 10000;

const plus = total - 10000;
const minus = 10000 - total;

result = result
  ? `${minus}원 남았습니다. 돈관리 잘했어요`
  : `${plus}원 초과했습니다`;

console.log(result);
