// order Controller

Order = require('../models/order');

// Handle index actions
exports.index = function (req, res) {
    Order.get(function (err, orders) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: orders
        });
    });
};


// Handle create order
exports.new = function (req, res) {
    var order = new Order();
    order.user = req.body.user;
    order.products = req.body.products;
    order.amount = req.body.amount;
    order.price = req.body.price;
    order.date = req.body.date;
    order.state = req.body.state;
    order.observation = req.body.observation;
    order.totalcash = req.body.totalcash;
    order.total = req.body.total;


    // save the contact and check for errors
    order.save(function (err) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:"New Order Created"
        });
    });
};


// Handle chenge state of order
exports.updateState = function (req, res) {
    Order.findById(req.params.order_id, function (err, order) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        order.state = req.body.state;

        // save the model and check for errors
        order.save(function (err) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                message:"State Changed"
            });
        });
    });
};



// Handle oder by id
exports.view = function (req, res) {
    Order.find({ '_id': req.params.order_id }, function (err, order) {

        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: order
        });
    });
};

// Handle oder by user
exports.getorderBYuser = function (req, res) {
    Order.find({ 'user': req.params.user_id }, function (err, orders) {

        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            data: orders
        });
    });
};


