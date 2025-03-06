const playButton = document.querySelector(".play-pause");
const player = document.querySelector("#music-player");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");

const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

const play = () => {
  playButton.innerText = "||";
  video.play();
};
const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const formatting = (time) => {
  // 1시간 60분
  // 1분 60초
  // 1초
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100; //백분율로 만들기

  progressBar.style.width = `${percent}%`;

  const progressBarWidth = progressCover.clientWidth;
  //문서내부너비=전체영상길이만큼의너비
  const newPosition = (currentTime / duration) * progressBarWidth;

  progressPointer.style.left = `${newPosition}px`;
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickdTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickdTime;
  console.log(mouseX, e.pageX, player.offsetLeft);
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("pointerdown", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);

progressCover.addEventListener("click", videoPoint);

rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    document.addEventListener("pointerdown", togglePlay);
  } else {
    document.removeEventListener("pointerdown", togglePlay);
  }
});
