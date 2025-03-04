// // 일반함수 선언 및 호출
// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// // async함수 선언 및 호출
// const displayGood = async () => {
//   console.log("Good");
// };
// displayGood();

const whatYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject = (subject) => {
  return `Hello ${subject}`;
};

// whatYourFavorite().then(displaySubject).then(console.log);

/*whatYourFavorite()
  .then(displaySubject)
  .then((result) => console.log(result));
 */

const init = async () => {
  const response = await whatYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
};

init();
