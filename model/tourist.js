const mongoose = require ("mongoose");

const touristSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true, "please enter your name!"]
    },

    email: {
        type: String,
        require:[true, "please enter email"],
        unique: true,
        trim: true
    },

    phoneNumber: {
        type: Number,
        require:[true, "please enter phone Number"],
        unique: true,
        trim: true
    },

    address: {
        type: String
    },

    state: {
        type: String
    },
    
    nextOfKins: {
        type: String
    },

    nextOfKinContacts: {
        type: Number,
        require: true
    }
}, {timestamps: true})


const Tourists = mongoose.model("Tourists", touristSchema)

module.exports = Tourists