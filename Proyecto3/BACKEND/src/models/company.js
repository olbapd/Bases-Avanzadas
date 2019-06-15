//Company Model

var mongoose = require('mongoose');
// Setup schema
var companySchema = mongoose.Schema({
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
    typeC:{
        type: [String],
        required: true
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    roundsman:{
        type: Number,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    website:{
        type: String,
        required: false
    },
    rating:{
        type: Number,
        required: false
    },
    schedule:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: false
    }
},{ _id: false });
// Export Company model
var Company = module.exports = mongoose.model('Company', companySchema);
module.exports.get = function (callback, limit) {
    Company.find(callback).limit(limit);
}