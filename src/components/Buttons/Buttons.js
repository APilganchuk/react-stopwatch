import React from "react";

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

  const wait = (e) => {
    const isDoubleClick = (e) => e.detail === 2;
    if (isDoubleClick(e)) {
      changeTimerStatus(false);
    }
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

      <button onClick={wait}>Wait</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
