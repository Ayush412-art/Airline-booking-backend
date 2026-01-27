
const {createairplane , getairplanes , getsingleairplane , updateairplane , deleteairplane, getsingleairplane} = require("../services")
const {sendResponse} = require("../utils")

const createAirplane = async(req , res)=>{
    try{
            const createPlane = await createairplane({
                ModelNo : req.body.modelNumber,
                capacity : req.body.capacity
            })

           return sendResponse(res , true , "Successfully added airplan" , 201 , createPlane)
    }
    catch(error){
        return res.status(500).json({
            success : false,
            message : "Internal server error" + (error)
        })
    
    }
}

const getallAirplanes = async(_ , res) =>{

        try{

                const getairplane = await getairplanes();
                return sendResponse(res , true , "Successfully fetch planes details"  , 200 , getairplane )

        }
        catch(error){
            return res.status(500).json({
                success : false,
                message : "Internal server error : " + error
            })
        }
    }

const getsingleAirplan = async(req , res) =>{
                try{
                        const singleairplane = await getsingleairplane(req.params.id)
                        return sendResponse(res , true , "Successfully fetch plane detail"  , 200 , singleairplane )

                }
                catch(error){
                    return res.status(500).json({
                success : false,
                message : "Internal server error : " + error
            })
                }
}

const updateAirplane = async(req , res) =>{
    try{
            const airplane = await updateairplane(req.body , req.params.id)
            return sendResponse(res , true , "Successfully updated the airplane details"  , 200 , airplane )
    }   
    catch(error){
                    return res.status(500).json({
                success : false,
                message : "Internal server error : " + error
            })
                }

}
const deleteAirplan = async(req , res) =>{
    try{
            const airplane = await deleteairplane(req.params.id)
            return airplane
    }
    catch(error){
        return res.status(500).json({
                success : false,
                message : "Internal server error : " + error
            })
    }
}



module.exports = createAirplane