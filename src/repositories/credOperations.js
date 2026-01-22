

const {logger} = require("../config")

class CredOperations{

        constructor(model){
                this.model = model
        }

        async create(data){
            try{
                const response = await this.model.create(data)
                return response
            }
            catch(error){
                logger.error("Something went wrong in create cred opearation : cred repository")
                throw error
            }
        }
        async delete(idx){
            try{
                    const response = await this.model.destroy({
                            where : {
                                id : idx
                            }
                    })

                    return response
            }
            catch(error){
                logger.error("Something went wrong in delete cred opearation : cred repository")
                throw error;
            }
        }

        async get(data){
            try{
                const response = await this.model.findByPk(data)
                return response;
            }
            catch(error){
                 logger.error("Something went wrong in get cred opearation : cred repository")
                 throw error;
            }
        }

        async getAll(){
            try{
                const response = await this.model.findAll()
                return response;
            }
            catch(error){
                 logger.error("Something went wrong in getAll cred opearation : cred repository")
                 throw error;
            }
        }

        async update(id , data) {
                    try{
                        const response = await this.model.update(data , {
                            where : {id : id}
                        })
                        return response
                    }
                    catch(error){
                         logger.error("Something went wrong in update cred opearation : cred repository")
                        throw error;
                    }
        }

}
module.exports = CredOperations;