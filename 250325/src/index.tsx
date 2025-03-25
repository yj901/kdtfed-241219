import ReactDOM from "react-dom/client";

import App from "./App";
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

body {
  width: 100%;
  height: 100vh;
  font-family: "Source Sans 3", sans-serif;
  background-image: linear-gradient(-45deg, #ffb6cd 0%, #ffc2a0 100%);
}

:root {
  --light-color: #fff;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
