import React from "./Timer";

const TimeUnit = ({ unit, time }) => {
  return (
    <div className="unit-container">
      <div className="unit-time">
        <div className="top-shade "></div>
        <div className="bottom-shade"></div>
        <h1>{time}</h1>
      </div>
      <h5>{unit}</h5>
    </div>
  );
};

export default TimeUnit;
