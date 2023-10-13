
// ? Requires -> Mongoose
const { Schema, model } = require('mongoose');
// const bcrypt = require('bcryptjs');

// ? Schema User -> mongoDB
const schemaUser = Schema({
    user_name: {
        type: String,
        required: [true, 'The user name is required.'],
        unique: true
    },

    email: {
        type: String,
        required: [true, 'The email is required.'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'The password is required.']
    },

    change: {
        user_name: { type: String },
        email: { type: String },
        password: { type: String }
    }
});

// schemaUser.pre('save', function(next) {
//     bcrypt.genSalt().then( salts => {
//         bcrypt.hash(this.password, salts).then( hash => {
//             this.password = hash;
//             next();
//         }).catch( error => next(error) );
//     } ).catch(error => next(error));
// })

// ? Exports
module.exports = model('Insumocruz_User', schemaUser);
