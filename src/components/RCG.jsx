import React from "react";
import { useState } from "react";

function RCG() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const createHexColor = () => {
    let hexColor = "#";
    let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      hexColor += hexArr[randomNumber(hexArr.length)];
    }
    //  console.log(hexColor)
    setColor(hexColor);
  };

  const createRgbColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(r, g, b);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
      <button onClick={typeOfColor === "hex" ? createHexColor : createRgbColor}>
        Generate Random Color
      </button>

      <div>
        <h3>{typeOfColor === "hex" ? "HEX COLOR" : "RGB COLOR"}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default RCG;
