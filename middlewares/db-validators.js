
// ? Requires
const jwt = require('jsonwebtoken');
const { request } = require('express');
const Insumocruz_User = require('../models/schema-users');
const bcrypt = require('bcryptjs');
const { userData_normal, userData_incorrect, userData_correct } = require('../helpers/variables');

// ? Verify email into DB
const emailExists = async(email) => {
    const verify = await Insumocruz_User.findOne( {email} );
    if( verify ) throw new Error(`The ${email} is already registered.`);
};

const emailNotExist = async(email) => {
    const verify = await Insumocruz_User.findOne( {email} );
    if( !verify ) throw new Error(`The ${email} not exist.`);
};


// ? Verify user_name into DB
const userNameNotExist = async(user_name) => {
    const verify = await Insumocruz_User.findOne( {user_name} );
    if( !verify ) throw new Error(`The ${user_name} not exist.`);
};

const userNameExist = async(user_name) => {
    const verify = await Insumocruz_User.findOne( {user_name} );
    if( verify ) throw new Error(`The ${user_name} already exist.`);
};


// ? Verify type the data = String
const isTypeString = async(data) => {
    if( typeof data !== 'string' ) throw new Error(`The password ${data} should be string.`);
    
};

// ? Verify Password
const verifyPassword = async(password, {req}) => {
    console.log(req.body.email);
    const email = req.body.email;
    
    // Process
    const verify = await Insumocruz_User.findOne({email});
    const password_compare = await bcrypt.compare( password, verify.password );
    // Test message
    console.log(password_compare);
    console.log('We are in the message error of the password');
    if( !password_compare ) throw new Error(`The password ${password} is not correct.`);
    
};

// ? verify the change in -> /user form POST
const verifyChangeData = async( user_name, {req = request} ) => {
    console.log( { body: req.body } );
    const email = req.body.email;

    let render_result;

    if( req.body.email_guard === "Error" ) {
        render_result = userData_incorrect.email_guard;
    };

    if( req.body.email_guard === "Correct" ) {
        render_result = userData_correct.email_guard;
    };

    if( req.body.email_guard === "" ) {
        render_result = userData_normal.email_guard;
    };

    console.log({ var_render: render_result });
    
    const change = await Insumocruz_User.findOne( { "change.email_stub": render_result  } );
    
    console.log( {datos_render_guard :render_result} );
    console.log( {change_verify: change} );

    // if is fail in the two, throw this error
    if( user_name !== change.change.user_name_stub && email !== change.change.email_stub ) {
        const verify_user_name = await Insumocruz_User.find({ user_name });
        const verify_email = await Insumocruz_User.find({ email });

        if( verify_user_name.length >= 1 ){
            if( verify_email.length >= 1 ) {
                throw new Error(`
                El nombre de usuario: ${ user_name },
                y el email:${ email }; ya están registrado o no existe.
                `);
            }
        }
        req.body.email_guard = "Correct";
    };

    // if is fail in the user_name, throw this error
    if( user_name !== change.change.user_name_stub ) {
        const verify_user_name = await Insumocruz_User.find({ user_name });
        console.log( {verify_user:verify_user_name} );
        if( verify_user_name.length >= 1 ) {
            throw new Error(`
            El nombre de usuario: ${user_name}, ya está registrado o no existe.
            `);
        };
        req.body.email_guard = "Correct";

    };

    // if is fail in the email, throw this error
    if(email !== change.change.email_stub) {
        const verify_email = await Insumocruz_User.find({ email });
        if( verify_email.length >= 1 ) {
            throw new Error(`
            El email: ${email}, ya está registrado o no existe.
            `);
        }
        req.body.email_guard = "Correct";
    };
    
};

const verifyJWT = async(key) => {
    // TODO: create the jwt and verify yes is the correct
    try {
        jwt.verify(key, process.env.PRIVATEKEY);
    } catch (error) {
        throw new Error('The key is incorrect.');
    }
};

module.exports = {
    emailExists,
    isTypeString,
    emailNotExist,
    userNameNotExist,
    verifyPassword,
    userNameExist,
    verifyJWT,
    verifyChangeData
}