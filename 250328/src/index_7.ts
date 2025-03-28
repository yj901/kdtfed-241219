type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

//인타입가드 방법
// const warning1 = (animal: Animal) => {
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다" : "안짖습니다");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다" : "안할큅니다");
//   }
// };

//사용자 정의의 타입가드
const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};

const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖습니다");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할큅니다");
  }
};
