
// ? Requires
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {request, response} = require('express');
const Insumocruz_User = require('../models/schema-users');
const {
    userData_normal,
    userData_correct,
    normal
} = require('../helpers/variables');

//? API -> GET
const userDataGet = (req = request, res = response) => {
    console.log('We are in the userDataGet ')
    console.log(userData_normal.user_name);
    console.log(userData_normal.email);
    res.status(200).render('pages-html/user', userData_normal);
};

const userDataPost = async(req = request, res = response) => {
    console.log(req.body);
    let body = req.body;
    const { user_name, email, password } = req.body;

    // Datas
    userData_correct.user_name = body.user_name;
    userData_correct.email = body.email;
    userData_correct.password = body.password;

    const datas = [
        user_name,
        email,
        password
    ];

    // TODO: search how change the datas in the DB... FORM -> POST

    const change = await Insumocruz_User.findOne({ email });

    // for ( prop in change) {
    //     console.log({ propiedad: change[prop] });
    // }

    // datas.forEach(async(data) => {
    //     console.log({ datos: data });
    //     for (const prop in change) {
    //         console.log({ prop: change[prop] });
    //         if(data !== change[prop]) {
    //             console.log(data);
    //             await Insumocruz_User.findOneAndUpdate( change.email, change[prop] );
    //         }
    //     }
    // });

    userData_correct.data_error = 'Datos actualizados.';

    res.status(200).render('pages-html/user', userData_correct);
};

// ? /user -> API -> PUT
const userDataPut = async( req = request, res = response ) => {

    // ? Request
    const { user_name, password, email } = req.body;

    const change = {
        change: {
            user_name,
            email,
            password
        }
    };
    
    // ? Generate encrypt password
    const salt = bcrypt.genSaltSync();
    change.change.password = bcrypt.hashSync( password, salt );

    await Insumocruz_User.findOneAndUpdate( {email}, change );

    console.log({msg: "Correct -> PUT"});

};

// ? /user/key
// API -> GET
const keyGet = (req = request, res = response) => {
    res.status(200).render('pages-html/user-key', normal);
};

// API -> POST
const keyPost = (req = request, res = response) => {
    const { key } = req.body;
    const decoded = jwt.verify(key, process.env.PRIVATEKEY );
    console.log(decoded);

    userData_normal.user_name = decoded.user_name;
    userData_normal.email = decoded.email;
    userData_normal.password = decoded.password;

    // TODO: Review is the all rigth the page user-verify and continue next tarea
    // TODO: The nex tarea is change data and that save in the DB
    
    res.status(200).redirect('/user');
};


// ? Export
module.exports = {
    userDataGet,
    userDataPost,
    userDataPut,
    keyGet,
    keyPost
}
