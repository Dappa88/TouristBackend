const  mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
     email: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },

   

    password: {
        type: String,
        require: true
    },
    // cf_password: {
    //     type: String,
    //     require: true
    // }
}, {timestamps: true})


const Users = mongoose.model("Users", userSchema)

module.exports = Users
