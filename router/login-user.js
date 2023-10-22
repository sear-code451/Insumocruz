
// ? Requires
// librery
const {Router} = require('express');
const { check } = require('express-validator');

// Our Files
const { validateProperties } = require('../middlewares/validate-properties');
const {
    userDataGet,
    userDataPost,
    userDataPut,
    keyGet,
    keyPost
} = require('../controllers/controllers-user');
const {
    isTypeString,
    emailExists,
    userNameExist,
    passwordExist,
    verifyJWT,
    verifyChangeData,
} = require('../middlewares/db-validators');


// ? Variables
const router = Router();

// ? /user
// API -> GET
router.get( '/user', userDataGet );

// API -> POST
router.post('/user', [
    // Body -> email
    // check('email').custom(emailExists),
    check('email', 'There has to be a email.').not().isEmpty(),
    check('email', 'It has to have the charateristics of an email.').isEmail(),
    // Body -> user_name
    // check('user_name').custom(userNameExist),
    check('user_name', 'There has to be a name.').not().isEmpty(),
    check('user_name', 'The name can have a minimum of 3 characters.').isLength({ min: 3 }),
    check('user_name').custom(verifyChangeData),
    // Body -> password
    check('password', 'The password not should be empty.').not().isEmpty(),
    check('password').custom(isTypeString),
    check('password', 'The password can have a minimum of 4 chraracters.').isLength({ min: 4 }),
    validateProperties

] , userDataPost);

router.put('/user', userDataPut);

// ? /user/token
// API -> GET
router.get('/user/user-key', keyGet);

// API -> POST
router.post('/user/user-key', [
    check('key', 'There has to be a email.').not().isEmpty(),
    check('key', 'The key can have a minimum of 16 characters. ').isLength({ min: 16 }),
    check('key').custom(isTypeString),
    check('key').custom(verifyJWT),
    validateProperties

], keyPost);


// ? Export
module.exports = router;

