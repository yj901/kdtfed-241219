//데이터 통신을 할 때, 데이터가 정상적으로 들어왔는지에 따라 처리해줄 수 있는 방법을 이원화할 수 있는데, 그때 사용하는 방법이 바로 “예외처리” 방식!
/*
### 예외처리 방식:
데이터가 정상적으로 들어왔을 때 ⇒ `try`문 사용
데이터가 정상적으로 들어오지 못했을 때 ⇒ `catch`문 사용
데이터의 유입과 무관하게 최종적인 메시지를 전달하고자 할 때 ⇒ `finally`문 사용 (옵션)
*/

// try {
//   console.log("시작");
//   add();
//   console.log("실행중...");
// } catch (err) {
//   alert(`에러이름 : ${err.name}`);
//   alert(`에러내용 : ${err.message}`);
//   alert(`전체에러 : ${err}`);
// } finally {
//   console.log("끝");
// }

const json = '{ "grade": 3, "age": 20 }';

try {
  const user = JSON.parse(json);
  if (!user.name) {
    // throw "사용자 이름이 없습니다!";
    throw new Error("사용자 이름이 없습니다!");
  }
} catch (err) {
  console.error(err);
}
