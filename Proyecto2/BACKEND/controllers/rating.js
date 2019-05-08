Rating = require('../models/rating');


exports.new = function (req, res) {
    var rating = new Ratin();
    rating.nombre = req.body.nombre;
    rating.comentario = req.body.comentario;

    rating.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: rating
        });
    });
};

exports.view = function (req, res) {
    Rating.find({ '_id': req.params.rating_id }, function (err, rating) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: rating
        });
    });
};

exports.index = function (req, res) {
    Rating.get(function (err, rates) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: rates
        });
    });
};

exports.update = function (req, res) {
    Rating.findById(req.params.rating_id, function (err, rates) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        rates.nombre = req.body.nombre;
        rates.comentario = req.body.comentario;
        rates.save(function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: rates
            });
        });
    });
};

exports.delete = function (req, res) {
    Rating.deleteOne({
        _id: req.params.rating_id
    }, function (err, rates) {
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