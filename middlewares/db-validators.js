
// ? Requires
const Insumocruz_User = require('../models/schema-users');

// ? Verify email into DB
const emailExists = async(email) => {
    const verify = await Insumocruz_User.findOne( {email} );
    if( verify ) throw new Error(`The ${email} is already registered.`);
};

const isTypeString = async(data) => {
    if( typeof data !== 'string' ) throw new Error(`The password ${data} should be string.`);
    
};

module.exports = {
    emailExists,
    isTypeString
}