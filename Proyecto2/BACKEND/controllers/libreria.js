// Import Modelo model
Libreria = require('../models/libreria');
Pais = require('../models/pais');
// Handle index actions
exports.index = function (req, res) {
    Libreria.get(function (err, librerias) {
        Pais.populate(librerias, { path: "pais" }, function (err, librerias) {
            if (err) {
                res.json({
                    error:true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                data: librerias
            });
        });
    });
};

// Handle create libreria actions
exports.new = function (req, res) {
    var libreria = new Libreria();
    libreria._id = req.body.codigo;
    libreria.nombre = req.body.nombre;
    libreria.pais = req.body.pais;
    libreria.ubicacion = req.body.ubicacion;
    libreria.telefono = req.body.telefono;
    libreria.horario = req.body.horario;

    // save the libreria and check for errors
    libreria.save(function (err) {
        if (err) {
            res.json({
                error:true,
                message: err,
            });
            return
        }
        res.json({
            status: true
        });
    });
};
// Handle view libreria info by id
exports.view = function (req, res) {
    Libreria.find({ '_id': req.params.libreria_id }, function (err, libreria) {
        Pais.populate(libreria, { path: "pais" }, function (err, librerias) {

            if (err) {
                res.json({
                    error:true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                data: libreria
            });
        });
    });
};

// Handle update libreria info
exports.update = function (req, res) {
    Libreria.findById(req.params.libreria_id, function (err, libreria) {
        if (err) {
            res.json({
                error:true,
                message: err,
            });
            return
        }
        libreria.nombre = req.body.nombre;
        libreria.pais = req.body.pais_id;
        libreria.ubicacion = req.body.ubicacion;
        libreria.telefono = req.body.telefono;
        libreria.horario = req.body.horario;
        // save the model and check for errors
        libreria.save(function (err) {
            if (err) {
                res.json({
                    error:true,
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
// Handle delete libreria
exports.delete = function (req, res) {
    Libreria.deleteOne({
        _id: req.params.libreria_id
    }, function (err, libreria) {
        if (err) {
            res.json({
                error:true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
        });
    });
};
