import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet context={{ darkMode: false }} />
    </>
  );
};

export default Root;
