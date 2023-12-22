import React from "react";
import "./booking_car.css";

const BookingVehicleDetail = () => {
  const vehicle = {
    name: "Car Model XYZ",
    owner: "Owner Name",
    availability: false,
    model: 2022,
    make: "Toyota",
    engineCapacity: 2000,
    mileage: "20 km/l",
    region: "City A",
    rent: "$50/day",
    driver: true,
    car_number: "ABC123",
    duration: "Weekly",
  };

  return (
    <div className="vehicle-container">
      <h1>{vehicle.name}</h1>
      <div class="image_vehicle"></div>
      <p>Owner: {vehicle.owner}</p>
      <p className={vehicle.availability ? "availability" : "unavailability"}>
        {vehicle.availability ? "Available" : "Not Available"}
      </p>
      <p>Model: {vehicle.model}</p>
      <p>Make: {vehicle.make}</p>
      <p>Engine Capacity: {vehicle.engineCapacity}</p>
      <p>Mileage: {vehicle.mileage}</p>
      <p>Region: {vehicle.region}</p>
      <p>Rent: {vehicle.rent}</p>
      <p>Driver: {vehicle.driver ? "Available" : "Not Available"}</p>
      <p>Car Number: {vehicle.car_number}</p>
      <p>Duration: {vehicle.duration}</p>
      <hr />
     

      <p>
        <button type="button" className="btn btn-secondary button_space">
          Book
        </button>
      </p>
      <p>
        <button type="button" className="btn btn-secondary button_space">
          Generate receipt
        </button>
      </p>
    </div>
  );
};

export default BookingVehicleDetail;
