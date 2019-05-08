var mongoose = require('mongoose');
// Setup schema
var temaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});
// Export Tema model
var Tema = module.exports = mongoose.model('Tema', temaSchema);
module.exports.get = function (callback, limit) {
    Tema.find(callback).limit(limit);
}