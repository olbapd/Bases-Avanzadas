Tipocliente = require('../models/tipoCliente');

exports.getAllTipos = function (req, res) {
    Tipocliente.get(function (err, tipoCliente) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: tipoCliente
        });
    });
};


// Handle view vehicule info by id
exports.view = function (req, res) {
    Tipocliente.find({ '_id': req.params.tipocliente_id }, function (err, tipocliente) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: tipocliente
        });
    });
};