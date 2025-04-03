import GlobalStyles from "./styles/Globalstyles.styles.tsx";
import DataView from "./components/DataView.tsx";
import styled from "styled-components";
import InputContainer from "./components/InputContainer.tsx";
import { ToDoListContextProvider } from "./contexts/ToDoListContextProvider.tsx";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ToDoListContextProvider>
          <DataView />
          <InputContainer />
        </ToDoListContextProvider>
      </Container>
    </>
  );
}

export default App;
