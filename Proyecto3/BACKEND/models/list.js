
var mongoose = require('mongoose');
// Setup schema
var listSchema = mongoose.Schema({
    _id:String,
    user: {
        type: String,
        required: true
    },
    origen: {
        type: String,
        required: true
    },
    placelist:{
        type: [String],
        required: true
    },
    distance:{
        type: [Number],
        required: true
    }
},{ _id: false });
// Export Company model
var List = module.exports = mongoose.model('List', listSchema);
module.exports.get = function (callback, limit) {
    List.find(callback).limit(limit);
}