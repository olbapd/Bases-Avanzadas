/**
 * Ingenieria en Computadores
 * Proyecto 3
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
let company = require('./company');
let login = require('./login');
let order = require('./order');
let product = require('./product');
let user = require('./user');
let usertype = require('./usertype');
//let storage = require('./storage');

router.use('/company',company);
//router.use('/storage',storage);
router.use('/usertype',usertype);
router.use('/user',user);
router.use('/product',product);
router.use('/order',order);
router.use('/login',login);