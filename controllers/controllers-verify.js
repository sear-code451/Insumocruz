
// ? Requires
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const {request, response} = require('express');
const {
    userData_normal,
    normal
} = require('../helpers/variables');
const Insumocruz_user  = require('../models/schema-users');

//? API -> GET
const verifyDataGet = (req = request, res = response) => {
    res.status(200).render('pages-html/verify-account', normal);
};

// const verifyDataPost = async(req = request, res = response) => {
//     const { user_name, email, password } = req.body;

//     //? Changed Datas the HBS 
//     userData_normal.user_name = user_name;
//     userData_normal.email = email;

//     // ? Response
//     console.log('Enviando respuesta desde controllers-verify');
//     res.status(200).redirect('http://localhost:8000/user');

// };

const verifyDataPost = async(req = request, res = response) => {
    // ? Request
    const { user_name, email, password } = req.body;

    const payload = {
        user_name,
        email,
        password
    }

    // ? token
    const token = jwt.sign( payload, process.env.PRIVATEKEY, {
        expiresIn: 60 * 60
    } );
    
    // ? nodemailer
    const config = {
        host: 'smtp.gmail.com',
        port: process.env.PORT_EMAIL,
        auth: {
            user: process.env.FROM,
            pass: process.env.PASS
        }
    };

    const message = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: 'Clave de acceso',
        text: `
        ${token}
        `
    };

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(message);

    console.log(info)
    
    // ? Response
    res.status(200).redirect('/user/user-key');
};

// ? Export
module.exports = {
    verifyDataGet,
    verifyDataPost
}
