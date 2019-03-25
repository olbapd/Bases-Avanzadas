
'use strict';

// Module that handles the RESTful service routes
let express = require('express'),
    config = require('config'),
    request = require('request');


//let webToken = require('../tools/webtoken.js');

//let auth = require('../repository/auth')

let router = module.exports = express.Router();

let auth = require('../business/authentication');


router.get("/login", function(req,res){
	auth.login({
	 	email:req.body.email,
	 	pass: req.body.pass
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