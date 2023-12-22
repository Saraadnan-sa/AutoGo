const mongoose = require('mongoose')
const {Schema} = mongoose; 

const billingSchema = new Schema 
({
    renter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'renter'
    }, 

    rentee: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'rentee'
    }, 

    driver: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'driver'
    },

    bill_driver: {
        type: Number, 
    }, 

    bill_renter: {
        type: Number, 
    },

    paymentStatus: {
        type: String, 
        required: true
    }, 
})

module.exports = mongoose.model('billing', billingSchema); 