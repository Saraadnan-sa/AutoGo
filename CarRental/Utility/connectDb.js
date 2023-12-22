const mongoose = require('mongoose')

const connectDb = async() => {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect("mongodb+srv://MuazINoteBook:INoteBook@cluster0.cykrlhc.mongodb.net/")
    console.log("Mongo connected");
}

module.exports = connectDb