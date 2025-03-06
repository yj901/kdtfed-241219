import { API_KEY } from "./env.js";

// Common URL
const tmdbCommand = "https://api.themoviedb.org/3";

// Document Items
const nowplayingUl = document.querySelector(".nowPlaying ul");
const upcomingUl = document.querySelector(".upcoming ul");
const topratedUl = document.querySelector(".toprated ul");

//  create Element
const createElement = (movie, index, category) => {
  const {
    adult,
    genre_ids,
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  const li = document.createElement("li");
  const moviePoster = document.createElement("div");
  const movieTitle = document.createElement("div");
  const movieDesc = document.createElement("div");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original${poster_path}`;

  const ageLimit = document.createElement("span");
  const movieNum = document.createElement("span");
  const release = document.createElement("span");
  const vote = document.createElement("span");

  moviePoster.className = "moviePoster";
  movieTitle.className = "movieTitle";
  movieDesc.className = "movieDesc";

  let adultKo = adult === false ? "ALL" : "18+";

  ageLimit.innerText = adultKo;
  movieNum.innerText = index + 1;

  release.innerText = release_date;
  vote.innerText = `⭐${parseFloat(vote_average).toFixed(2)}`;

  li.className = id;
  li.setAttribute("data-category", category);

  moviePoster.append(img, ageLimit, movieNum);
  movieTitle.innerText = title;
  movieDesc.append(release, vote);

  li.append(moviePoster, movieTitle, movieDesc);

  if (category === "nowPlaying") {
    nowplayingUl.appendChild(li);
  } else if (category === "upcoming") {
    upcomingUl.appendChild(li);
  } else if (category === "toprated") {
    topratedUl.appendChild(li);
  }
};

// nowPlaying DB
const nowPlaying = async () => {
  const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// upComing DB
const upComing = async () => {
  const url = `${tmdbCommand}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

//topRated DB
const topRated = async () => {
  const url = `${tmdbCommand}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

//Genres DB
const movieGenres = async () => {
  const url = `${tmdbCommand}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`;
  const response = await fetch(url);
  const { genres } = await response.json();
  return genres;
};

// Promise DBs
const getMovies = async () => {
  const [nowPlayingMovie, upComingMovie, TopRatedMovie, genres] =
    await Promise.all([nowPlaying(), upComing(), topRated(), movieGenres()]);

  // Movie Genres

  // Item Slider
  // 전체 총 영화 아이템 개수 : 20개
  // 한번에 보여지는 영화 개수 : 5개
  // 좌 혹은 우측 슬라이드 버튼 클릭 시 : 5개씩 이동
  // 각 영화 너비값: 160
  // 영화와 영화 사이 간격: 25
  // 한 번에 보여지는 공간 900
  // (160 + 25)*4 + 160 => 20개의 영화 아이템을 가지고 있는 ul 태그가 슬라이드 버튼 클릭시 이동해야 하는 거리!
  // 무한슬라이드를 실행하기 위해 아래와 같이 노드를 복제!
  // 15~19번째 인덱스 영화아이템 + 20개의 영화 아이템 + 0~4번째 인덱스 영화아이템
  // 1 2 3 4 5
  // 6 7 8 9 10
  // 11 12 13 14 15
  // 16 17 18 19 20

  // Movie Items
  nowPlayingMovie.forEach((movie, index) => {
    createElement(movie, index, "nowPlaying");
  });

  upComingMovie.forEach((movie, index) => {
    createElement(movie, index, "upcoming");
  });

  TopRatedMovie.forEach((movie, index) => {
    createElement(movie, index, "toprated");
  });

  const initialiseSlider = (
    slideSelector,
    rightArrowSelector,
    leftArrowSelector
  ) => {
    const slider = document.querySelector(slideSelector);
    const slides = slider.querySelectorAll("li");
    const slideToShow = 5;
    const slideWidth = 160;
    const slideMargin = 25;
    let currentIndex = 0;
    let isTransitioning = false;

    const firstClones = Array.from(slides)
      .slice(0, slideToShow)
      .map((slide) => slide.cloneNode(true));

    const lastClones = Array.from(slides)
      .slice(-slideToShow)
      .map((slide) => slide.cloneNode(true));

    slider.append(...firstClones);
    slider.prepend(...lastClones);

    const updateSlider = () => {
      const offset = -(slideWidth + slideMargin) * (currentIndex + slideToShow);
      slider.style.transform = `translateX(${offset}px)`;
    };

    slider.style.transition = "none";
    updateSlider();

    document.querySelector(rightArrowSelector).addEventListener("click", () => {
      if (isTransitioning) return;

      isTransitioning = true;
      currentIndex += slideToShow;

      if (currentIndex === slides.length) {
        slider.style.transition = "all .5s";
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "none";
          currentIndex = 0;
          updateSlider();
          isTransitioning = false;
        }, 500);
      } else {
        slider.style.transition = "all .5s";
        updateSlider();
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }
    });

    document.querySelector(leftArrowSelector).addEventListener("click", () => {
      if (isTransitioning) return;

      isTransitioning = true;
      currentIndex -= slideToShow;

      if (currentIndex < 0) {
        slider.style.transition = "all .5s";
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "none";
          currentIndex = slides.length - slideToShow;
          updateSlider();
          isTransitioning = false;
        }, 500);
      } else {
        slider.style.transition = "all .5s";
        updateSlider();
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }
    });
  };

  initialiseSlider(
    ".nowPlaying ul",
    "#nowPlayingRightArrow",
    "#nowPlayingLeftArrow"
  );

  initialiseSlider(".upcoming ul", "#upcomingRightArrow", "#upcomingLeftArrow");

  initialiseSlider(".toprated ul", "#topratedRightArrow", "#topratedLeftArrow");

  //Popup Modal
  const movieItems = document.querySelectorAll(".movie li");
  const movieModal = document.querySelector(".modal-overlay");

  movieItems.forEach((movieItem) => {
    movieItem.addEventListener("click", () => {
      movieModal.innerHTML = ""; //이전에 클릭해서 나온 내용 초기화

      movieModal.classList.add("active");
      const id = parseInt(movieItem.className);
      const category = movieItem.getAttribute("data-category");
      let movie;

      switch (category) {
        case "nowPlaying":
          movie = nowPlayingMovie.find((movie) => movie.id === id);
          break;
        case "upcoming":
          movie = upComingMovie.find((movie) => movie.id === id);
          break;
        case "toprated":
          movie = TopRatedMovie.find((movie) => movie.id === id);
          break;
      }

      if (!movie) {
        console.error("Movie Not Found");
        return;
      }

      let {
        adult,
        backdrop_path,
        genre_ids,
        original_language,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count,
      } = movie;

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";

      adult = adult === false ? "전체관람가" : "18세 이상";
      switch (original_language) {
        case "en":
          original_language = "영어";
          break;
        case "lv":
          original_language = "라트비아";
          break;
        case "zh":
          original_language = "중국";
          break;
        case "ko":
          original_language = "한국";
          break;
        case "ja":
          original_language = "일본어";
          break;
        case "hi":
          original_language = "힌두어";
          break;
      }

      const genreNames = genre_ids.map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
      });

      modalContent.innerHTML = `
      <div class="modal-content">
        <div class="modal-top">
          <div class="modal-photo">
            <img
              src="https://image.tmdb.org/t/p/original${poster_path}"
              alt="modal-photo"
            />
          </div>
          <form action="#" method="get">
            <section class="modal-info">
              <h1>${title}</h1>
              <div>
                <span><em>${release_date} 개봉</em></span>
                <span><em>${adult}</em></span>
                <span>인기평점 <em>${parseFloat(vote_average).toFixed(
                  2
                )}</em></span>
                <span>투표자수 <em>${vote_count.toLocaleString()}명</em></span>
              </div>
            </section>
            <section class="modal-button">
              <a href="#"> <i class="fas fa-circle-play"></i> 예고편 재생 </a>
              <a href="#"> <i class="fas fa-comment"></i> 777 </a>
              <a href="#"> <i class="fas fa-share-nodes"></i> 공유하기 </a>
            </section>
            <section class="modal-desc">
              <p>
                ${overview}
              </p>
            </section>
            <input type="submit" value="결제하기" />
          </form>
        </div>
        <div class="modal-bottom">
          <section class="modal-detail">
            <h1>영화정보</h1>
            <div>
              <span>장르</span>
              <span>${genreNames}</span>
            </div>
            <div>
              <span>언어</span>
              <span>${original_language}</span>
            </div>
            <div>
              <span>인기점수</span>
              <span>${popularity.toLocaleString()} / 10000</span>
            </div>
          </section>
          <section class="modal-poster">
            <img
              src="https://image.tmdb.org/t/p/original${backdrop_path}"
              alt="modal-poster"
            />
          </section>
          <section class="modal-trailer"></section>
        </div>
        <div class="modal-close">
          <i class="fas fa-xmark"></i>
        </div>
      </div>
      `;

      movieModal.appendChild(modalContent);
      const modalClose = document.querySelector(".modal-close");
      modalClose.addEventListener("click", () => {
        movieModal.classList.remove("active");
      });
    });
  });

  // Main Slider
  const mainSlider = document.querySelector(".mainSlider");

  nowPlayingMovie.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" />`;
    mainSlider.appendChild(figure);
  });

  // Fade Effect
  const figures = mainSlider.querySelectorAll("figure");

  let currentIndex = 0;
  const showNextSlide = () => {
    figures[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("active");
  };

  figures[currentIndex].classList.add("active");

  setInterval(showNextSlide, 3000);
};

getMovies();

// Gnb Li Evnet
const naviLis = document.querySelectorAll(".gnb > ul > li");
const submenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");

naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "300px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
    });
  });
  naviLi.addEventListener("mouseout", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0";
    });
  });
});

// Accordion Event
const contents = document.querySelectorAll(".accordion .content");
contents[0].style.display = "block";

const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });
    const content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// search Modal
const searchBtn = document.querySelector(".search-box .fa-magnifying-glass");
const modalSearch = document.querySelector(".modal-search");
const closeBtn = document.querySelector(".close");

searchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});
