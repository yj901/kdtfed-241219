// import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border: 2px solid ${({ borderColor }) => borderColor};
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "world" }: CircleProps) => {
  // const [counter, setCounter] = useState<number | string>(1);
  // setCounter("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
