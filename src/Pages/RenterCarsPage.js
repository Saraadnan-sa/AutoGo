import React from 'react'
import RenterCars from '../component/RenterCars'
import Navbar from '../component/Navbar'
import AddModal from '../component/AddModal'

const RenterCarsPage = () => {
	return (
		<>
			<Navbar />
			<h2 className='text-center my-3' style={{ textShadow: '4px 4px 6px #333333' }}>My Listings</h2>
			<div className='d-flex justify-content-center my-2'><AddModal /></div>
			<RenterCars />
		</>
	)
}

export default RenterCarsPage