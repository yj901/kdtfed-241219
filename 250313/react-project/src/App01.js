import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  const handleInChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="App">
      <div>
        <input
          name="name"
          value={state.name}
          type="text"
          placeholder="이름"
          onChange={handleInChange}
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleInChange}>
          <option key="여성">여성</option>
          <option key="남성">남성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleInChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleInChange} />
      </div>
    </div>
  );
}

export default App;
