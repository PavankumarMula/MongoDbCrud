const express = require("express");
const router = express.Router();

//importing controllers
const {signup} = require("../controllers/userAuth")


// router for user Sign up
router.post("/signup",signup);

module.exports = router;