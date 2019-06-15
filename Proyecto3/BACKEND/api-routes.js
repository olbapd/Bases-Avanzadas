//api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub!',
    });
});


// Import user controller
var userController = require('./controllers/user');

router.route('/user')
    .get(userController.index)
    .post(userController.new);
router.route('/user/:user_id')
    .get(userController.view)
    .put(userController.update)
    .delete(userController.delete);


// Import company controller
var companyController = require('./controllers/company');
// company routes
router.route('/company')
    .get(companyController.index)
    .post(companyController.new);
router.route('/company/:company_id')
    .get(companyController.view)
    .put(companyController.update)
    .delete(companyController.delete);


// Import typecompany controller
var typecompanyController = require('./controllers/typecompany');
// typecompany routes
router.route('/typecompany')
    .get(typecompanyController.index)
    .post(typecompanyController.new);


// Import login controller
var login = require('./controllers/login');
//login route
router.route('/login')
    .post(login.view);


var productController = require('./controllers/product');
// company routes
router.route('/product')
    .get(productController.index)
    .post(productController.new);
router.route('/product/:product_id')
    .get(productController.view)
    .put(productController.update)
    .delete(productController.delete);
router.route('/productBYcompany/:company_id')
    .get(productController.getproductBYcompany);


// Import order controller
var orderController = require('./controllers/order');
// pedido routes
router.route('/order')
    .get(orderController.index)
    .post(orderController.new);
/*router.route('/pedido/:pedido_id')
    .get(pedido.view)
    .put(pedido.update)
    .delete(pedido.delete);
router.route('/pedido/libreria/:libreria_id')
    .get(pedido.getPedidoXlibreria);
    router.route('/pedido/cliente/:cliente_id')
    .get(pedido.getPedidoXcliente);

router.route('/pedido/estado/:pedido_id')
    .put(pedido.updateEstado);
*/

// Export API routes
module.exports = router;

