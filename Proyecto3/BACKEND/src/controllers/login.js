/**
 * Ingenieria en Computadores
 * Proyecto 3
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: activo.js
 * Description: Handles all the routes logic for this section
 */

"use strict";

// Module that handles the RESTful service routes
let express = require('express');
let router = module.exports = express.Router();
let login = require('../business/login');

router.post("/login",function(req,res){
    login.view(),((result)=>{
        res.json(result);
    });
}); 