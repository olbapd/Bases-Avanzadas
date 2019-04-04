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
let banco = require('./banco');
let storage = require('./storage');

router.use('/activo',activo);
router.use('/storage',storage);
router.use('/banco',banco);
router.use('/authentication',authentication);
router.use('/dynamic',dynamic);

