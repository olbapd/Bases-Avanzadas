// company Controller

"use strict";

// Module that handles the RESTful service routes
let express = require('express');
let router = module.exports = express.Router();
let company = require('../business/company');

router.get('/company',function(req,res){
     company.index(),((result)=>{
         res.json(result);
     })
})
router.post('/company',function(req,res){
     company.new(),((result)=>{
         res.json(result);
     })
})

router.get('/company/:company_id',function(req,res){
     company.view(),((result)=>{
         res.json(result);
     })
})
router.put('/company/:company_id',function(req,res){
     company.update(),((result)=>{
         res.json(result);
     })
})
router.delete('/company/:company_id',function(req,res){
     company.delete(),((result)=>{
         res.json(result);
     })
})