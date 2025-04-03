import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ToDoListContext } from "../contexts/ToDoListContextProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// interface Props {
//   readonly toDoList: Array<string>;
//   readonly onDelete?: (todo: string) => void;
// }

const TodoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
  return (
    <Container>
      {toDoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
