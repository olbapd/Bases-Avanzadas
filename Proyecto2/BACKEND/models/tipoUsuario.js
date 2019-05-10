var mongoose = require('mongoose');
// Setup schema
var tipousuarioSchema = mongoose.Schema({
    _id:Number,
    nombre: {
        type: String,
        required: true,
        unique:true
    }
},{ _id: false });
// Export Estilo model
var TipoUsuario = module.exports = mongoose.model('TipoUsuario', tipousuarioSchema);
module.exports.get = function (callback, limit) {
    TipoUsuario.find(callback).limit(limit);
}