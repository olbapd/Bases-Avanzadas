Usuario = require('../models/usuario');

exports.view = function (req, res) {
    Usuario.find({ 'usuario': req.body.usuario }, function (err, usuario) {


        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        else if(req.body.contrasena == usuario[0].contrasena) {
            res.json({
                status: "success"
            });
            return
        }
        else {
            res.json({status: "error",
            message: err,});
            return
        }
        
    });
};