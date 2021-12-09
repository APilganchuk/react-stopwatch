import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (timerOn) {
      intervalId = setInterval(() => {
        setTime((pervTime) => pervTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timerOn]);

  return (
    <div className="App">
      <Display time={time} />
      <Buttons setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn} />
    </div>
  );
}

export default App;
