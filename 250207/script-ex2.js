/*
연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때, N명의 학생수를 입력한다면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

(예를 들어 25명의 학생수가 있다면 3다스가 필요합니다. / 178명의 학생수가 있다면 15다스가 필요합니다.)
*/

const form = document.querySelector("form");
const students = document.querySelector("input[type='text']");
let result = document.createElement("p");
form.appendChild(result);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const studentsNum = parseInt(students.value);
  const need = Math.ceil(studentsNum / 12);

  result.innerText = `${studentsNum}명의 학생수에겐 ${need}다스가 필요합니다`;
});
