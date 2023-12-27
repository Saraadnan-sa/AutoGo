import React, { useEffect } from "react";
import fetchData from '../utility/fetchData';
import CarCard from "./CarCard";
import { useState } from "react";
import Spinner from "./Spinner";

const CarListings = () => {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchCars = async () => {
			setLoading(true);

			try {
				const response = await fetchData('/vehicle/getListings', {
					method: 'GET',
				});

				console.log(response);
				setCars(response);
			} catch (error) {
				console.error('Error fetching cars:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCars();
	}, []);

	return (
		<div>
			{loading ? (
				// Display a spinner while loading
				<Spinner />
			) : (
				// Display car cards when not loading
				cars.map((car) => (
					<CarCard
						key={car._id}
						id={car._id}
						image={car.image}
						carName={car.name}
						mileage={car.mileage}
						rate={car.rentperhour}
					/>
				))
			)}
		</div>
	);
};

export default CarListings;
