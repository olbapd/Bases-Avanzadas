Promocion = require('../models/promociones');


// Handle create promocion
exports.new = function (req, res) {
    var promocion = new Promocion();
    promocion.nombre = req.body.nombre;
    promocion.descripcion = req.body.descripcion;
    promocion.fechaInicio = req.body.fechaInicio;
    promocion.fechaFin = req.body.fechaFin;
    promocion.porcenDescuento = req.body.porcenDescuento;   
    promocion.libreria = req.body.libreria;

    // save the contact and check for errors
    promocion.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: promocion
        });
    });
};

// Handle update vehiculo info
exports.update = function (req, res) {
    Promocion.findById(req.params._id, function (err, promociones) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        promociones.nombre = req.body.nombre;
        promociones.descripcion = req.body.descripcion;
        promociones.fechaInicio = req.body.fechaInicio;
        promociones.fechaFin = req.body.fechaFin;
        promociones.porcenDescuento = req.body.porcenDescuento;   
        promociones.libreria = req.body.libreria;

        // save the model and check for errors
        promociones.save(function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: promociones
            });
        });
    });
};

// Handle update vehiculo info
exports.getAllpromociones = function (req, res) {
    Promocion.get(function (err, promociones) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: promociones
        });
    });
};

// Handle view vehicule info by id
exports.view = function (req, res) {
    Promocion.find({ '_id': req.params.promocion_id }, function (err, promocion) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: promocion
        });
    });
};

exports.delete = function (req, res) {
    Promocion.deleteOne({
        _id: req.params._id
    }, function (err, promociones) {
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