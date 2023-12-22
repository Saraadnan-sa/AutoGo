const express = require('express');
const Vehicle = require('../Models/Vehicle');
const Booked = require('../Models/Booked');
const router = express.Router();

router.get('/getListings', async (req, res) => {
	const BookedCars = await Booked.find();
	const ids = BookedCars.map((car) => car._id);
	const listings = await Vehicle.find();
	const availableCars = listings.filter((car) => !ids.includes(car._id));
	res.json(availableCars);
})

router.get('/:id', async (req, res) => {
	const id = req.params; 
	const vehicle = await Vehicle.findById(id); 
	res.json(vehicle); 
})

module.exports = router; 