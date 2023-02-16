const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeApp = require('./pokeApp');
const typesApp = require('./typesApp');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokeApp);
router.use('/types', typesApp);


module.exports = router;
