const express = require('express')
const cors = require('cors')
const connectDB = require('./Utility/connectDb')
const renteeRouter = require('./Routes/rentee')
const vehicleRouter = require('./Routes/vehicle')
const renterRouter = require('./Routes/renter'); 
const billingRouter = require('./Routes/billing'); 
const driverRouter = require('./Routes/driver')

const app = express()
const PORT = 5000; 

connectDB()
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.json('Under development')
})

app.use('/rentee', renteeRouter)
app.use('/vehicle', vehicleRouter)
app.use('/renter', renterRouter)
app.use('/billing', billingRouter)
app.use('/driver', driverRouter)

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`); 
})