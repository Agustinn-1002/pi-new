const axios = require('axios');
const {Type} = require('../db');

const getPokemonTypes = async () => {
    const {data} = await axios('https://pokeapi.co/api/v2/type');
    let info = data.results.map(e=>e.name)
    return info
}

module.exports = {
    getPokemonTypes
}