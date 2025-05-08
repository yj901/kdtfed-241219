import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles.styles";

function Root() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default Root;
