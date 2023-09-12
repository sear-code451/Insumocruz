
// Requires
const Server = require('./models/server');

// Activate Server
const server = new Server();

// Activate Port
server.listenPort();