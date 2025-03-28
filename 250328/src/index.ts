//인터페이스
interface Person {
  readonly name: string;
  age?: number;
  // sayHi?: (a:number, b:number) => void;
  sayHi?(a: number, b: number): void; //호출시그니처타입처럼 정의가능
}

let person1: Person = {
  name: "jin",
  // age: 20,
  sayHi: () => {},
};

let person2: Person = {
  name: "jin",
  age: 20,
};

// person2.name = "jen";  //readonly 속성으로 값 못바꿈. 에러.

interface Func2 {
  // fc: () => string; //이렇게 주고 싶으면 인자값이 없어야함.
  (a: number): string; //인자값이 있으면 호출시그니처 형식으로 정의
  b?: boolean;
}

let func2: Func2 = (a) => "hello world";

func2.b = true;

//타입별칭과의 강력한 차이점!
type Type1 = number | string;
type Type2 = number & string;

interface Person3 {
  name: string;
  age: number;
}
// 인터페이스는 | & <- 이거 안된다는거

type Type3 = number | string | Person3;
type Type4 = number & string & Person3;

const person5: Person3 = {
  name: "den",
  age: 20,
};

//interface만의 고유기능!
interface Animal {
  name: string;
  age: number;
}

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

interface Dog extends Animal {
  // name: "777";
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 1,
  isBark: true,
  isScratch: true,
};

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "777",
  age: 1,
  isBark: true,
};

interface Person10 {
  name: string;
}

interface Person10 {
  // name: number; //에러남. 이건 안됨.
  age: number;
}

const person10: Person10 = {
  name: "tim",
  age: 16,
};
