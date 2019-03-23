/**
 * Ingenieria en Computadores
 * Proyecto 1
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: handler.js
 * Description: Main router in the app
 */

'use strict';


// Module that handles the RESTful service routes
let express = require('express');

let router = module.exports = express.Router();
let activo = require('./activo');
let dynamic = require('./dynamic');
let authentication = require('./authentication');

router.use('/activo',activo);
router.use('/authentication',authentication);
router.use('/dynamic',dynamic);

