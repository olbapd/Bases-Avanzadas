Promocion = require('../models/promociones');


// Handle create promocion
exports.new = function (req, res) {
    var promocion = new Promocion();
    promocion.nombre = req.body.nombre;
    promocion.descripcion = req.body.descripcion;
    promocion.fechaInicio = req.body.fechaInicio;
    promocion.fechaFin = req.body.fechaFin;
    promocion.porcenDescuento = req.body.porcenDescuento;   
    promocion.libro = req.body.libro;
    promocion.libreria = req.body.libreria;
    // save the contact and check for errors
    promocion.save(function (err) {
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
};

// Handle update vehiculo info
exports.update = function (req, res) {
    Promocion.findById(req.params.promocion_id, function (err, promociones) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        promociones.nombre = req.body.nombre;
        promociones.descripcion = req.body.descripcion;
        promociones.fechaInicio = req.body.fechaInicio;
        promociones.fechaFin = req.body.fechaFin;
        promociones.porcenDescuento = req.body.porcenDescuento;   
        promociones.libro = req.body.libro;

        // save the model and check for errors
        promociones.save(function (err) {
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

// Handle update promocion info
exports.index = function (req, res) {
    Promocion.get(function (err, promociones) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: promociones
        });
    });
};

// Handle view vehicule info by id
exports.view = function (req, res) {
    Promocion.find({ '_id': req.params.promocion_id }, function (err, promocion) {

        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: promocion
        });
    });
};

exports.getpromoXlibreria = function (req, res) {
    Promocion.find({ 'libreria': req.params.libreria_id }, function (err, promocion) {

        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: promocion
        });
    });
};

exports.delete = function (req, res) {
    Promocion.deleteOne({
        _id: req.params.promocion_id
    }, function (err, promociones) {
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
};