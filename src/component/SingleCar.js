import React, { useState, useEffect } from "react";
import "./booking_car.css";
import fetchData from "../utility/fetchData";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const SingleCar = (props) => {
	const [vehicle, setVehicle] = useState([]);
	const [loading, setLoading] = useState(false);
	const [owner, setOwner] = useState('');

	useEffect(() => {
		const fetchVehicle = async () => {
			setLoading(true);
			try {
				let response = await fetchData(`/vehicle/${props.id}`, { method: 'GET' });
				response = await response.json();

				let owner = await fetchData(`/renter/renter/${response.renter}`, { method: 'GET' });
				owner = await owner.json();
				console.log(owner)
				setOwner(owner.name);
				setVehicle(response);
			} catch (error) {
				console.error('Error fetching vehicle:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchVehicle();
	}, [props.id, props.renter]);

	return (
		<div className="vehicle-container" style={{ width: '70vw' }}>
			{loading ? (
				<Spinner />
			) : (
				<div className="row">
					{/* Left side content */}
					<div className="col-md-6 ">
						<h1>{vehicle.name}</h1>
						<div className="image_vehicle"><img src={vehicle.image} alt="vehicle" /></div>
						<p>Owner: <Link to={`/renter/${vehicle.renter}`}> {owner.toUpperCase()}</Link></p>
						<p>
							Availability: <p className={vehicle.availability ? "availability" : "unavailability"}> {vehicle.availability ? "Available" : "Not Available"}</p>
						</p>
						<p>Model: {vehicle.model}</p>
						<p>Make: {vehicle.make}</p>
						<p>Engine Capacity: {vehicle.engineCapacity}cc</p>
					</div>

					{/* Right side content */}
					<div className="col-md-6 ">
						<p>Mileage: {vehicle.mileage}</p>
						<p>Region: {vehicle.region}</p>
						<p>Rent: {vehicle.rentperhour} PKR</p>
						<p>Driver: <p className={vehicle.driver ? "availability" : "unavailability"}> {vehicle.driver ? "Available" : "Not Available"}</p></p>
						<p>Car Number: {vehicle.car_number}</p>
						<p>Duration: {vehicle.duration}</p>
						<hr />

						{localStorage.getItem('user') == 'rentee' ? <p>
							<button type="button" className="btn btn-success button_space">
								Book
							</button>
						</p> : <></>}
						{/* <p>
							<button type="button" className="btn btn-secondary button_space">
								Generate receipt
							</button>
						</p> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleCar;
