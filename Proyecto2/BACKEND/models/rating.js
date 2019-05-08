var mongoose = require('mongoose');
// Setup schema
var ratingSchema = mongoose.Schema({
    puntuacion: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    }
});
// Export Rating model
var Rating = module.exports = mongoose.model('Rating', ratingSchema);
module.exports.get = function (callback, limit) {
    Rating.find(callback).limit(limit);
}