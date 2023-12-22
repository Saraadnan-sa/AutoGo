const mongoose = require('mongoose')
const {Schema} = mongoose

const bookedSchema = new Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'listing'
    },

    renter:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'renter'
    },

    rentee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rentee'
    }, 

    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'driver'
    }

})

module.exports = mongoose.model('booked', bookedSchema)