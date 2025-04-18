import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  background: #4ca378;
  color: #fff;
  border: none;
  font-size: 15px;
  padding: 5px 15px;
  border-radius: 50px;
  cursor: pointer;
`;

function App() {
  return (
    <Container>
      <Btn>로그인</Btn>
      <Btn as="a" href="/">
        로그아웃
      </Btn>
    </Container>
  );
}

export default App;
