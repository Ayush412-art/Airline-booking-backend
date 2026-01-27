const {createairplane, getsingleairplane, updateairplane, deleteairplane} = require("./airplane-services");
const {getairplanes} = require("./airplane-services")

module.exports = {
    createairplane,getairplanes,getsingleairplane,updateairplane,deleteairplane
}