const express = require('express');
const Vehicle = require('../Models/Vehicle');
const Booked = require('../Models/Booked');
const router = express.Router();

router.get('/getListings', async (req, res) => {
	const BookedCars = await Booked.find();
	const ids = BookedCars.map((car) => car._id);
	const listings = await Vehicle.find({_id: {$nin: ids}});
	const availableCars = listings.filter((car) => !ids.includes(car._id));
	res.json(availableCars);
})

router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const vehicle = await Vehicle.findById(id);
		return res.json(vehicle);
	}
	catch (error) {
		return res.status(500).send({ error: error });
	}
})

module.exports = router; 