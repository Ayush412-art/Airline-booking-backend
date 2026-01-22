
const CredOperations = require("./credOperations")
const {Airlines} = require("../models")

class AirplaneRepositories extends CredOperations{

        constructor(){
            super(Airlines)
        }
}

module.exports = AirplaneRepositories
