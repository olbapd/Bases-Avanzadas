Promociones = require('../../models/promociones');
Libro = require('../../models/libro');

// Handle view Promociones info by fecha

exports.getPromoFecha = function (req, res) {
    Promocion.get('_id nombre fechaInicio fechaFin',function (err, promociones) {
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

// Handle update libro info
exports.updateEstadoLibro = function (req, res) {
    Libro.findById(req.params.libro_id, function (err, libro) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        libro.estado = req.body.estado;
        // save the model and check for errors
        libro.save(function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success"
            });
        });
    });
};