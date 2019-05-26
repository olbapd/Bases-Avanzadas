var mongoose = require('mongoose');
// Setup schema
var ratingSchema = mongoose.Schema({
    comentario: {
        type: String,
        required: true
    },
    libreria: {
        type: String,
        required: true
    }
});
// Export Rating model
var Rating = module.exports = mongoose.model('Rating', ratingSchema);
module.exports.get = function (callback, limit) {
    Rating.find(callback).limit(limit);
}