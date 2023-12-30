import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../component/Navbar';
import Renter from '../component/Renter';

const RenterPage = () => {

	const params = useParams();
	return (
		<>
			<Navbar />
			<Renter id={params.id} />
		</>
	)
}

export default RenterPage