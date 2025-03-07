import React from "react";

const Body = () => {
  const numberA = 1;
  const numberB = 2;

  const strA = "Hello";
  const strB = " World";

  const boolA = true;
  const boolB = false;

  const objA = {
    a: 1,
  };
  return (
    <React.Fragment>
      <h1>Body</h1>
      <h2>{numberA + numberB}</h2>
      <h2>{strA + strB}</h2>
      <h2>{String(boolA || boolB)}</h2>
      <h2>{objA.a}</h2>
    </React.Fragment>
  );
};

export default Body;
