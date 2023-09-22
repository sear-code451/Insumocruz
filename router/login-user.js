
// ? Requires
const {Router} = require('express');
const {
    userDataGet
} = require('../controllers/controllers-user');


// ? Variables
const router = Router();

// ? API -> GET
router.get( '/', userDataGet );


// ? Export
module.exports = router

