const express = require('express');

const router = express.Router();


router.use("/v1" , (_ , res)=>{
    res.send("Hello")
});

module.exports = router