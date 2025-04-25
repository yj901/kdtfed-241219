import { useRecoilValue } from "recoil";
import { todoState, todoSelector } from "../atoms";
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
  const [todo, doing, done] = useRecoilValue(todoSelector);

  return (
    <Container>
      <h1>TodoList</h1>
      <hr />
      <CreateTodo />
      <h2>TODO</h2>
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
      </ul>
    </Container>
  );
};

export default TodoList;
