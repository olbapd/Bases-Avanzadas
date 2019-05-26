// Import Modelo model
Libro = require('../models/libro');
Libreria = require('../models/libreria');
Tema = require('../models/tema');



// Handle index actions
exports.index = function (req, res) {
    Libro.get(function (err, libros) {
        Libreria.populate(libros, { path: "libreria" }, function (err, libros) {
            Tema.populate(libros, { path: "tema" }, function (err, libros) {
                if (err) {
                    res.json({
                        error: true,
                        message: err,
                    });
                    return
                }
               /*                  // Imports the Google Cloud client library
                const {Translate} = require('@google-cloud/translate');

                // Your Google Cloud Platform project ID
                const projectId = "confident-trail-106904";

                // Instantiates a client
                const translate = new Translate({
                projectId: projectId,
                });

                // The text to translate
                const text = "libros";
                // The target language
                const target = 'ru';

                // Translates some text into Russian
                translate
                .translate(text, target)
                .then(results => {
                    const translation = results[0];

                    console.log(`Text: ${text}`);
                    console.log(`Translation: ${translation}`);
                })
                .catch(err => {
                    console.error('ERROR:', err);
                }); */
                res.json({
                    status: true,
                    data: libros
                });
            });
        });
    });
};

// Handle create libro actions
exports.new = function (req, res) {
    var libro = new Libro();
    libro._id = req.body.libro_id;
    libro.nombre = req.body.nombre;
    libro.libreria = req.body.libreria_id;
    libro.tema = req.body.tema_id;
    libro.descripcion = req.body.descripcion;
    libro.foto = req.body.foto;
    libro.precio = req.body.precio;
    libro.cantidadVendida = req.body.cantidadVendida;
    libro.cantidadDisponible = req.body.cantidadDisponible;
    libro.estado = req.body.estado;

    // save the libro and check for errors
    libro.save(function (err) {
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
// Handle view libro info by id
exports.view = function (req, res) {
    Libro.find({ '_id': req.params.libro_id }, function (err, libro) {
        Libreria.populate(libro, { path: "libreria" }, function (err, libro) {
            Tema.populate(libro, { path: "tema" }, function (err, libro) {
                if (err) {
                    res.json({
                        error: true,
                        message: err,
                    });
                    return
                }
                res.json({
                    status: true,
                    data: libro
                });
            });
        });
    });
};

// Handle view libro info by Libreria
exports.getlibroXlibreria = function (req, res) {
    Libro.find({ 'libreria': req.params.libreria_id }, function (err, libros) {
            Tema.populate(libros, { path: "tema" }, function (err, libros) {
                if (err) {
                        res.json({
                            error: true,
                            message: err,
                        });
                        return
                    }
                    res.json({
                        status: true,
                        data: libros
                    });
                });
            });
        
};

// Handle update libro info
exports.update = function (req, res) {
    Libro.findById(req.params.libro_id, function (err, libro) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        libro.libreria = req.body.libreria_id;
        libro.descripcion = req.body.descripcion;
        libro.foto = req.body.foto;
        libro.precio = req.body.precio;
        libro.cantidadVendida = req.body.cantidadVendida;
        libro.cantidadDisponible = req.body.cantidadDisponible;
        libro.estado = req.body.estado;
        // save the model and check for errors
        libro.save(function (err) {
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
// Handle delete libreria
exports.delete = function (req, res) {
    Libro.deleteOne({
        _id: req.params.libro_id
    }, function (err, libro) {
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
