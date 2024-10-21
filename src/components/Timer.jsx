import React from "react";

const Timer = (props) => {
  const { timerLeft } = props;
  return <div>{timerLeft}</div>;
};

export default Timer;
