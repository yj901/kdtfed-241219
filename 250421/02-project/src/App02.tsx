import { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.bgColor};
  }
`;

const Container = styled.div``;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={value}
            type="text"
            placeholder="username"
          />
          <input type="submit" value={"Login"} />
        </form>
      </Container>
    </>
  );
}

export default App;
