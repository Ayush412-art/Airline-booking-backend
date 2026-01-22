
const {airplaneservice} = require("../services")


const createAirplane = async(req , res)=>{
    try{
            const createPlane = await airplaneservice({
                ModelNo : req.body.modelNumber,
                capacity : req.body.capacity
            })
           return res.status(201).json({
                success : true,
                message : "Airplane data added",
                data : createPlane,
                error : {}
            })
    }
    catch(error){
        return res.status(500).json({
            success : false,
            message : "Internal server error" + (error)
        })
    
    }
}

module.exports = createAirplane