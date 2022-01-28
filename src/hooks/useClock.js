import React, { useEffect, useState } from "react";

const formatDate = (now) => {
  const hour = `0${now.getHours()}`.slice(-2);
  const minute = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);

  return `${hour}:${minute}:${seconds}`;
};

function useClock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    // component did mount
    const intervalId = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      // cleanup => component will unmount
      console.log("clean up");
      clearInterval(intervalId);
    };
  }, []);

  return { timeString };
}

export default useClock;
