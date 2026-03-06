import { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        style={{
          backgroundColor: "purple",
          color: "black",
          padding: "10px",
          fontWeight: "bold",
          fontSize: "23px",
        }}
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show && (
        <p style={{ fontWeight: "bold", fontSize: "32px" }}>
          Welcome to React Challenges.
        </p>
      )}
    </div>
  );
}
