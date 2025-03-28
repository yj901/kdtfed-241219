type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;

person.name = "";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

// type DogNew = {
//   name: string;
//   color: string;
//   breed: string;
// };

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// let dogAI: DogNew = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// };

// // 초과 프로퍼티 검사를 우회해서 넘어간 케이스
// // 슈퍼타입 & 서브타입
// // 업캐스팅 & 다운캐스팅
// let dogNew: Dog = dogAI;

let num1 = 10 as never;
// num1 = 20; //에러

let num2 = 10 as unknown;
num2 = "hello";

// let num3 = 10 as string;

//다중단언
let num3 = 10 as unknown as string;

//const 단언
let num4 = 10 as const;

// Non Null 타입
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len = post.author!.length;
