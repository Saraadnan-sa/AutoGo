import React from "react";
import "./booking_car.css";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../utility/fetchData";

const BookingVehicleDetail = (props) => {
	const [vehicle, setVehicle] = useState([])

	useEffect(() => {
		const response = fetchData(`/listing/${props.id}`, { method: 'GET' })
		setVehicle(response);
	}, [props])

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
