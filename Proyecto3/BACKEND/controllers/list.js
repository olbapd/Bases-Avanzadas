List = require('../models/list');


// Handle index actions
exports.index = function (req, res) {
    List.get(function (err, list) {

	        if (err) {
	            res.json({
	                error: true,
	                message: err,
	            });
	            return
	        }
	        res.json({
	            status: true,
	            data: list
	        });
    	});
};



// Handle create list actions
exports.newlist = function (req, res) {
    var list = new List();
    list._id = req.body.idList;
    list.user = req.body.user;
    list.origen = req.body.origen
    list.placelist = req.body.placelist;
    list.distance = req.body.distance;    

    // save the list and check for errors
    list.save(function (err) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:'New list created'
        });
    });
};


// Handle view list info
exports.view = function (req, res) {
        List.find({ '_id': req.params.list_id }, function (err, list) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                data: list
            });
        });

};


//List by user
exports.getlistBYuser = function (req, res) {
    List.find({ 'user': req.params.user_id }, function (err, list) {
        if (err) {
            res.json({
            error: true,
            message: err,
            });
            return
        }
        res.json({
            status: true,
            data: list
        });
    });
        
};

// Handle delete company
exports.deletelist = function (req, res) {
    List.deleteOne({
        _id: req.params.list_id
    }, function (err, list) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:'List Deleted'
        });
    });
};