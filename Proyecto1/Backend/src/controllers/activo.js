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

router.post("/assign", function(req,res){
	activo.assignActive({
	 	codigo : req.body.codigo,
	 	cedula : req.body.cedula,
	 	idEstado : req.body.idEstado,
	 	detalleUbi : req.body.detalleUbi
	 },(result)=>{
	 	if(result.error){
	 	    res.json({
	 	    	error : 'Internal Server Error, it has been registered.',
	 	    	success: false
	 		})
	 	    return;
	 	}
	 	res.json({
	 	  success : true,
	 	  data : result.data
	 	});
	 })	
});