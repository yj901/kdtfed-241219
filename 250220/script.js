// regExp = regular Expression = 정규표현식
// 문자열 + 정규표현식 + 배열 (공부순서)

// 1. 패턴 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의
// 2. 플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때, 추가적인 옵션을 적용할
// 3. 클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 때, 사용할 수 있는 요소

// decimal : 정규표현식에서 표현하는 숫자.
// const regexp = /\d{3}/;

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("hello"));
// console.log(regexp.test("123"));

// let str = "ES2025 is powerful";
// const pattern = /ES2025/;

// console.log(str.match(/ES6/));
// console.log(str.match(pattern));
// console.log(str.replace(pattern, "Love"));

// const str = "Love is Power777!";

// const pattern = /love/i;

// console.log(pattern.test(str));

// const pattern = /Power\d\d\d/;
// const pattern = /Power\d{3}/;

// console.log(str.match(pattern));

// const hello = "ehllo, everyone.";

// const pattern = /^H/i;

// console.log(pattern.test(hello));

// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// const str = "ES2025";
// console.log(str.match(/[^0-9]/g));

// const str = "Ooooops";

// console.log(str.match(/o{2,4}/i));

const number = /^[0-9]+$/;
//숫자만 가능한 값의 패턴

const positive = /^[1-9]\d*$/;

const negative = /^\-[1-9]\d*$/;

const engword = /^[a-zA-Z]+$/;

const engandword = /^[a-zA-Z0-9]+$/;

const korean = /^[가.힣]+$/;

const koreanandenglish = /^[가.힣a-zA-Z]+$/;
