
// ? Requires
// Librery
const { response,request } = require('express');
const { validationResult } = require('express-validator');
// Our Files
const Insumocruz_User = require('../models/schema-users');
const {
    listIncorrect,
    userData_incorrect,
    userData_normal
} = require('../helpers/variables');

// ? Process
const validateProperties = async(req = request, res = response, next) => {
    let listErrors = validationResult(req);

    if( !listErrors.isEmpty() ) {
        // Response the Page Account
        listIncorrect.data_error = listErrors.errors[0].msg;
        userData_incorrect.data_error = listErrors.errors[0].msg;
        console.log(listIncorrect.data_error);
        console.log(userData_incorrect.data_error);

        if( req.body.enviar === 'account' ) {
            console.log('Incorrect in validate-properties account')
            return res.status(400).render('pages-html/account', listIncorrect);
        }
        // Response the Page Verify account
        if( req.body.enviar === 'verify-account' ) {
            console.log('Incorrect in validate-properties verify account')
            return res.status(400).render('pages-html/verify-account', listIncorrect);
        }

        if( req.body.enviar === 'user' ) {
            console.log('Incorrect in validate-properties user');

            req.body.email_guard = "Error";

            let change = await Insumocruz_User.findOne( { "change.email_stub": userData_normal.email_guard } );

            console.log( { change_error_user: change } );

            userData_incorrect.user_name = change.change.user_name_stub;
            userData_incorrect.email = change.change.email_stub;
            userData_incorrect.password = req.body.password;

            return res.status(400).render('pages-html/user', userData_incorrect);
            // TODO: averiguar por que no se muestran los errores
        }

        if( req.body.enviar === 'user-key' ) {
            console.log('Incorrect in the user-key validate-properties');
            return res.status(400).render('pages-html/user-key', listIncorrect);
        }

    }
    next();
};

module.exports = {
    validateProperties
};