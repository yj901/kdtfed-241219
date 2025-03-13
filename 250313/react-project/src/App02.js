import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus(); // 그자리에 머물러 있게 하기. 멈춰있게.
    } else {
      alert(text);
      setText("");
    }
  };

  return (
    <div className="App">
      <div className="formList">
        <input
          ref={textRef}
          type="text"
          value={text}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>작성완료</button>
      </div>
    </div>
  );
}

export default App;
