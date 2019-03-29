/**
 * Ingenieria en Computadores
 * Proyecto 1
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
let path = require('path');
let config = require('config');

let activo = require('../business/activo');

router.get("/assign", function(req,res){
	activo.assignActive({
	 	email:req.body.email,
	 	name: req.body.name,
	 	idEmployee: req.body.employee,
	 	idActivo: req.body.activo
	 },(result)=>{
	 	if(result.error){
	 	    res.status(503).json({
	 	    	error : 'Internal Server Error, it has been registered.'
	 		})
	 	    return;
	 	}
	 	res.json({
	 	  success : true,
	 	  data : result.data
	 	});
	 })
});