// order Model

var mongoose = require('mongoose');
// Setup schema
var orderSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    products: {
        type: [String],
        required: true
    },
    amount: {
        type: [Number],
        required: true
    },
    price: {
        type: [Number],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    observation: {
        type: String,
        required: true
    },
    totalcash:
    {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});
// Export Estilo model
var Order = module.exports = mongoose.model('Order', orderSchema);
module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
}