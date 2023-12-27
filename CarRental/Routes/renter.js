const express = require('express')
const Vehicle = require('../Models/Vehicle')
const Renter = require('../Models/Renter')
const Booked = require('../Models/Booked')
const verifyToken = require('../Middleware/verifyToken')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router(); 

const JWT_SECRET = "car_rental"; 

router.post('/signup', [
    body('email').isEmail(),
    body('name').isLength({ min: 2 }),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether the owner with same email exists already 
    try {

        let renter = await Renter.findOne({ email: req.body.email });
        if (renter) {
            return res.status(400).send("Email already exists");
        }
        

        const salt = await bcrypt.genSalt(10); // 10 here is default thing 
        const securedPassword = bcrypt.hash(req.body.password, salt);         

        renter = await Renter.create
            ({
                name: req.body.name,
                password: (await securedPassword).toString(),
                email: req.body.email, 
                address: req.body.address, 
                phoneNumber: req.body.phoneNumber, 
                cnic: req.body.cnic, 
                age: req.body.age
            })
        
        const data = {
            renter: {
                id: renter.id
            }
        }

        req.renter = 
        {
            id: renter.id
        }

		console.log(req.renter); 

        const token = jwt.sign(data, JWT_SECRET, {expiresIn: '1h'}); 
        req.headers['token'] = token; 
        res.json({token});
    }
    catch(error)
    {
        res.status(500).send(error.message); 
    }

})

// verifying a owner: post "/api/auth/login"

router.post('/login', [
    body('email').isEmail()
], async(req, res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body; 

    try{
        let renter = await Renter.findOne({email}); 
        if(!renter)
        {
            return res.status(400).send("Please enter correct credentials"); 
        }

        // comparing passwords (hashed)

        const passwordCompare = await bcrypt.compare(password, renter.password); 

        if(!passwordCompare)
        {
            return res.status(400).send("Please enter correct credentials");
        }

        const data = {
            renter: {
                id: renter.id
            }
        }

        req.renter = 
        {
            id: renter.id
        }

		console.log(req.renter.id); 

        const token = jwt.sign(data, JWT_SECRET, {expiresIn: '1h'}); 
        req.headers['token'] = token; 
		console.log(req.headers); 
        res.json({token});
    }
    catch(error)
    {
        res.status(500).send("Internal error occured"); 
    }
})

router.use(verifyToken); 

router.get('/getBookings', async(req, res)=> 
{
    const id = req.renter.id; 
    const bookings = await Booked.find({renter: id})
    res.json(bookings)
})

router.get('/getListingsRenter', async(req, res)=>{ //particular user
	console.log(req.renter); 
    const listings = await Vehicle.find({owner: req.renter.id});
    res.json(listings);
})

router.put('/updatelisting/:id', async(req, res)=>{
    const {name, availability, model, make, engineCapacity, mileage, region, rent, driver, car_number, duration} = req.body; 
    const {id} = req.params; 
    const listing = await Vehicle.findById({id: id});
    await Vehicle.updateOne({
        name, availability, model, make, engineCapacity, mileage, region, rent, driver, car_number, duration
    })

    res.json(listing);
})

router.post('/addlisting', async(req, res)=>{
    const {name, availability, model, make, engineCapacity, mileage, region, rentperhour, driver, car_number, duration, withPetrol} = req.body; 

    const renter = req.renter.id; 

    const listing = await Vehicle.create({
        name, renter, availability, model, make, engineCapacity, mileage, region, rentperhour, driver, car_number, duration, withPetrol
    })

    res.json(listing);
})

router.delete('/deleteListing/:id', async(req, res)=>{
    const id = req.params.id; 
    await Vehicle.findByIdAndDelete(id); 
})

module.exports = router; 