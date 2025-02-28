// Map()
// 클래스 혹은 생성자함수 => 프로토타입 객체

const bag = new Map();

bag.set("color", "red").set("price", "30000");
bag.delete("color");
bag.clear();

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

const myCupIte = myCup.keys();
console.log(myCupIte);
//Iterable : 반복 순회할 수 있는 (*형용사)

const myCupIte02 = myCup.values();
console.log(myCupIte02);

const myCupIte03 = myCup.entries();
console.log(myCupIte03);

myCupIte.forEach((item) => {
  console.log(item, typeof item);
});
