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
let user = require('../business/user');


 router.get("/user",function(req,res){
     user.index(),((result)=>{
        res.json(result);
     });
 }); 
 router.post("/user",function(req,res){
     user.new(req),((result)=>{
        res.json(result);
     });
 });
 router.get("/user/:user_id",function(req,res){
     user.view(req),((result)=>{
        res.json(result);
     });
 });
 router.put("/user/:user_id",function(req,res){
     user.update(req),((result)=>{
        res.json(result);
     });
 });
 router.delete("/user/:user_id",function(req,res){
     user.delete(req),((result)=>{
        res.json(result);
     });
 });