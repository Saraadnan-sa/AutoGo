const express = require('express')
const Billing = require('../Models/Billing')
const router = express.Router();

router.post('/createBill', async (req, res) => {
	try {
		console.log(req.body);
		const { renter, rentee, driver, bill_driver, bill_renter, paymentStatus } = req.body;
		const bill = await Billing.create({
			renter, rentee, driver, bill_driver, bill_renter, paymentStatus
		});
		res.json(bill);
	}
	catch (error) {
		res.status(500).send({ error: error })
	}
})

// router.put('/updateBill/:id', async (req, res) => {

// 	try {
// 		const { id } = req.params;
// 		const { paymentStaus } = req.body;
// 		const updatedBill = await Billing.findByIdAndUpdate(id, { paymentStaus })
// 		res.json(updatedBill);
// 	}

// 	catch (error) {
// 		res.status(500).json({ error: error.message })
// 	}

// })

router.get('/getBill/:id', async (req, res) => {

	const { id } = req.params;
	try {
		const bill = await Billing.findById(id);
		res.json(bill);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
})

router.get('/getBillsRentee/:id', async (req, res) => {

	const { id } = req.params;

	try {
		const bills = await Billing.find({ rentee: id });
		res.json(bills);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.get('/getBillsRenter/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const bills = await Billing.find({ renter: id });
		res.json(bills);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.get('/getBillsDriver/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const bills = await Billing.find({ driver: id });
		res.json(bills);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router; 