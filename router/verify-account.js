
// ? Requires
const {Router} = require('express');
// const Insumocruz_User = require('../models/schema-users');
const { check} = require('express-validator');
// const bcrypt = require('bcryptjs');
const {
    verifyDataGet,
    verifyDataPost,
} = require('../controllers/controllers-verify');
const {
    isTypeString,
    emailNotExist,
    userNameNotExist,
    verifyPassword,
} = require('../middlewares/db-validators');
const {validateProperties} = require('../middlewares/validate-properties');

// ? Variables
const router = Router();

// ? API -> GET
router.get( '/verify-account', verifyDataGet );
router.post('/verify-account', [
    // Body -> user-name 
    check('user_name').custom(userNameNotExist),
    check('user_name', 'There has to be a name.').not().isEmpty(),
    check('user_name', 'The name can have a minimum of 3 characters.').isLength({ min: 3 }),
    // Body -> email
    check('email').custom(emailNotExist),
    check('email', 'There has to be a email.').not().isEmpty(),
    check('email', 'It has to have the charateristics of an email.').isEmail(),
    // password
    check('password').custom(verifyPassword),
    check('password', 'The password not should be empty.').not().isEmpty(),
    check('password').custom(isTypeString),
    check('password', 'The password can have a minimum of 4 chraracters.').isLength({ min: 4 }),
    validateProperties
],verifyDataPost);



// ? Export
module.exports = router;

