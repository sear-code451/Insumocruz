
// ? Requires -> Mongoose
const { Schema, model } = require('mongoose');

// ? Schema User -> mongoDB
const schemaUser = Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },

    email: {
        type: String,
        required: [true, 'The email is required.'],
        unique: true
    },

    password: {
        type: Number,
        required: [true, 'The password is required.']
    }
});

// ? Exports
module.exports = model('Insumocruz_User', schemaUser);
