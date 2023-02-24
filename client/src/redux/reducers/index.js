const initialState = {
    getDataPokemons: [],
    getAllDataPokemons: [],
    types: [],
    getDataDetailsPoke: [],
    currentPage: 1,
} 

function rootReducer(state = initialState , action){
    switch (action.type) {
        case 'GET-All-POKEMONS':
            return {
                ...state,
                getDataPokemons: action.payload,
                getAllDataPokemons: action.payload
            }
        case 'SET-CURRENT':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;