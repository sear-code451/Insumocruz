
// ? Requires
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {request, response} = require('express');
const Insumocruz_User = require('../models/schema-users');
const {
    userData_normal,
    userData_correct,
    normal,
    RoundIndex,
    userData_incorrect
} = require('../helpers/variables');

//? API -> GET
const userDataGet = (req = request, res = response) => {
    console.log('We are in the userDataGet ')
    console.log(userData_normal.user_name);
    console.log(userData_normal.email);
    res.status(200).render('pages-html/user', userData_normal);
};

//? API -> POST
const userDataPost = async(req = request, res = response) => {
    console.log({ POST: req.body }); /* TODO: delete console.log */
    const { user_name, email, password, email_guard } = req.body;

    if( email_guard === "Error" ) {
        let render_result = userData_incorrect;
        render_result.user_name = user_name;
        render_result.email = email;
        render_result.password = password;
    };

    if( email_guard === "Correct" ) {
        let render_result = userData_correct;
        render_result.user_name = user_name;
        render_result.email = email;
        render_result.password = password;
    };

    if( email_guard === "" ) {
        let render_result = userData_normal;
        render_result.user_name = user_name;
        render_result.email = email;
        render_result.password = password;
    };

    // Datas
    // userData_normal.user_name = user_name;
    // userData_normal.email = email;
    // userData_normal.password = password;

    console.log( { email2: userData_normal.email_guard } );

    
    // TODO: search how change the datas in the DB... FORM -> POST

    const cambio = await Insumocruz_User.findOne({ "change.email_stub": userData_normal.email_guard });

    console.log({ envio: cambio }); /* TODO: delete console.log */

    const {user_name_stub, email_stub, password_stub  } = cambio.change;

    const datas2 = {
        user_name_change: user_name_stub,
        email_change:email_stub,
        password_change: password_stub
    };

    const datas3 = Object.entries( datas2 );
    console.log({ datos3: datas3 });

    const datas = [
        user_name,
        email,
        password
    ];

    console.log({ result_total: await Insumocruz_User.find({ user_name }) });

    for( const [ index, value ] of datas3.entries() ){
        if( value[1] !== datas[index] ) {
            const result = RoundIndex(index, datas, password);
            console.log(result); /* TODO: delete console.log */
            console.log({email}); /* TODO: delete console.log */
            console.log({ change: { email_stub: datas2.email_change } }); /* TODO: delete console.log */
            const dataBase = await Insumocruz_User.findOneAndUpdate( { "change.email_stub": datas2.email_change } , result );
            console.log(dataBase); /* TODO: delete console.log */
        }

        // TODO: tomar la decisión de hacerlo con el email o el email_stub
    };
    
    userData_normal.data_error = 'Datos actualizados.';
    
    res.status(200).render('pages-html/user', userData_correct);
};

// console.log( `value: ${value[0]}` );
// console.log( `indice: ${index}` );

// ? /user -> API -> PUT
const userDataPut = async( req = request, res = response ) => {

    console.log({ PUT: req.body }); /* TODO: delete console.log */

    // ? Request
    const { user_name, password, email } = req.body;

    const change = {
        change: {
            user_name_stub: user_name,
            email_stub: email,
            password_stub: password
        }
    };
    
    // ? Generate encrypt password
    const salt = bcrypt.genSaltSync();
    change.change.password_stub = bcrypt.hashSync( password, salt );

    await Insumocruz_User.findOneAndUpdate( {email}, change );

    userData_normal.email_guard = email;
    
    console.log({
        msg: "Correct -> PUT",
        email_guard: userData_normal.email_guard
    }); /* TODO: delete console.log */
    
    res.status(200).render( 'pages-html/user', userData_normal );

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
    console.log(decoded); /* TODO: delete console.log */

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
