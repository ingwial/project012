import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function changeText(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <p>
        <textarea value={text} onChange={changeText} cols="100" rows="5" />
      </p>
      <p>
        <textarea value={text} cols="100" rows="5" />
      </p>
      <p>Number of characters entered: {text.length}</p>
    </div>
  );
}

export default App;
