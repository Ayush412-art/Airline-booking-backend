const {format , createLogger , transports} = require("winston");
const {combine , timestamp , label, printf} =  format

const customFormat = printf(({ level, message, label, timestamp })=>{

            return `${timestamp}:  [${label}] :  ${level}: ${message}`;
})


const logger = createLogger({

    format : combine(
            label({label : "Airline booking system"}),
            timestamp({format : "yyyy-MM-DD HH-mm-ss"}),
            customFormat

    ),
    transports :[new transports.Console()]
})

module.exports = logger