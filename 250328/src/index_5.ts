// const func = (a: number, b: number): number => {
//   return a + b;
// };
const func = (a: number, b: number) => a + b;

// 매개변수 => 선택적 매게변수
//바닐라 자바스크립트에서도 배운것. 선택적 매개변수는 반드시 뒤에서 와야함.

const introduce = (name: string, tall?: number) => {
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
};

introduce("구여진", 158);
introduce("구여진");

const getSum = (...rest: [number, number, number]) => {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
};

getSum(1, 2, 3);
// getSum(1, 2); //에러, 튜플이라 무조건 인자값에 숫자도 3개 들어가야함
// getSum(1, 2, 3, 4); //에러, 튜플이라 무조건 인자값에 숫자도 3개 들어가야함

//미리 타입별칭으로 타입 지정하기
type Add = (a: number, b: number) => number;

//함수 호출 시그니처
type Call = { (a: number, b: number): number }; //키():밸류

const add: Call = (a, b) => a + b;
// const add: Add = (a, b) => a + b;
const sub: Add = (a, b) => a * b;
const multiply: Add = (a, b) => a - b;
const divid: Add = (a, b) => a / b;

// const test: Add = (a, b) => a * b;
const test: (a: number, b: number) => number = (a, b) => a * b;
