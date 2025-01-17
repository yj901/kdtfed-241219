// 변수

// 자료형

//자동 형태 변환

//자동 형변환
const one = "20";
const two = 25;
const result = one - two;
console.log(result);
console.log(typeof result);

//숫자와 문자를 더하면, 숫자가 문자가 되어 나옴.
// 숫자와 문자를 빼면, 무조건 예외없이 숫자로 나옴.

//수동 형변환  : Number // parseInt // parseFloat
const str = parseFloat("20");
console.log(str);
console.log(typeof str);

const num99 = "17.8";

console.log(Number(num99));
console.log(parseInt(num99));
console.log(parseFloat(num99));

console.log(Number(true));
console.log(parseInt(true));

//문자로 형변환   toString() ||  String()
const num77 = 77;

console.log(typeof num77.toString());

// null & undefined = > 문자열로 바꿀 수 있음
console.log(typeof String(num77));

//논리형 boolean으로 형변환
//  true  /  false

console.log(Boolean("hello"));
console.log(Boolean(undefined));

//다음진도 : 연산자 & 제어문
