const initialState = {
    getDataPokemons: [],
    getAllDataPokemons: [],
    types: [],
    getDataDetailsPoke: []
} 

function rootReducer(state = initialState , action){
    switch (action.type) {
        case 'GET-All-POKEMONS':
            return {
                ...state,
                getDataPokemons: action.payload,
                getAllDataPokemons: action.payload
            }
        default:
            return {
                ...state,
            }
    }
    return 'hola'
}

export default rootReducer;