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

//Import usertype controller
 var usertypeController = require('./controllers/usertype');
// tipocliente routes
router.route('/usertype')
    .get(usertypeController.index)
    .post(usertypeController.new);
router.route('/usertype/:usertype_id')
    .get(usertypeController.view)
    .delete(usertypeController.delete);
router.route('/userBYusertype/:usertype_id')
    .get(usertypeController.getuserBYusertype);


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
router.route('/order/:order_id')
    .get(orderController.view)
router.route('/orderBYuser/:user_id')
    .get(orderController.getorderBYuser);
router.route('/orderstate/:order_id')
    .put(orderController.updateState);



var list = require('./controllers/list');
// company routes
router.route('/list')
    .get(list.index)
    .post(list.newlist);
router.route('/list/:list_id')
    .get(list.view)
    .delete(list.deletelist);
router.route('/listBYuser/:user_id')
    .get(list.getlistBYuser);


var storage = require('./controllers/storage');
router.use('/storage', storage);

// Export API routes
module.exports = router;

