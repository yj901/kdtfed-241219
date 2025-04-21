import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1``;

interface DummyProps {
  text: string;
  active?: boolean;
}

const Dummy = ({ text, active = false }: DummyProps) => {
  return <Title>{text}</Title>;
};

function App() {
  const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
    alert("hello");
  };
  return (
    <Container>
      <Dummy text="hello" />
      <Dummy text="World" active={true} />
      <button onClick={onClick}>Click</button>
    </Container>
  );
}

export default App;
