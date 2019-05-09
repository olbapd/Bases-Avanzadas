Tema = require('../models/tema');

exports.index = function (req, res) {
    Tema.get(function (err, temas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: temas
        });
    });
};

// Handle view vehicule info by id
exports.view = function (req, res) {
    Tema.find({ '_id': req.params.tema_id }, function (err, tema) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: tema
        });
    });
};


// Handle create marcas actions
exports.new = function (req, res) {
    var tema = new Tema();
    tema.nombre = req.body.nombre;
    // save the contact and check for errors
    tema.save(function (err) {
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
};

// Handle delete tema
exports.delete = function (req, res) {
    Tema.deleteOne({
        _id: req.params.tema_id
    }, function (err, tema) {
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