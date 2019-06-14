// Product models

var mongoose = require('mongoose');
// Setup schema
var productSchema = mongoose.Schema({
    _id:String,
    name: {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    photo:{
        type: String,
        required: false
    },
    company:{
    	type: String,
    	required: true
    }
},{ _id: false });
// Export Product model
var Product = module.exports = mongoose.model('Product', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}