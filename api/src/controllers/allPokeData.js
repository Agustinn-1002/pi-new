const {getApi} = require('./getPokemonsApi')
const {getDbPoke} = require('./getPokemonsDB')

const allDataPoke = async () => {
    let dataApi = await getApi();
    let dataDB = await getDbPoke();
    let allData = dataApi.concat(dataDB);
    return allData;
}  

module.exports ={
    allDataPoke,
}