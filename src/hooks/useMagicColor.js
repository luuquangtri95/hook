import { useEffect, useRef, useState } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "blue"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  }

  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef(color);

  // change color every one second
  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log("first color", color);
      // console.log("ref color", colorRef.current);
      const newColor = randomColor(colorRef.current);

      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      // clean up

      clearInterval(intervalId);
    };
  }, []);

  return { color };
}

export default useMagicColor;
