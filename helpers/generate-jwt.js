
//? Requires
const jwt = require('jsonwebtoken');

//? Process
const generateJWT = async( list ) => {
    return new Promise( (resolve, reject) => {
        const payload = list;

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: Math.floor( Date.now() / 1000 ) + (60 * 60)
        },( err, token ) => {
            if( err ) reject('Could not generate key');
            else resolve(token);
        });

    } )
};


module.exports = {
    generateJWT
};