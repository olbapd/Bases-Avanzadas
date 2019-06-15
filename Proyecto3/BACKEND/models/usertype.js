//UserType Models

var mongoose = require('mongoose');
// Setup schema
var usertypeSchema = mongoose.Schema({
    _id:Number,
    name: {
        type: String,
        required: true,
        unique:true
    }
},{ _id: false });
// Export Estilo model
var UserType = module.exports = mongoose.model('UserType', usertypeSchema);
module.exports.get = function (callback, limit) {
    UserType.find(callback).limit(limit);
}