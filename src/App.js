import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import Socials from "./components/Socials";
import "./styles/app.scss";
function App() {
  const [timeLeft, setTimeLeft] = useState(Timer());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(Timer());
    }, 1000);
    const timerComponents = [];
    //console.log(timerComponents);

    Object.keys(timeLeft).forEach((interval) => {
      //will loop through timeLeft, will push an element to timerComponents array if has value
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}
          {""}
        </span>
      );
    });
    return () => clearTimeout(timer);
  });

  return (
    <div className="wallpaper">
      <div className="App">
        <div className="header">
          <h2>W E ' R E</h2>
          <h2>L A U N C H I N G</h2>
          <h2>S O O N</h2>
        </div>
        <Timer></Timer>
        <Socials></Socials>
      </div>
      <div className="hills"></div>
    </div>
  );
}

export default App;
