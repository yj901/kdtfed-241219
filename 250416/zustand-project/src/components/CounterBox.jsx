import React from "react";

const CounterGBox = ({ count, setCount }) => {
  return <button onClick={() => setCount(count + 1)}>+</button>;
};

export default CounterGBox;
