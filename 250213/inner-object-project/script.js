const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultAge = document.querySelector("#age ");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  const passed = today.getTime() - birthDay.getTime();
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAge = Math.floor(passed / (24 * 60 * 60 * 1000) / 365) + 1;

  resultDays.innerText = `날짜로는 ${passedDays} 일이 흐르고,`;
  resultHours.innerText = `시간으로는 ${passedHours} 시간이 흐르고,`;
  resultAge.innerText = `제 나이는 ${passedAge} 세 입니다.`;
});

// const current = new Date();
// const currentText = document.querySelector("#current");
// const currentYear = current.getFullYear();
// const currentMonth = current.getMonth() + 1;
// const currentDate = current.getDate();
// const currenthours = current.getHours();
// const currentMinute = current.getMinutes();

// const form = document.querySelector("form");
// const subBtn = document.querySelector("#btn");

// currentText.innerText = `${currentYear}년 ${currentMonth}월 ${currentDate}일 ${currenthours}시 ${currentMinute}분 현재`;

// const calcDay = (e) => {
//   e.preventDefault();
//   const calcyear = currentYear - parseInt(birthYear.value);
//   const calcDate = currentDate - parseInt(birthDate.value);
//   console.log(calcDate);
// };

// subBtn.addEventListener("click", calcDay);
