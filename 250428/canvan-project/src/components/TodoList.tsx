import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms";
import Board from "./Board";

const Container = styled.div`
  max-width: 1200px;
  min-width: 600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #fff; */
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;

    if (destination?.droppableId === source.droppableId) {
      setTodos((oldTodos) => {
        const boardCopy = [...oldTodos[source.droppableId]];
        const taskObj = boardCopy[source.index]; //객체.
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj); // 객체가 움직여야함.
        return {
          ...oldTodos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setTodos((oldTodos) => {
        const sourceBoard = [...oldTodos[source.droppableId]];
        const destinationBoard = [...oldTodos[destination.droppableId]];
        const taskObj = sourceBoard[source.index]; //객체.

        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj); // 객체가 움직여야함.
        return {
          ...oldTodos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
    // if (!destination) return;
    // setTodos((oldTodos) => {
    //   const copyTodos = [...oldTodos];
    //   copyTodos.splice(source.index, 1);
    //   copyTodos.splice(destination.index, 0, draggableId);
    //   return copyTodos;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board key={boardId} boardId={boardId} todos={todos[boardId]} />
          ))}
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default TodoList;
