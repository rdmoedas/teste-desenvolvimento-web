const API_URL = 'http://localhost:3001';

const pokemonService = {
    getPokemons: async function getPokemons() {

        const response = await fetch(`${API_URL}`);
        const responseJson = response.json();
        return responseJson;
    },
    postPokemons: async function postPokemons(pokemonData) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pokemonData)
        };
        await fetch(API_URL, requestOptions);
    },
    softDeletePokemon: async function softDeletePokemon(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(`${API_URL}/${id}`, requestOptions);
    }
}

export default pokemonService