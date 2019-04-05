
"use strict";

// Module that handles the RESTful service routes
let express = require('express');

let router = module.exports = express.Router();
let path = require('path');
let config = require('config');

let banco = require('../business/banco');

router.get("/tipoCambio", function(req,res){
	banco.getCambio({
	 	date : req.body.date
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