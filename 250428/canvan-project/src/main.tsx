import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Root from "./Root.tsx";
import { defaultTheme } from "./theme.ts";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={defaultTheme}>
      <Root />
    </ThemeProvider>
  </RecoilRoot>
);
