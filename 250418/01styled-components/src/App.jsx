import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: #d1d1d1;
  animation: ${rotationAnimation} 3s linear infinite alternate;
`;

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;
