import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ bgColor }) => bgColor};
`;

// const BoxTwo = styled.div`
//   width: 100px;
//   height: 100px;
//   background: ${({ bgColor }) => bgColor};
// `;

// const Text = styled.span`
//   display: block;
//   color: #fff;
//   text-align: center;
//   line-height: 100px;
// `;

const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Container>
      <Box bgColor="teal" />
      {/* <BoxTwo bgColor="tomato" /> */}
      <Circle bgColor="tomato" />
    </Container>
  );
}

export default App;
