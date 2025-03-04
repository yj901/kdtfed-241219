//자바스크립트 프로그래밍 언어
// 객체지향 프로그래밍 언어: 거의 대부분의 모든 자료를 객체구조로 생성해서 관리운영
//다중패러다임 언어 : 표현식문 & 실행문 방식의 모든 처리를 둘 다 겸용할 수 있기 때문에
// 싱글스레드 언어 : thread : 회차 // 차선 => 1차선을 가지고 있습니다. 차선이 1개다. 1개의 차선에서 만약 사고가 나거나, 신호로 인해 정차중이다 ⇒ 뒤에서는 앞에서 사고가 해결되거나 신호가 변경될 때까지는 무기한 대기!!
//비동기처리방식 & 싱글스레드 언어의 모순성!

//- 자체적으로 **멀티스레드**의 성격을 갖도록 해주는 **비동기적 함수**를 가지고 있음!
//- `setInterval()` & `setTimeout()` & `Callback 함수` 등

//자바스크립트의 싱글스레드 성격을 여실히 보여주는 예시
/*
const displayA = () => {
  console.log("A");
};

const displayB = () => {
  setTimeout(() => console.log("B"), 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB();
displayC();
*/

// 콜백함수로 비동기처리하는 방식
/*
const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  callback();
  setTimeout(() => {
    console.log("B");
  }, 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);
*/

//사용자로부터 어떤 커피메뉴를 주문했는지 확인하는 메시지를 전달해주고, 약 3초후에 주문한 커피가 준비완료되었다는 메시지를 전달해주는 역할을 할 예정
/*
const display = (result) => {
  console.log(`주문한 ${result}가 준비완료되었습니다.`);
};

const order = (coffee, callback) => {
  console.log(`${coffee} 메뉴가 주문 접수!`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

order("아메리카노", display);
*/

// 콜백지옥
const displayLetter = () => {
  console.log("A"); //외부에서 데이터를 찾아왔음
  setTimeout(() => {
    console.log("B"); //찾아온 데이터를 출력해줌
    setTimeout(() => {
      console.log("C"); //찾아온 데이터를 1차가공
      setTimeout(() => {
        console.log("D"); //찾아온 데이터를 2차가공
        setTimeout(() => {
          console.log("Stop"); //더이상 처리할 것이 없음
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();
