import React from "react";
import TimeUnit from "./TimeUnit";

const Timer = () => {
  const currentYear = new Date().getFullYear();

  const launchDay = new Date(`February 1 ${currentYear + 1} 00:00:00`);

  const currentTime = new Date();

  const diff = launchDay - currentTime;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;

  const seconds = Math.floor(diff / 1000) % 60;

  return (
    <div className="timer-container">
      <TimeUnit time={days} unit={"D A Y S"}></TimeUnit>
      <TimeUnit time={hours} unit={"H O U R S"}></TimeUnit>
      <TimeUnit time={minutes} unit={"M I N U T E S"}></TimeUnit>
      <TimeUnit time={seconds} unit={"S E C O N D S"}></TimeUnit>
    </div>
  );
};

export default Timer;
