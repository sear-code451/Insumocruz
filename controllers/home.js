
// Requires
const { request, response } = require('express');
const Insumocruz_User = require('../models/schema-users');

// ? API -> GET
const dataGet = ( req = request, res = response) => {
    res.sendFile( 'C:/Users/pablo/OneDrive/Escritorio/SECOND-PROJECT/public/html/index.html' );
} ;

// ? API -> PUT
const dataPut = async( req = request, res = response ) => {
    // * data -> request
    const { name, email, password } = req.body;

    // * Save in the DB, and creating a new Schema User
    const newUser = new Insumocruz_User( { name, email, password } );

    await newUser.save();

    res.status(200).json( {
        msg: [ name, email, password ]
    } );
};

// Export
module.exports = {
    dataGet,
    dataPut
}