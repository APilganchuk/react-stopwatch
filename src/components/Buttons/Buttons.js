import React from "react";

export default function Buttons({ setTime, timerOn, setTimerOn }) {
  const changeTimerStatus = (timerStatus) => {
    setTimerOn(timerStatus);
  };

  return (
    <div>
      {!timerOn ? (
        <button onClick={() => changeTimerStatus(true)}>Start</button>
      ) : (
        <button onClick={() => changeTimerStatus(false)}>Stop</button>
      )}

      <button onClick={() => changeTimerStatus(true)}>Wait</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}
