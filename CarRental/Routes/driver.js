const express = require('express')
const router = express.Router(); 
const Driver = require('../Models/Driver')
const {body, validationResult} = require('express-validator')

router.post('/signup', [
    body('email').isEmail(),
    body('name').isLength({ min: 2 }),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether the driver with same email exists already 
    try {

        let driver = await Driver.findOne({ email: req.body.email });
        if (driver) {
            return res.status(400).send("Email already exists");
        }
        
        // creating a hashed password for data security (hashing is done to encrypt a password)

        // first creating a salt (salt is something that is added to the password for further security purpose)

        const salt = await bcrypt.genSalt(10); // 10 here is default thing 
        const securedPassword = bcrypt.hash(req.body.password, salt);         

        driver = await Driver.create
            ({
                name: req.body.name,
                password: (await securedPassword).toString(),
                email: req.body.email, 
                address: req.body.address, 
                phoneNumber: req.body.number, 
                cnic: req.body.cnic, 
                age: req.body.age, 
                type_driver: req.body.type_driver, 
                perHourRate: req.body.perHourRate
            })
        
        const data = {
            driver: {
                id: driver.id
            }
        }

        req.driver = 
        {
            id: driver.id
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

// verifying a driver: post "/api/auth/login"

router.post('/login', [
    body('email').isEmail()
], async(req, res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body; 

    try{
        let driver = await Driver.findOne({email}); 
        if(!driver)
        {
            return res.status(400).send("Please enter correct credentials"); 
        }

        // comparing passwords (hashed)

        const passwordCompare = await bcrypt.compare(password, driver.password); 

        if(!passwordCompare)
        {
            return res.status(400).send("Please enter correct credentials");
        }

        const data = {
            driver: {
                id: driver.id
            }
        }

        req.driver = 
        {
            id: driver.id
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
