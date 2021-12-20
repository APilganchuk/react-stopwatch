import React from "react";
import { debounceTime } from "rxjs";

export default function Buttons({ setTime, timerOn, setTimerOn }) {
  const changeTimerStatus = (timerStatus) => {
    setTimerOn(timerStatus);
  };

  const start = () => {
    changeTimerStatus(true);
  };

  const stop = () => {
    changeTimerStatus(false);
    setTime(0);
  };

  const wait = () => {
    debounceTime(changeTimerStatus(false), 300);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div>
      {!timerOn ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}

      <button onDoubleClick={wait}>Wait</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
