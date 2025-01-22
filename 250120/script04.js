//자바스크립트 코드가 작성 혹은 생성 => 컴퓨터 메모리 공간에 객체 생성 => 실행 컨텍스트 = execution context
//execution context : 개발자가 현재 작성 혹은 생성 변수(식별자)가 어떤 것이 있는지, 실행시켜야 하는 함수는 무엇인지 등등의 정보를 저장해놓고 있음.
// > 어떤 코드를 먼저 실행해야 하는가에 대한 우선순위를 결정하기 위한 목적

/*

let a = 1;
function outer() {
  function inner() {
    console.log(a);
    a = 3;
  }
  inner();
  console.log(a);
}
outer();
console.log(a);

// 1 3 3 
*/

function a() {
  let x = 1;
  console.log(x);
  x;
  console.log(x);
  x = 2;
  console.log(x);
}

a();
// 1 1 2

//호이스팅 ↓
/*
function a() {
  let x;
x;

  x = 1;
  console.log(x);
  console.log(x);
  x = 2;
  console.log(x);
}
*/

function a() {
  console.log(b);
  b = "bbb";

  console.log(b);
  function b() {}

  console.log(b);
}

a();

//호이스팅  ↓
/*
function a() {
  let b;
  b = function b() {}

  console.log(b);
  b = "bbb";

  console.log(b);

  console.log(b);
}
*/
