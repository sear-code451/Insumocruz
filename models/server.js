
// Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { callDB } = require('../DB/config');


// Proccess
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/';

        // Activate the method
        this.connectionDB();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Cors
        this.app.use( cors() );
        // Lecture and parse of body
        this.app.use( express.json() );
        // Public local directory
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.path, require('../router/login-home') );
    }

    async connectionDB() {
        await callDB();
    }

    listenPort() {
        this.app.listen( this.port, () => {
            console.log( `Is running port ${this.port}` );
        } );
    }
}

module.exports = Server;