import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #dc143c;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    height: 100vh;
    font-size: 1.6rem;
    background: url("https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
