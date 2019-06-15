// company Controller

Company = require('../models/company');
TypeC = require('../models/typecompany')

// Handle index actions
exports.index = function (req, res) {
    Company.get(function (err, companies) {

	        if (err) {
	            res.json({
	                error: true,
	                message: err,
	            });
	            return
	        }
	        res.json({
	            status: true,
	            data: companies
	        });
    	});
};



// Handle create company actions
exports.new = function (req, res) {
    var company = new Company();
    company._id = req.body.idCompany;
    company.name = req.body.name;
    company.description = req.body.description
    company.typeC = req.body.typeC;
    company.latitude = req.body.latitude;
    company.longitude = req.body.longitude;
    company.address = req.body.address;
    company.roundsman = req.body.roundsman;
    company.phone = req.body.phone;
    company.website = req.body.website;
    company.rating = req.body.rating;
    company.schedule = req.body.schedule;
    company.photo = req.body.photo;
    

    // save the company and check for errors
    company.save(function (err) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        res.json({
            status: true,
            message:'New company created'
        });
    });
};


// Handle view company info
exports.view = function (req, res) {
        Company.find({ '_id': req.params.company_id }, function (err, company) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                data: company
            });
        });

};


// Handle update company info
exports.update = function (req, res) {
    Company.findById(req.params.company_id, function (err, company) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
		    company.latitude = req.body.latitude;
		    company.longitude = req.body.longitude;
		    company.address = req.body.address;
		    company.roundsman = req.body.roundsman;
		    company.phone = req.body.phone;
		    company.website = req.body.website;
		    company.rating = req.body.rating;
		    company.schedule = req.body.schedule;
		    company.photo = req.body.photo;
        // save the model and check for errors
        company.save(function (err) {
            if (err) {
                res.json({
                    status: true,
                    message: err,
                });
                return
            }
            res.json({
                status: true,
                message:'Company info updated'
            });
        });
    });
};



// Handle delete company
exports.delete = function (req, res) {
    Company.deleteOne({
        _id: req.params.company_id
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
            message:'Company Deleted'
        });
    });
};
