import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
`;

const Label = styled.div`
  font-size: 1.8rem;
  margin-right: 16px;
`;

interface Props {
  label: string;
  onDelete: () => void;
}

const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
