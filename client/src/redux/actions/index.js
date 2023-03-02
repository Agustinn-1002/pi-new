import axios from 'axios';

export function getdataPoke () {
    return async function (dispatch) {
        const pokemons = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: 'GET-All-POKEMONS',
            payload:pokemons.data
        })
    }    
}

export function getTypes () {
    return async function (dispatch) {
        const types = await axios.get('http://localhost:3001/types');
        return dispatch({
            type: 'GET-All-TYPES',
            payload:types.data
        })
    }    
}

export function postPoke (datos) {
    return async function (dispatch) {
        const data = await axios.post('http://localhost:3001/pokemons',datos);
        return data
    }    
}

export function getDetaildDataPoke (id) {
    return async function (dispatch) {
        const detaildPoke = await axios.get(`http://localhost:3001/pokemons/${id}`);
        return dispatch({
            type: 'GET-DETAILD-POKE',
            payload: detaildPoke.data
        })
    }    
}

export function getSearchPokeByName (name) {
    return async function (dispatch) {
        try {
            const poke = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({
                type: 'GET-SEARCH-POKE',
                payload: poke.data
            })
        } catch (error) {
            console.log(error);
        }
    }    
}

export function setCurrentPage (page) {
    return {
        type: 'SET-CURRENT',
        payload: page
    }
}

export function filterByTypes(tipo) {
    return {
        type: 'FILTER-TYPES',
        payload: tipo
    }
}

export function filterByOrder(tipo){
    return { type: 'FILTER-ORDER', payload: tipo}
}

export function filterByCreateOrNot(tipo){
    return { type: 'FILTER-CREATED', payload: tipo}
}