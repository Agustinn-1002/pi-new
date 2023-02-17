const initialState = {
    saludo: null
} 

function rootReducer(state = initialState , action){
    switch (action.type) {
        case 'SALUDO':
            return {
                ...state,
                saludo: action.payload
            }
        default:
            return {
                ...state,
            }
    }
    return 'hola'
}

export default rootReducer;