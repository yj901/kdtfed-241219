enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user9 = {
  name: "jin",
  Role: Role.ADMIN,
};
const user8 = {
  name: "den",
  Role: Role.GUEST,
};
const user7 = {
  name: "mur",
  Role: Role.USER,
};

// console.log(user9, user8, user7);

let num10: number = 10;
let test10: unknown;

//대수타입
// num10 = test10;
test10 = num10;

//
let anyVar: any = 10;

anyVar = "hello";
anyVar.toupperCase();

anyVar = true;
anyVar = {};
anyVar = [];

anyVar.pop();

let num = 10;
anyVar = num;
num = anyVar;

// let unknownBar = unknown;
//이쯤에서 졸아가지고.. 나중에 수업 파일 확인하기

let a: void;
a = undefined;

const func3 = (): never => {
  while (true) {
    console.log("hello");
  }
};

const func4 = (): never => {
  throw new Error();
};
