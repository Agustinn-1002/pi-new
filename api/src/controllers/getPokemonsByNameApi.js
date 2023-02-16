const axios = require('axios');

const getByNameApi = async (name) => {
    try {
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        const pokemon = [{
            id: data.id,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ data.id }.svg`,
            types: data.types.map(t => t.type),
            attack: data.stats[1]['base_stat'],
            defense: data.stats[2]['base_stat'],
            hp: data.stats[0]['base_stat'],
            speed: data.stats[5]['base_stat'],
            height: data.height,
            weight: data.weight,
        }]
        return pokemon
    } catch (error) {
        
    }
    
}

module.exports = {
    getByNameApi
}