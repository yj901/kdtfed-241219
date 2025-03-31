// let str = "hello world";

// console.log(str);

class Employee {
  //Field
  // protected name: string;
  // public position: string;
  // public age?: number;

  //Contructor
  constructor(
    protected name: string,
    public position: string,
    public age?: number
  ) {
    // name = name;
    // position = position;
    // age = age;
    //this 생략, name=name과 같이 키와 밸류값 동일, 생략.
  }

  //method
  work() {
    console.log(`hello ${this.name}!`);
  }
}

// const employee1 = new Employee();
// console.log(employee1);
// employee1.work();

// const employee2 = new Employee("henry", 20, "striker");
// console.log(employee2);
// employee2.work();

// const employee3 = new Employee("henry", "striker");
// // employee3.name = "Son"; //private로 하면서 에러발생
// console.log(employee3);
// employee3.work();

// const employee4: Employee = {
//   name: "jin",
//   position: "",
//   age: 20,
//   work: () => {},
// };

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    position: string,
    officeNumber: number,
    age: number
  ) {
    super(name, position, age);
    this.officeNumber = officeNumber;
  }

  work2() {
    console.log(`반가워요 ${this.name} 입니다.`);
  }
}

// const employee5 = new ExecutiveOfficer("Messi", "FW", 1, 20);
// console.log(employee5);

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동가능`);
  }
}
