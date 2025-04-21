import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} infinite 3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0.2;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
    </Container>
  );
}

export default App;
