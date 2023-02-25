const initialState = {
    getDataPokemons: [],
    getAllDataPokemons: [],
    types: [],
    getDataDetailsPoke: [],
    currentPage: 1,
    typesActual: 'All',
    orderActual: 'asc',
} 

function rootReducer(state = initialState , action){
    switch (action.type) {
        case 'GET-All-POKEMONS':
            return {
                ...state,
                getDataPokemons: action.payload,
                getAllDataPokemons: action.payload
            }
        case 'GET-All-TYPES':
            return{
                ...state,
                types: action.payload
            }
        case 'SET-CURRENT':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'FILTER-TYPES':
            let newArray = action.payload === 'All' ? state.getAllDataPokemons : state.getAllDataPokemons.filter(t => t.types.includes(action.payload))
            if (!newArray.length) {
                return {
                    ...state,
                    typesActual: action.payload,
                    getDataPokemons: {msg: `IT WAS NOT FOUND ANY POKEMON OF ${action.payload.toUpperCase()} TYPE`}
                }
            }
            return {
                ...state,
                typesActual: action.payload,
                getDataPokemons: newArray
            }
        case 'FILTER-ORDER':
            let orderArray = [];
            if (action.payload === 'asc') {
                orderArray= state.getDataPokemons.sort((a,b)=>{
                    const nA = a.name;
                    const nB = b.name;
                    if(nA > nB) return 1;
                    if(nA < nB) return -1;
                    return 0;
                });
            }
            if (action.payload === 'desc') {
                orderArray= state.getDataPokemons.sort((a,b)=>{
                    const nA = a.name;
                    const nB = b.name;
                    if(nA < nB) return 1;
                    if(nA > nB) return -1;
                    return 0;
                });
            }
            return{
                ...state,
                orderActual: action.payload,
                getDataPokemons: orderArray
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;