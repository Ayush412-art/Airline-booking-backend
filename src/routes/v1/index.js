

const express = require("express");
const airplaneroute = require("./airplane-route");
const router = express.Router();


router.use("/airplane" , airplaneroute)

module.exports = router