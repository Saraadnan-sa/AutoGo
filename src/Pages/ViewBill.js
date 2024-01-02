import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import fetchData from '../utility/fetchData';
import Navbar from '../component/Navbar';
import Spinner from '../component/Spinner';
import "../component/booking_car.css";


const ViewBill = () => {
	const { id } = useParams();
	const [bill, setBill] = useState([])
	const [renter, setRenter] = useState([])
	const [rentee, setRentee] = useState([])
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchBill = async () => {
			setLoading(true)
			let response = await fetchData(`/billing/getBill/${id}`, {
				method: 'GET'
			})

			if (response.ok) {
				response = await response.json();
				console.log(response)
				setBill(response);
			}
			else {
				return;
			}
			console.log(bill)
			let renterResponse = await fetchData(`/renter/renter/${response.renter}`, {
				method: 'GET'
			})

			if (renterResponse.ok) {
				renterResponse = await renterResponse.json();
				setRenter(renterResponse);
			}

			let renteeResponse = await fetchData(`/rentee/rentee/${response.rentee}`, {
				method: 'GET'
			})

			if (renteeResponse.ok) {
				renteeResponse = await renteeResponse.json();
				setRentee(renteeResponse);
			}
			setLoading(false)
		}

		fetchBill();
	}, [id])
	return (
		<>
			<Navbar />
			{loading ? <Spinner /> : <div className="vehicle-container" style={{ width: '70vw', marginTop: '40px' }}>
				<h2 className='text-center' color='white'>Bill Information</h2>
				<p>Rentee: {rentee.name}</p>
				<p>Renter: {renter.name}</p>
				<p>Renter Bill: {bill.bill_renter}</p>
				<p>Driver Bill: {bill.bill_driver}</p>
				<p>Total: {bill.bill_driver + bill.bill_renter}</p>
				<p>Payment Status: {bill.paymentStatus}</p>
			</div>}

		</>
	)
}

export default ViewBill