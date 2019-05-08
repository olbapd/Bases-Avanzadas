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

// Import libro controller
var libro = require('./controllers/libro');
// libro routes
router.route('/libros')
    .get(libro.index)
    .post(libro.new);
router.route('/libro/:libro_id')
    .get(libro.view)
    .put(libro.update)
    .delete(libro.delete);

// Import Pais controller
var pais = require('./controllers/pais');
// Pais routes
router.route('/paises')
    .get(pais.index)
    .post(pais.new);

// Import pedido controller
var pedido = require('./controllers/pedido');
// pedido routes
router.route('/pedidos')
    .get(pedido.index)
    .post(pedido.new);
router.route('/pedido/:pedido_id')
    .get(pedido.view)
    .put(pedido.update)
    .delete(pedido.delete);

// Import promocion controller
var promocion = require('./controllers/promocion');
// promocion routes
router.route('/promociones')
    .get(promocion.index)
    .post(promocion.new);
router.route('/promocion/:promocion_id')
    .get(promocion.view)
    .put(promocion.update)
    .delete(promocion.delete);

// Export API routes
module.exports = router;