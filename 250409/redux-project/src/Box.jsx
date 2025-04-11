import React from "react";
import { useSelector } from "react-redux";
import GrandBox from "./GrandBox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <>
      <GrandBox />
      <div>This is Box {count}</div>
    </>
  );
};

export default Box;
