import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import fetchData from '../utility/fetchData';
import CarCard from './CarCard';


const RenterCars = (props) => {
	const [cars, setCars] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchCars = async () => {
			const token = localStorage.getItem('token');
			const userType = localStorage.getItem('user');

			if (!userType === 'renter' || !token) {
				navigate('/login', { replace: true })
				toast.error('Login as renter to continue', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 3000, // Close after 3 seconds
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return;
			}
			let response = await fetchData('/renter/getListingsRenter', {
				method: 'GET',
				headers:
				{
					token: token
				}
			})

			response = await response.json()
			setCars(response);
		}

		fetchCars();
	}, [localStorage.getItem('token')]);

	return (
		<>
			<h3 style={{ marginLeft: '30px', color: 'white' }}>Number of results: {cars.length}</h3>
			<div>
				{cars.map((car) => { return <CarCard id={car._id} image={car.image} carName={car.name} mileage={car.mileage} rate={car.rentperhour} /> })}
			</div>
		</>
	);
}

export default RenterCars