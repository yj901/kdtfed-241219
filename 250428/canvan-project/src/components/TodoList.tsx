import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms";

const Container = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Board = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.boardColor};
`;

const Card = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.cardColor};
`;

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    ["c", "a", "b", "d", "e", "f"];
    if (!destination) return;

    setTodos((oldTodos) => {
      const copyTodos = [...oldTodos];
      copyTodos.splice(source.index, 1);
      copyTodos.splice(destination.index, 0, draggableId);
      return copyTodos;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {todos.map((todo, index) => (
                  <Draggable draggableId={todo} index={index} key={todo}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.draggableProps}
                        {...magic.dragHandleProps}
                      >
                        {todo}
                      </Card>
                    )}
                  </Draggable>
                ))}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default TodoList;
