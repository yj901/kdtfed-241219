import React from "react";
import { ITodo, todoState, Categories } from "../atoms";
import { useSetRecoilState } from "recoil";

//자료구조 & 알고리즘
// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "gam", ...back];

const Todo = ({ text, category, id }: ITodo) => {
  // console.log(category);
  const setTodos = useSetRecoilState(todoState);

  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      // const oldTodo = oldTodos[targetIndex];
      const newTodo = { id, text, category: name as any };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };

  // const onclick01 = (newCategory: ITodo["category"]) => {
  //   console.log("i want to go to", newCategory);
  // };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TODO && (
        <button name={Categories.TODO + ""} onClick={onclick}>
          Todo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ""} onClick={onclick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ""} onClick={onclick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
