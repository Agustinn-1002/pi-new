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