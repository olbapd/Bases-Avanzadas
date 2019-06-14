//user Controller

User = require('../models/user');
Crypth = require('../sec/crypth');

// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: users
        });
    });
};


// Handle create user actions
exports.new = function (req, res) {
    var user = new User();
    user._id = req.body.idCard;
    user.name = req.body.name;
    user.surname1 = req.body.surname1;
    user.surname2 = req.body.surname2;
    user.borndate = req.body.borndate;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.username = req.body.username;
    user.pass = Crypth.encode(req.body.pass);
    user.typeUser = req.body.typeUser;

    // save the user and check for errors
    user.save(function (err) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:'New contact created'
        });
    });
};


// Handle view user info
exports.view = function (req, res) {
        User.find({ '_id': req.params.user_id }, function (err, user) {

            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                data: user
            });
        });
};

// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        user.email = req.body.email;
        user.pass = Crypth.encode(req.body.pass);
        user.phone = req.body.phone;
        // save the model and check for errors
        user.save(function (err) {
            if (err) {
                res.json({
                    status: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                message:'User info updated'
            });
        });
    });
};



// Handle delete user
exports.delete = function (req, res) {
    User.deleteOne({
        _id: req.params.user_id
    }, function (err, user) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:'User Deleted'
        });
    });
};
