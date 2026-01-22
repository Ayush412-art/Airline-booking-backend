
const {AirplaneRepositories} = require("../repositories")


const airplaneRepo = new AirplaneRepositories();

const createairplane = async(data)=>{
    try{
            const airplane = await airplaneRepo.create(data);
            return airplane
    }
    catch(error){
        throw error
    }
}
module.exports = createairplane