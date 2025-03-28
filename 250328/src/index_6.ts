type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //됨. 업캐스팅.
// b = a; //에러. 다운캐스팅, x.

//반환값이 존재하지 않는 경우
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; //에러발생
d = c;

//함수의 매개변수 개수가 동일하면서, 반환값이 없는 경우

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; //에러발생
dogFunc = animalFunc;

//
// 함수의 매개변수 개수가 다른 경우 (반환값도 없고)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; //에러발생

//
//함수 오버로딩

function func7(a: number): void;
function func7(a: number, b: number, c: number): void;

function func7(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func7(1);
// func7(1, 2); //에러발생
func7(1, 2, 3);
