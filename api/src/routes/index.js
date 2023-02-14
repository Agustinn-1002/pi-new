const { Router } = require('express');
const {getApi} = require('../controllers/getPokemonsApi')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req,res) => {
    let info = await getApi();
    try {
        res.status(200).json(info);
    } catch (error) {
        res.json({msn:'pokemon not found...'})
    }
})


module.exports = router;
