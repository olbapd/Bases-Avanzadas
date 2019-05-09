var mongoose = require('mongoose');
// Setup schema
var promocionSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    porcenDescuento: {
        type: int,
        required: true
    },
    libreria: {
        type: string,
        required: true
    },
});
// Export Estilo model
var Promocion = module.exports = mongoose.model('Promocion', promocionSchema);
module.exports.get = function (callback, limit) {
    Promocion.find(callback).limit(limit);
}