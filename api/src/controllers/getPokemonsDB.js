const {Pokemon , Type} = require('../db')

const getDbPoke = async () => {
    let info = await Pokemon.findAll({
        
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
        attributes: {exclude: ['createdAt', 'updatedAt']}
    });
    // console.log(info.map(e => e.toJSON().types.map(t => t.name)));
    let infoDb = info.map(e => e.toJSON())
    infoDb.map(e => 
        e.types = e.types.map(t => t.name)
    )
    return infoDb; 
}

module.exports ={
    getDbPoke
}