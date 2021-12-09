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

  return (
    <div>
      {!timerOn ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}

      <button onClick={wait}>Wait</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}
