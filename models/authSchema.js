const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    name: { type: String, default: 'anonymous' },
    age: { type: Number, min: 18, index: true },
    email: {type: String},
    password: {type: String}
})

const authModel = mongoose.model('Authentication', authSchema)

module.exports = authModel;