import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { todoSelector, categoryState, Categories } from "../atoms";
import styled from "styled-components";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  hr {
    width: 100%;
  }
`;

const TodoList = () => {
  // const todos = useRecoilValue(todoState);
  // const [todo, doing, done] = useRecoilValue(todoSelector);
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };
  return (
    <Container>
      <h1>TodoList</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateTodo />
      {/* <h2>TODO</h2>
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>DOING</h2>
      <ul>
        {doing.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>DONE</h2>
      <ul>
        {done.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul> */}
      {/* {category === "TODO" &&
        todo.map((aTodo) => <Todo {...aTodo} key={aTodo.id} />)}
      {category === "DOING" &&
        doing.map((aDoing) => <Todo {...aDoing} key={aDoing.id} />)}
      {category === "DONE" &&
        done.map((aDone) => <Todo {...aDone} key={aDone.id} />)} */}
      {todos?.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </Container>
  );
};

export default TodoList;
