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