
const sendResponse = (res  , success  , message , statusCode ,  data = null) => {
        const response = {
            success,
            message
        }

        if(!data && data != undefined) response.data = data;

        res.status(statusCode).json(response)
}   

module.exports = sendResponse