const express = require ("express");
const touristsCtrl = require ("../controllers/touristCtrl");

const router = express.Router()

router.post("/post", touristsCtrl.postTourist)

router.get("/all", touristsCtrl.getAllTourist)

router.get("/one/:id", touristsCtrl.getOneTourist)

router.put("/update/:id", touristsCtrl.updateOneTourist)

router.delete("/delete/:id", touristsCtrl. deleteOneTourist)




module.exports = router
 