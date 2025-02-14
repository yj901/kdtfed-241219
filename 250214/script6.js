// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는중") : (str = "완독!");
//     return str;
//   };
// };

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
};

//생성자 함수에 finish 속성을 안쓴 상태에서 finish를 외부에서 사용할수있는 방법

Book.prototype.finish = function () {
  let str = "";
  this.done === false ? (str = "읽는중") : (str = "완독");
  return str;
};

const book1 = new Book("javascript", 648, false);
