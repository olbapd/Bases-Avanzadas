var mongoose = require('mongoose');
// Setup schema
var pedidoSchema = mongoose.Schema({
    cliente: {
        type: Number,
        required: true,
        unique:true
    },
    libros: {
        type: [String],
        required: true
    },
    fechaPedido: {
        type: Date,
        required: true
    },
    montoTotal: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
});
// Export Estilo model
var Pedido = module.exports = mongoose.model('Pedido', pedidoSchema);
module.exports.get = function (callback, limit) {
    Pedido.find(callback).limit(limit);
}