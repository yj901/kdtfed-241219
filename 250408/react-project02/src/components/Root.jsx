import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>Hello world!</div>
      <Outlet />
    </>
  );
};

export default Root;
