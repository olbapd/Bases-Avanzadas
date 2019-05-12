Libro = require('../models/libro');
Tema = require('../models/tema');

// Handle view libro info by tema
exports.getlibroXtema = function (req, res) {
    Libro.find({ 'tema': req.params.tema_id }, function (err, libros) {
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
};

// Handle view libro info by Nombre
exports.getlibroXnombre = function (req, res) {
    Libro.find({ 'nombre': req.params.nombre }, function (err, libros) {
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
};

// Handle view libro info by Libreria
exports.getlibroXlibreria = function (req, res) {
    Libro.find({ 'libreria': req.params.libreria }, function (err, libros) {
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
};

//Cantidad de libros pedidos by tema 
//$proyect -> elimina el dato _id y deja solo total, 0 quite, 1 deje. el simbolo $ antes de suma es para indicar que es un operando 
//aggregate -> para hacer operaciones comlejas con columnas, group para hacer suma, para divisiones y multi van dentro de proyect, dentro de group no funcionan

exports.getCantLibroXTema = function (req, res) {
    Libro.find({ 'tema': req.params.tema }).countDocuments(function (err, cuenta) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: cuenta
        });
    });
}

exports.getPromLibroPedidoXTema = function (req, res) {
    Libro.find({ 'tema': req.params.tema }).countDocuments(function (err, cuenta) {
        Libro.aggregate([{ $match: { 'tema': req.params.tema } }, { $group: { _id: null, 'suma': { $avg: 'cuenta' } } }], function (err, result) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                data: result
            });
        });
    });
}

// Hay que hacer el sort respecto a cantidad, que no tenemos
exports.getTopLibrosVendidos = function (req, res) {
    Libro.find({ 'tema': req.params.tema }).sort({ cantidad: asc }).limit(5).exec(function (err, result) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: result
        });
    });
}