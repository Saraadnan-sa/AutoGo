import React, { useEffect, useState } from "react";
import fetchData from '../utility/fetchData';
import CarCard from "./CarCard";
import Spinner from "./Spinner";

const CarListings = () => {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filters, setFilters] = useState({
		carName: "",
		hasDriver: null, // null means no filter applied
		withPetrol: null, // null means no filter applied
		// Add more filters as needed
	});

	useEffect(() => {
		const fetchCars = async () => {
			setLoading(true);

			try {
				let response = await fetchData('/vehicle/getListings', {
					method: 'GET',
				});

				response = await response.json();

				// Apply client-side filtering based on filters state
				const filteredCars = response.filter((car) => {
					const nameMatch = car.name.toLowerCase().includes(filters.carName.toLowerCase());
					const driverMatch = filters.hasDriver === null || car.driver === filters.hasDriver;
					const petrolMatch = filters.withPetrol === null || car.withPetrol === filters.withPetrol;

					return nameMatch && driverMatch && petrolMatch;
				});

				setCars(filteredCars);
			} catch (error) {
				console.error('Error fetching cars:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCars();
	}, [filters]);

	const handleFilterChange = (filterName, value) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[filterName]: value,
		}));
	};

	return (
		<div>
			<div className="d-flex" style={{ width: '100vw', justifyContent: 'center' }}>
				<div className="col-md-4 mb-3">
					<label className="form-label">
						Car Name:
						<input
							placeholder="Search by Name"
							type="text"
							className="form-control"
							value={filters.carName}
							onChange={(e) => handleFilterChange("carName", e.target.value)}
						/>
					</label>
				</div>

				<div className="col-md-4 mb-3">
					<label className="form-label">
						Availability of Driver:
						<select
							className="form-select"
							value={filters.hasDriver === null ? "" : filters.hasDriver}
							onChange={(e) =>
								handleFilterChange(
									"hasDriver",
									e.target.value === "" ? null : e.target.value === "true"
								)
							}
						>
							<option value="">All</option>
							<option value="true">With Driver</option>
							<option value="false">Without Driver</option>
						</select>
					</label>
				</div>

				<div className="col-md-4 mb-3">
					<label className="form-label">
						With Petrol:
						<select
							className="form-select"
							value={filters.withPetrol === null ? "" : filters.withPetrol}
							onChange={(e) =>
								handleFilterChange(
									"withPetrol",
									e.target.value === "" ? null : e.target.value === "true"
								)
							}
						>
							<option value="">All</option>
							<option value="true">With Petrol</option>
							<option value="false">Without Petrol</option>
						</select>
					</label>
				</div>
			</div>
			{
				loading ? (
					// Display a spinner while loading
					<Spinner />
				) : (
					// Display car cards when not loading
					<>
						<h3 style={{marginLeft: '30px', color: 'white'}}>Number of results: { cars.length }</h3>
						{cars.map((car) => (
							<CarCard
								key={car._id}
								id={car._id}
								image={car.image}
								carName={car.name}
								mileage={car.mileage}
								rate={car.rentperhour}
								withPetrol={car.withPetrol}
								driver={car.driver}
							/>
						))}
					</>
				)
			}
		</div>
	)
};

export default CarListings;
