// Import Modelo model
Pais = require('../models/pais');
// Handle index actions
exports.index = function (req, res) {
    Pais.get(function (err, paises) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: paises
        });
    });
};

// Handle create libro actions
exports.new = function (req, res) {
    var pais = new Pais();
    pais.nombre= req.body.nombre;

    // save the libro and check for errors
    pais.save(function (err) {
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
