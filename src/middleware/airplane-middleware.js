
const {errorResponse} = require("../utils")

const ValidateCreateFields = (req , res , next)=>{

        if(!req.body.modelNumber){
                errorResponse(res , false , 404 , "modelNumber is missing" , )
        }

        if(!req.body.capacity){
                errorResponse(res , false , 404 , "capacity is missing" , )
        }

        next();

}

module.exports = ValidateCreateFields