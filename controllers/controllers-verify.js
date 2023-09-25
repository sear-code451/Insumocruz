
// ? Requires
const {request, response} = require('express');
const {
    userData,
    normal
} = require('../helpers/variables');
const Insumocruz_user  = require('../models/schema-users');

//? API -> GET
const verifyDataGet = (req = request, res = response) => {
    res.status(200).render('pages-html/verify-account', normal);
};

const verifyDataPost = async(req = request, res = response) => {
    const { user_name, email, password } = req.body;

    //? Changed Datas the HBS 
    userData.user_name = user_name;
    userData.email = email;

    // ? Response
    console.log('Enviando respuesta desde controllers-verify');
    res.status(200).redirect('http://localhost:8000/user');

};

// ? Export
module.exports = {
    verifyDataGet,
    verifyDataPost
}
