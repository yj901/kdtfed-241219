import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: inherit;
}
:root {
  --primary-light-color: #fff;
  --primary-dark-color: #000;
  --border-color:#ccc;
}
`;

export default GlobalStyles;
