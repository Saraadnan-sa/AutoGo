
import React, { useEffect, useState } from 'react';
import './billing.css';
import fetchData from '../utility/fetchData';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Billing = (props) => {
	const navigate = useNavigate();
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const vehicle = props.vehicle;
	const [petrolCost, setPetrolCost] = useState(0);
	const [driverFee, setDriverFee] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		const calculateTotalAmount = () => {
			const rentalDuration = calculateRentalDuration();
			let calculatedTotalAmount = vehicle.rentperhour * rentalDuration;

			if (vehicle.withPetrol) {
				const calculatedPetrolCost = (20 / 100) * vehicle.rentperhour * rentalDuration;
				calculatedTotalAmount += calculatedPetrolCost;
				setPetrolCost(calculatedPetrolCost);
			}

			if (vehicle.driver) {
				const calculatedDriverFee = (30 / 100) * vehicle.rentperhour * rentalDuration;
				calculatedTotalAmount += calculatedDriverFee;
				setDriverFee(calculatedDriverFee);
			}

			setTotalAmount(calculatedTotalAmount);

			return calculatedTotalAmount;
		};

		calculateTotalAmount();
	}, [startDate, endDate, vehicle]);

	const calculateRentalDuration = () => {
		if (startDate && endDate) {
			const start = new Date(startDate);
			const end = new Date(endDate);
			const timeDifference = Math.abs(end - start);
			const rentalDuration = Math.ceil(timeDifference / (1000 * 60 * 60)); // Convert milliseconds to hours
			return rentalDuration / 10;
		}
		return 0;
	};

	const handlePayment = async () => {
		const token = localStorage.getItem('token');
		let response = await fetchData(`/rentee/profile`, {
			method: 'GET', headers: {
				token: token
			}
		});
		response = await response.json();
		const rentee = response._id;
		let response_ = await fetchData('/billing/createBill', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				renter: props.ownerId,
				rentee: rentee,
				bill_renter: totalAmount - driverFee,
				bill_driver: driverFee,
				paymentStatus: 'Partial Done'
			})
		});
		console.log(response_);

		if (response_.ok) {
			response_ = await response_.json();
			console.log(response_);

			let bookResponse = await fetchData('/booked/addbooking', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					car: vehicle._id,
					renter: props.ownerId,
					rentee: rentee,
					startDate: startDate,
					endDate: endDate,
					bill: response_._id
				})
			});
			console.log(bookResponse);

			if (bookResponse.ok) {
				bookResponse = await bookResponse.json()
				console.log(bookResponse);
				toast.success('Car Booked', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				navigate('/myBookings', { replace: 'true' })
			}
		}
	}


	return (
		<div className="bill">
			<h2>Billing Information</h2>

			{/* Rental Details */}
			<div className="duration">
				<label>
					Start Date:
					<input type="date" value={startDate} onChange={(e) => {
						if (new Date(e.target.value) > Date.now())
							setStartDate(e.target.value)
						else {
							toast.error('Start date must be greater than today date', {
								position: toast.POSITION.TOP_RIGHT,
								autoClose: 3000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							});
						}
					}} />
				</label>

				<label style={{ marginLeft: '10px' }}>
					End Date:
					<input type="date" value={endDate} onChange={(e) => {
						if (new Date(e.target.value) > new Date(startDate))
							setEndDate(e.target.value)
						else {
							toast.error('End date must be greater than start date', {
								position: toast.POSITION.TOP_RIGHT,
								autoClose: 3000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							});
						}
					}} />
				</label>
			</div>

			{/* Rental Options */}
			<div>
				<p>
					Include Petrol: {vehicle.withPetrol ? 'Yes' : 'No'}
				</p>

				<p>
					Include Driver: {vehicle.driver ? 'Yes' : 'No'}
				</p>
			</div>

			{/* Itemized Charges */}
			<div>
				<h3>Itemized Charges</h3>
				<p>Base Rental Fee: PKR { vehicle.rentperhour* calculateRentalDuration()}</p>
				{vehicle.withPetrol && <p>Petrol Cost: PKR {petrolCost}</p>}
				{vehicle.driver && <p>Driver Fee: PKR {driverFee}</p>}
				<p>Total Amount Payable: PKR {totalAmount}</p>
			</div>

			{/* Payment Section */}
			<div>
				<h3>Payment</h3>
				{/* Payment form fields go here */}
				<button onClick={handlePayment}>Pay Now</button>
			</div>
		</div>
	);
};

export default Billing;