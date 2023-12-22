import React from 'react'
import Navbar from './component/Navbar';
import Signup from './component/signup';
import CarListings from './component/CarListings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/signup' element={<Signup />} />
				<Route path='/availableCars' element={<CarListings />} />
			</Routes>
		</Router>
	)
}

export default App;