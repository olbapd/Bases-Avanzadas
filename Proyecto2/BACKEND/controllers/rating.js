Rating = require('../models/rating');

// // Handle update vehiculo info
// exports.update = function (req, res) {
//     Rating.findById(req.params.rating_id, function (err, rating) {
//         if (err) {
//             res.json({
//                 status: "error",
//                 message: err,
//             });
//             return
//         }
//             res.json({
//                 status: "success",
//                 data: rating
//             });
//         });
// };

// Handle view vehicule info by id
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