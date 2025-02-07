const songs = document.querySelectorAll(".albumTable-song");

let currentAudio = null; //아무것도 들어가지 않은 값

songs.forEach((song) => {
  const playBtn = song.querySelector(".fa-caret-right");
  const pauseBtn = song.querySelector(".fa-pause");

  playBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");

    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    audio.play();
    currentAudio = audio;
  });

  pauseBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audlo");
    audio.pause();

    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});
