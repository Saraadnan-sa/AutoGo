import React from 'react'
<<<<<<< HEAD
// import navbar from './component/navbar'
// import SignupForm from './component/signup';
 import main from './component/main'
// import Cards_rentee from './component/rentee_cards';
function App() {
	return (
		<div>
		<main/> 

		</div>
=======
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import CarListings from './component/CarListings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/signup' element={<Signup />} />
				<Route path='/availableCars' element={<CarListings />} />
				<Route path='/' element={<h1>Hello</h1>}/>
			</Routes>
		</Router>
>>>>>>> origin/main
	)
}
export default App;