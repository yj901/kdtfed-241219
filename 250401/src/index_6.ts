// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "jin",
//     age: 20,
//   },
// };

// //대괄호표기법 = 인덱스드 엑세스 타입으로 사용.
// // post["author"];

// const printAuthor = (author: Post["author"]) => {
//   console.log(`${author.id} - ${author.name}`);
// };

// //객체가 모여있는 배열의 타입
// type PostList = {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }[];

// type Tup = [number, string, boolean];

// type Tup0 = Tup[0]; //number
// type Tup1 = Tup[1]; //string
// type Tup2 = Tup[2]; //boolean

/*
interface Person {
  name: string;
  age: number;
  location: string;
}

const person: Person = {
  name: "jin",
  age: 20,
  location: "seoul",
};
*/

type Person = typeof person;

const person = {
  name: "jin",
  age: 20,
  location: "seoul",
};

const getPropertyKey = (person: Person, key: keyof typeof person) => {
  return person[key];
};
