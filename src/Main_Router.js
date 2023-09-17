import React ,{useReducer} from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import MainSection from "./components/MainSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import OurStory from "./components/OurStory";
import { fetchAPI, submitAPI } from  "./components/Fake_API"
import ConfirmedBooking from "./components/confirmedBooking";
import NotFound from "./pages/NotFound";


const Main_Router = () => {

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
  };
  const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(('/ConfirmedBooking'));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header /> <Main />
            <MainSection />
            <Testimonials />
            <OurStory />
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/reservations"
        element={
          <>
            <Header />
            <BookingPage
              availableTimes={availableTimes}
              dispatchOnDateChange={dispatchOnDateChange}
              submitData={submitData}
            />
          </>
        }
      ></Route>
      <Route path="/ConfirmedBooking" element={<>
      <Header/> <ConfirmedBooking/> <Footer />
      </>}></Route>

      <Route path="/order-online" element={<>
      <Header/> <NotFound/>
      </>}></Route>
      <Route path="/About" element={<>
      <Header/> <OurStory />
      </>}></Route>
      <Route path="/menu" element={<>
      <Header/> <NotFound/>
      </>}></Route>

    </Routes>
  );
};

export default Main_Router;
