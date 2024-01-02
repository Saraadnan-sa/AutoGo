const express = require('express')
const Booked = require('../Models/Booked')
const router = express.Router(); 

router.post('/addbooking', async(req, res)=>{
    const {car, renter, rentee, driver, startDate, endDate, bill} = req.body; 

    const booking = await Booked.create({
        car, renter, rentee, driver, startDate, endDate, bill
    })
    res.json(booking);
})

router.delete('/removebooking/:id', async(req, res)=>{
    const {id} = req.params; 
    const booking = await Booked.findByIdAndDelete(id)
    res.json(booking);
})


module.exports = router; 