const { Router } = require('express');
const {getPokemonTypes} = require('../controllers/typesControllers')

const router = Router();

router.get('/', async (req,res) => {
    let info = await getPokemonTypes();
    try {
        res.status(200).json(info);
    } catch (error) {
        res.json({msn:'pokemon not found...'})
    }
})

module.exports = router;