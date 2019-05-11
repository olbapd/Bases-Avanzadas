var mongoose = require('mongoose');
// Setup schema
var libroSchema = mongoose.Schema({
    _id:String,
    nombre: {
        type: String,
        required: true,
    },
    libreria: {
        type: String,
        required: true
    },
    tema:{
        type: String,
        required: true
    },
    descripcion:{
        type: String
    },
    foto:{
        type: String
    },
    precio:{
        type: Number,
        required: true
    },
    cantidadVendida:{
        type: Number,
        required: true
    },
    cantidadDisponible:{
        type: Number,
        required: true
    },
    estado:{
        type: String,
        required: true,
    }
},{_id: false });
// Export Libreria model
var Libro = module.exports = mongoose.model('Libro', libroSchema);
module.exports.get = function (callback, limit) {
    Libro.find(callback).limit(limit);
}