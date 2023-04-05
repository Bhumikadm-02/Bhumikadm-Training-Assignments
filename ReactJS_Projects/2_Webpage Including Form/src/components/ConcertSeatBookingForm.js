import React, { useState } from "react";

function ConcertSeatBookingForm() {
  const [name, setName] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", name, selectedSeat, selectedDate);
  };

  return (
    <div class="concert">
        <h1>Concert Seat Booking</h1>
        <br></br>
    <form onSubmit={handleSubmit} class="concert-form">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Select a seat:
        <br />
        <input
          type="radio"
          name="seat"
          value="A1"
          checked={selectedSeat === "A1"}
          onChange={(e) => setSelectedSeat(e.target.value)}
        />{" "}
        A1
        <br />
        <input
          type="radio"
          name="seat"
          value="A2"
          checked={selectedSeat === "A2"}
          onChange={(e) => setSelectedSeat(e.target.value)}
        />{" "}
        A2
        <br />
        <input
          type="radio"
          name="seat"
          value="A3"
          checked={selectedSeat === "A3"}
          onChange={(e) => setSelectedSeat(e.target.value)}
        />{" "}
        A3
      </label>
      <br />
      <label>
        Select a date:
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </label>
      <br />
      <button type="submit">Book Seat</button>
    </form>
    </div>
  );
}

export default ConcertSeatBookingForm;
