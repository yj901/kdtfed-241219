// import { useState } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/Globalstyles.styles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme, lightTheme } from "./theme.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { isDarkAtom } from "./atoms.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: #8870f7;
  color: #fff;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 50%;
  aspect-ratio: 1;
`;

function Root() {
  const isDark = useRecoilValue(isDarkAtom);

  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark((current) => !current);
  const setterFn = useSetRecoilState(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={true} />
        <Button onClick={() => setterFn((prev) => !prev)}>
          {isDark ? "Light" : "Dark"}
        </Button>
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
