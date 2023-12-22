const express = require('express')
const Booked = require('../Models/Booked')
const router = express.Router(); 

router.post('/addbooking', async(req, res)=>{
    const {car, renter, rentee, driver} = req.body; 

    const booking = await Booked.create({
        car, renter, rentee, driver
    })
    res.json(booking);
})

router.delete('/removebooking/:id', async(req, res)=>{
    const {id} = req.params; 
    const booking = await Booked.findByIdAndDelete(id)
    res.json(booking);
})

router.get('/fetchBooking', async(req, res)=> 
{
    const bookings = await Booked.find(); 
    res.json(Booked)
})

module.exports = router; 