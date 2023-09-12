
// Requires
const { Router } = require('express');
const { dataGet, dataPut } = require('../controllers/home');


// Variables
const router = Router();

// Proccess
router.get( '/', dataGet );

router.put( '/', dataPut );

module.exports = router;