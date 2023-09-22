
// ? Requires
const {request, response} = require('express');

//? API -> GET
const userDataGet = (req = request, res = response) => {
    res.status(200).render('pages-html/user.hbs');
};


// ? Export
module.exports = {
    userDataGet,
}
