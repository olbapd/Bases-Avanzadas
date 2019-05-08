var mongoose = require('mongoose');
// Setup schema
var tipoclienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique:true
    }
});
// Export Estilo model
var Tipocliente = module.exports = mongoose.model('Tipocliente', tipoclienteSchema);
module.exports.get = function (callback, limit) {
    Tipocliente.find(callback).limit(limit);
}