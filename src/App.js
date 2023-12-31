import Signup from './component/Signup';
import ListingsPage from './Pages/ListingsPage';
import SingleCarPage from './Pages/SingleCarPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import NotFoundPage from './Pages/PageNotFound';
import LoginPage from './Pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RenterPage from './Pages/RenterPage';
import MyBookingsPage from './Pages/MyBookingsPage';
import RenterCarsPage from './Pages/RenterCarsPage';

function App() {
	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route path='/signup' exact element={<Signup />} />
				<Route path='/login' exact element={<LoginPage />} />
				<Route path='/availableCars' exact element={<ListingsPage />} />
				<Route path='/renterCars' exact element={<RenterCarsPage />} />
				<Route path='/myBookings' exact element={<MyBookingsPage />} />
				<Route path='/aboutUs' exact element={<AboutUs />} />
				<Route path='/vehicle/:id' exact element={<SingleCarPage />} />
				<Route path='/renter/:id' exact element={< RenterPage />} />
				<Route path='/' exact element={<LoginPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}
export default App;