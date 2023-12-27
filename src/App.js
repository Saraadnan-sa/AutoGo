import React from 'react'
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
	)
}

export default App;