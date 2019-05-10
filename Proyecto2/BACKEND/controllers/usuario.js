// Import Modelo model
Usuario = require('../models/usuario');
// Handle index actions
exports.index = function (req, res) {
    Usuario.get(function (err, usuarios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: usuarios
        });
    });
};

// Handle create marcas actions
exports.new = function (req, res) {
    var usuario = new Usuario();
    usuario._id = req.body.cedula;
    usuario.nombre = req.body.nombre;
    usuario.apellido1 = req.body.apellido1;
    usuario.apellido2 = req.body.apellido2;
    usuario.fechaNacimiento = req.body.fechaNacimiento;
    usuario.tipoUsuario = req.body.tipoUsuario;
    usuario.lugar = req.body.lugar;
    usuario.correo = req.body.correo;
    usuario.telPrincipal = req.body.telPrincipal;
    usuario.telSecundario = req.body.telSecundario;
    usuario.usuario = req.body.usuario;
    usuario.contrasena = req.body.contrasena;

    // save the contact and check for errors
    usuario.save(function (err) {
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
// Handle view vehicule info by id
exports.view = function (req, res) {
        Usuario.find({ '_id': req.params.cliente_id }, function (err, usuario) {

            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: usuario
            });
        });
};

// Handle update cliente info
exports.update = function (req, res) {
    Usuario.findById(req.params.usuario_id, function (err, usuario) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        usuario.lugar = req.body.lugar;
        usuario.correo = req.body.correo;
        usuario.contrasena = req.body.contrasena;
        usuario.telPrincipal = req.body.telPrincipal;
        usuario.telSecundario = req.body.telSecundario;
        // save the model and check for errors
        usuario.save(function (err) {
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
// Handle delete usuario
exports.delete = function (req, res) {
    Usuario.deleteOne({
        _id: req.params.usuario_id
    }, function (err, usuario) {
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
