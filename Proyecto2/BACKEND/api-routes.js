// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to MongoDB RESTApi!',
    });
});

// Import Pais controller
var pais = require('./controllers/pais');
// Pais routes
router.route('/pais')
    .get(pais.index)
    .post(pais.new);



// Export API routes
module.exports = router;