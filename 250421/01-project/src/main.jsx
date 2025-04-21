import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "#eee",
  background: "#222",
};

const lightTheme = {
  textColor: "#222",
  background: "#fff",
};

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
