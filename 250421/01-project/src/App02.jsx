import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: blueviolet;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 14px;
`;

function App() {
  return (
    <Container>
      <Button as="a" href="/">
        Login
      </Button>
      <Button>Logout</Button>
    </Container>
  );
}

export default App;
