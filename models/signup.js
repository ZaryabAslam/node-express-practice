const mongoose = require('mongoose');

const Signupschema = mongoose.Schema({
    email: {type: String},
    password: {type: String}
})

const SignupModel = mongoose.model('Signup', Signupschema);

module.exports = SignupModel;