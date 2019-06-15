//userType Controller

UserType = require('../models/usertype');
User = require('../models/user');

// Handle view usertype
exports.index = function (req, res) {
    UserType.get(function (err, userstype) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: userstype
        });
    });
};

//Handle create usertype
exports.new = function (req, res) {
    var usertype = new UserType();
    usertype._id = req.body.id;
    usertype.name = req.body.name;

    // save the contact and check for errors
    usertype.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: usertype,
            message:"UserType created"
        });
    });
};

//Handle view usertype by id
exports.view = function (req, res) {
    UserType.find({ '_id': req.params.usertype_id }, function (err, usertype) {

        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: usertype
        });
    });
};


// Handle delete usertype
exports.delete = function (req, res) {
    UserType.deleteOne({_id: req.params.usertype_id}, function (err, usertype) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            message:"UserType deleted"
        });
    });
};


exports.getuserBYusertype = function (req, res) {
        User.find({ 'typeUser': req.params.usertype_id }, function (err, user) {
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