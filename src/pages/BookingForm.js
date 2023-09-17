import React, { useState } from "react";
import styles from "../styles/BookingForm.module.css";
const BookingForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [NumberOfGuests, setNumberOfGuests] = useState("");
  const [enteredOccasion, setEnteredOccasion] = useState("");

  const minimumDate = new Date().toISOString().split('T')[0];
  const minNumberOfGuests = 1;
  const maxNumberOfGuests = 10;

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    props.dispatchOnDateChange(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };
  const guestsChangeHandler = (event) => {
    setNumberOfGuests(event.target.value);
  };
  const occasionChangeHandler = (event) => {
    setEnteredOccasion(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.submitData({ enteredDate, enteredTime, NumberOfGuests, enteredOccasion });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="booking-date" label="Date">Date </label>
          <input
            id="booking-date"
            name="booking-date" 
            type="date"
            min={minimumDate}
            value={enteredDate}
            required={true}
            onChange={dateChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="book_time" label="Time">Time</label>
          <select
            id="book_time"
            name="book_time"
            value={enteredTime}
            required={true}
            onChange={timeChangeHandler}
          >
            <option>Select a Time</option>
            {props.availableTimes.map((availableTimes) => {
              return <option key={availableTimes}>{availableTimes} </option>;
            })}
          </select>
        </div>

        <div>
          <label htmlFor="book_guests" label="Number Of Guests">Number Of Guests</label>
          <input
            id="book_guests"
            name="book_guests"
            type="number"
            min={minNumberOfGuests}
            max={maxNumberOfGuests}
            value={NumberOfGuests}
            required={true}
            onChange={guestsChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="book_occasion" label="Occasion">Occasion</label>
          <select
            id="book_occasion"
            name="book_occasion"
            key={enteredOccasion}
            value={enteredOccasion}
            onChange={occasionChangeHandler}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Make Your reservation" className={styles.btn}/>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
