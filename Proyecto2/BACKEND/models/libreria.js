var mongoose = require('mongoose');
// Setup schema
var libreriaSchema = mongoose.Schema({
    _id:String,
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    pais: {
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true,
        unique: true
    },
    horario:{
        type: String,
        required: true
    }
},{ _id: false });
// Export Libreria model
var Libreria = module.exports = mongoose.model('Libreria', libreriaSchema);
module.exports.get = function (callback, limit) {
    Libreria.find(callback).limit(limit);
}