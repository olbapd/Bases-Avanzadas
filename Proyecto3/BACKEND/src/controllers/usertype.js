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
let usertype = require('../business/usertype');


router.get("/usertype",function(req,res){
   usertype.index(),((result)=>{
       res.json(result);
   });  
});


router.post("/usertype",function(req,res){
  usertype.new(),((result)=>{
     res.json(result);
  })   
})

router.get("/usertype:usertype_id",function(req,res){
  usertype.view(),((result)=>{
     res.json(result);
  })   
})

router.delete("/usertype:usertype_id",function(req,res){
  usertype.delete(),((result)=>{
       res.json(result);
  })   
});

router.get("/userBYusertype/:usertype_id",function(req,res){
   usertype.getuserBYusertype(),((result)=>{
       res.json(result);
   })   
});