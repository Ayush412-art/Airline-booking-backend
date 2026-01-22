
const express = require("express");
const {createAirplane} = require("../../controllers");
const router = express.Router();


// post method

router.post("/" , createAirplane )

module.exports = router