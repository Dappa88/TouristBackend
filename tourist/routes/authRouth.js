const express = require("express")
const auth = require("../controllers/autCtrl")

const router = express.Router()



router.post("/register", auth.register)
router.post("/login", auth.login)

router.get("/user", auth.getAllUser)

router.get("/refreshToken", auth.getAccessToken)

router.post("/forgottenPassword", auth.forgotPassword)

router.post("/resetPassword", auth.resetPassword)




module.exports = router
