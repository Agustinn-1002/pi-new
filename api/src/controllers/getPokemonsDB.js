const {Pokemon , Type} = require('../db')

const getDbPoke = async () => {
    const info = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
    return info;
}

module.exports ={
    getDbPoke
}