// let numA: 100 = 100;
// let strA = "hello";

// let message: undefined = undefined;

// message = 1;

// numA = 200;

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["hello", "world"];
const boolArr01: boolean[] = [true, false, true];
const boolArr02: Array<boolean> = [true, false, true];

const multiArr: (number | string)[] = [1, "hello"];
const doubleArr: number[][] = [[1, 2, 3], [4, 5], [6]];
const doubleArr2: (number | string)[][] = [[1, "2", 3], [4, 5], [6]];

let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; //에러

let tup2: [number, string, boolean] = [1, "hello", true];
// tup2 = [1, 2]; //에러

let tup3: [number, number] = [1, 2];
tup3.push(1);

console.log(tup3);

const users: [string, number][] = [
  ["박세진", 0],
  ["강백호", 1],
  ["서태웅", 2],
  ["정대만", 3],
  // [4, "채치수"], //에러 밑줄 표시
];
