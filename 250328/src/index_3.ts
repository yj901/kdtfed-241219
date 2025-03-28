type Person = {
  name: string;
  age: number;
};

const func = (value: number | string | Date | Person) => {
  // value.toUpperCase();
  // value.toFixed();

  // console.log(value.name); //가드 없이는 오류

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getFullYear());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
};

func("value");
