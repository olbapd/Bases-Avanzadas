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
var usuario = require('./controllers/usuario');
// usuario routes
router.route('/usuarios')
    .get(usuario.index)
    .post(usuario.new);
router.route('/usuario/:usuario_id')
    .get(usuario.view)
    .put(usuario.update)
    .delete(usuario.delete);

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
router.route('/libroXlibreria/:libreria_id')
    .get(libro.getlibroXlibreria);

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
router.route('/pedido/libreria/:libreria_id')
    .get(pedido.getPedidoXlibreria);

router.route('/pedido/estado/:pedido_id')
    .put(pedido.updateEstado);

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

// Import rating controller
var rating = require('./controllers/rating');
// rating routes
router.route('/ratings')
    .get(rating.index)
    .post(rating.new);
router.route('/rating/:rating_id')
    .get(rating.view)
    .put(rating.update)
    .delete(rating.delete);

// Import tema controller
var tema = require('./controllers/tema');
// tema routes
router.route('/temas')
    .get(tema.index)
    .post(tema.new);
router.route('/tema/:tema_id')
    .get(tema.view)
    .delete(tema.delete);

// Import tipocliente controller
var tipocliente = require('./controllers/tipoUsuario');
// tipocliente routes
router.route('/tiposUsuario')
    .get(tipocliente.index)
    .post(tipocliente.new);
router.route('/tipoUsuario/:tipoUsuario_id')
    .get(tipocliente.view)
    .delete(tipocliente.delete);
// Import auth controller
var auth = require('./controllers/auth');
//aut route
router.route('/login')
    .post(auth.view);


//Storage
var storage = require('./controllers/storage');
router.use('/storage',storage);

//agente
var agente = require('./controllers/agente');
router.route('/agente/pedidoXestado/:estado')
    .get(agente.getPedidoXEstado);
router.route('/agente/pedidoXcliente/:cliente_id')
    .get(agente.getpedidoXCliente);
router.route('/agente/pedidoXtema/:tema_id')
    .get(agente.getpedidoXTema);
router.route('/agente/pedidoXfecha')
    .post(agente.getpedidoXfecha);
// Export API routes
module.exports = router;