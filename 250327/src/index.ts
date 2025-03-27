let num1: number = 10; //number
let num2: 10 = 10; //literal

// num1 = supertype
// num2 = subtype

// supertype > subtype: upcasting
// subtype > supertype : downcasting => any type

// num1 = num2; //가능
// num2 = num1; //불가능

// upcasting 예시
let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = undefined;

let unknownVar: unknown;

// let num: number = unknownVar; // 다운캐스팅, 안됨. 에러
// let str: string = unknownVar; // 다운캐스팅, 안됨. 에러

// let test01: never = 10; // 다운캐스팅, 안됨. 에러
// let test02: never = "string"; // 다운캐스팅, 안됨. 에러
// let test02: never = true; // 다운캐스팅, 안됨. 에러

// interface IAnimal {
//   // name: string;
//   // color: string;
//   [key: string]: string;
// }

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "멍멍이",
  color: "brown",
  breed: "진도",
};

let cat = {
  name: "렌시",
  color: "white-gray",
  country: "영국",
};

animal = dog; //가능
animal = cat; //가능
// dog = animal; //불가능

type Book = {
  name: string;
  price: number;
};

type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: "ts",
  price: 30000,
  // skill: "react",
};

let programingBook: ProgramingBook = {
  name: "typescript",
  price: 30000,
  skill: "reactjs",
};

book = programingBook;
// programingBook = book; // 에러

let book3: Book = programingBook;

const func = (book: Book) => {};

// func({ name: "리액트", price: 30000, skill: "react" }); //에러
func(programingBook);
