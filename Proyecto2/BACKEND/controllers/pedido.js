Pedido = require('../models/pedidos');


// Handle create pedido
exports.new = function (req, res) {
    var pedido = new Pedido();
    pedido.pedido = req.body.pedido;
    pedido.libros = req.body.libros;
    pedido.fechaPedido = req.body.fechaPedido;
    pedido.montoTotal = req.body.montoTotal;
    pedido.estado = req.body.estado;

    // save the contact and check for errors
    pedido.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: pedido
        });
    });
};

// Handle update vehiculo info
exports.update = function (req, res) {
    Pedido.findById(req.params.pedido_id, function (err, pedidos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        pedidos.pedido = req.body.pedido;
        pedidos.libros = req.body.libros;
        pedidos.fechaPedido = req.body.fechaPedido;
        pedidos.montoTotal = req.body.montoTotal;
        pedidos.estado = req.body.estado;

        // save the model and check for errors
        pedidos.save(function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: pedidos
            });
        });
    });
};


exports.index = function (req, res) {
    Pedido.get(function (err, pedidos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: pedidos
        });
    });
};



// Handle view vehicule info by id
exports.view = function (req, res) {
    Pedido.find({ '_id': req.params.pedido_id }, function (err, pedido) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: pedido
        });
    });
};

exports.delete = function (req, res) {
    Pedido.deleteOne({
        _id: req.params.pedido_id
    }, function (err, pedidos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
        });
    });
};

