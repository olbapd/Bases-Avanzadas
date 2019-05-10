TipoUsuario = require('../models/tipoUsuario');


exports.new = function (req, res) {
    var tipousuario = new TipoUsuario();
    tipousuario._id = req.body.id;
    tipousuario.nombre = req.body.nombre;

    // save the contact and check for errors
    tipousuario.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: tipousuario
        });
    });
};

// Handle view TipoCliente info by id
exports.index = function (req, res) {
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

// Handle view all TipoCliente
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


exports.update = function (req, res) {
    Tipocliente.findById(req.params.tipocliente_id, function (err, tipoclientes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        tipoclientes.nombre = req.body.nombre;

        // save the model and check for errors
        tipoclientes.save(function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: tipoclientes
            });
        });
    });
};

exports.delete = function (req, res) {
    Tipocliente.deleteOne({
        _id: req.params.tipocliente_id
    }, function (err, tipoclientes) {
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