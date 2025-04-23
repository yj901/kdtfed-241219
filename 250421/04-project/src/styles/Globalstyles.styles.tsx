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

  html {
font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Source Sans 3", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }


  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-colof: #8870f7;
  }
`;

export default GlobalStyles;
