var mongoose = require('mongoose');
// Setup schema
var ratingSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});
// Export Rating model
var Rating = module.exports = mongoose.model('Rating', ratingSchema);
module.exports.get = function (callback, limit) {
    Rating.find(callback).limit(limit);
}