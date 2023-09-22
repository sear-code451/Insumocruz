
const { response,request } = require('express');
const { validationResult } = require('express-validator');



const validateProperties = async(req = request, res = response, next) => {
    let errors = validationResult(req);

    if( !errors.isEmpty() ) return res.status(400).json({
        msg: errors
    });

    next();
};

module.exports = {
    validateProperties
};