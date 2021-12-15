import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (timerOn) {
          setTime((pervTime) => pervTime + 1);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [timerOn]);

  // useEffect(() => {
  //   let intervalId = null;
  //   if (timerOn) {
  //     intervalId = setInterval(() => {
  //       setTime((pervTime) => pervTime + 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(intervalId);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [timerOn]);

  return (
    <div className="App">
      <Display time={time} />
      <Buttons setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn} />
    </div>
  );
}

export default App;
