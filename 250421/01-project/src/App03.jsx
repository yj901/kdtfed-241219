import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  background: ${({ required }) => (required ? "tomato" : "lightblue")};
  border: none;
`;

function App() {
  return (
    <Container>
      <Input required={true} />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App;
