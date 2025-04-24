import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="write a todo"
          value={todo}
        />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default TodoList;
