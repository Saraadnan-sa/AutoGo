const mongoose = require('mongoose')
const { Schema } = mongoose

const bookedSchema = new Schema({
	car: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'vehicle'
	},

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

	startDate: {
		type: String,
		required: true
	},

	endDate: {
		type: String,
		required: true
	},

	bill: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'billing'
	},

	date: {
		type: Date,
		default: Date.now  // Set the default value to the current date and time
	}
})

module.exports = mongoose.model('booked', bookedSchema)