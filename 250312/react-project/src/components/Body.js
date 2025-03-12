import React, { useState } from "react";
import "./Body.css";
import Viewer from "./Viewer";

// const Viewer = ({ number }) => {
//   console.log(number);
//   return <div>{number % 2 === 0 ? "짝수" : "홀수"}</div>;
// };

const Body = () => {
  const [number, setNumber] = useState(0);

  const onDecrease = (e) => {
    setNumber(number - 1);
  };

  const onIncrease = (e) => {
    setNumber(number + 1);
  };
  return (
    <div className="counterApp">
      <h2>{number}</h2>
      <Viewer number={number} />
      <div className="buttons">
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default Body;
