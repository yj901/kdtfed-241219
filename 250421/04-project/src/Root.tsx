import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/Globalstyles.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={true} />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
