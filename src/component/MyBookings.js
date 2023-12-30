import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import fetchData from '../utility/fetchData';
import CarCard from "./CarCard";
import Spinner from "./Spinner";

const MyBookings = () => {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate(); 


	useEffect(() => {
		const fetchCars = async () => {
			setLoading(true);
			const userType = localStorage.getItem('user'); 
			const token = localStorage.getItem('token'); 
			console.log(userType, token); 
			if(!userType || !token)
			{
				navigate('/login', { replace: true })
				toast.error('Invalid email or password', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 3000, // Close after 5 seconds
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return; 
			}

			try {
				let response = await fetchData(`/${userType}/getBookings`, {
					method: 'GET',
					headers: {
						token: token
					}
				});

				response = await response.json();
				console.log(response); 
				setCars(response)
			} catch (error) {
				console.error('Error fetching cars:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCars();
	}, []);


	return (

		<>
			{
				loading ? (
					// Display a spinner while loading
					<Spinner />
				) : (
					// Display car cards when not loading
					<>
						<h3 style={{ marginLeft: '30px', color: 'white' }}>Number of Bookings: {cars.length}</h3>
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
			}</>

	)
};

export default MyBookings;
