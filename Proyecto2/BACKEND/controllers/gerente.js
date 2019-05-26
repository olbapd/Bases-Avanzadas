Promociones = require('../models/promociones');
Libro = require('../models/libro');
Tema = require('../models/tema');
Pedido = require('../models/pedidos');

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

exports.getConsulta1 = async function (req, res) {
    let lista= new Array();
    let listaF= new Array();
    Pedido.find({ 'libreria': req.params.libreria_id },async function (err, pedidos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        } 
        var cuenta = pedidos.length;
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
    var lista = new Array();
    var list = new Array();
    Usuario.find({ 'tipoUsuario': 2 },async function (err, usuarios) {
        var cantusuarios =  usuarios.length;
        
            for (let e = 0; e < cantusuarios; e++) {
                
                Pedido.find({ 'cliente': usuarios[e]._id,'libreria': req.params.libreria_id }, async function (err, pedido) {
                    list.length=0;
                    var cantpedidos = pedido.length;
                    for (let i = 0; i < cantpedidos; i++) {
                        list.push(pedido[i].libros.length);
                    }
                    lista.push({"cliente_id":usuarios[e]._id,"rango":[Math.min(...list),Math.max(...list)]});
                });
            
                
            }

        setTimeout(function(){ 
            res.json({
            status: true,
            data:lista
        });}, 2000);
    });
};

exports.getConsulta3 = async function (req, res) {
    var list = new Array();
    Pedido.find({ 'libreria': req.params.libreria_id },async function (err, pedidos) {
        var cantpedidos = pedidos.length;
        Libro.get(function (err, libros) {
            var cantlibros = libros.length;
            for (var e = 0; e < cantlibros; e++) {
                var cant = 0;
                for (var i = 0; i < cantpedidos; i++) {
                    var librosc = pedidos[i].libros.length;
                        for (var u = 0; u < librosc; u++) {
                            if(libros[e]._id==pedidos[i].libros[u]){
                                cant = cant+1
                            }
                            else{continue}
                        }
                        
                    }
                    list.push({"nombre":libros[e].nombre,"cantidad":cant});
        }
        var top5 = list.sort(function(a, b) { return a.cantidad < b.cantidad ? 1 : -1; })
                .slice(0, 5);

        res.json({
            status: true,
            data:top5
        });

    });
});
};

exports.getConsulta4 = async function (req, res) {
    var lista = new Array();
    Usuario.find({ 'tipoUsuario': 2 },async function (err, usuarios) {
        var cantusuarios =  usuarios.length;
        
            for (let e = 0; e < cantusuarios; e++) {
                Pedido.find({ 'cliente': usuarios[e]._id,'libreria': req.params.libreria_id}, async function (err, pedido) {
                    lista.push({"cliente_id":usuarios[e]._id,"cantidad":pedido.length}); 
                });
            }
        
        setTimeout(function(){ 
            var top3 = lista.sort(function(a, b) { return a.cantidad < b.cantidad ? 1 : -1; }).slice(0, 3);
            res.json({
            status: true,
            data:lista
        });}, 2000);
    });
   
};