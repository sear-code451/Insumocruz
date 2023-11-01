
// Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { callDB } = require('../DB/config');
const hbs = require('hbs');


// Proccess
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/';
        this.path_account_verify = '/verify-account';
        this.path_account_user = '/user';
        this.path_partials = process.env.PATH_PARTIALS;

        this.app.set('view engine', 'hbs');
        hbs.registerPartials(this.path_partials);

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

        // this.app.use( express.urlencoded({
        //     extended: true
        // }) );

    }

    routes() {
        this.app.use( this.path, require('../router/login-home') );
        this.app.use( this.path, require('../router/verify-account') );
        this.app.use( this.path, require('../router/login-user') );
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