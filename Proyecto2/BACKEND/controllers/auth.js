Usuario = require('../models/usuario');

exports.view = function (req, res) {
    Usuario.find({ usuario: req.body.usuario }, function (err, usuario) {


        if (err) {
            res.json({
                error:true,
                message: err,
            });
            return
        }
        else if(req.body.contrasena == usuario[0].contrasena) {
            res.json({
                status: true,
                data:usuario
            });
            return
        }
        else {
            res.json({});
            return
        }
        
    });
};