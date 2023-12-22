const mongoose = require('mongoose')
const {Schema} = mongoose

const renteeSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    address: {
        type: String, 
    }, 
    phoneNumber: {
        type: String, 
        required: true, 
        unique: true
    }, 
    cnic: {
        type: String, 
        required: true, 
        unique: true   
    }, 
    age: {
        type: Number, 
        required: true
    }

    //  to do - history of listings 
})

module.exports = mongoose.model('rentee', renteeSchema); 