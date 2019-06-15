// TypeCompany Models

var mongoose = require('mongoose');
// Setup schema
var typecSchema = mongoose.Schema({
    typeC: {
        type: String,
        required: true,
        unique: true
    }
});
// Export Pais model
var TypeC = module.exports = mongoose.model('TypeCompany', typecSchema);
module.exports.get = function (callback, limit) {
    TypeCompany.find(callback).limit(limit);
}