import React from 'react'
import Navbar from '../component/Navbar';
import MyBookings from '../component/MyBookings';

const MyBookingsPage = () => {
	return (
		<>
			<Navbar />
			<h2 className='text-center my-3' style={{textShadow: '4px 4px 6px #333333'}}>My Bookings</h2>
			<MyBookings />
		</>
	)
}

export default MyBookingsPage; 