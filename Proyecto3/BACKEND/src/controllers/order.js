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
let order = require('../business/order');

router.get("/order",function(req,res){
    order.index(req),((result)=>{
        res.json(result);
    })
});

router.post("/order",function(req,res){
    order.new(req),((result)=>{
        res.json(result);
    })
});

router.get("/order/:order_id",function(req,res){
    order.view(req),((result)=>{
        res.json(result);
    })
});

router.get("/orderBYuser/:user_id",function(req,res){
    order.getorderBYuser(req),((result)=>{
        res.json(result);
    })
});

router.put("/orderstate/:order_id",function(req,res){
    order.updateState(req),((result)=>{
        res.json(result);
    })
})