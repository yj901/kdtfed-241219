import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --light: #fff;
    --black: #000;
    --dark: #111;
    --accent: #dc143e;
    --border: #d1d1d1;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Source Sans 3", sans-serif;
  }
`;

export default GlobalStyles;
