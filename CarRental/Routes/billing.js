const express = require('express')
const Billing = require('../Models/Billing')
const router = express.Router(); 

router.post('/createBill', async(req, res)=> {
    const {renter, rentee, driver, bill_driver, bill_renter, paymentStaus} = req.body; 
    const bill = await Billing.create({ 
        renter, rentee, driver, bill_driver, bill_renter, paymentStaus 
    }); 
    res.json(bill); 
})

router.put('/updateBill/:id', async(req, res)=> {

    try{
        const {id} = req.params; 
        const {paymentStaus} = req.body; 
        const updatedBill = await Billing.findByIdAndUpdate(id, {paymentStaus})
        res.json(updatedBill); 
    }

    catch(error)
    {
        res.status(500).json({error: error.message})
    }

})

router.get('/getBillsRentee', async (req, res) => {
    
    const { rentee_id } = req.body;

    try {
        const bills = await Billing.find({ rentee: rentee_id });
        res.json(bills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getBillsRenter', async (req, res) => {
    const { renter_id } = req.body;

    try {
        const bills = await Billing.find({ renter: renter_id });
        res.json(bills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getBillsRenter', async (req, res) => {
    const { renter_id } = req.body;

    try {
        const bills = await Billing.find({ renter: renter_id });
        res.json(bills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 