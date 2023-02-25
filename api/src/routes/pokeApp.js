const { Router } = require('express');
const { Op } = require('sequelize');
const { allDataPoke } = require('../controllers/allPokeData');
const { getByNameApi } = require('../controllers/getPokemonsByNameApi');
const {Pokemon , Type} = require('../db')

const router = Router();

router.get('/', async (req,res) => {
    
    const {name} = req.query;
    let info = await allDataPoke();

    if (name) {
        let date = await getByNameApi(name)
        let arrPokemon = [];
        const pokeDb = await Pokemon.findOne({
            order:['name','ASC'],
            where: {
                name: name.toLowerCase()
            },
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        })

        if (pokeDb) {
            arrPokemon.push(pokeDb);
            return res.status(200).send(arrPokemon)
        }

        if (date) {
            res.status(200).json(date);
        }else{
            res.json({msn:'pokemon not found...'})
        }
    }else{
        res.status(200).json(info);
        
    }
})

router.post('/', async (req, res) => {
    const { name, hp, attack, defense, speed, createdInDb,height, weight, types, image} = req.body;
    if(!name) throw new Error('Faltan datos obligatorios!') 
    try {
        const newPokemon = await Pokemon.create({
            name: name.toLowerCase(),
            hp,
            attack,
            defense, 
            speed,
            height,
            weight,
            createdInDb,
            image
        });

        const typesInDb = await Type.findAll({
            where: {
                name: {
                    [Op.or]: [types]
                }
            }
        });

        newPokemon.addType(typesInDb);
        return res.status(200).send('Pokemon creado con exito!');
    } catch (err) {
        return res.status(404).send({msg: err.message});
    };
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    if (id.length > 5) {
        let pokemon = [];
        const pokemonDB = await Pokemon.findOne({
            where: {
                id
            },
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        })
        if (pokemonDB) {
            pokemon.push(pokemonDB);
            return res.status(200).send(pokemon)
        }else{
            return res.json({msn:'pokemon not found...'})
        }
    }
    let pokemon = await getByNameApi(id)
    return res.status(200).send(pokemon)
})

module.exports = router;