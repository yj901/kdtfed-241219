import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";

const Card = styled.div<DraggingProps>`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 8px;
  background: ${({ theme, isDragging }) =>
    isDragging ? "#e5e5e5" : theme.cardColor};
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0 2px 5px rgba(0,0,0,.3)" : "none"};
`;

interface DraggingProps {
  isDragging: boolean;
}
interface IDraggableCardProps {
  todo: string;
  index: number;
  todoId: number;
}

const DraggableCard = ({ todo, index, todoId }: IDraggableCardProps) => {
  return (
    <Draggable draggableId={todoId + ""} index={index} key={todo}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
