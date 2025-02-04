// const accept = document.querySelector("input[type='submit']");
// accept.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("click");
// });

const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  //json형태 바꿔서 서버가 읽을수잇게
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  //두개가 타입이 달라서 깊은비교!==하면 오류나기 때문에 얕은비교 !=
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.append(span, button);
    //li.appendChild(span); 과 li.appendChild(button); 2개 쓰는걸 한번에.
    li.id = todo.id;

    ul.prepend(li);
  }
};

const handler = (event) => {
  event.preventDefault();
  // const text = userInput.value.trim();
  // if (text === "") return;
  const todo = {
    id: Date.now(),
    text: userInput.value,
  };

  if (todo.text !== "") {
    todos.push(todo);
    addItem(todo);
    save();
  }

  userInput.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  //브라우저가 로컬스토리지에 저장된 걸 읽을 수 있도록 파싱하기.

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();
form.addEventListener("submit", handler);

//로컬스토리지 예시
// localStorage.setItem("hello", "world");
// const myData = localStorage.getItem("hello");
// console.log(myData);
