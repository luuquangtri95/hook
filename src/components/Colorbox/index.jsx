import React, { useRef, useState } from "react";
import "./styles.scss";

function getRandomColor(prevColor) {
  const COLOR_LIST = ["red", "green", "blue"];
  let randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);

  while (prevColor === COLOR_LIST[randomIndex]) {
    randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  }

  return COLOR_LIST[randomIndex];
}

function ColorBox(props) {
  const [color, setColor] = useState(
    () => localStorage.getItem("color") || "deeppink"
  );

  const prevColor = useRef(null);

  const handleBoxClick = () => {
    prevColor.current = color;
    const newColor = getRandomColor(prevColor.current);

    localStorage.setItem("color", newColor);

    setColor(newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
