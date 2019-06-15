//Product Controller


Product = require('../models/product');


// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, products) {
    	//TypeC.populate(companies, { path: "tipeC" }, function (err, companies) {

	        if (err) {
	            res.json({
	                error: true,
	                message: err,
	            });
	            return
	        }
	        res.json({
	            status: true,
	            data: products
	        });
    	});

    //});
};



// Handle create product actions
exports.new = function (req, res) {
    var product = new Product();
    product._id = req.body.idProduct;
    product.name = req.body.name;
    product.description = req.body.description
    product.price = req.body.price;
    product.photo = req.body.photo;
    product.company = req.body.idCompany
    

    // save the product and check for errors
    product.save(function (err) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:'New product created'
        });
    });
};


// Handle view product info by ID
exports.view = function (req, res) {
        Product.find({ '_id': req.params.product_id }, function (err, product) {
        	//TypeC.populate(company, { path: "typeC" }, function (err, company) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                data: product
            });
        });

	//});
};


// Handle view product info by Company
exports.getproductBYcompany = function (req, res) {
    Product.find({ 'company': req.params.company_id }, function (err, products) {
        if (err) {
            res.json({
            error: true,
            message: err,
        	});
            return
        }
        res.json({
            status: true,
            data: products
        });
    });
        
};


// Handle update product info
exports.update = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
		    product.description = req.body.description
    		product.price = req.body.price;
    		product.photo = req.body.photo;
        // save the model and check for errors
        product.save(function (err) {
            if (err) {
                res.json({
                    status: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                message:'Product info updated'
            });
        });
    });
};



// Handle delete product
exports.delete = function (req, res) {
    Product.deleteOne({
        _id: req.params.product_id
    }, function (err, company) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:'Product Deleted'
        });
    });
};
