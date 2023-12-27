import React, { useEffect } from "react";
import fetchData from '../utility/fetchData';
import CarCard from "./CarCard";
import { useState } from "react";

const CarListings = () => {
	const [cars, setCars] = useState([]);
	useEffect(() => {
		const response = fetchData('/listing/getListings', {
			method: 'GET'
		})
		setCars(response);
	}, []);

	return (
		<div>
			{cars.map((car) => { return <CarCard id={car._id} image={car.image} carName={car.name} mileage={car.mileage} rate={car.rentperhour} /> })}
		</div>
	);
};

export default CarListings;
