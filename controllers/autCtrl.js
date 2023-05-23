
const bycrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const Users = require("../model/autent")
const sendEmail = require("../utilities/sendMail")


const generateAccessToken =(payload) =>{
    return jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn: "5m"})
}


const generateRefreshToken = (payload) =>{
    return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn: "5d"})
}

const generateActiveToken = (payload) =>{
    return jwt.sign(payload, process.env.ACTIVE_TOKEN, {expiresIn: "12h"} )
}
// jwt json web token
// active token: a user to verify there email b4 saving their detail
// access token:   the user hass access to the whole site
// refresh token:

const auth = {
    register: async (req, res) =>{
        try {

            const {name, email, password, cf_password } = req.body

            if(!name || !email || !password || !cf_password)

            return res.status(400).json({msg: "Please enter all fields"})

            if(password !== cf_password)
            return res.status(400).json({msg: "confirm password doesn't match"})

            const alreadyExist = await Users.findOne({email: email})
            if(alreadyExist) return res.status(400).json({msg: "This user already exist!"})

            const hashedPassword = await bycrypt.hash(password, 12)

            const newUser = new Users({name, email, password: hashedPassword })

            const accessToken = generateAccessToken({newUser})

            const refreshToken = generateRefreshToken({newUser})

            await newUser.save()

            // console.log(accessToken) 
            // console.log(refreshToken)

            return res.status(200).json ({msg: "Registration successful!", newUser, accessToken, refreshToken })


            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },

    login: async (req, res) =>{
        try {
            
            const {email, password} = req.body

            if(!email || !password)
            return res.status(400).json({msg: "Please enter all fields"})

            const users = await Users.findOne({email})

            if(!users) return res.status(400).json({msg: "No such user"})

            const isExist = await bycrypt.compare(password, users.password)

            if(!isExist) return res.status(400).json({msg: "Incorrect email or password"})

            const accessToken = generateAccessToken({users})
            const refreshToken =generateAccessToken({users})

            

            return res.status(200).json({
                msg: "Login successfull",
                // password will return an empty string
                users: {...users, password: " "},    
                accessToken,
                refreshToken
            })

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }

    },

    getAllUser: async (req, res) =>{
        try {
            const allusers = await Users.find()
            if(!allusers) return res.status(400).json({msg: "No user n this Databse"})

            return res.status(200).json(allusers)
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
            
        }
    },

    getAccessToken: async (req, res) =>{
        try {
            const rf_Token = req.cokies.refreshToken

            if(!rf_Token) return res.status(400).json ({msg: "Please login now"})

            jwt.verify(rf_Token, process.env.REFRESH-TOKEN, (err, user) =>{
                if(err) return res.status(400).json({msg: "please login now"})

                const accessToken = generateAccessToken({user})

            return res.status(200).json({accessToken})
            })            

            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    forgotPassword: async (req, res) => {
        try {

            const {email} = req.body

            const user = await Users.findOne({email})

            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const active_token = generateActiveToken({user})

            const url = `www.yourwebsite.com/user/reset/${active_token}`

            await sendEmail(email, url, res)

            console.log(email);

            // return res.status(200).json({msg: "Re-send the password, please check your email."})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    resetPassword: async (req, res) =>{
        try {
            const {password} = req.body

            if(password) return res.status(400).json({msg: "Please enter password!"})

            const passwordHash = await bycrypt.hash(password, 12)

            await Users.findByIdAndUpdate({_id: req.user.id}, {passwordHash})

            return res.status(200).json({msg: "password successfully changed"})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }

   
}


module.exports = auth