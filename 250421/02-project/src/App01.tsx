// import styled from "styled-components";
import Circle from "./Circle";

// const Title = styled.h1`
//   color: ${({ theme }) => theme.accentColor};
// `;

function App() {
  return (
    <>
      <Circle borderColor="blue" bgColor="lightblue" />
      <Circle text="hello" bgColor="tomato" />
    </>
  );
}

export default App;
