import { useState } from "react";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Checkly React Project Template
        </p>
        <a href="https://www.checklyhq.com">Visit Checkly for more info</a>
      </div>
    </>
  );
}

export default App;
