const model = require('../models/pokemonModels');

module.exports = {
    get: async function get(request, response){
        const pokemons = await model.readDbData()
        response.status(200).json(pokemons)
    }, 
    post: async function post(request, response){
        let {name, power} = request.body;
        power = parseInt(power)
        const resp = await model.createDbData(name, power);
    },
    softDelete: async function softDelete(request, response){
        let { id } = request.params;
        id = parseInt(id)
        const resp = await model.softDelete(id);
    },
    put: async function put(request, response){
        let { id } = request.params;
        let { name, power } = request.body;
        id = parseInt(id);
        power = parseInt(power);
        const resp = await model.editDbData(id, name, power);
    }
}