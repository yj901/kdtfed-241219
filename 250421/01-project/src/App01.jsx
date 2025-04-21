import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.div`
  background: ${({ bgColor }) => bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.span``;

function App() {
  return (
    <Container>
      <Box bgColor={"lightblue"}>
        <Text>텍스트</Text>
      </Box>
      <Circle bgColor={"orange"} />
    </Container>
  );
}

export default App;
