//데이터 통신

/*
3가지 주체

1. User (*사용자)
2. Client (*웹 브라우저)
3. Server (*서버)

**요청 & 응답** ⇒ 프로세스가 상시 실행!!

**`request`** & **`response`**

요청과 응답이 정상적으로 잘 이루어지고 있는지 확인 가능!

1. 요청 및 **`응답 헤더`**를 통해 유추하기
2. 요청 및 **`응답 메시지`**를 통해서 유추하기

https://flyasiana.com/ 이러한 도메인을 클라이언트를 통해서 입력하는 것만으로 서버에 데이터를 요청하는 행위.

⇒ **`GET 방식`**으로 요청을 한 것임.

### **`POST`  방식**

⇒ **사용자**가 클라이언트를 통해 어떤 값을 **전달**하고, 

전달받은 해당 값을 기반으로 **서버에서 업데이트된 정보**를 다시 사용자에게 **전달**하는 방식

: 대표적인 예 - 로그인


데이터 통신이 이루어지는 프로세스 및 원리

⇒ 데이터 통신이 이루어지는 상황에서 `클라이언트`와 `서버`는 `어떤 자료`를 서로 주고 받을까??

⇒ json 데이터(2015 이후 최근)  or  xml자료형식(과거) 

json = Javascript Object Notation ⇒ 자바스크립트 객체 표기법

*/

const student = {
  name: "짱구",
  major: "컴퓨터공학",
  grade: 2,
};

const json = JSON.stringify(student);
console.log(json);

const json2 = JSON.parse(json);
console.log(json2);

console.log(json2.grade, typeof json2.grade);
//json형태로 데이터의 자료형을 형변환하는 경우, 항상! 데이터 자료 타입을 체크하는 습관!!

//클라이언트가 서버에게 데이터를 요구하고, 해당 데이터를 가져오는 방식은 어떻게 생겼으며, 어떻게 사용해야 할까?

//자바스크립트에서 서버와 데이터 통신을 할 때 사용하는 방법 : AJAX
//Asynchronous Javascript And Xml

//AJAX라는 데이터 통신 방법을 활용한 세부적인 `통신기법`
// `XMLHttpRequest` ⇒ `XHR`
//`fetch()`  (최신 방법, 이젠 이거를 많이 씀)
