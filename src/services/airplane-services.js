
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

async function getairplanes(){

        try{
            const airplane = await airplaneRepo.getAll();
            return airplane;
        }
        catch(error){
            throw error;
        }

}

async function getsingleairplane(id){
        try{
                const airplane = await airplaneRepo.get(id);
                return airplane
        }
        catch(error){
            throw error
        }

}

async function deleteairplane(id){

            try{
                
                const airplane = await airplaneRepo.delete(id);
                return airplane

            }   
            catch(error){
                throw error;
            }

}

async function updateairplane(data , id){
        try{
                const airplane = await airplaneRepo.update(id , data);
                return airplane
        }
        catch(error){
            throw error
        }

}


module.exports = {
    createairplane ,getairplanes , getsingleairplane , deleteairplane , updateairplane
}