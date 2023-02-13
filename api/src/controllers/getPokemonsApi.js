const axios = require('axios');
const {Pokemon , Type} = require('../db');

const getApi = async () => {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
}

