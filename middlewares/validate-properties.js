
// ? Requires
const { response,request } = require('express');
const { validationResult } = require('express-validator');
const { listIncorrect } = require('../helpers/variables');

// ? Process
const validateProperties = async(req = request, res = response, next) => {
    let listErrors = validationResult(req);

    if( !listErrors.isEmpty() ) {
        listIncorrect.data_error = listErrors.errors[0].msg;
        console.log(listIncorrect.data_error);
        // Response the Page Account
        if( req.body.enviar === 'account' ) {
            console.log('Incorrect in validate-properties account')
            return res.status(400).render('pages-html/account', listIncorrect);
        }
        // Response the Page Verify account
        if( req.body.enviar === 'verify-account' ) {
            console.log('Incorrect in validate-properties verify account')
            return res.status(400).render('pages-html/verify-account', listIncorrect);
        }

    }
    next();
};

module.exports = {
    validateProperties
};