import React from "./Timer";

const TimeUnit = ({ unit, time, days, hours, minutes, seconds }) => {
  /*
  if (seconds === 1) {
    console.log("minute has passed");
  } else if (minutes === 1) {
    console.log("hour has passed");
  } else if (hours === 1) {
    console.log("days has passed");
  }
*/
  return (
    <div className="unit-container">
      <div className="unit-time">
        <div className="top-shade"></div>
        <div className="bottom-shade"></div>
        <h1>{time}</h1>
      </div>
      <h5>{unit}</h5>
    </div>
  );
};

export default TimeUnit;
