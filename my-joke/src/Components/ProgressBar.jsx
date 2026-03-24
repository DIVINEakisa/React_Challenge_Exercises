import { useState } from "react";

export default function ProgressBar(props) {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <h1>{props.title}</h1>

      <div
        style={{
          backgroundColor: "pink",
          width: progress + "%",
          borderRadius: "8px",
          height: "40px",
          color: "white",
          textAlign: "center",
        }}
      >
        <br />
        {progress}%
      </div>
      <br />
      <input
        type="number"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
    </>
  );
}
