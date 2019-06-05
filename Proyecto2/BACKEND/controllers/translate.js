trans = require('../translate/test');
// Import Modelo model
Libro = require('../models/libro');
Libreria = require('../models/libreria');
Tema = require('../models/tema');



// Handle update libro info
exports.translateTo = function (req, res) {
    Libro.findById(req.params.libro_id, function (err, libro) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        prueba=libro.descripcion;
        res.json({
            status: true,
            data: libro.descripcion,
            translate: trans.prueba("es", req.params.toLang, prueba)
        });
    });

};