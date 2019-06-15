//TypeCompany Controller

TypeCompany = require('../models/typecompany');


// Handle index actions
exports.index = function (req, res) {
    TypeCompany.get(function (err, typecompanies) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: typecompanies
        });
    });
};

// Handle create typeAction actions
exports.new = function (req, res) {
    var typecompany = new TypeCompany();
    typecompany.typeC= req.body.typeC;

    // save the type and check for errors
    typecompany.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            message:'New typecompany created'
        });
    });
};
