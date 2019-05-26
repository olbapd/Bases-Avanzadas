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
exports.getpedidoXCliente = function (req, res) {
    Pedidos.find({ 'cliente': req.params.cliente_id }, function (err, estados) {
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
exports.getpedidoXTema = function (req, res) {
    Pedidos.find({ 'tema': req.params.tema_id }, function (err, estados) {
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
exports.getpedidoXfecha = function (req, res) {
    Pedidos.find({ fechaPedido : { $gt: new Date(req.body.start), $lt: new Date(req.body.end) }}, function (err, estados) {
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

