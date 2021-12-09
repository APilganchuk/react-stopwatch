import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";

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

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  return (
    <div className="App">
      <div>
        <span>{formatTime()}</span>
      </div>
      <Buttons setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn} />
    </div>
  );
}

export default App;
