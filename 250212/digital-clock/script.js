const displayDate = document.querySelector("#today");
const displayTime = document.querySelector("#clock");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay(); //일요일이 0으로 해서 숫자로

let day2;

switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${day2}`;

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  if (hrs < 12) {
    let period = "AM";
  } else {
    period = "PM";
  }

  displayTime.innerText = `${period} ${hrs} : ${mins} : ${secs}`;
};
setInterval(clock, 1000);
