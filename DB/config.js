// ? Requires
const  mongoose = require("mongoose");

// ? Process
const callDB = async() => {
    try {
        await mongoose.connect( process.env.MONGO_CONN );
        console.log('Connected to the DB.');
    } catch (error) {
        console.log(error);
        throw new Error( 'Error when starting with the DB.' );
    }
};

// ? Export
module.exports = {
    callDB
}
