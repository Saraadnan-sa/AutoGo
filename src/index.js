import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./component/navbar";
import Renter from "./component/renter";
import Rentee from "./component/rentee";
import Driver from "./component/driver";
import BookingVehicleDetail from "./component/booking_car";
import DriverDetails from "./component/driver_listing";
import VehicleDetail from "./component/renter_listings";
import LoginPage from "./component/login";
import SignupForm from "./component/signup";
import Billing from "./component/billing";
import RenterhomePage from "./component/renter_home";
import RenteehomePage from "./component/rentee_home";

import Header_driver from './component/driver_header'
import Cards_driver from './component/driver_cards'
//RENTER
import Header_renter from './component/renter_header'
import Cards_renter from './component/renter_card'
//RENTEE
import Header_rentee from './component/rentee_cards'
import Cards_rentee from './component/rentee_cards'
// CARS
import Header_cars from './component/header'
import Cards_car from './component/cards'

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    {/* <Renter /> */}
    {/* <Rentee/> */}
    <Driver/>
    {/* <VehicleDetail/> */}
    {/* <BookingVehicleDetail/> */}
        {/* <Billing/> */}
    {/* <LoginPage /> */}
    {/* <SignupForm/> */}
    {/* <DriverDetails/> */}
    {/* <RenteehomePage/> */}
    {/* <RenterhomePage/> */}
   
    {/* <Header_driver/> */}
{/* <Cards_driver/>  */}

{/* <Header_renter/>  */}
{/* <Cards_renter/> */}

{/* <Header_rentee/> */}
{/* <Cards_rentee/> */}

{/* <Header_cars/> */}
{/* <Cards_car/> */}
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
