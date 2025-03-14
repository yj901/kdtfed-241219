import React from "react";

const Header = () => {
  const today = new Date().toLocaleDateString();
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{today}</h1>
    </div>
  );
};

export default Header;
