const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJuke = document.querySelector("#menuJukebox");
const contentsFrame = document.querySelector("#contentsFrame");

const homeChange = () => {
  contentsFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJuke.style = "background: #55b2e4; color: #fff";
};
const gameChange = () => {
  contentsFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #fff; color: #000";
  menuJuke.style = "background: #55b2e4; color: #fff";
};

const jukeboxChange = () => {
  contentsFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJuke.style = "background: #fff; color: #000";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJuke.addEventListener("click", jukeboxChange);

//count event
const getFormattedDate = () => {
  const date = new Date(); //현시점 날짜정보
  const year = date.getFullYear(); //년도만
  const month = "0" + (date.getMonth() + 1); //월값 : 컴퓨터인식의 인덱스0 시작 때문에 사람이 편하게 인식하기 위해 + 1을 더 해줘야함
  const day = "0" + date.getDate(); // 7일, 일값

  return `${year}-${month}-${day}`;
};

const todayDate = getFormattedDate();
const dailyCookiName = `pageHit_${todayDate}`;

//쿠키 유효기간 만들기
const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1); //하루지난값
const expireDateString = expireDate.toGMTString();
//쿠키값만료일생성

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; ");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

let dailyHitCt = parseInt(cookieVal(dailyCookiName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;
document.cookie = `${dailyCookiName}=${dailyHitCt}; expires=${expireDateString}`;

let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 Dec 9999 24:59:59 GMT`;

/*
쿠키값은 어떻게 생겼을가?

"쿠키네임=쿠키값; expires=만료날짜"
"pageHit_2025-02-07=5; expires= 2025-02-08"
*/

document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;
