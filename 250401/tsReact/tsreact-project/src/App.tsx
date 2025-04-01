import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";

const Title = styled.h1`
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Title>hello</Title>
    </>
  );
}

export default App;
