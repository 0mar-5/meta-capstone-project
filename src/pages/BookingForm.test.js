import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe('Booking form date testing', () => {
    const today = new Date().toISOString().split('T')[0];

    test('Renders the BookingForm heading', async () => {
    render(<BookingForm
        availableTimes={props.availableTimes}
        dispatchOnDateChange={props.dispatchOnDateChange}
        submitData={props.submitData}
        /> );
        const dateInput = screen.getByLabelText("booking-date");
        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'booking-date');
        expect(dateInput).toHaveValue(today);

    });

 });





