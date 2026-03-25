import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MaxCount() {
  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  return (
    <>
      <h4>No of Clicks until timer expires.</h4>
      <div
        style={{ backgroundColor: "#F87C63", width: "35%", height: "15rem" }}
      >
        <h1 style={{ textAlign: "center" }}>{count}</h1> <br />
        <p style={{ textAlign: "center" }}>
          <strong>Time left: {time} seconds </strong>
        </p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{ textAlign: "center", marginLeft: "8rem" }}
          disabled={time === 0}
        >
          +
        </button>
      </div>
    </>
  );
}
