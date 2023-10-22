
// Requires
const { request, response } = require('express');
const nodemailer = require('nodemailer');
const Insumocruz_User = require('../models/schema-users');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
const jwt = require('jsonwebtoken');
const {
    normal,
    listCorrect,
} = require('../helpers/variables');

// ? Main-Page -> API -> GET
const dataGet = ( req = request, res = response) => {
    res.status(200).render('pages-html/main', {
        offers_header: '#offers',
        novedades_header: '#novedades'
    });
} ;

// ? API -> PUT
const dataPut = async( req = request, res = response ) => {
    // data -> request
    const { name, email, password } = req.body;
    
    // Save into the DB
    const newUser = new Insumocruz_User( { user_name, email, password } );
    
    await newUser.save();
    
    res.status(200).json( {
        msg: [ user_name, email, password ]
    } );
};

// ? Account-Page -> API -> GET
const accountGet = (req = request, res = response) => {
    res.status(200).render('pages-html/account', normal);
}

// Account-page -> API -> POST
const formPost = async( req = request, res = response ) => {
    console.log(req.body);
    const { user_name, email, password } = req.body;
    
    let list = {
        user_name,
        email,
        password
    };

    // Encrypting Password
    const salt = bcrypt.genSaltSync(10);
    list.password = bcrypt.hashSync(password , salt);
    console.log(password);
    
    // Generate JWT or Token
    const token = await generateJWT(list);
    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY );

    // Schema User
    const newUser = new Insumocruz_User(list);

    // Save DB
    await newUser.save();

    // Response
    res.status(200).render('pages-html/account', listCorrect);

}

const contactGet = (req = request, res = response) => {
    res.status(200).render('pages-html/contact', {
        offers_header: '/#offers',
        novedades_header: '/#novedades'
    });
};

const contactPost = async(req = request, res = response) => {
    console.log( { body_post_contact: req.body } );

    // ? nodemailer
    const config = {
        host: 'smtp.gmail.com',
        port: process.env.PORT_EMAIL,
        auth: {
            user: process.env.FROM,
            pass: process.env.PASS
        }
    };

    const message_nodemailer = {
        from: req.body.email,
        to: process.env.TO,
        subject: `Message of the client: ${req.body.name} ${req.body.last_name}`,
        text: `
        The message is sent from ${req.body.email}, that is following:  
        ${req.body.message}
        `
    };

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(message_nodemailer);

    console.log({send_mail: info});

    // TODO: continue of the work... finish the page-contact with so express-validator 

    res.status(200).render('pages-html/contact', {
        offers_header: '/#offers',
        novedades_header: '/#novedades'
    });
};

// Export
module.exports = {
    dataGet,
    accountGet,
    dataPut,
    formPost,
    contactGet,
    contactPost
}