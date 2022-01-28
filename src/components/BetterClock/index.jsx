import React from "react";
import PropTypes from "prop-types";
import useClock from "../../hooks/useClock";

BetterClock.propTypes = {};

function BetterClock(props) {
  const { timeString } = useClock();

  return <h1 style={{ color: "red" }}>{timeString}</h1>;
}

export default BetterClock;
