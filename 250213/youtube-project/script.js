// hashlist sticy event
window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 268) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

//touch event
//586 스크롤자체 컨텐츠 너비
// 226 스크롤이 가능하도록 하기 위해서 준 여백의 공간
// 812 전체공간 확보

const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listscrollWidth = hashContent.clientWidth + 200;

//최초 손가락 시작
let startX = 0;

//찍어서 움직인 지점
let nowX = 0;

//손가락 뗐을 때 지점
let endX = 0;

// 두번째로 손가락을 터치했을 때 이전에 이동한 값을 간직
let listX = 0;

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;

  //값을 반환해야할때 return 꼭 넣어야함.
  // 무언가 값을 넣어야함. 무언가 값을 밖으로 끄집어 내야함.
  // 그러면 리턴을 넣어야 한다.
};

// 핵심! 손가락 뗐을 때 이동한 값 기억하기 위함. 두번째 시작할때 영향.
const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listscrollWidth) {
    setTranslateX(listClientWidth - listscrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listscrollWidth;
  }

  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);

  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
