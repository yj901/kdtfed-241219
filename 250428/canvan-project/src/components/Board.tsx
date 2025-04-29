import { useForm } from "react-hook-form";
import { Droppable } from "@hello-pangea/dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { ITodo, todoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.boardColor};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #489dfd;
  color: #fff;
  cursor: pointer;
`;

const Area = styled.div<IAreaProps>`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  transition: background 0.3s;
  background: ${({ $isDraggingOver, $draggingFromThisWith }) =>
    $isDraggingOver ? "pink" : $draggingFromThisWith ? "crimson" : "#9eceff"};
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

interface IAreaProps {
  $isDraggingOver: boolean;
  $draggingFromThisWith: boolean;
}
interface IBoardProps {
  todos: ITodo[];
  boardId: string;
}
interface IForm {
  todo: string;
}

const Board = ({ todos, boardId }: IBoardProps) => {
  const setTodos = useSetRecoilState(todoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ todo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      };
    });
    setValue("todo", "");
  };
  return (
    <Container>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("todo", { required: true })}
          type="text"
          placeholder="write here"
        />
        <Button>Click</Button>
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            ref={magic.innerRef}
            $isDraggingOver={snapshot.isDraggingOver}
            $draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            {...magic.droppableProps}
          >
            {todos.map((todo, index) => (
              <DraggableCard
                todo={todo.text}
                index={index}
                key={todo.id}
                todoId={todo.id}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;
