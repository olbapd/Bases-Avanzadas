// order Controller

Order = require('../models/order');

// Handle index actions
exports.index = function (req, res) {
    Order.get(function (err, orders) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: orders
        });
    });
};


// Handle create order
exports.new = function (req, res) {
    var order = new Order();
    order.user = req.body.user;
    order.products = req.body.products;
    order.amount = req.body.amount;
    order.price = req.body.price;
    order.date = req.body.date;
    order.state = req.body.state;
    order.observation = req.body.observation;
    order.totalcash = req.body.totalcash;
    order.total = req.body.total;


    // save the contact and check for errors
    order.save(function (err) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:"New Order Created"
        });
    });
};

/*
// Handle update vehiculo info
exports.update = function (req, res) {
    Pedido.findById(req.params.pedido_id, function (err, pedidos) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        pedidos.libros = req.body.libros;
        pedidos.fechaPedido = req.body.fechaPedido;
        pedidos.montoTotal = req.body.montoTotal;
        pedidos.estado = req.body.estado;

        // save the model and check for errors
        pedidos.save(function (err) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true
            });
        });
    });
};

exports.updateEstado = function (req, res) {
    Pedido.findById(req.params.pedido_id, function (err, pedidos) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        pedidos.estado = req.body.estado;

        // save the model and check for errors
        pedidos.save(function (err) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true
            });
        });
    });
};



// Handle view vehicule info by id
exports.view = function (req, res) {
    Pedido.find({ '_id': req.params.pedido_id }, function (err, pedido) {

        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: pedido
        });
    });
};

exports.getPedidoXcliente = function (req, res) {
    Pedido.find({ 'cliente': req.params.cliente_id }, function (err, pedido) {

        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: pedido
        });
    });
};

exports.getPedidoXlibreria= function (req, res) {
    Pedido.find({ 'libreria': req.params.libreria_id }, function (err, estados) {
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

exports.delete = function (req, res) {
    Pedido.deleteOne({
        _id: req.params.pedido_id
    }, function (err, pedidos) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
        });
    });
};*/