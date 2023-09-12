
// Requires
const Insumocruz_User = require('./models/schema-users');
require('dotenv').config();
const {request,response} = require('express');
const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const connectionDB = require('./DB/config');
const mongoose = require('mongoose');

// Variables
const app =  express();
const port = process.env.PORT;

// Connection DB
const baseDeDatos = async() => {
    try {
        await mongoose.connect( process.env.MONGO_CONN );
        console.log('Connected to the DB.');
    } catch (error) {
        console.log(error);
        throw new Error( 'Error when starting with the DB.' );
    }
};

baseDeDatos();

// Middlewares
app.use(cors());
app.use( express.static('public') );
app.use(express.json());

// Rest Server
app.get( '/', async(req = request, res = response) => {
    // * request
    const { name, email, password } = req.body;

    // * Save in the DB, and creating a new Schema User
    const nuevoUser = new Insumocruz_User( {name, email, password} );
    await nuevoUser.save();

    // * response
    res.status(200).json({
        msg: `Hello I'am pablo and you're seeing this message in the port ${port}`,
        name,
        email,
        password
    });
});

// Listen Port
app.listen( port, () => {
    console.log(`Is running in port ${port}`);
} );

