import React from 'react'
import Navbar from '../component/Navbar'
import Billing from '../component/Billing'
import { useLocation } from 'react-router-dom'

const BillPage = (props) => {
	const location = useLocation()
	console.log(location.state); 
	return (
		<>
			<Navbar />
			<Billing vehicle = {location.state.vehicle} ownerId = {location.state.ownerId}/>
		</>
	)
}

export default BillPage