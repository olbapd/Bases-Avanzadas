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
let product = require('../business/product');

// company routes
router.get('/product',function(req,res){
     productController.index(),((result)=>{
         res.json(result);
     });
});
router.post('/product',function(req,res){
     productController.new(),((result)=>{
         res.json(result);
     });
});

router.get('/product:product_id',function(req,res){
     productController.view(),((result)=>{
         res.json(result);
     });
});

router.put('/product',function(req,res){
     productController.update(),((result)=>{
         res.json(result);
     });
});
router.delete('/product',function(req,res){
     productController.delete(),((result)=>{
         res.json(result);
     });
});

router.get('/productBYcompany/:company_id',function(req,res){
     productController.getproductBYcompany(),((result)=>{
         res.json(result);
     });
});