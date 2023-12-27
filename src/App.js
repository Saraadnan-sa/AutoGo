import React from 'react'
<<<<<<< HEAD
=======
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
>>>>>>> 736f07375e136e06e508453cbeb83585e12e4d7b
import Signup from './component/Signup';
import ListingsPage from './Pages/ListingsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/signup' element={<Signup />} />
				<Route path='/availableCars' element={<ListingsPage/>} />
				<Route path='/' element={<h1>Hello</h1>}/>
			</Routes>
		</Router>
>>>>>>> origin/main
	)
}
export default App;