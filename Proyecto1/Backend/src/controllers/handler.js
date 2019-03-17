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
let test = require('./test');

router.use('/test',test);

/*
let storage = require('./storage');
let authentication = require('./authentication');
let reports = require('./reports');
let vehicle = require('./vehicle');
let chauffeur = require('./chauffeur');
let job = require('./job');
let dynamic = require('./dynamic');



router.use('/storage',storage);
router.use('/authentication',authentication);
router.use('/reports',reports);
router.use('/vehicle',vehicle);
//router.use('/chauffeur',chauffeur);
router.use('/job',job);
router.use('/dynamic',dynamic);*/