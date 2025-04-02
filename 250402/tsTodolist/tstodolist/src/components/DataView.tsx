import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  background: var(--light-color);
  padding: 36px 46px;
  border-radius: 8px;
`;

interface Props {
  readonly toDoList: Array<string>;
  readonly onDelete?: (todo: string) => void;
}

const DataView = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
