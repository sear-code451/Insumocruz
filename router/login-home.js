
// ? Requires
const { Router } = require('express');
const { check } = require('express-validator');
const { validateProperties } = require('../middlewares/validate-properties');
const {
    emailExists,
    isTypeString,
} = require('../middlewares/db-validators');
const {
    dataGet,
    dataPut,
    accountGet,
    formPost,
    contactGet,
    contactPost,
} = require('../controllers/controllers');


// ?Variables
const router = Router();

// ?Proccess

// ? Rest Server "/" main page
router.get( '/', dataGet );
router.put( '/', dataPut );

// ? Rest Server "/account" account page
router.get('/account', accountGet );
router.post('/account', [
    // Body -> user-name 
    check('user_name', 'There has to be a name.').not().isEmpty(),
    check('user_name', 'The name can have a minimum of 3 characters.').isLength({ min: 3 }),
    // Body -> email
    check('email').custom(emailExists),
    check('email', 'There has to be a email.').not().isEmpty(),
    check('email', 'It has to have the charateristics of an email.').isEmail(),
    // password
    check('password', 'The password not should be empty.').not().isEmpty(),
    check('password').custom(isTypeString),
    check('password', 'The password can have a minimum of 4 chraracters.').isLength({ min: 4 }),
    validateProperties

], formPost);


// ? Rest Server "/contact" -> GET
router.get('/contact', contactGet);

router.post('/contact', contactPost);

module.exports = router;