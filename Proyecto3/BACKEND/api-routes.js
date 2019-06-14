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

/*
//Import 
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
*/

// Export API routes
module.exports = router;

