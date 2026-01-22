
const {AirplaneRepositories} = require("../repositories")


const airplaneRepo = new AirplaneRepositories();

async function createairplane(data){
    try{
            const airplane = await airplaneRepo.create(data);
            return airplane
    }
    catch(error){
        throw error
    }
}
module.exports = createairplane