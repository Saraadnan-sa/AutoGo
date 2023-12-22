import React from 'react';
import "./booking_car.css"

const VehicleDetail = () => {
  const vehicle = {
    name: 'Car Model XYZ',
    availability: false,
    model: 2022,
    make: 'Toyota',
    engineCapacity: 2000,
    mileage: '20 km/l',
    region: 'City A',
    rent: '$50/day',
    driver: true,
    car_number: 'ABC123'
  };

  return (
    <div className="vehicle-container">
      <h1>{vehicle.name}</h1>
      <div class="image_vehicle">
      
      </div>
      <p className={vehicle.availability ? 'availability' : 'unavailability'}>
        {vehicle.availability ? 'Available' : 'Not Available'}
      </p>
      <p>Model: {vehicle.model}</p>
      <p>Make: {vehicle.make}</p>
      <p>Engine Capacity: {vehicle.engineCapacity}</p>
      <p>Mileage: {vehicle.mileage}</p>
      <p>Region: {vehicle.region}</p>
      <p>Rent: {vehicle.rent}</p>
      <p>Driver: {vehicle.driver ? 'Available' : 'Not Available'}</p>
      <p>Car Number: {vehicle.car_number}</p>
     
      <button type="button" class="btn btn-secondary button_space">Edit</button>
      <button type="button" class="btn btn-dark button_space">Remove</button>

    </div>
  );
};

export default VehicleDetail;
