const initialState = {
    getDataPokemons: [],
    getAllDataPokemons: [],
    types: [],
    getDataDetailsPoke: [],
    currentPage: 1,
    typesActual: 'All',
    orderActual: 'asc',
    createDbOrNot: 'All',
    serchText: '',
} 

function rootReducer(state = initialState , action){
    switch (action.type) {
        case 'GET-All-POKEMONS':
            let info = action.payload
            info.sort((a,b)=>{
                const nA = a.name;
                const nB = b.name;
                if(nA > nB) return 1;
                if(nA < nB) return -1;
                return 0;
            });
            return {
                ...state,
                getDataPokemons: info,
                getAllDataPokemons: info
            }
        case 'GET-DETAILD-POKE':
            return{
                ...state,
                getDataDetailsPoke:action.payload,
            }
        case 'GET-All-TYPES':
            return{
                ...state,
                types: action.payload
            }
        case 'POST-POKE':
            return{
                ...state
            }
        case 'SET-CURRENT':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SEARCH-VALUE': 
            return{
                ...state,
                serchText: action.payload
            }
        case 'GET-SEARCH-POKE':
            const datos = state.getAllDataPokemons.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
            if (!datos.length) {
                return {
                    ...state,
                    currentPage:1,
                    typesActual: 'All',
                    orderActual: 'asc',
                    createDbOrNot: 'All',
                    getDataPokemons: {msg: `NO SE ENCONTRO NUNGUN POKEMON ${action.payload.toUpperCase()}`}
                }
            }
            return {
                ...state,
                currentPage:1,
                typesActual: 'All',
                orderActual: 'asc',
                createDbOrNot: 'All',
                getDataPokemons: datos
            }
        case 'FILTER-TYPES':

            let arrayApi = state.getAllDataPokemons.filter(p => !p.createdInDb)
            let arrayDb= state.getAllDataPokemons.filter(p => p.createdInDb)
            let newArray = 
                action.payload === 'All' ? 
                    state.createDbOrNot === "getApi" ? 
                        state.getAllDataPokemons.filter(p => !p.createdInDb)
                        : 
                        state.createDbOrNot === "getDB" ? 
                            arrayDb
                            : 
                            state.getAllDataPokemons               
                    : 
                    state.createDbOrNot === "getApi" ? 
                        arrayApi.filter(t => t.types.includes(action.payload)) 
                        :
                        state.createDbOrNot === "getDB" ? 
                            arrayDb.filter(t => t.types.includes(action.payload)) 
                            :                       
                            state.getAllDataPokemons.filter(t => t.types.includes(action.payload))
                            
            

            if (!arrayDb.length && action.payload === 'All' && state.createDbOrNot === "getDB") {
                return {
                    ...state,
                    serchText: '',
                    typesActual: action.payload,
                    getDataPokemons: {msg: 'TODAVIA NO HAS CREADO POKEMONES'}
                }
            }
            
            if (!newArray.length) {
                return {
                    ...state,
                    serchText: '',
                    typesActual: action.payload,
                    getDataPokemons: {msg: `NO SE ENCONTRO NUNGUN POKEMON CON EL TIPO ${action.payload.toUpperCase()}`}
                }
            }

            return {
                ...state,
                serchText: '',
                typesActual: action.payload,
                getDataPokemons: newArray
            }
            case 'FILTER-ORDER':
                let orderArray = [];
            if (state.getDataPokemons.length) {
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
                if (action.payload === 'fuerte') {
                    orderArray= state.getDataPokemons.sort((a,b)=>{
                        const nA = a.attack;
                        const nB = b.attack;
                        if(nA < nB) return 1;
                        if(nA > nB) return -1;
                        return 0;
                    });
                }
                if (action.payload === 'debil') {
                    orderArray= state.getDataPokemons.sort((a,b)=>{
                        const nA = a.attack;
                        const nB = b.attack;
                        if(nA < nB) return -1;
                        if(nA > nB) return 1;
                        return 0;
                    });
                }
                return{
                    ...state,
                    serchText: '',
                    orderActual: action.payload,
                    getDataPokemons: orderArray
                }
            }
            return{
                ...state
            }
        case 'FILTER-CREATED':
            let createOrNot = state.getAllDataPokemons.filter(p => p.createdInDb);
            if(action.payload === 'getDB' && !createOrNot.length) {
                return {
                    ...state,
                    typesActual: 'All',
                    serchText: '',
                    createDbOrNot: action.payload,
                    getDataPokemons: {msg: 'TODAVIA NO HAS CREADO POKEMONES'}
                }
            }
            return{
                ...state,
                typesActual: 'All',
                serchText: '',
                createDbOrNot: action.payload ,
                getDataPokemons: action.payload === 'All' ? 
                    state.getAllDataPokemons 
                        :
                        action.payload === 'getDB' ? 
                            state.getAllDataPokemons.filter(p => p.createdInDb) 
                                : 
                            state.getAllDataPokemons.filter(p => !p.createdInDb)
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;