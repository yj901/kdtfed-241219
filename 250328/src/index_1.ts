// let a: number | string;

// a = 1;
// a = "hello";

// let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "", //하나라도 빠지면 교집합이 아니기 때문에 에러가 난다.
};

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

type Union2 = {
  name: string;
};

let union4: Union2 = {
  name: "",
};

union4 = union3; //됨. 슈퍼가 서브를 받을 수 있음. 업캐스팅
// union3 = union4; //에러. 서브가 슈퍼를 받을수없음. 다운캐스팅안됨

let variable: number & string;
