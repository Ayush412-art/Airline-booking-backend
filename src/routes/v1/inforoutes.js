const express = require('express');
const router = express.Router();
const {informationController} = require('../../controllers')


router.get("/info" , informationController)


module.exports = router