// const func = (value: unknown) => {
//   return value;
// };

// let num = func(10);
// let str = func("hello");

// // num.toUppercase(); //에러
// // num.toFixed(); //에러
// // str.toUppercase(); //에러

// //타입가드로 타입 좁히기
// if (typeof num === "number") {
//   num.toFixed();
// }

// if (typeof str === "string") {
//   str.toUpperCase();
// }

const func = <T>(value: T): T => {
  return value;
};

let num = func(10);

// const func01 = <T>(value: T):T => {
//   return value;
// };

let arr = func<[number, number, number]>([1, 2, 3]);
//제네릭 형식으로 타입을 지정하게 되면, 기본적으로 상대적인 슈퍼타입을 타입으로 지정하려고 한다.
