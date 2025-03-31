"use strict";
// let str = "hello world";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(str);
class Employee {
    name;
    position;
    age;
    //Field
    // protected name: string;
    // public position: string;
    // public age?: number;
    //Contructor
    constructor(name, position, age) {
        this.name = name;
        this.position = position;
        this.age = age;
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
    officeNumber;
    constructor(name, position, officeNumber, age) {
        super(name, position, age);
        this.officeNumber = officeNumber;
    }
    work2() {
        console.log(`반가워요 ${this.name} 입니다.`);
    }
}
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동가능`);
    }
}
