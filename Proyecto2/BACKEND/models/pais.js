var mongoose = require('mongoose');
// Setup schema
var paisSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});
// Export Pais model
var Pais = module.exports = mongoose.model('Pais', paisSchema);
module.exports.get = function (callback, limit) {
    Pais.find(callback).limit(limit);
}