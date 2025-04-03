import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-color);
  padding: 32px 40px;
  border-radius: 8px;
`;

// interface Props {
//   readonly toDoList: Array<string>;
//   readonly onDelete?: (todo: string) => void;
// }

const DataView = () => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList />
    </Container>
  );
};

export default DataView;
