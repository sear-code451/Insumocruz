
// ? Requires
const {request, response} = require('express');
const { normal, userData } = require('../helpers/variables');

//? API -> GET
const userDataGet = (req = request, res = response) => {
    res.status(200).render('pages-html/user', userData);
};


// ? Export
module.exports = {
    userDataGet,
}
