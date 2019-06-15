// user Model

var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    surname1: {
        type: String,
        required: true
    },
    surname2: {
        type: String,
        required: true
    },
    borndate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    typeUser: {
        type: String,
        required: true
    }



}, { _id: false });
// Export Estado model
var User = module.exports = mongoose.model('User', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}