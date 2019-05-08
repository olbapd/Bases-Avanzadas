Pedidos = require('../models/pedidos');

// Handle view libro info by tema
exports.getPedidoXEstado= function (req, res) {
    Pedido.find({ 'estado': req.params.estado }, function (err, estados) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: estados
        });
    });
};

// Handle view libro info by Nombre
exports.getlibroXCliente = function (req, res) {
    Libro.find({ 'cliente': req.params.cliente }, function (err, estados) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: estados
        });
    });
};
