import React, { useState, useRef } from "react";
/*import "./styles.css";*/

export default function CountdownTimer() {
  const [countdownDate, setCountdownDate] = useState("");
  const [countdownTime, setCountdownTime] = useState("");
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const intervalRef = useRef();

  const handleDateChange = (e) => {
    setCountdownDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setCountdownTime(e.target.value);
  };

  const handleSetClick = () => {
    const countdownDateTime = new Date(`${countdownDate}T${countdownTime}`).getTime();
    const now = new Date().getTime();
    setCountdownSeconds(Math.max(0, Math.floor((countdownDateTime - now) / 1000)));
    setTimerActive(true);
    intervalRef.current = setInterval(() => {
      setCountdownSeconds((prevCountdownSeconds) => {
        if (prevCountdownSeconds > 0) {
          return prevCountdownSeconds - 1;
        } else {
          clearInterval(intervalRef.current);
          setTimerActive(false);
          window.alert("Time's up!");
          return 0;
        }
      });
    }, 1000);
  };
  

  const handleResetClick = () => {
    clearInterval(intervalRef.current);
    setCountdownDate("");
    setCountdownTime("");
    setCountdownSeconds(0);
    setTimerActive(false);
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const formatCountdown = () => {
    const hours = Math.floor(countdownSeconds / 3600);
    const minutes = Math.floor((countdownSeconds % 3600) / 60);
    const seconds = countdownSeconds % 60;
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  };

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>

      <div class="boder-box">

        <div class="date-time">
          <label>Date </label>
          <input type="date" value={countdownDate} onChange={handleDateChange} /><br></br>
          <br></br><label>Time </label>
          <input type="time" value={countdownTime} onChange={handleTimeChange} /><br></br>
        </div>

        <div class="btn-set-reset"><br></br>
          <button onClick={handleSetClick} disabled={timerActive}>Set</button><br></br>
          <br></br><button onClick={handleResetClick}>Reset</button>
        </div>

        <div class="count">
          <p>{formatCountdown()}</p>
        </div>

      </div>
    </div>
  );
}