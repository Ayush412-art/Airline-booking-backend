const express = require('express');
const info = require('./v1/inforoutes')
const router = express.Router();


router.use("/v1" , info);

module.exports = router