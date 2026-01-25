
const express = require("express");
const {createAirplane} = require("../../controllers");
const {ValidateCreateFields} = require("../../middleware")
const router = express.Router();


// post method

router.post("/" , ValidateCreateFields  , createAirplane )

module.exports = router