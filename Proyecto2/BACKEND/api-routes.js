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

// Import cliente controller
var cliente = require('./controllers/cliente');
// cliente routes
router.route('/clientes')
    .get(cliente.index)
    .post(cliente.new);
router.route('/cliente/:cliente_id')
    .get(cliente.view)
    .put(cliente.update)
    .delete(cliente.delete);

// Import libreria controller
var libreria = require('./controllers/libreria');
// libreria routes
router.route('/librerias')
    .get(libreria.index)
    .post(libreria.new);
router.route('/libreria/:libreria_id')
    .get(libreria.view)
    .put(libreria.update)
    .delete(libreria.delete);

// Import Pais controller
var pais = require('./controllers/pais');
// Pais routes
router.route('/paises')
    .get(pais.index)
    .post(pais.new);


// Export API routes
module.exports = router;