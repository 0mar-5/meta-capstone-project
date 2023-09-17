import React from "react";
import BookingForm from "../pages/BookingForm";
const BookingPage = (props) => {
  return (
    <BookingForm
    availableTimes={props.availableTimes}
    dispatchOnDateChange={props.dispatchOnDateChange}
    submitData={props.submitData}
    />
  );
};
export default BookingPage;
