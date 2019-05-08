var mongoose = require('mongoose');
// Setup schema
var coleccionLibroSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    libros: {
        type: [String],
        required: true
    },
    cantidadVendida:{
        type: Number,
        required: true
    },
    cantidadDisponible:{
        type: Number,
        required: true
    }
});
// Export Coleccion model
var Coleccion = module.exports = mongoose.model('Coleccion', coleccionLibroSchema);
module.exports.get = function (callback, limit) {
    Coleccion.find(callback).limit(limit);
}