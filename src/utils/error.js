
const response = require("./response")
const logger = require("../config")

const errorResponse = (res ,  error = " " , success , statuscode , message) =>{

        logger.error(error);

     return response(res , success , message ,  statuscode );
}

module.exports = errorResponse