Promociones = require('../models/promociones');
Libro = require('../models/libro');
Tema = require('../models/tema');

// Handle view Promociones info by fecha

exports.getPromoFecha = function (req, res) {
    Promocion.get('_id nombre fechaInicio fechaFin',function (err, promociones) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: promociones
        });
    });
};

exports.getConsulta1 = async function (req, res) {
    let lista= new Array();
    let listaF= new Array();
    Pedido.countDocuments(async function (err, cuenta) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        } 
        Pedido.get(async function (err, pedidos) {
            for (var i = 0; i < cuenta; i++) {
                var listalibros = pedidos[i].libros;
                var cantlibros = pedidos[i].libros.length;
                for (var e = 0; e < cantlibros; e++) {
                    Libro.find({ '_id': listalibros[e]}, function (err, libro) {
                        Tema.populate(libro, { path: "tema" }, function (err, libro) {
                           lista.push({ "valor":libro[0].precio, "tema":libro[0].tema.nombre});
                           
                        });
                    });  
                } 
            }
            
        });
        setTimeout(function(){ 
            var listalenght = lista.length;
            Tema.countDocuments(async function (err, cantTemas) {
                Tema.get(function (err, temas) {
                    for (var i = 0; i < cantTemas; i++) {
                        var cant = 0;
                        var prom = 0;
                        for (var e = 0; e < listalenght; e++) {
                            if (lista[e].tema==temas[i].nombre){
                                cant = cant+1;
                                prom = prom + lista[e].valor;
                            }
                            else{continue}
                        }
                        listaF.push({"nombre":temas[i].nombre,"cantlibros":cant,"prom":prom/cant});
                        
                    }
                    res.json({
                        status: true,
                        data:listaF
                    });
            });
        });
    }, 1000);
    });
};


exports.getConsulta2 = async function (req, res) {
    Pedido.find({ 'cliente': req.params.cliente_id }, function (err, pedido) {
        var cantpedidos = pedido.length;
        var list = new Array();
        for (var i = 0; i < cantpedidos; i++) {
            list.push(pedido[i].libros.length);
        }
        res.json({
            status: true,
            data:[Math.min(...list),Math.max(...list)]
        });
    });
};

exports.getConsulta2 = async function (req, res) {
    Pedido.find({ 'cliente': req.params.cliente_id }, function (err, pedido) {
        var cantpedidos = pedido.length;
        var list = new Array();
        for (var i = 0; i < cantpedidos; i++) {
            list.push(pedido[i].libros.length);
        }
        res.json({
            status: true,
            data:[Math.min(...list),Math.max(...list)]
        });
    });
};
// Handle update libro info
exports.updateEstadoLibro = function (req, res) {
    Libro.findById(req.params.libro_id, function (err, libro) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        libro.estado = req.body.estado;
        // save the model and check for errors
        libro.save(function (err) {
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