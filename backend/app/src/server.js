const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');

function createServer() {

    // INSTANTIATE EXPRESS APP
    const app = express();
    
    // CONFIGURE APP MIDDLEWARE FIRST
    app.use(cors());           
    app.use(express.json());   
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }))

    // CONFIGURE APP ROUTES LAST
    app.use('/', routes);   

    // RETURN APP INSTANCE
    return app;

}

module.exports = createServer;