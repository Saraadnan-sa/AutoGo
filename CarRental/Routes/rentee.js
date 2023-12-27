const express = require('express');
const router = express.Router();
const Booked = require('../Models/Booked')
const Rentee = require('../Models/Rentee')
const bcrypt = require('bcryptjs'); 
const session = require('express-session')
const jwt = require('jsonwebtoken'); 
const JWT_SECRET = "car_rental"; 
const { body, validationResult } = require('express-validator');

router.use(session({secret: JWT_SECRET, saveUninitialized: false, resave: false})); 

router.post('/signup', [
    body('email').isEmail(),
    body('name').isLength({ min: 2 }),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with same email exists already 
    try {

        let rentee = await Rentee.findOne({ email: req.body.email });
        if (rentee) {
            return res.status(400).send("Email already exists");
        }
        
        // creating a hashed password for data security (hashing is done to encrypt a password)

        // first creating a salt (salt is something that is added to the password for further security purpose)

        const salt = await bcrypt.genSalt(10); // 10 here is default thing 
        const securedPassword = bcrypt.hash(req.body.password, salt);         

        rentee = await Rentee.create
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
            rentee: {
                id: rentee.id
            }
        }

        const token = jwt.sign(data, JWT_SECRET, {expiresIn: '1h'}); 
        req.body['token'] = token; 
        res.json({token});
    }
    catch(error)
    {
        res.status(500).send(error.message); 
    }

})

// verifying a user: post "/api/auth/login"

router.post('/login', [
    body('email').isEmail()
], async(req, res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body; 

    try{
        let rentee = await Rentee.findOne({email}); 
        if(!rentee)
        {
            return res.status(400).send("Please enter correct credentials"); 
        }

        // comparing passwords (hashed)

        const passwordCompare = await bcrypt.compare(password, Rentee.password); 

        if(!passwordCompare)
        {
            return res.status(400).send("Please enter correct credentials");
        }

        const data = {
            rentee: {
                id: rentee.id
            }
        }

        const token = jwt.sign(data, JWT_SECRET, {expiresIn: '1h'}); 
        req.body['token'] = token; 
        res.json({token});
    }
    catch(error)
    {
        res.status(500).send("Internal error occured"); 
    }
})

router.get('/fetchBookings', async(req, res)=> 
{
	const id = req.rentee.id; 
    const bookings = await Booked.find({rentee: id}); 
    res.json(bookings)
})

module.exports = router; 