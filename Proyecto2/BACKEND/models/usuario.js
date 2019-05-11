var mongoose = require('mongoose');
// Setup schema
var usuarioSchema = mongoose.Schema({
    _id: Number,
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    apellido1: {
        type: String,
        required: true
    },
    apellido2: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    tipoUsuario: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    telPrincipal: {
        type: String,
        required: true,
        unique: true
    },
    telSecundario: {
        type:[String],
        required: false
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    }



}, { _id: false });
// Export Estado model
var Usuario = module.exports = mongoose.model('Usuario', usuarioSchema);
module.exports.get = function (callback, limit) {
    Usuario.find(callback).limit(limit);
}