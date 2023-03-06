const axios = require('axios');

const getApi = async () => {
    const {data} = await axios('https://pokeapi.co/api/v2/pokemon?limit=40');
    let info = data.results;
    for (let e of info) {
        const {data} = await axios(e.url)
        e.id=data.id;
        e.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;
        e.types = data.types.map(i => i.type.name);
        e.attack = data.stats[1]['base_stat'];
        e.hp = data.stats[0]['base_stat'];
        e.defense = data.stats[2]['base_stat'];
    }
    info.sort((a,b)=>{
        const nA = a.name;
        const nB = b.name;
        if(nA > nB) return 1;
        if(nA < nB) return -1;
        return 0;
      })
    return info;
}

module.exports = {
    getApi
}

