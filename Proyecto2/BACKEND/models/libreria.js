var mongoose = require('mongoose');
// Setup schema
var libreriaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    pais: {
        type: Number,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    horario:{
        type: String,
        required: true
    }
});
// Export Libreria model
var Libreria = module.exports = mongoose.model('Libreria', libreriaSchema);
module.exports.get = function (callback, limit) {
    Libreria.find(callback).limit(limit);
}