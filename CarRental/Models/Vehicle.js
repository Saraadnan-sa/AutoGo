const mongoose = require('mongoose')
const {Schema} = mongoose

const vehicleSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 

	image: 
	{
		type: String, 
		required: true
	}, 
	
    renter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'renter'
    }, 

    availability: {
        type: Boolean, 
        required: true, 
    }, 

    model: {
        type: Number, 
        required: true
    }, 

    make: {
        type: String, 
        required: true
    }, 

    engineCapacity: {
        type: Number, 
        required: true
    }, 

    mileage: {
        type: String, 
        required: true
    }, 

    region: {
        type: String, 
        required: true
    },

    rentperhour: {
        type: String, 
        required: true
    },

    driver: {
        type: Boolean, 
        required: true
    }, 

    car_number: {
        type: String, 
        required: true
    }, 

    duration:{
        type: String,
        required: true
    }, 

    withPetrol: {
        type: Boolean, 
        required: true
    }
})

module.exports = mongoose.model('vehicle', vehicleSchema)