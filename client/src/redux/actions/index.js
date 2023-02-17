const axios = require('axios');

export function saludar (name) {
    return {
        type: 'SALUDO',
        payload: name
    }    
}